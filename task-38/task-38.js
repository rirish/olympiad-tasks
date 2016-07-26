function primeNumber(n){
    if(n==1){
        return false;
    }
    else if(n == 2)
    {
        return true;
    }else {
        for (var i=2; i<n; i++){
            if (n%i==0){
                return false;
            }
        }
        return true;
    }
}

function onClick() {

    var num = +document.getElementsByName('Number')[0].value;

    console.log(primeNumber(num));
}

