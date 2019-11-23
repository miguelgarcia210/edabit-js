"use strict";

// TODO: Write a function redundant that takes in a string str and returns a function that returns str.

const redundant = (str) => () => str;
// Demonstrates the return of redundant()
console.log(redundant("apple"));
// Set variables to the return value
const f1 = redundant("apple");
const f2 = redundant("pear");
const f3 = redundant("");

console.log(f1());
console.log(f2());
console.log(f3());