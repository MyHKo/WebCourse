let a: number = 0;
let arr: [number,3] = [1,3]
let obj: (obj:{name:string, age:number}) => {name:"John"}
console.log(obj)

type Bib<T> = {
    arr: T[]
}

let v: Bib<string> = {arr: []};
v.arr.push("s");