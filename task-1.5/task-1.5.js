function coins(yourMoney) {
    const BIG_COIN = 5;
    const LITTLE_COIN = 3;
    var x=0, y;
    do {
        y = (yourMoney - LITTLE_COIN*x)/BIG_COIN;
        if (y-Math.floor(y)==0) {
            alert('x= ' + x + ', y= ' + y);
        }
        x+=1;
    } while (y>=0);


};

function onClick() {
    var YourMoney = document.getElementsByName('YourMoney')[0].value;

    coins(+YourMoney);
};
