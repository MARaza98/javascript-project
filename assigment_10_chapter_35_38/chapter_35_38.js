// // answer 1

// function dateTime() {

//     var date = new Date()

//     document.write(date)
// }

// dateTime()

// // answer 2

// function introduction() {
    
//         var firstname = prompt("Enter your first name").toUpperCase()
//         var lastname = prompt("Enter your last name").toUpperCase()

//     alert("Welcome " + firstname + lastname)
// }

// introduction()

// // answer 3

// var num1 = +prompt("Enter your first number")
// var num2 = +prompt("Enyer your second number")

// function add_number() {

//     var sum = num1 + num2

//     return sum
// }

// document.write("Your anser is : " + add_number())

// // answer 4

// var input1 = +prompt("Enter you first number")
// var math_operator = prompt("Enter your math operators + - / *")
// var input2 = +prompt("Enter your second number")

// function calculator() {

//     if (math_operator === "+") {

//         var sum = input1 + input2
//         return sum;

//     }else if (math_operator === "-") {

//         var negative = input1 - input2
//         return negative;

//     }else if (math_operator === "/") {

//         var divide = input1 / input2
//         return divide;

//     }else if (math_operator === "*") {
        
//         var multiply = input1 * input2
//         return multiply;

//     }else if (math_operator === "") {
        
        
//         return alert("please Enter the math operators")
     

//     }else{

//         return alert("please Enter the only math operators")
    

//     }
  
// }

// document.write("Your answer is : " + calculator())

// // answer 5

// var squareNum = +prompt("Enter a number to find the sqaure of it  : ")

// function squares() {

//     var findSquare = squareNum * squareNum;

//     document.write("Reminder of two number is : " + findSquare)

// }

// squares()

// // answer 6

// var fact = 1;
// var factorialNumber = +prompt("Enter a number to find the factorical that number : ")

// function factorial() {
  
//     document.write("Factorial Of " + factorialNumber + " ! <br>")

//     if (factorialNumber < 0) {
//         document.write("The factorial of the negative number doesnot perform")
//     }

//     else if (factorialNumber === 0) {

//         document.write("The factorial of 0 is 1")
//     }
//     else if (factorialNumber >= 1) {
//         for (i = 1; i <= factorialNumber; i++) {

//             fact *= i;

//         }
//         document.write("Your answer is = " + fact)

//     }

// }
// factorial()

// // answer 7

// var startNumber = +prompt("Enter a start Number : ");
// var EndNumber = +prompt("Enter a End Number : ");

// function counting() {
 
//     for (i = startNumber; i <= EndNumber; i++) {

//         document.write(i + "<br>")
//     }

// }
// counting()

// answer 8

// Working on progress


// // answer 9

// var width = +prompt("Enter a width :");
// var height = +prompt("Enter a height :");

// function area(){

//     A = width * height;

//     document.write("(Argument as variable) Area of the Rectangle is " + A);

//     document.write("<br>")

//     var area = 45 * 54 ;
//     document.write("(Argument as value) Area of the Rectangle is : " + area )
    

// }

// area()

// // answer 10

// var text = '';
// var userInput = prompt("Enter a string");

// function palindrome(){

//     for (var i = userInput.length - 1; i >= 0; i--) { 
//         text += userInput[i]; 
//     }

//     if(text === userInput){
//         alert("its palindrome");
//     }
//     else{
//         alert("its not palindrome");
//     }
// }
// palindrome()

// // answer 11

// var userInput = prompt("Enter a word or Letter").toLowerCase();

// function titledcase(){

//     document.write("User Input : " + userInput + "<br /> <br />")

//     document.write("Title case : ")

// var newStr = userInput.split(' ')
//    .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
//    .join(' ');
// document.write(newStr);

// }   
// titledcase()

// answer 12

// Working on progress

// answer 13

// Working on progress

// answer 14

// Working on progress
