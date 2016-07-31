var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var commonMark = 0;

for (var i=0; i<students.length; i++){
    commonMark += students[i][1];
    var avarageMark = commonMark/students.length;
}
console.log("Average grade: " + avarageMark);

if (avarageMark < 60){
    console.log("Grade: F");
}
else if (avarageMark < 70) {
    console.log("Grade: D");
}
else if (avarageMark < 80)
{
    console.log("Grade: C");
} else if (avarageMark < 90) {
    console.log("Grade: B");
} else if (avarageMark < 100) {
    console.log("Grade: A");
}
