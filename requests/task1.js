'use strict'

let names = ['daewfqewgfewrgwerg', 'iliakan', 'MyHKo', 'bib']

function getUsers(names){
    let output = []
    for (let name of names){
        fetch(`https://api.github.com/users/${name}`)
            .then((result) => {
                if(result.ok){
                    output.push(result.json())
                }
                else {
                    output.push(null)
                }
            })
    }
    return output;
}

console.log(getUsers(names))