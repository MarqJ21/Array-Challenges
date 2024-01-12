function reverse(arr){
    var reversed = [];
    for(var i = 0; i < arr.length; i++){
        reversed.push(arr[i]);
    }
    for(var i = 0; i < arr.length; i++){
        arr[i] = reversed.pop()
    }

    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"])
console.log(result);