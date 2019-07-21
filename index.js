function map(array, func) {
    const returnArray = []
    for(const item of array) {
        returnArray.push(func(item))
    }
    return returnArray
}

function reduce(array, func, start) {
    let returnValue, i;
    !!start ? returnValue = start : returnValue = array[0];
    !!start ? i = 0 : i = 1;
    for ( ; i < array.length; i++) {
        returnValue = func(array[i], returnValue)
    }
    return returnValue
}
