"use strict";

function sevenBoom(arr) {
    /* for (var i = 0; i < arr.length; i++) {
        if(arr[i].toString().split('').includes('7')) {
            return "Boom!";
        }
    }
    return "there is no 7 in the array";
    */
    var sevenFound = false;
    arr.forEach(function(num) {
        if((num + "").includes('7')) {
            sevenFound = true;
        }
    });
    if (sevenFound) {
        return "Boom!"
    } else {
        return "there is no 7 in the array"
    }
}