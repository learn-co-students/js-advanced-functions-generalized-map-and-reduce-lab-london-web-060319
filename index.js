function map(sourceArray, callBackFcn) {
  let negArr = []
  for (let i = 0; i < sourceArray.length; i++ ) {
    let el = sourceArray[i]
    negArr.push(callBackFcn(el))
  }
  return negArr
}

function reduce(sourceArray, callBackFcn, starting) {
  let arr = (!!starting) ? starting : sourceArray[0]
  let i = (!!starting) ? 0 : 1
  for (; i < sourceArray.length; i++) {
    arr = callBackFcn(sourceArray[i], arr)
  }
  return arr;
}
