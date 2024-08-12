'use strict'

async function wait(){
    await new Promise(resolve => setTimeout(resolve, 1000))

    return 10
}

function run(){
    wait().then(result => console.log(result))
    console.log('1');
}

run()