const ARR = [1,3,5,7,-7,-5,-4,-2];
function arraySum(stepSum, arrIndex){
    if(arrIndex >= ARR.length){
        return stepSum;
    }
    return arraySum(stepSum + ARR[arrIndex], arrIndex+1);

}

function onload(){
    console.log(arraySum(0,0));
}





