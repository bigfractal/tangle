import './style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BfParent from "./views/parent/BfParent";
import BfAbout from "./views/about/BfAbout";
import BfEpisodes from "./views/episodes/BfEpisodes";
import BfSignup from "./views/account/BfSignup";
import BfLogin from "./views/account/BfLogin";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BfParent />,
        children: [
            { path: "/", element: <BfAbout /> },
            { path: "episodes", element: <BfEpisodes /> },
            { path: "episodes/:entryKey", element: <BfEpisodes /> },
            { path: "signup", element: <BfSignup /> },
            { path: "login", element: <BfLogin /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);

