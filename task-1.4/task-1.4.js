function eggsForecast(hens, days) {
    const EGG_PER_DAY = 1.5;
    const HEN_PER_DAY = 1.5;
    const DAY = 1.5;
    var forecast = Math.floor((hens/HEN_PER_DAY) * (days/DAY)*EGG_PER_DAY);
    alert('There are ' + forecast + " eggs expected");

};

function onClick() {
    var Hens = document.getElementsByName('Hens')[0].value;
    var Days = document.getElementsByName('Days')[0].value;

    eggsForecast(+Hens, +Days);
};
