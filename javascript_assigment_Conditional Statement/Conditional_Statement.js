// // chapter 9-11
// // answer 1

// var input = prompt("Please Enter your city")
// if (input === "karachi") {
//     alert("Welcome to city of karachi")
// }

// // answer 2

// var  user = prompt("please Enter your gender")
// if (user === "male") {
//     alert("Good Morning Sir")    
// }
// else if (user === "female") {
//     alert("Good Morning Ma'am")
// }else{
//     alert("Sorry your gender is not match")
// }

// // answer 3 

// var signal = prompt("Enter traffic signal light's")
// if (signal === "red") {
//     alert("Must stop")
// } 
// else if (signal === "yellow"){
//     alert("Ready to move")
// }
// else if (signal === "green") {
//     alert("Move now")
// }
// else{
//     alert("this color is not a signal light's")
// }

// // answer 4

// var fuel_remaining = prompt("Please Enter your current fuel remaining")
// if (fuel_remaining <= "0.25") {
//     alert("Please refill the fuel in your car")
// } else {
//     alert("Your fuel is good remaining")
// }

// // answer 5 
// // answer 5/a
// var a = 4
// if (++a === 5) {
//     alert("given condition for variable a is true")
// }

// // answer 5/b
// var b = 82
// if (b++ === 83) {
//     alert("given condition for variable a is true")
// }

// // answer 5/c
// var c = 12
// if (c++ === 13) {
//     alert("condition 1 is true")
// }
// else if (c === 13) {
//     alert("condition 2 is true")
// }
// else if (++c < 14) {
//     alert("condition 3 is true")
// }
// else if (c === 14) {
//     alert("condition 4 is true")
// }

// // naswer 5/d

// var materialCost = 2000
// var laborCost = 2000
// var totalCost = materialCost + laborCost
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals")
// }

// // answer 5/e

// if (true) {
//     alert("true")
// }
// if (false) {
//     alert("False")
// }

// // answer 5/f

// if ("car" < "cat") {
//     alert("car is smaller than cat")
// }

// // answer 6

// var computer = +prompt("please Enter your marks computer subj")
// var english = +prompt("please Enter your marks english subj")
// var math  = +prompt("please Enter your marks Math subj")
// var totalmarks = computer + english + math
// var presentage =   totalmarks / 300 * 100

// if (presentage >= 80) {
  
//     alert("Grade\n (A-one) Excellent")
// }else if (presentage >= 70) {

//     alert("Grade \n (A) Good")
// }else if (presentage >= 60) {

//     alert("Grade \n (B) You need to improve")
// }else{

//     alert("Fail \n Sorry")
// }

// var total_marks = 300
// var marks_obtained = 219
// var presentage = marks_obtained / total_marks * 100
// var Grade = "B"
// var Remarks = "You need to improve"
// document.write("Total marks :" + total_marks + "<br>" +"Marks obtained :" + marks_obtained + "<br>" +"presentage :" + presentage + "%" + "<br>" +"Grade :" + Grade + "<br>" +"Remarks :" + Remarks)

// // answer 7

// var guest = +prompt("Just for a Game\n please enter your number (1 out of 10) and see the magic")
// var num = Math.floor(Math.random() * 10)
// if (guest === num) {
//     alert("Bingo! Correctanswer")
// }else if (guest > num) {
    
//     alert("Secret number is "+ num +" and your number is "+ guest + " Close enough to the correct answer")
// }else{
//   alert("Secret number is "+ num +" and your number is "+ guest + " Sorry !! Next Try")
// }

// // answer 8

// var number = prompt("please Enter your any number and check result divide by 3")
// var divisible = 3
// var result = number / divisible
// alert(result + " the number is divisible by 3")

// // answer 9

// var number = prompt("Enter a number odd and even : ");

// //check if the number is even
// if(number % 2 == 0) {
//     alert("The number is even.");
// }

// // if the number is odd
// else {
//     alert("The number is odd.");
// }

// // answer 10

// var temp = +prompt("Please Enter your temperature ")

// if (temp > 40) {
//     alert("It is too hot outside")
// }else if (temp > 30) {
//     alert("The weather today is normal")
// }else if (temp > 20) {
//     alert("Today weather is cool")
// }else if (temp >= 10) {
//     alert("OMG Today weather is so cool")
// }else(
//     alert("OMG weather is dangers cool")
// )

// // answer 11

// var input1 = prompt("Enter your first number ")
// var input3 = prompt("Enter your operation + - * / %")
// var input2 = prompt("Enter your secound number")
// var str = parseInt(input1)
// var str1 = parseInt(input2)
// var result ;
// if (input3 === "+") {
//     result = str + str1
//     alert("this is your + sign result " + result)
// }else if (input3 === "-") {
//     result = str - str1
//     alert("this is your - sign result " + result)
// }else if (input3 === "*") {
//     result = str * str1
//     alert("this is your * sign result " + result)
// }else if (input3 === "/") {
//     result = str / str1
//     alert("this is your / sign result " + result)
// }else if (input3 === "%") {
//     result = str % str1
//     alert("this is your % sign result " + result)
// }else{
//     alert("this sign is not a math operator")
// }

