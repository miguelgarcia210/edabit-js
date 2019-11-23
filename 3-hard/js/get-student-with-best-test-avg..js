"use strict";

let studentClass1 = {
    John: [100, 90, 80],
    Bob: [100, 70, 80]
};
let studentClass2 = {
    Susan: [67, 84, 75, 63],
    Mike: [87, 98, 64, 71],
    Jim: [90, 58, 73, 86]
};
let studentClass3 = {
    Tim: [93, 84, 49, 71, 76, 83],
    Nick: [88, 91, 74, 72, 63, 68],
    Brad: [100, 94, 72, 64, 58, 81],
    Annie: [79, 93, 82, 82, 63, 87]
};
let studentClass4 = {
    Eddie: [65, 85, 72, 76],
    Brock: [55, 97, 82, 91],
    Jessica: [78, 62, 79, 99]
};

const getBestStudent = (studentClass) => {
    // Container w/student names and averages
    const studentAvgs = [];
    // Convert object into an iterable array
    const students = Object.entries(studentClass);
    // initialize first student name
    let topStudentName = students[0][0];
    // top student container w/name and avg
    let topStudent = [];

    students.forEach(function (student) {
        let average = {
            name: student[0],
            average: Math.round(student[1].reduce((accumulation, testScore) => {
                return accumulation + testScore;
            }, 0) / student[1].length)
        };
        return studentAvgs.push(average);
    });

    let topStudentAvg = studentAvgs.reduce((highestAvg, student) => {
        if (student.average > highestAvg) {
            highestAvg = student.average;
            topStudentName = student.name;
        }
        return highestAvg;
    }, studentAvgs[0].average);

    // Future access to top student name and average value
    topStudent.push(topStudentName, topStudentAvg);

    return topStudent[0];
};

console.log(getBestStudent(studentClass1));
console.log(getBestStudent(studentClass2));
console.log(getBestStudent(studentClass3));
console.log(getBestStudent(studentClass4));