let arr = ["omkar", "ashihs", "bhagwan", "newOmkar"];

let remove = function (arr,num){
    let newArr = [];
    let slicedOut = arr.slice(num,num+1);

    // return slicedOut;

    for(let i=0; i<arr.length; i++){
        if(slicedOut.includes(arr[i])){
            
        }else{
            newArr.push(arr[i]);
        }
    }

    return newArr;

    // return arr;
    
}

console.log(remove(["omkar", "ashihs", "bhagwan", "newOmkar"],2));