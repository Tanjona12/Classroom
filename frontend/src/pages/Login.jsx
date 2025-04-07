import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate("/accueil");
        }
    }, [])

    async function handleSubmit() {
        let item = { email, password };
        let result = await fetch("http://localhost:8000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
    
        result = await result.json();
    
        if (result.error) {
            alert(result.error);
        } else {
            localStorage.setItem("user-info", JSON.stringify(result));
            navigate("/accueil");
        }
        
    }
    


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">CLASSROOM</h5>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email :
            </label>
            <input
              type="email"
              id="email"
              onChange={(e)=>setEmail(e.target.value)} 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="nom@company.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Mot de passe :
            </label>
            <input
              type="password"
              id="password"
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                J'accepte les conditions
              </label>
            </div>
            <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
              Mot de passe oublié?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleSubmit}
          >
            Se connecter
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
            Pas de compte? <a href="/register" className="text-blue-700 hover:underline dark:text-blue-500">Créer un compte</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
