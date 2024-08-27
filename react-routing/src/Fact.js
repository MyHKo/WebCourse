'use strict';

function Fact({ fact }){
    return (
        <article className="facts">
            <h1 className="fact">{fact.date}:{fact.name}</h1>
            <p>{fact.description}</p>
        </article>
    )
}