import {createBrowserRouter, RouterProvider} from "react-router-dom"
import "./App.css"
import {Layout} from "./RoutedApp/layout.jsx";
import {Facts} from "./RoutedApp/Facts.jsx";
import {fetchAllFacts} from "./RoutedApp/fetchAllFacts.js";
import {Fact} from "./RoutedApp/Fact.jsx";
import {fetchFactById} from "./RoutedApp/fetchFactById.js";

const ROUTES = {
    facts: "/",
    fact: (id) => `/fact/${id}`
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
            },
            {
                element: <Fact />,
                loader: fetchFactById
            }
        ]
    }
])

export const App = () => <RouterProvider router={router}></RouterProvider>
