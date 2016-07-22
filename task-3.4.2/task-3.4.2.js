function fib(n) {
    if (n <= 0) {
        return [0, 1];
    }

    let list = fib(n - 1);
    list.push(list[n] + list[n - 1]);
    return list;
}

function onClick() {
    var n = document.getElementsByName('NumberOfFibo')[0].value;

    console.log(fib(n));
}
