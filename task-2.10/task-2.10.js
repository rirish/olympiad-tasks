const DELTA = 3;
const MAX_VALUE = 98;

function roots() {
    alert(rec(MAX_VALUE));
}

function rec(num){
    if (num <= 0) {
        return 0;
    }

    let value = num + rec(num - DELTA);

    return Math.sqrt(value);
}