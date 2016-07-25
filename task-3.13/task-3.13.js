function draw(){
    var context = document.getElementById("myCanvas").getContext("2d");
    var counter = 0;
    const NUMBER_OF_CIRCLES = 6;
    for (var i=0;i<NUMBER_OF_CIRCLES;i++)    {
        for (var j=0;j<NUMBER_OF_CIRCLES;j++) {

            context.fillStyle = "rgb(" + Math.floor(255-(255/NUMBER_OF_CIRCLES)*i) + "," + Math.floor(255-(255/NUMBER_OF_CIRCLES)*i) +
                "," + Math.floor(255-(255/NUMBER_OF_CIRCLES)*j) + ")";
            context.beginPath();
            if (i === counter && j === counter){

                context.arc(50+j*50,50+i*50,20,0,Math.PI*2,true);
                context.fill();

                context.stroke();
            }
        }
        counter++;
    }
}
draw();
