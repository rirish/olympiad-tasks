function melody(minutes, seconds, diskSpaceMb) {
    var diskSpaceKb = diskSpaceMb*1024;
    const SPACE_FOR_SECOND_KB = 16;
    var melodySpace = (minutes*60 + seconds) * SPACE_FOR_SECOND_KB;
    (melodySpace > diskSpaceKb) ? (alert('No space on Disc...')) : (alert('Melody saved successfully!'));

};

function onClick() {
    var Minutes = document.getElementsByName('Minutes')[0].value;
    var Seconds = document.getElementsByName('Seconds')[0].value;
    var DiskSpaceMb = document.getElementsByName('DiskSpaceMb')[0].value;

    melody(+Minutes, +Seconds, +DiskSpaceMb);
};

