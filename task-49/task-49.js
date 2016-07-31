var arr = [1,-2,-6,5,-8,3,-9,4,-7];

var number = 3;

function first(array,n){
    var newArr=[];
    if (n===undefined){
       n=1;
    }
    for(var i=0; i<=n-1; i++){
        newArr.push(array[i]);
    }
    console.log(newArr);
}

first(arr,number);