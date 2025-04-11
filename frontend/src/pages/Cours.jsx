import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Cours = () => {
  const location = useLocation();
  const courID = location.pathname.split("/")[2];

  const [titre, setTitre] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("titre", titre);
    formData.append("message", message);
    formData.append("id_cour", courID); // récupéré depuis useLocation
    formData.append("file", file);
  
    try {
      const response = await fetch("http://localhost:8000/api/contentCour/create", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
  
      if (data.success) {
        alert("Contenu envoyé !");
      } else {
        alert("Erreur : " + data.message);
      }
    } catch (error) {
      console.error("Erreur d'envoi :", error);
    }
  };
  
  // GET CONTENT
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/contentCour/${courID}`);
        const data = await response.json();
        setContents(data);
      } catch (error) {
        console.error("Erreur lors du chargement des contenus :", error);
      }
    };
  
    fetchContent();
  }, [courID]);
  
  return (
    <div className="pt-24 pl-72 pr-8">
      <div>
        <form class="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <label
            htmlFor="titre"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
          >
            Titre :
          </label>
          <input
            type="text"
            id="titre"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Chapitre I ..."
            required
          />
          <label
            htmlFor="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
          >
            Message :
          </label>
          <textarea
            id="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Annoncez quelque chose à votre classe"
          ></textarea>
          <label
            htmlFor="file"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
          >
            Importer le fichier :
          </label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button
            type="submit"
            class="mt-2 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Envoyer
          </button>
        </form>
      </div>

      <div className="pt-7">
  {contents.map((content) => (
    <div
      key={content.id}
      className="w-full mb-5 p-4 text-center bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">{content.titre}</h5>
      <p className="text-sm text-gray-400 dark:text-gray-300">{new Date(content.created_at).toLocaleDateString()}</p>
      <p className="mb-4 text-base text-gray-700 dark:text-gray-300">{content.message}</p>

      {content.file && (
        <div className="flex justify-center gap-4">
          <a
            href={`http://localhost:8000/${content.file}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Visualiser
          </a>
          <a
            href={`http://localhost:8000/${content.file}`}
            download
            className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
          >
            Télécharger
          </a>
        </div>
      )}
    </div>
  ))}
</div>

    </div>
  );
};

export default Cours;
