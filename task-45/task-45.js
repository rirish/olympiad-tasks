const sampleNumbers = [3, -7, -2 ];

function app(num){
    var str = 'Sign is ';
    var res = 1;
    for (var i=0; i<num.length; i++){
        res *=num[i];
    }
    (res>0) ? (alert(str + '+')) : (alert(str + '-'))
}

app(sampleNumbers);