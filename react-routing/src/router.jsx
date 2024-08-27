import {createBrowserRouter, RouterProvider} from "react-router-dom"
import "./App.css"
import {Layout} from "./RoutedApp/layout.jsx";
import {Facts} from "./RoutedApp/Facts.jsx";
import {fetchAllFacts} from "./RoutedApp/fetchAllFacts.js";
import {Fact} from "./RoutedApp/Fact.jsx";
import {fetchFactById} from "./RoutedApp/fetchFactById.js";
import {ROUTES} from "./RoutedApp/Routes.js";
import {ErrorPage} from "./RoutedApp/errorPage.jsx";

export const router = createBrowserRouter([
    {
        path: ROUTES.facts,
        element: <Layout />,
        errorElement: <ErrorPage />,
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
