function betterThanAverage(array){
    var sum = 0;
    for(var i=0; i<array.length;i++){
        sum += array[i]
    }
    var average = sum / array.length;
    var count = 0;
    for(var i=0; i<array.length;i++){
        if(array[i] > average){
            count += 1;
        }
    }
    return count;
}

var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9])
console.log(result);
