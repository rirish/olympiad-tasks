const DELTA = 1;

function fraction() {
    alert(rec(1));
}

function rec(num){
    if (num > 100) {
        return 0;
    }

    let value = num + rec(num+1);

    return 1/value;
}
