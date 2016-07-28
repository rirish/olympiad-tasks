const ARR=[-1,-4,0,-4,-2];

function app(array){
    nMax = array[0];
    for (var i=0; i<array.length; i++){
        if (array[i]>nMax){
            nMax=array[i];
        }
    }
    alert(nMax);
}
app(ARR);