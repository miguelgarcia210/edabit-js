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

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])); // ➞ "Boom!"
console.log(sevenBoom([8, 6, 33, 100]));// ➞ "there is no 7 in the array"
console.log(sevenBoom([2, 55, 60, 97, 86])); // ➞ "Boom!"