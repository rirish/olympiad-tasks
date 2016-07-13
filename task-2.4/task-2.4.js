var startArray = [1,-4,-98,-1,-2,7,-6,0,-7,-7];
var positiveCounter =0;
var negativeCounter =0;

function separator() {
    for (i=0; i < startArray.length; i++){
        if (startArray[i]>0) {
            positiveCounter++;
        }else if (startArray[i]<0){
            negativeCounter++;
        }
    }
    (positiveCounter > negativeCounter) ? (alert('Positive numbers won!')) : (alert('Negative numbers won!'));
}