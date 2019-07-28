function map(sourceArray, callBackFcn) {
  let negArr = []
  for (let i = 0; i < sourceArray.length; i++ ) {
    let el = sourceArray[i]
    negArr.push(callBackFcn(el))
  }
  return negArr
}

function reduce(sourceArray, callBackFcn, starting) {
  let n = (!!starting) ? starting : sourceArray[0]
  let i = (!!starting) ? 0 : 1
  for (; i < sourceArray.length; i++) {
    n = callBackFcn(sourceArray[i], n)
  }
  return n;
}
