'use strict';

import data from "./russian-fails.json"

export const fetchFactById = (id) => {
    const fact = data.find((f) => f.id === id)
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(fact)
        }, 1000)
    })
}