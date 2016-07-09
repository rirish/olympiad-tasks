const N = 5;

function buildArray(){
    var resArray = [];
    for (var i=0; i<N; i++) {
        resArray[i] = [];
    }

    var counter = 1;

    for(var i=0; i < N; i++){
        if (i%2==1){

                for (var j=N-1;j >=0; j--) {
                    resArray[i][j] = counter++;
                }
        } else {
                for (var j=0;j < N; j++) {
                    resArray[i][j] = counter++;
                }
        }
    }

    printArray(resArray);
}

function  printArray(arr) {
    var message = '';
    for(var i=0; i < N; i++){
        for (var j=0;j < N; j++) {
            message += arr[i][j] +',';
        }
        message += '\n';
    }
    console.log(message);
}

