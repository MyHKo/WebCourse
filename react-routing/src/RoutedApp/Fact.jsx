'use strict';

import {useLoaderData} from "react-router-dom";

export const Fact = () => {
    const fact = useLoaderData()
    return (
        <article className="facts">
            <h1 className="fact">{fact.date}:{fact.name}</h1>
            <p>{fact.description}</p>
        </article>
    )
}