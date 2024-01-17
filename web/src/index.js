import './style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BfParent from "./views/parent/BfParent";
import BfAbout from "./views/about/BfAbout";
import BfEpisodes from "./views/episodes/BfEpisodes";
import BfSignup from "./views/account/BfSignup";
import BfLogin from "./views/account/BfLogin";

import "primereact/resources/themes/lara-light-blue/theme.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BfParent />,
        children: [
            { path: "/", element: <BfEpisodes /> },
            { path: "episodes", element: <BfEpisodes /> },
            { path: "episodes/:entryKey", element: <BfEpisodes /> },
            { path: "/about", element: <BfAbout /> },
            { path: "signup", element: <BfSignup /> },
            { path: "login", element: <BfLogin /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);

