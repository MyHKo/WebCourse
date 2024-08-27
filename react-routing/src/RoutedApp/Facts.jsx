'use strict';
import {ROUTES} from "./Routes.js";


import {NavLink, useLoaderData} from "react-router-dom";

export const Facts = () => {
    const facts = useLoaderData()
    return (
        <article className="facts">
            <h1>Most known russian fails in 2022</h1>

            <ul className="fact-list">
                {facts.map((f) => (
                    <li key={f.id} className="fact-item">
                        <time>{f.date ?? "Coming soon"}</time>
                        <h4>{f.name}</h4>
                        <NavLink to={ROUTES.fact(f.id)} className="read-more"> ? </NavLink>
                        {/*<button*/}
                        {/*    className="read-more"*/}
                        {/*    type="button"*/}
                        {/*    onClick={() => navigate(f.id)}*/}
                        {/*>*/}
                        {/*    ?*/}
                        {/*</button>*/}
                    </li>
                ))}
            </ul>
        </article>
    )
}