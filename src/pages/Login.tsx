import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        navigate('/home'); // Redirect to home page
      } else {
        alert(data.error);
      }
    } catch (err) {
      alert('Something went wrong!');
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#1E3A8A] text-white px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-full max-w-sm space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-[#34D399]">
          Login
        </h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 bg-white/20 text-white placeholder-white/70 rounded focus:outline-none focus:ring-2 focus:ring-[#34D399]"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 bg-white/20 text-white placeholder-white/70 rounded focus:outline-none focus:ring-2 focus:ring-[#34D399]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-[#34D399] text-[#1E3A8A] font-semibold py-2 rounded hover:bg-[#10B981] transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
