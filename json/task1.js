'use strict';

let user = {
    name: "Василий Иванович",
    age: 35
};

let jsonUser = JSON.stringify(user);
let user2 = JSON.parse(jsonUser);