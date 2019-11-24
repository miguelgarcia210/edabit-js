"use strict";

// TODO: Create a function that returns the number of hashes and pluses in a string.

function hashPlusCount(x) {
    var hashCounter = 0;
    var plusCounter = 0;
    var array =  x.split("");
    array.forEach(function (character) {
        if (character === "#") {
            hashCounter++;
        } else if (character === "+") {
            plusCounter++
        }
    });
    var result = [];
    result.push(hashCounter);
    result.push((plusCounter));

    return result;
}

console.log(hashPlusCount("###+")); // [3,1]
console.log(hashPlusCount("##+++#")); // [3, 3]
console.log(hashPlusCount("#+++#+#++#")); // [4, 6]
console.log(hashPlusCount("")); // [0,0]