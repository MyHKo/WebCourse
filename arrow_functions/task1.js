'use strict'

function ask(question, yes, no) {
    if(question) {
        yes();
    } else {
        no();
    }
}
let question = true;
ask (question,
    () => console.log("You agreed"),
    () => console.log("You disagreed"));