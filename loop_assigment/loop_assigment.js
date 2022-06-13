// chapter 17 - 20
// // answer 1

// var array = [[]]

// // answer 2

// var array1 = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]

// // answer 3

// var i ;
// for (let i = 1; i <= 10 ; i++) {
//     document.write(i,"<br>")
// }

// // answer 4

// var input = +prompt("Enter a number to show its multiplication table")
// var input_2 = +prompt("Enter length multiplication table")

// for (let index = 1; index <= input_2; index++) {
//     document.write(input +"x" + index + "=" + input*index + "<br />")
// }

// // answer 5

// var fruits = ["apple","banana","mango","orange","strawberry"]

// for (let index = 0; index < fruits.length; index++) {
    
//     document.write("Element at index" +" "+ index +" "+ "is" + " "+ fruits[index] + "<br />")
    
// }

// // answer 6 a

// for (let index = 1; index <= 15; index++) {
 
//     document.write(index + " " + "," + " ")
// }

// // answer 6 b

// for (let index = 10; index >= 1; index--) {
    
//     document.write(index + " " + "," + " ")

// }

// // answer 6 c

// for (let index = -1; index < 20; index++) {
//     index++
//     document.write(index + " " + "," + " ")
// }

// // answer 6 d

// for (let index = 0; index < 20; index++) {
//     index++
//     document.write(index + " " + "," + " ")
// }

// // answer 6 e

// for (let index = 1; index < 20; index++) {
//     index++
//     document.write(index +"k" + " " + "," + " ")
// }

// // answer 7

// var bakeries = ["cake","apple pie","cookie","chips","patties"]

// var input = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?");

// var match = "nahi";

// for(var i = 0; i < bakeries.length; i++){
//     if(bakeries[i] === input){
//         match = "han"
//         alert(bakeries[i]+" is available at index "+ i + " in our bakery" );
//         break
//     }
// }

// if(match === "nahi"){
//     alert("We are sorry. " + input + " is not available in our bakery")
// }

// // answer 8

// var array = [24, 53, 78, 91, 12];
// document.write(array + "<br /> <br />")
// var largest= 0;

// for (i = 0; i <= largest; i++){
//     if (array[i] > largest) {
//         var largest = array[i];
//     }
// }

// document.write("The largest number is " + largest);

// // answer 9

// var Array_3 = [24, 53, 78, 91, 12];

//       document.write(Array_3 + "<br /> <br />")

// 		var smallest = Array_3[0];

// 		for(var i = 1; i < Array_3.length; i++){
// 			if(Array_3[i] < smallest){
// 				smallest = Array_3[i];   
// 			}
// 		}

// 		document.write("The smallest number is "+smallest);

// // answer 10

// for (let index = 5; index <= 100; index+=5) {
    
//     document.write(index + " ")
// }

