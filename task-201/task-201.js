var numArray = [1,-4,-98,-1,-2,7,-6,0,-100,-7];
var currentMinNumber = 0;

function minNumber() {
    currentMinNumber = numArray[0];
    for (i=1; i < numArray.length; i++) {

        if (numArray[i] < currentMinNumber) {
            currentMinNumber = numArray[i];
        }
    }
    alert(`${currentMinNumber}`);
}