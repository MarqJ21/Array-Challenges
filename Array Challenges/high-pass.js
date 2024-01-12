function highPass(array, cutoff){
    var filteredArr = [];
    for(var i = 0; i < array.length; i++){
        if(array[i] > cutoff){
            filteredArr.push(array[i]);
        }
    }
    return filteredArr;
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5)
console.log(result);