// JS-001
// Return an object containing sum, difference (a - b), product, and quotient (a / b). If b is zero, the quotient must be null.

// function arithmeticReport(a,b){
//    return {
//         sum : a + b ,
//         difference : a - b,
//         product : a * b,
//         quotient: b : 0 ? null : a / b
//     }
// }
// console.log(arithmeticReport(5,10))

//:===============================================================================================

// JS-002
// Convert a duration into hours, minutes, and seconds. Return {hours, minutes, seconds}; hours may exceed 23.

// function secondsToClock(a) {
//     return {
//         hours:Math.floor(a / 3600) ,
//         minutes:Math.floor(a / 60),
//         seconds: a
//     }

// }
// console.log(secondsToClock(10000))


//:===============================================================================================
// JS-003
// Return {sign, parity}. sign is "positive", "negative", or "zero". parity is "even" or "odd".

// function classifyNumber(n) {
//     let sign;
//     if (n > 0) {
//         sign : "positive";
//     } else if (n < 0) {
//         sign : "negative";
//     } else {
//         sign : "zero";
//     }
//     let parity; {
//         if (n % 2 : 0) {
//             parity : "even"
//         } else if (n % 2 : 1) {
//             parity : "obb"
//         } else if (!Number.isInteger(n)) {
//             parity : null
//         }
//     }
//     let isInteger : Number.isInteger(n);
//     return {
//         sign: sign,
//         parity: parity,
//         isInteger: isInteger
//     };
// }
// console.log(classifyNumber(10));
// console.log(classifyNumber(-3));
// console.log(classifyNumber(2.5));




//:===============================================================================================
// JS-004
// Return the largest input. Solve units comparisons; do not use Math.max() or sort().
// function largestOfThree(a, b, c) {
//     if (a > b && a > c) {
//         return a
//     } else if (b > a && b > c) {
//         return b
//     } else {
//         return c
//     }
// }
// console.log(largestOfThree(33 , 2 ,7))
// console.log(largestOfThree(30 , 55.5 ,9))
// console.log(largestOfThree(7 , 90 ,101))



//:===============================================================================================
// JS-005
// Return A for 90-100, B for 80-below 90, C for 70-below 80, D for 50-below 70, and F below 50. Return "Invalid score" for non-numbers, non-finite numbers, or scores outside 0-100.
// function gradeValidator(grade) {
//     if (grade < 0 || grade > 100) {
//         return "Invalid grade";
//     } else if (grade >= 90) {
//         return "A";
//     } else if (grade >= 80) {
//         return "B";
//     } else if (grade >= 70) {
//         return "C";
//     } else if (grade >= 60) {
//         return "D";
//     } else {
//         return "F";
//     }
// }

// console.log(gradeValidator(95));
// console.log(gradeValidator(82));
// console.log(gradeValidator(67));
// console.log(gradeValidator(45));
// console.log(gradeValidator(110));





//:===============================================================================================
// JS-006
// function switchCalculator(a, b, operator) {
//     switch (operator) {
//         case "+":
//             return a + b;

//         case "-":
//             return a - b;

//         case "*":
//             return a * b;

//         case "/":
//             return a / b;

//         default:
//             return "Invalid operator";
//     }
// }
// console.log(switchCalculator(10, 5, "+"));
// console.log(switchCalculator(10, 5, "-"));
// console.log(switchCalculator(10, 5, "*"));
// console.log(switchCalculator(10, 0, "/"));
// console.log(switchCalculator(10, 5, "%"));





//:===============================================================================================
// JS-007
// Return true if the year is divisible by 400, or divisible by 4 but not 100. Otherwise return false.
// function isLeapYear(a) {
//     if (a % 400 === 0) {
//         return true
//     } else if (a % 4 === 0 && a % 100 !== 0) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isLeapYear(2024));
// console.log(isLeapYear(2025));
// console.log(isLeapYear(2000));
// console.log(isLeapYear(1900));




