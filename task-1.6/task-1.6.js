function transfer(meters, santimeters) {
    const SANTIMETERS_IN_METER = 100;
    const INCHES_IN_FOOT = 12;
    const SANTIMETERS_IN_INCH = 2.54;
    var inches = (meters*SANTIMETERS_IN_METER + santimeters) / SANTIMETERS_IN_INCH;
    var foot = Math.floor(inches/INCHES_IN_FOOT);
    var restInches = inches%INCHES_IN_FOOT;
    alert(`Foots: ${foot} \r\nInches: ${restInches}`);

};

function onClick() {
    var Meters = +document.getElementsByName('Meters')[0].value;
    var Santimeters = +document.getElementsByName('Santimeters')[0].value;

    transfer(Meters, Santimeters);
};

