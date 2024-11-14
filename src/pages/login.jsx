import { useState } from 'react';
import { MoonLoader } from 'react-spinners';

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (email === "aishat@gmail.com" && password === "Aishat123") {
        console.log('credentials are correct');
        setIsLoggedIn(true);
        setEmail('');
        setPassword('')
        setLoading(false);

      } else {
        setError('Invalid credentials, please try again.');
        setLoading(false);
      }
      
    }, 2000);

  };

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center bg-[url('/src/assets/images/login-background.jpg')]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={Loading}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            </label>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={Loading}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            </label>
          </div>
          <button type="submit" disabled={Loading} className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-800">
            {Loading ? 'Logging in...' : 'Login'}
          </button>
          {Loading && (
            <div style={{marginTop: '10px'}}>
              <MoonLoader size={50} color='#123abc'  loading={Loading} />
            </div>
          )}

          {error && <p style={{color: 'red'}}>{error}</p>}
        </form>
      </div>
    </div>
  );

}

export default Login;