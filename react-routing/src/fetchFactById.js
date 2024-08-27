'use strict';

import data from "./RoutedApp/russian-fails.json"

export const fetchFactById = (id) => {
    const fact = data.data.find((f) => f.id === id)
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(fact)
        }, 1000)
    })
}