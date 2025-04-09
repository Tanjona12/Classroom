import React, { useState, useEffect } from "react";

const Etudiants = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    console.warn("result:", data);


    // async function deleteOperation(id) {
    //     let result = await fetch("http://localhost:8000/api/delete/" + id, {
    //         method: "DELETE"
    //     });
    //     result = await result.json();
    //     alert("Delete product succes")
    //     console.warn(result);
    //     getData();
    // }

    async function getData() {
        const fetchData = async () => {
            try {
                let result = await fetch("http://localhost:8000/api/ListEtudiants");
                result = await result.json();
                setData(result);
            } catch (error) {
                console.error("Erreur lors du chargement de la liste :", error);
            }
        }
        fetchData();
    }

  return (
    <div className="pt-24 pl-72 pr-8">
        
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white">
                <label for="table-search" className="sr-only">Recherche</label>
                <div className="relative">
                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="text" id="table-search-users" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rechercher un étudiant ..."/>
                </div>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Promotion
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <a href={`/profil/${item.id}`}><img className="w-10 h-10 rounded-full" src="https://img.freepik.com/vecteurs-libre/cercle-bleu-utilisateur-blanc_78370-4707.jpg" alt="Jese image"/></a>
                            <div className="ps-3">
                                <div className="text-base font-semibold">{item.nom}</div>
                                <div className="font-normal text-gray-500">{item.email}</div>
                            </div>
                        </th>
                        <td className="px-11 py-4">
                            {item.promotion}
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                <div className={`h-2.5 w-2.5 rounded-full me-2 text-white ${item.status === 1 ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                {item.status === 1 ? "Online" : "Offline"}
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Supprimer</a>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Etudiants
