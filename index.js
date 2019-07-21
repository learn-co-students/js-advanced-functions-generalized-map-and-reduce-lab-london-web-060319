// Add your functions here

const map = (array, block) => {
    const newArray = new Array
    array.forEach( a => {newArray.push(block(a))} )
    return newArray
}

const reduce = (array, block, starting) => {
    let startPoint,
        index 

    startPoint = !starting ? array[0] :  starting
    index = !starting ? 1 : 0 // check this line

    while (index<array.length)  {
        startPoint = block(array[index], startPoint)
        index++
    }
    return startPoint
}

