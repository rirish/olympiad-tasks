text_truncate = function(cutString, cutLength, end) {

    if (end == null) {
        end = '...';
    }
    if (cutString.length > cutLength) {
        return cutString.substring(0, cutLength - end.length) + end;
    } else {
        return cutString;
    }
};
console.log(text_truncate('We are doing JS string exercises.'));
console.log(text_truncate('We are doing JS string exercises.',19));
console.log(text_truncate('We are doing JS string exercises.',15,'!!'));
