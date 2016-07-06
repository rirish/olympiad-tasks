function transfer(meters, santimeters) {
    const SANTIMETERS_IN_METER = 100;
    const INCHES_IN_FOOT = 12;
    const INCHES_IN_SANTIMETER = 2.54;
    var inches = (meters*SANTIMETERS_IN_METER + santimeters) / INCHES_IN_SANTIMETER;
    var foot = Math.floor(inches/12);
    var restInches = inches%12;
    alert(`Foots: ${foot} \r\nInches: ${restInches}`);

};

function onClick() {
    var Meters = +document.getElementsByName('Meters')[0].value;
    var Santimeters = +document.getElementsByName('Santimeters')[0].value;

    transfer(Meters, Santimeters);
};

