// Add your functions here
function map(array, method){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        newArray.push(method(array[i]))
    }
    return newArray
}

function reduce(array, method, start){
    let value = (!!start) ? start : array[0]
    let i = (!!start) ? 0 : 1
    for(; i < array.length; i++){
        value = method(array[i], value)
    }
    return value
}