let obj_1 = {
    prop1: 1,
}

let obj_2 = {
    prop2: 21,
}

Object.setPrototypeOf(obj_2, obj_1);

console.log(obj_2.prop1);
