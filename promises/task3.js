'use strict'

async function loadJson(url){
    let response = await fetch(url)
    if(response.status === 200){
        return await response.json()
    }
    throw Error(`Could not load json from ${url}`)
}

loadJson('https://javascript.info/no-such-user.json')
    .catch(console.log);