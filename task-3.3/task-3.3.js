
function magicRandom(supposedNumber){
    let randomNumber = Math.ceil((Math.random() * 10));
    (randomNumber == supposedNumber) ? (alert(`Good Work`)) : (alert(`Not matched (${randomNumber})`))
}

function onload() {
    let supposedNumber = prompt('Guess the number!')

    magicRandom(+supposedNumber);
};