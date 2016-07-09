function numOrder(numReverse) {
    alert(rec(numReverse));
}

function rec(num){
    if (num < 10) {
        return `${num}`;
    }

    let value = num%10;
    let nextValue = (num - value) / 10;


    return value.toString() + rec(nextValue);
}

function onClick() {
    var numReverse = +document.getElementsByName('numReverse')[0].value;

    numOrder(numReverse);
};