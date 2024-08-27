'use strict';
import data from "./russian-fails.json"

export const fetchAllFacts = () => {
    console.log()
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data.data)
        }, 1000)
    })
}