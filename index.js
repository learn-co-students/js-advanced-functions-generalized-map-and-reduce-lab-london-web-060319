// Add your functions here

function map(src,fctn){
    let n=[]

    for (let i=0; i<src.length;i++){
        n.push(fctn(src[i]))
    }
    return n;
}

function reduce(src,fctn,start){
    let r = (!!start) ? start :src[0]
    let i= (!!start) ? 0:1
    
    for (; i<src.length; i++){
        r= fctn(src[i], r)
    }
    return r 
}