function fibonacciArray(n){
    var fibArr = [0, 1];

    for(var i=0; i<10;i++){
        sum = (fibArr[fibArr.length - 2] + fibArr[fibArr.length-1])
        fibArr.push(sum);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result);