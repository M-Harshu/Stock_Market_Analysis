from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import hashlib
from stock_analyser import analyze_all_stocks  # Importing the function to get stock predictions

app = Flask(__name__)
CORS(app)

# --- Database utility function ---
def get_db_connection():
    conn = sqlite3.connect('users.db')
    conn.row_factory = sqlite3.Row
    return conn

# --- Password hashing ---
def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

# --- Signup Route ---
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = hash_password(data.get('password'))

    if not username or not email or not password:
        return jsonify({'success': False, 'message': 'Please fill all the fields.'}), 400

    conn = get_db_connection()
    cursor = conn.cursor()
    try:
        cursor.execute("INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
                       (username, email, password))
        conn.commit()
        return jsonify({'success': True, 'message': 'Signup successful!'}), 201
    except sqlite3.IntegrityError:
        return jsonify({'success': False, 'message': 'Username already exists.'}), 409
    finally:
        conn.close()

# --- Login Route ---
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = hash_password(data.get('password'))

    if not username or not password:
        return jsonify({'success': False, 'message': 'Missing username or password'}), 400

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE username = ? AND password = ?", (username, password))
    user = cursor.fetchone()
    conn.close()

    if user:
        return jsonify({'success': True, 'message': 'Login successful!'}), 200
    else:
        return jsonify({'success': False, 'message': 'Invalid credentials'}), 401

# --- Stock Predictions Route ---
@app.route('/api/stock-prediction', methods=['POST'])
def stock_prediction():
    try:
        # Get all stock predictions
        prediction_data = analyze_all_stocks()
        return jsonify(prediction_data)  # Return predictions in JSON format
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# --- Root route to confirm server is running ---
@app.route('/')
def home():
    return '✅ Flask server is running!'

# --- Main ---
if __name__ == '__main__':
    app.run(debug=True)