//:===============================================================================================
// JS-008
// Return "Invalid", "Equilateral", "Isosceles", or "Scalene". A triangle requires positive sides and the sum of any two sides to be strictly greater than the third.
// function triangleType(a, b, c) {
//     if (a + b <= c || a + c <= b || b + c <= a) {
//         return "Invalid triangle";
//     }
//     else if (a === b && a === c) {
//         return "Equilateral";
//     }
//     else if (a === b || a === c || b === c) {
//         return "Isosceles";
//     }
//     else {
//         return "Scalene";
//     }
// }

// console.log(triangleType(3, 3, 3));
// console.log(triangleType(3, 3, 5));
// console.log(triangleType(3, 4, 5));
// console.log(triangleType(1, 2, 5));



//:===============================================================================================
// JS-009
// Return the cost: first 100 units cost 1 each; next 100 cost 1.5 each; all remaining units cost 2 each. Rates apply only to the units within each tier.
// function electricityBill(units) {
//     if (units > 200) {
//         return units * 2
//     } else if (units > 100 && units < 200) {
//         return units * 1.5
//     }else{
//         return units
//     }

// }
// console.log(electricityBill(50));
// console.log(electricityBill(150));
// console.log(electricityBill(250));



//:===============================================================================================
// JS-0010
// Return {floor, ceil, round, trunc} using the corresponding Math methods.

// function roundingReport(x) {
//     return {
//         floor: Math.floor(x),
//         ceil: Math.ceil(x),
//         round: Math.round(x),
//         trunc: Math.trunc(x)
//     }
// }
// console.log(roundingReport(2.7))
// console.log(roundingReport(-2.7))
// console.log(roundingReport(3))
// console.log(roundingReport(-3))



//:===============================================================================================
// JS-0011
// Return the Euclidean distance between two points. Use Math.hypot() or Math.sqrt() with Math.pow().
// function distance(x1, y1, x2, y2) {
//   return Math.hypot(x2 - x1, y2 - y1);
// }
// console.log(distance(5,6,8,2))



//:===============================================================================================
// JS-0012
//Return the Euclidean distance between two points. Use Math.hypot() or Math.sqrt() with Math.pow().
// function circleMeasurements(radius) {
//   return {
//     area: Math.PI * Math.pow(radius, 2),
//     circumference: 2 * Math.PI * radius
//   };
// }
// console.log(circleMeasurements(5))


//:===============================================================================================
// JS-0013
//Return {area, circumference} using Math.PI.
// function clamp(value, min, max) {
//   return Math.min(Math.max(value, min), max);
// }
// console.log(clamp(5 , 6 , 2))


//:===============================================================================================
// JS-0014
//Return value restricted to the inclusive range [min, max]. Use Math.min() and Math.max().
// function absoluteDifference(a, b) {
//   return Math.abs(a - b);
// }
// console.log(absoluteDifference(10,3))


//:===============================================================================================
// JS-0015
//Return the non-negative distance between two numbers using Math.abs().
// function randomInteger(min, max, randomValue = Math.random()) {
//     return Math.floor(randomValue * (max - min + 1)) + min;
// }
// console.log(randomInteger(10, 3, 7))
 

//:===============================================================================================
// JS-0016
// function digitCount(n) {
//   n = Math.abs(Math.trunc(n));
//   if (n === 0) return 1;
//   let count = 0;
//   while (n > 0) {
//     count++;
//     n = Math.trunc(n / 10);
//   }
//   return count;
// }
// console.log(digitCount(5))


//:===============================================================================================
// JS-0017
// function isPerfectSquare(n) {
//   if (n < 0) return false;
//   return Number.isInteger(Math.sqrt(n));
// }
// console.log(isPerfectSquare(1))
// console.log(isPerfectSquare(10))



//:===============================================================================================
// JS-0018
// function trigDegrees(degrees) {
//   let radians = degrees * (Math.PI / 180);
//   return {
//     sin: Math.sin(radians),
//     cos: Math.cos(radians)
//   };
// }
// console.log(trigDegrees(0))
// console.log(trigDegrees(90))
// console.log(trigDegrees(180))
// console.log(trigDegrees(360))
// console.log(trigDegrees(-90))
 