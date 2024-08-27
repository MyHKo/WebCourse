'use strict';

import data from "./russian-fails.json"

export const fetchFactById = (id) => {
    const fact = data.data.find((f) => f.id === Number(id))
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(fact)
        }, 1000)
    })
}

export const fetchFactByIdRouted = ({ params: { factId } }) =>
    fetchFactById(factId)
