import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";


import Login from "./pages/Login";
import Register from "./pages/Register";
import Bar from "./components/Bar";
import Accueil from "./pages/Accueil";

import Promotion from "./pages/Promotion";
import Etudiants from "./pages/Etudiants";
import Cours from "./pages/Cours";
import Profil from "./pages/Profil";

const Layout = () => {
  return (
    <>
      <Bar />
      <Outlet />
    </>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/accueil",
        element: <Accueil />,
      },
      {
        path: "/etudiants",
        element: <Etudiants />,
      },
      {
        path: "/cours/:id",
        element: <Cours />,
      },
      {
        path: "/profil/:id",
        element: <Profil />,
      },
      {
        path: "/promotion",
        element: <Promotion />,
      },
    ]
  },

]);


function App() {
  return (
    <div className="App">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
