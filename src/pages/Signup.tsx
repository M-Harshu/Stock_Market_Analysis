import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      alert(data.message);

      if (data.success) {
        navigate('/login');
      }
    } catch (error) {
      alert('Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#1E3A8A] text-white px-4">
      <form
        onSubmit={handleSignup}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-full max-w-sm space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-[#34D399]">
          Sign Up
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
          type="email"
          placeholder="Email"
          className="w-full p-2 bg-white/20 text-white placeholder-white/70 rounded focus:outline-none focus:ring-2 focus:ring-[#34D399]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          className="w-full bg-[#34D399] text-[#1E3A8A] font-semibold py-2 rounded hover:bg-[#10B981] transition duration-200 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}

export default Signup;
