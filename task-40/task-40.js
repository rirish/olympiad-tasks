function exp(b,n){
    var res=1;
    for (var i=0; i<n; i++){
        res *=b;
    }
    console.log(res);
}

function onClick() {
    var Bases = +document.getElementsByName('Bases')[0].value;
    var Exponent = +document.getElementsByName('Exponent')[0].value;

    exp(Bases,Exponent);
}
