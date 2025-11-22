let arr = [1,1,2,5,3,4,5,6,2]
arr = arr.filter((value, index, array) => {
    if(array.indexOf(value) === index) {
        return true
    }
    return false
})
console.log(arr)

try{

}
