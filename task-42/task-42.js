const ARR=[1,2,43,-5,7,-3,0,9,23,-10,5,78,13,96];
const NUM=0;

function app (array, n){
    var newArr=[];
    for (var i=0; i<array.length; i++){
        if(array[i]>n){
            newArr.push(array[i]);
        }
    }
    console.log(newArr);
}
app(ARR,NUM);