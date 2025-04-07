import React, { useState, useEffect } from "react";

const Accueil = () => {
  const [promotion, setPromotion] = useState([]);
  const [cour, setCour] = useState([]);
  const [nomCour, setNomCour] = useState("");
  const [prom, setProm] = useState("");

useEffect(() => {
  getPromotion();
}, []);

useEffect(() => {
  getCour();
}, []);

  async function getPromotion() {
    const fetchData = async () => {
        try {
            let result = await fetch("http://localhost:8000/api/promotion");
            result = await result.json();
            setPromotion(result);
        } catch (error) {
            console.error("Erreur lors du chargement des promotions :", error);
        }
    }
    fetchData();
  }
  async function getCour() {
    const fetchData = async () => {
        try {
            let result = await fetch("http://localhost:8000/api/cour");
            result = await result.json();
            setCour(result);
        } catch (error) {
            console.error("Erreur lors du chargement des cours :", error);
        }
    }
    fetchData();
  }

  async function handleSubmit(event) {
    event.preventDefault(); 

    const formData = new FormData();
    formData.append('nomCour', nomCour);
    formData.append('promotion', prom);

    try {
      let result = await fetch("http://localhost:8000/api/cour/create", {
        method: "POST",
        body: formData
      });

      if (result.ok) {
        alert("Cour enregistrée avec succès");
        setCour("");
        window.location.reload();
      } else {
        alert("Erreur lors de l'enregistrement");
      }
    } catch (error) {
      alert("Erreur de connexion au serveur");
      console.error("Erreur:", error);
    }
}

  return (
    <div className="pt-24 pl-72 pr-8">
      <form className="max-w-sm mx-auto pb-2" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            for="text"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Nom de la cours :
          </label>
          <input
            type="text"
            id="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="MATH_210 ..."
            value={nomCour}
            onChange={(e) => setNomCour(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Promotions
          </label>
          <select id="promotion" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={prom}
            onChange={(e) => setProm(e.target.value)}
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
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Ajouter +
        </button>
      </form>
      
      <hr className="p-3" />

      {/* Grille des cartes */}
      <div className="grid grid-cols-3 gap-6 justify-center">
        {/* Carte 2 */}
        {cour.length > 0 ? (
                cour.map((cours) => (
        <div className="relative w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-end px-4 pt-4"></div>    
          <div className="flex flex-col items-center pb-10" key={cours.id}>
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://img.freepik.com/vecteurs-libre/cercle-bleu-utilisateur-blanc_78370-4707.jpg"
              alt="User"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {cours.nomCour}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {cours.promotion}
            </span>
            <div className="flex mt-4 md:mt-6">
              <a
                href="/cours"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Voir plus +
              </a>
              <a
                href="#"
                className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Se désinscrire
              </a>
            </div>
            
          </div>
          
        </div>
        ))
      ): (
      <option>Chargement...</option>)}
      </div>
    </div>
  );
};

export default Accueil;
