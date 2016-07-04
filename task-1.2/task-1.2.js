
function chessAlert(x1, y1, x2, y2) {

    var horseAttack = [
        [ -1, -2 ],
        [ +1, -2 ],
        [ +2, -1 ],
        [ +2, +1 ],
        [ +1, +2 ],
        [ -1, +2 ],
        [ -2, +1 ],
        [ -2, -1 ]
    ];

    var isQueenAttacked = false;
    for(i = 0; i < horseAttack.length; i++) {
        if (x2 == x1 + horseAttack[i][0] && y2 == y1 + horseAttack[i][1]) {
            isQueenAttacked = true;
            break;
        }
    }

    isQueenAttacked ? (alert('ALERT!!! Horse attacks!')) : (alert('OK!'));

    var isHorseAttacked = (y1 == x1 + y2 - x2) || (y2 == -x1 + y2 + x2) || (x1 == x2) || (y1 == y2);
    isHorseAttacked ? (alert('ALERT!!! Queen attacks!')) : (alert('OK!'));

};

function onClick() {
    var x1 = document.getElementsByName('x1')[0].value;
    var y1 = document.getElementsByName('y1')[0].value;
    var x2 = document.getElementsByName('x2')[0].value;
    var y2 = document.getElementsByName('y2')[0].value;
    chessAlert(+x1, +y1, +x2, +y2);
};