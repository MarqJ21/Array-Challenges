var arr = [];
function alwaysHungry(){
    console.log(arguments);
    
    for(var i=0; i < arguments.length; i++){
        if(arguments[i] == "food"){
            console.log("yummy")
            var food = true;
        }
    }
    if(food != true){
        console.log("i'm hungry")
    }
    
}

var arr = [3.14, "food", "pie", true, "food"]
var arr2 = [4, 1, 5 ,7, 2]

alwaysHungry(...arr);
alwaysHungry(...arr2);
