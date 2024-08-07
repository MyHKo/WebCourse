'use strict'

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

delay(3000).then(() => console.log('Done after 3 seconds'))