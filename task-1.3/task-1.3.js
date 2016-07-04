function conditions(volume, numberOfFishes) {
    const VOLUME_PER_FISH = 3;
    var volumeRequired = numberOfFishes*VOLUME_PER_FISH;

    if (volumeRequired > volume) {
        var numberOfExcessFishes = Math.ceil((volumeRequired-volume)/3);
        alert('Too many fishes! ' + numberOfExcessFishes + ' need be separated!');
    } else {
        alert('OK!');
    }

};

function onClick() {
    var Volume = document.getElementsByName('Volume')[0].value;
    var NumberOfFishes = document.getElementsByName('NumberOfFishes')[0].value;

    conditions(+Volume, +NumberOfFishes);
};
