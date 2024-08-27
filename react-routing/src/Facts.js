'use strict';

import "./facts.css"

export const Facts = ({ facts, navigate }) => {
    return (
        <article className="facts">
            <h1>Most known russian fails in 2022</h1>

            <ul className="fact-list">
                {facts.map((f) => (
                    <li key={f.id} className="fact-item">
                    <time>{f.date ?? "Coming soon"}</time>
                        <h4>{f.name}</h4>
                        <button
                            className="read-more"
                            type="button"
                            onClick={() => navigate(f.id)}
                        >
                           ?
                        </button>
                    </li>
                ))}
            </ul>
        </article>
    )
}