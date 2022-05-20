// // chapter 6 , 9
// // answer 1
// var num = 10
// document.write("<b>Result :</b><br>")
// document.write("The value of a is " + num + "<br><br>")
// document.write("........................... <br><br>")
// var num_add = ++num
// document.write("The value of ++a is :" + num_add + "<br>")
// document.write("Now the value of a is :" + num_add + "<br><br>")
// var num_add2 = num_add++
// document.write("The value of a++ is :" + num_add2 + "<br>")
// document.write("Now the value of a is :" + num_add + "<br><br>")
// var num_add3 = --num_add
// document.write("The value of --a is :" + num_add + "<br>")
// document.write("Now the value of a is :" + num_add3 + "<br><br>")
// var num_add4 = num_add3--
// document.write("The value of a-- is :" + num_add4 + "<br>")
// document.write("Now the value of a is :" + num_add3 + "<br>")

// answer 2



// // answer 3
// var input = prompt("Enter your name ")
// alert("welcome to "+ input + " this website")

// // answer 4
// var table_input = prompt("Enter your number")
// var table_result = table_input * 1 +"<br>"+ table_input * 2 + "<br>" + table_input * 3 +"<br>"+ table_input * 4 + "<br>" + table_input * 5 +"<br>"+ table_input * 6 + "<br>" + table_input * 7 +"<br>"+ table_input * 8 + "<br>" + table_input * 9 +"<br>"+ table_input * 10 
// document.write(table_result)

// answer 5
document.write("subject " + " Total " + " obt " + " persent<br>")
var english_total_marks = 100
var urdu_total_marks = 100
var math_total_marks = 100
var english_obtain_marks = 54
var urdu_obtain_marks = 54
var math_obtain_marks = 45
var english_persentage_marks = 54
var urdu_persentage_marks = 54
var math_persentage_marks = 45
document.write("English : " + english_total_marks + " "+ english_obtain_marks + " " + english_persentage_marks +"%" +"<br>" + "Urdu__ : " + urdu_total_marks + " "+ urdu_obtain_marks +" "+ urdu_persentage_marks +"%"+ "<br>" + "Math__ : " + math_total_marks + " " + math_obtain_marks +" "+ math_persentage_marks +"%"+ "<br>")
var Total_marks_result = english_total_marks + urdu_total_marks + math_total_marks
var total_obtain_marks = english_obtain_marks + urdu_obtain_marks + math_obtain_marks
var total_presentage_marks = Total_marks_result % total_obtain_marks
document.write("Total__ : " + Total_marks_result +" " + total_obtain_marks + " " + total_presentage_marks + "%")