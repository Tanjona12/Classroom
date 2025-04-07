import React, { useState } from "react";

const Promotion = () => {
  const [promotion, setPromotion] = useState("");

  async function handleSubmit(event) {
    event.preventDefault(); 

    const formData = new FormData();
    formData.append('promotion', promotion);

    try {
      let result = await fetch("http://localhost:8000/api/promotion/create", {
        method: "POST",
        body: formData
      });

      if (result.ok) {
        alert("Promotion enregistrée avec succès");
        setPromotion("");
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
    <div  className="pt-24 pl-72 pr-8">
      <form className="max-w-sm mx-auto pb-2">
        <div className="mb-5">
          <label
            for="text"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Promotion :
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="L3IDEV 2024-2025..."
            onChange={(e) => setPromotion(e.target.value)} 
            required
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Ajouter +
        </button>
      </form>
    </div>
  )
}

export default Promotion
