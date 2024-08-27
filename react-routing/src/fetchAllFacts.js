'use strict';
import data from "./russian-fails.json"

export const fetchAllFacts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 1000)
    })
}