function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');

        context.fillStyle = "red";
        context.fillRect(20,20,100,100);

        context.save();
        context.fillStyle = "blue";
        context.globalAlpha =0.4;
        context.fillRect(50,50,130,130);
        context.restore();
    }
}
