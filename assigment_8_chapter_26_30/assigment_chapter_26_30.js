// // answer 1

// var num = prompt("Enter your number in decimal and see the result round , floor , ceil")

// var num1 = Math.round(num)
// var num2 = Math.floor(num)
// var num3 = Math.ceil(num)

// document.write(" your number is : " + num + "<br /> Round off value : " + num1 + "<br /> Floor value is : " + num2 + "<br /> Ceil value is : " + num3)

// // answer 2

// var num = prompt("Enter your number in negative floating point  decimal and see the result round , floor , ceil")

// var num1 = Math.round(num)
// var num2 = Math.floor(num)
// var num3 = Math.ceil(num)

// document.write(" your number is : " + num + "<br /> Round off value : " + num1 + "<br /> Floor value is : " + num2 + "<br /> Ceil value is : " + num3)

// // answer 3 

// var absolute_value = prompt("Enter your Absolute value ")

// var result = Math.abs(absolute_value)
// document.write(" your number is : " + absolute_value + "<br /> this is your result value : " + result)

// // answer 4

// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 6) + 1;
// var numberOfStars = Math.floor(improvedNum);

// document.write(" Random dice value : " + numberOfStars )

// // answer 5

// var userInput = prompt("Enter Heads/Tails:").toLowerCase();
// var arr = ["heads", "tails"]
// var randomNum = arr[Math.floor(Math.random() * arr.length)]

// if (userInput !== randomNum) {
//     document.write(" 2 Random coin value : " + "heads" + "<br />  your input value is :" + userInput);
// } else {
//     document.write(" 1 Random coin value : " + "tails" + "<br />  your input value is :" + userInput);

// }

// // answer 6

// for (i = 0; i < 1; i++) {
//     var randomNumber = Math.floor(Math.random() * 100);
//     document.write("Random number between 1 to 100 : " + randomNumber + "<br>")
//     }

// // answer 7

// userInput = prompt("Enter your weight in kilogram");

// if(userInput.indexOf('.')){
    
//     document.write("The Weight of user is : " + parseFloat(userInput) + " Kilogram")
// }
// else{
//     document.write("The Weight of user is : " + parseInt(userInput) + " Kilogram")


// }


// // answer 8

// var randomNumber = Math.floor(Math.random() * 10) + 1;
// var userInput = +prompt("Enter a guess number : ")
// if(userInput===randomNumber){
//     alert("you Win")
// }
// else{
//     alert("Try again !")
// }