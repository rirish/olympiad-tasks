function onload(){
    console.log(app('the quick brown fox'));
}


function app(str){
    var newStr = [];
    var strArray=str.split(" ");
    for (var i=0; i<strArray.length;i++){

            newStr.push(strArray[i].charAt(0).toUpperCase()+strArray[i].slice(1));


    }
    return newStr.join(' ');
}
