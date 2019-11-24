"use strict";

const testJackpot = result => {
    let mySet = new Set(result);
    return mySet.size === 1;
};

console.log(testJackpot(["@", "@", "@", "@"])); // true
console.log(testJackpot(["abc", "abc", "abc", "abc"])); // true
console.log(testJackpot(["SS", "SS", "SS", "SS"])); // true
console.log(testJackpot(["&&", "&", "&&&", "&&&&"])); // false
console.log(testJackpot(["SS", "SS", "SS", "Ss"])); // false