// // chapter 12 - 13
// // answer 1

// var userInput = prompt("Enter a Character i.e. : a-z,A-Z,0-9")
// var asciiCode = userInput.charCodeAt(0);


//     if (asciiCode >= 65 && asciiCode <= 90) {
//         alert(userInput + " is a uppercase letter")
//     }
//     else if (asciiCode >= 97 && asciiCode <= 122) {
//         alert(userInput + " is a Lowercase letter")
//     }
//     else if (asciiCode >= 48 && asciiCode <= 57) {
//         alert(userInput + " is a number")
//     }
//     else {
//         alert("Invalid Input")
//     }

//     // answer 2

//     var UserNumber1 = +prompt("Enter a number 1 ")
//     var UserNumber2 = +prompt("Enter a number 2 ")

//     if (UserNumber1 > UserNumber2) {
//         alert(UserNumber1 + " is greater than " + UserNumber2)
//     }
//     else {
//         alert(UserNumber2 + " is greater than " + UserNumber1)
//     }

//     // answer 3

//     var numberFinder = +prompt("Enter a number : ")

//     if (numberFinder > 0) {
//         alert("Positive number")
//     }
//     else if (numberFinder < 0) {
//         alert("Negative number")
//     }
//     else if (numberFinder === 0) {
//         alert("Zero")
//     }
//     else {
//         alert("Invalid Input")
//     }

// // answer 4

//     var cha = prompt("Enter a character (a-z, A-z)");

//     if ((cha == "a") || (cha == "A") || (cha == "e") || (cha == "E") || (cha == "i") || (cha == "I") || (cha == "O") || (cha == "o") || (cha == "u") || (cha == "U")) {
//         alert(true)
//     }
//     else {
//         alert(false)
//     }


// // answer 5

//     var actualPass = "FUUAST1SADIQ";
//     var InputPass = prompt("Enter a Password");

//     if (InputPass === actualPass) {
//         alert("Correct! The password you entered matches the original password")
//     }
//     else if (InputPass == "") {
//         alert("Please enter your password")
//     }
//     else {
//         alert("Incorrect password")
//     }

//     // answer 6

//     var greeting;
//     var hour = 13;

//     if (hour < 18) {
//         greeting = "Good day";
//         alert(greeting)
//     }
//     else {
//         greeting = "Good evening";
//         alert(greeting)
//     }

//     // answer 7

//     alert("i'll do it later")

// // Chapter 14-16 ARRAY
// // answer 1 

//     var cities = [];
//     alert("var cities = [ ] ;")

// // answer 2

//     arrayList = new Array()
//     alert(" arrayList = new Array()")

// // answer 3

//     var stringArray = ["Karachi", "Lahore", "Islambad"];

// // answer 4

//     var numberArray = [1, 2, 4, 5, 6, 66, 67];

// // answer 5

//     var boolArray = [true, true, false, false];

// // answer 6

//     var mixArray = ["Karachi", "Lahore", "Islambad", 1, 2, 4, 5, 6, 66, 67, true, true, false, false];

// // answer 7

//     var qualificationsInPak = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"]

//     document.write("<h1>Qualification</h1><br>")
//     document.write(`<h2>1) ${qualificationsInPak[0]}</h2>`)
//     document.write(`<h2>2) ${qualificationsInPak[1]}</h2>`)
//     document.write(`<h2>3) ${qualificationsInPak[2]}</h2>`)
//     document.write(`<h2>4) ${qualificationsInPak[3]}</h2>`)
//     document.write(`<h2>5) ${qualificationsInPak[4]}</h2>`)
//     document.write(`<h2>6) ${qualificationsInPak[5]}</h2>`)
//     document.write(`<h2>7) ${qualificationsInPak[6]}</h2>`)
//     document.write(`<h2>8) ${qualificationsInPak[7]}</h2>`)

//     document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

// // answer 8

//     var stdNames = ["Sadiq", "bilal", "Dany"];
//     var stdScroes = [450, 340, 380];

//     var perofStd1 = stdScroes[0] / 500 * 100;





//     var perofStd2 = stdScroes[1] / 500 * 100;
//     var perofStd3 = stdScroes[2] / 500 * 100;

//     document.write(`Score of  ${stdNames[0]} is ${stdScroes[0]}. Percentage ${perofStd1}% <br> `)
//     document.write(`Score of  ${stdNames[1]} is ${stdScroes[1]}. Percentage ${perofStd2}% <br> `)
//     document.write(`Score of  ${stdNames[2]} is ${stdScroes[2]}. Percentage ${perofStd3}% <br> `)

//     document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

// // answer 9

//     var colors = ["red", "green", "blue"];
//     document.write(colors);

// // answer 9a

