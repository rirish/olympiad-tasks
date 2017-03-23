function onload() {
    app("dog");
}
function app(str){
    var letters = str.split("");
    var combi = [];
    var temp= "";
    var slent = Math.pow(2, letters.length);
    for(var i=0; i<slent; i++) {
        temp= "";
        for (var j=0; j<letters.length; j++) {
            if ((i & Math.pow(2,j))){
                temp += letters[j];
            }

        }
        if (temp !== "")
        {
            combi.push(temp);
        }
    }
    console.log(combi.join("\n"));


}
