function PriceChanges(oldPrice, newPrice) {
    const PERCENT = 100;
    var changes = PERCENT * (newPrice - oldPrice) / oldPrice;
    if (oldPrice < newPrice) {
        alert(`Price have increased about ${changes} %`)
    }else if(oldPrice > newPrice){
        alert(`Price have lowered about ${changes} %`)
    }else{
        alert(`No changes!`)
    }


};

function onClick() {
    var OldPrice = +document.getElementsByName('OldPrice')[0].value;
    var NewPrice = +document.getElementsByName('NewPrice')[0].value;

    PriceChanges(OldPrice, NewPrice);
};
