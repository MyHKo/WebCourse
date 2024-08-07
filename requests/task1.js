'use strict'

let response
fetch('https://api.github.com/users/MyHKo')
.then(response => response.json())

console.log(response)