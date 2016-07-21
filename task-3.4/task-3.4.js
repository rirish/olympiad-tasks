function getInterval(minNumber, maxNumber, accumulator) {

    if (minNumber >= maxNumber-1) {
        return accumulator;
    }

    accumulator.push(minNumber+1);
    return getInterval(minNumber + 1, maxNumber, accumulator);
}

function onClick() {
    var Min = document.getElementsByName('Min')[0].value;
    var Max = document.getElementsByName('Max')[0].value;

    console.log(getInterval(+Min, +Max, []));
}

