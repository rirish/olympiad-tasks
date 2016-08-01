var inStr = '025468';

function app(str) {

    var newArr =[str[0]];
    var arr = str.split('');
    for (var i=1; i< str.length; i++){
        if (str[i-1]%2==0 && str[i]%2==0){
            newArr.push('-', str[i]);
        }else{
            newArr.push(str[i]);
        }
    }
    var res=newArr.join('');
    console.log(res);
}
app(inStr);