function reduce(array, callback) {
    let accumulator = 0;
    let arrayCopy = array.slice();
    for (let i = 0; i <= array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}
