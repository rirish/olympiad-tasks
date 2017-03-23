function app(){
    for (var i = 2014; i<=2050; i++){
        var currentDay = new Date(i, 0, 1);
        if (currentDay.getDay()==0){
            console.log(i);
        }
    }

}
