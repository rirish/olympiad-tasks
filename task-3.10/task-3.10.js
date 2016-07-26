function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');

        context.beginPath();
        context.arc(95,50,40,0,2*Math.PI);
        context.lineWidth = 3;
        context.strokeStyle = 'red';
        context.stroke();

    }
}
