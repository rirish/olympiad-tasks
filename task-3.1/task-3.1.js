const DAYS = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

function currentDate() {
    let today = new Date();
    console.log('Сегодня у нас: '+ DAYS[today.getDay()]);

    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}

    console.log(`Текущее время: ${hours} : ${minutes} : ${seconds}`);
}
