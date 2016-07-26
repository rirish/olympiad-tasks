function onload(){
    alert(app('Web Development Tutorial'));
}
function app(str) {
    var maxWord ='';
    var wordsArray = str.split(' ');
    for (var i=0; i<wordsArray.length; i++){
        if (wordsArray[i].length>maxWord.length){
            maxWord=wordsArray[i];
        }
    }
    return maxWord;
}