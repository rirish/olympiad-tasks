function ifReach(distance) {
    const D_WHEEL = 80;
    const CIRCLES_LIMIT = 200000;
    const SM_IN_M = 100;
    const M_IN_KM = 1000;
    var distanceLimit = (80/(SM_IN_M * M_IN_KM)) * Math.PI * CIRCLES_LIMIT;
    if (distance > distanceLimit) {
        alert('You shall not pass!!!');
    }else{
        alert('Welcome to Saratov!');
    }


};

function onClick() {

    var Distance = +document.getElementsByName('Distance')[0].value;

    ifReach(Distance);
};

