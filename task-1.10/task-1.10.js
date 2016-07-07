function flipFlop(numberA,numberB) {
    numberA = numberA + numberB;
    numberB = numberA - numberB;
    numberA = numberA - numberB;
    alert(`a = ${numberA} \r\nb = ${numberB}`);

};

function onClick() {
    var ANumber = +document.getElementsByName('ANumber')[0].value;
    var BNumber = +document.getElementsByName('BNumber')[0].value;

    flipFlop(ANumber, BNumber);
};
