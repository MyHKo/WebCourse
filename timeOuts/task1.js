'use strict'

function printNumber(from, to, method){
    let counter = from
    if(method === "interval"){
        let interval = setInterval(()=>{
            console.log(counter++)
            if(counter>to)
                clearInterval(interval)
        }, 1000)
    }
    else if(method === "timeout"){
        setTimeout(function run() {
            console.log(counter++)
            if(counter <= to)
                setTimeout(run, 1000)
        }, 1000)
    }
}

printNumber(1,10,"timeout")