import {createBrowserRouter, RouterProvider} from "react-router-dom"
import "./App.css"
import {Layout} from "./RoutedApp/layout.jsx";
import {Facts} from "./RoutedApp/Facts.jsx";
import {fetchAllFacts} from "./RoutedApp/fetchAllFacts.js";

const ROUTES = {
    facts: "/",
}

export const router = createBrowserRouter([
    {
        path: ROUTES.facts,
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Facts />,
                loader: fetchAllFacts
            }
        ]
    }
])

export const App = () => <RouterProvider router={router}></RouterProvider>
