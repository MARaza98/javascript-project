// // answer 1
// var a = +prompt("Enter the base value")
// var b = +prompt("Enter the power value")
// var save = 1;
// function result() {
//     for (let i = 1; i <= b; i++){
//        save = save * a   
//     }
//     return save;
// }
// console.log(a + " is base vaule and power "+ b +" and result " + result())

// // answer 2

// var input = +prompt("Enter a Year");

// function leap() {

//     if (input % 4 !== 0) {
//         alert("It is not a Leap Year")
//     } else {
//         alert("It is a Leap Year")
//     }
// }
// leap();

// // answer 3

// var input1 = +prompt("Enter First Side");
// var input2 = +prompt("Enter Second Side");
// var input3 = +prompt("Enter Third Side");
// function area(a,b,c) {
//     var array = [a, b, c];
//     var sides = side(array);
//     function side(arr) {
//         return (arr[0] + arr[1] + arr[2]) / 2;
//     }
//     var area = Math.sqrt(Math.abs(sides * (sides - a) * (sides - b) * (sides - c)));
//     return area;
// }
// var result = area(input1, input2, input3);
// console.log(result);


// // answer 4

// var sub1 = +prompt("Enter Obtained Marks of First Subject")
// var sub2 = +prompt("Enter Obtained Marks of Second Subject")
// var sub3 = +prompt("Enter Obtained Marks of Third Subject")
// function avg(a, b, c) {
//     return (a + b + c) / 2;
// }
// function perc(a, b, c) {
//     return (a + b + c) * 100 / 300;
// }
// function mainFunction(a, b, c) {
//     return alert(`${avg(a, b, c).toFixed(2)} is the Average and ${perc(a, b, c).toFixed(2)}% is the Percentage`);
// }
// mainFunction(sub1, sub2, sub3);

// // answer 5

// function ownIndexOf() {
//     var input = prompt("Enter your Sentence").toLowerCase();
//     var index = prompt("Enter your letter to find its Index number");
//     for (i = 0; i < input.length; i++) {
//         if (input[i] === index) {
//             console.log(i);
//             break;
//         }
//         else if (i === input.length - 1) {
//             console.log("nhi mila");
//         }
//     }
// }
// ownIndexOf();

// // answer 6

// function toRemoveVowels() {
//     var sent = "The quick brown fox".split("");
//     var arr = [];
//     var flag = false;
//     var vowel = "aeiou";
//     for (i = 0; i < sent.length; i++) {
//         flag = false;
//         for (j = 0; j < vowel.length; j++) {
//             if (sent[i] === vowel[j]) {
//                 flag = true;
//             }
//         }
//         if (flag === false) {
//             arr.push(sent[i]);
//             // flag = tr;
//         }
//     }
//     return arr.join("");
// }
// var result = toRemoveVowels();
// alert(result);

// // answer 7

// function doubleVowelOccurence() {
//     var sent = "Pleases read this application and give me gratuity".toLowerCase();
//     var vowelPossiblity = ["aa", "ae", "ai", "ao", "au", "ee", "ea", "ei", "eo", "eu", "ii", "ia", "ie", "io", "iu", "oo", "oa", "oe", "oi", "ou", "uu", "ua", "ue", "ui", "uo"];
//     var arr = [];
//     for (i = 0; i < sent.length; i++) {
//         for (j = 0; j < vowelPossiblity.length; j++) {
//             if (sent.slice(i, i + 2) === vowelPossiblity[j]) {
//                 arr.push(sent.slice(i, i + 2))
//             }
//         }
//     }
//     return arr;
// }
// var result = doubleVowelOccurence();
// alert(result);

// // answer 8

// var input = +prompt("Enter KM Distance");
// function kmToMeter(a) {
//     return a * 1000;
// }
// function kmToFeet(a) {
//     return a * 3280.84;
// }
// function kmToInches(a) {
//     return a * 39370.1;
// }
// function kmToCentiMeter(a) {
//     return a * 100000;
// }
// var kmIntoMeter = kmToMeter(input);
// var kmIntoFeet = kmToFeet(input);
// var kmIntoInches = kmToInches(input);
// var kmIntoCentiMeter = kmToCentiMeter(input);
// alert(kmIntoMeter + " Meter " + kmIntoFeet + " Feet " + kmIntoInches + " Inches " + kmIntoCentiMeter + " CentiMeter ");

// // answer 9

// var input = +prompt("Enter your Total Work Hour");
// function overtimePaid(a) {
//     if ((a - 40 !== Math.abs(a - 40))) {
//         return alert("You Didn't do Overtime");
//     }
//     else {
//         return alert("You get " + (a - 40) * 12 + " Rs for your overtime");
//     }
// }
// overtimePaid(input);

// // answer 10

// var input = prompt("Enter Currency to Denominate into 100,50 & 10");
// var input = prompt("Enter amount to withdraw!!");
// function currencyDemonation(a) {
//     var string = a.slice(-2);
//     var calc = Number(a.slice(-2));

//         string = calc.toString();
//         ten = string.slice(0, 1);
//     }
//     var result = hundred + " Hundred " + ten + " Ten " + fivety + " Fivety";
//     var result = `You will have ${hundred} hundred notes ${fivety} fivety notes ${ten} ten notes.`;
//     return result;

// console.log(currencyDemonation(input));