//     var colorInput = prompt("Enter a color name which do you want to add at the start.");
//     var colors = ["red", "green", "blue"];
//     var Addedcolor = colors.unshift(colorInput);
//     document.write(colors);

// // answer 9b

//     var colorInput = prompt("Enter a color name which do you want to add at the end.");
//     var colors = ["red", "green", "blue"];
//     var Addedcolor = colors.push(colorInput);
//     document.write(colors);

// // answer 9c

//     var colorInput1 = prompt("Enter a color 1 name which do you want to add at the start.");
//     var colorInput2 = prompt("Enter a color 2 name which do you want to add at the start.");

//     var colors = ["red", "green", "blue"];
//     var Addedcolor = colors.unshift(colorInput1, colorInput2);
//     document.write(colors);

// //  answer 9d

//     var colorInput = prompt("Enter a color  name which do you want to delete  at the start.");

//     var colors = ["red", "green", "blue"];
//     var Addedcolor = colors.shift(colorInput);
//     document.write(colors);

// // answer 9e

//     var colors = ["red", "green", "blue"];
//     var colorInput = prompt("Enter a color name which do you want to add at the desire position.");
//     var indexNumber = +prompt("which color do you want to add on that index? ");
//     colors.splice(indexNumber, 0, colorInput);
//     document.write(colors);

// // answer 9f

//     var colors = ["red", "green", "blue"];
//     var deleteIndex = +prompt("At which index do you want to delete color?")
//     var colorDelete = +prompt("which color do you want to delete on that index?")

//     colors.splice(deleteIndex, colorDelete);

// // answer 9g

//     var studentScores = [67,87,98,97,67,80,90];

//     document.write("Scores of Students :  " + studentScores);

//     document.write("<br>")

//     var sortedScores = studentScores.sort()

//     document.write("Ordered Scores of Students :  " + studentScores);


// // answer 10 

//     var citiesArray = ["karachi","Queeta","Peshawar","lahore","Islamabad"]
//     var selectedCities = citiesArray.slice(2,5);

//     document.write("Cities List  : <br> " + citiesArray + "<br>");
//     document.write("Cities List  : <br> " + selectedCities);

// // answer 11

//     var arr = ["This", "is", "my",  "cat"];
//     document.write("<h1>Array: </h1>");
//     document.write(`<h1>${arr}</h1><br>`);

//     var joined = arr.join(" ");

//     document.write("<h1>String: </h1>");
//     document.write(`<h1>${joined}</h1><br>`);

// // answer 12

//     var acc = ["Keyboard","mouse","printer","monitor"];
//     document.write("<h2>Devices: </h2>");
//     document.write(`<h2>${acc}</h2><br>`);

//     var firstDevice = acc.shift();
//     document.write(`<h2>Out: <br>  ${firstDevice}</h2>`);

//     var secDevice = acc.shift();
//     document.write(`<h2>Out: <br>  ${secDevice}</h2>`);

//     var thirdDevice = acc.shift();
//     document.write(`<h2>Out: <br>  ${thirdDevice}</h2>`);

//     var fourthDevice = acc.shift();
//     document.write(`<h2>Out: <br>  ${fourthDevice}</h2>`);

// // answer 13

//     var acc = ["Keyboard","mouse","printer","monitor"];
//     document.write("<h2>Devices: </h2>");
//     document.write(`<h2>${acc}</h2><br>`);

//     var firstDevice = acc.pop();
//     document.write(`<h2>Out: <br>  ${firstDevice}</h2>`);


//     var secDevice = acc.pop();
//     document.write(`<h2>Out: <br>  ${secDevice}</h2>`);

//     var thirdDevice = acc.pop();
//     document.write(`<h2>Out: <br>  ${thirdDevice}</h2>`);

//     var fourthDevice = acc.pop();
//     document.write(`<h2>Out: <br>  ${fourthDevice}</h2>`);

// // answer 14

//     var mobiles = ["Apple","Samsung", "Motorola", "Nokia","Sony", "Haier"];

//     document.write(`
//         <div class="dropDown">
//         <select>
//             <option>${mobiles[0]}</option>
//             <option>${mobiles[1]}</option>
//             <option>${mobiles[2]}</option>
//             <option>${mobiles[3]}</option>
//             <option>${mobiles[4]}</option>
//             <option>${mobiles[5]}</option>
//         </select>
//         </div>
        
//         <style>
//             @font-face {
//                 font-family:p-M ;
//                 src: url(assests/fonts/Poppins-Medium.ttf);
//             }
           
//             @font-face {
//                 font-family: p-l ;
//                 src: url(assests/fonts/Poppins-Light.ttf);
//               }
              
//             .dropDown{
//                 width:60%;
//                 margin:20px auto;
//                 text-align:center;
//             }
//             select {
//                 border: none;
//                 width: 40%;
//                 padding: 10px;
//                 font-size: 18px;
//                 box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
//                 font-family: p-l ;
//             }
//         </style>
//     `)
