import React, {useState} from "react";
import axios from 'axios';

const LoginComponent: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/login', { username, password });
            const { userID} = response.data;

            if (userID) {
                localStorage.setItem('userID', userID);
            } else {
                setErrorMessage("Invalid credentials")
            }
        } catch (error) {
            setErrorMessage("Invalid credentials");
            console.log("Error logging in: ", error);
    }
};


  return (
    <div className="bg-yellow-400 h-screen overflow-hidden flex items-center justify-center">
      <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
        <div className="bg-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
          {/* Your SVG here */}
        </div>
        <form className="p-12 md:p-24" onSubmit={handleSubmit}>
            {errorMessage && <div>{errorMessage}</div>}
          <div className="flex items-center text-lg mb-6 md:mb-8">
            {/* Your SVG here */}
            <input
              type="text"
              id="username"
              onChange = {(e) => setUsername(e.target.value)}
              className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
              placeholder="Username"
            />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            {/* Your SVG here */}
            <input
              type="password"
              value={password}
                onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
