import {useEffect, useState} from "react";
import {Facts} from "./Facts.jsx"
import {Fact} from "./Fact.jsx"
import {fetchAllFacts} from "./fetchAllFacts"
import {fetchFactById} from "./fetchFactById"
import './App.css'

function App() {
  const [route, setRoute] = useState({
    path: "/",
    data: null,
    status: "not-started",
    params: {},
  });

  const {status, path } = route;

  useEffect(() => {
    setRoute((r) => ({ ...r, status:"fetching" }))

    if(path === "/") {
      fetchAllFacts().then((response) => {
        setRoute({
          path: "/",
          data: response,
          status: "success",
          params: {}wdawdawdawdawd
        })
      })
    }

    if(path === "/fact") {
      fetchFactById(route.params.id).then((response) => {
        setRoute({
          path: "/fact",
          data: response,
          status: "success",
          params: {id: route.params.id}
        })
      })
    }
  }, [path])

  const navigate = (id) => {
    setRoute({
      data: null,
      path: "/fact",
      params: {id},
      status: "fetching",
    })
  }

  if(status === "not-started" || status === "fetching") {
    return <>Please wait, loading data</>;
  }

  if(path === "/") {
    return <Facts facts={route.data} navigate={navigate}/>
  }

  if(path === "/fact") {
     return <Fact fact={route.data}/>
  }
}

export default App
