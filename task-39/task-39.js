function onload(){
    console.log((app('qwerty')));
}

function app(operand){
    var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;

    if (typeof operand === "object" || typeof operand === "function")
    {
        for (x = 0, len = dtypes.length; x < len; x++)
        {
            if (operand instanceof dtypes[x])
            {
                return dtypes[x];
            }
        }
    }

    return typeof operand;

}