import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [promotion, setPromotion] = useState([]);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [prom, setProm] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getPromotion();
  }, []);

  async function getPromotion() {
    try {
      let result = await fetch("http://localhost:8000/api/promotion");
      result = await result.json();
      setPromotion(result);

      // Définir la première promotion par défaut si elle existe
      if (result.length > 0) {
        setProm(result[0].promotion);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des promotions :", error);
      alert("Erreur lors du chargement des promotions. Veuillez réessayer.");
    }
  }

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/accueil");
    }
  }, [navigate]);

  async function handleSubmit(e) {
    e.preventDefault();
    let item = { nom, email, promotion: prom, password };
    console.warn("Données envoyées :", item);
  
    try {
      let result = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
  
      if (!result.ok) {
        throw new Error(`Erreur HTTP: ${result.status}`);
      }
  
      const responseText = await result.text(); // Récupérer en tant que texte
  
      try {
        const responseJson = JSON.parse(responseText); // Analyser en JSON
        if (responseJson.success) {
          alert(responseJson.message);
          localStorage.setItem("user-info", JSON.stringify(responseJson));
          navigate("/accueil");
        } else {
          alert("Erreur lors de l'enregistrement: " + responseJson.message);
        }
      } catch (parseError) {
        alert("Réponse inattendue du serveur.");
        console.error("Erreur lors du parsing JSON :", parseError);
        console.log("Réponse brute :", responseText);
      }
    } catch (error) {
      alert("Erreur de connexion avec le serveur. Réessayez plus tard.");
      console.error("Erreur d'inscription :", error);
    }
  }
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">
            CRÉER UN COMPTE
          </h5>
          <div>
            <label htmlFor="nom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Nom et prénom(s) :
            </label>
            <input
              type="text"
              id="nom"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Rakoto Jean"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email :
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="nom@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="promotions" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Promotion :
            </label>
            <select
              id="promotions"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              value={prom}
              onChange={(e) => setProm(e.target.value)}
              required
            >
              {promotion.length > 0 ? (
                promotion.map((promo) => (
                  <option key={promo.id} value={promo.promotion}>
                    {promo.promotion}
                  </option>
                ))
              ) : (
                <option>Chargement...</option>
              )}
            </select>
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Mot de passe :
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            S'inscrire
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
            <a href="/" className="text-blue-700 hover:underline dark:text-blue-500">
              Se connecter
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
