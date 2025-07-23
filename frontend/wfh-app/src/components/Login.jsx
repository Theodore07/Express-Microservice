import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const userLogin = async () =>{
    try {
      const response = await axios.post('/api/auth/login', {
        email,
        password
      })

      const token = response.data.token
      localStorage.setItem('token', token)
      console.log('Loggin success')
      navigate('/home')

    } catch (error) {
      console.log('Login failed: ', error)
    }
  }
  return (
    <>
      <div className="flex flex-col shadow-lg justify-center bg-white w-fit h-90 p-5 gap-5 self-center items-center rounded-xl">
        <h2 className="text-2xl font-light font-sans ">Attendance App</h2>
        <div className="flex pt-5">
          <input
            type="text"
            name="email"
            className="border-b border-gray-600 bg-white text-gray-400 min-w-96 focus:outline-none"
            placeholder="Input your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex pt-5">
          <input
            type="password"
            name="password"
            className="border-b border-gray-600 bg-white text-gray-400 min-w-96 focus:outline-none"
            placeholder="Input your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="bg-gray-400 rounded-2xl p-4 min-w-40 text-white font-semibold hover:cursor-pointer" onClick={userLogin}>Login</button>
        </div>
      </div>
    </>
  );
};

export default Login;
