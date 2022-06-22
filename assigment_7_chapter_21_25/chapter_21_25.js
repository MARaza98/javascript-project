// // answer 1

// var firstname = prompt("Enter your first name ")
// var lastname = prompt("Enter your last name ")
// var fullname = firstname + lastname
// alert(fullname + " Welcome to this website")

// // answer 2

// var input = prompt("Enter your favorite mobile phone ")
// var length = input.length
// document.write("Your favorite phone is : " + input + "<br/>" + "Length " + length)

// // answer 3

// var city = prompt("Enter your favorite city ")
// var find = prompt("Enter your find character")
// var index = city.indexOf(find)
// document.write("This is your favorite city " + city + "<br/>" + "Your find character is " + find + " and your find character index is "+ index)

// // answer 4

// var city = prompt("Enter your favorite actor ")
// var find = prompt("Enter your find character")
// var index = city.lastIndexOf(find)
// document.write("This is your favorite actor " + city + "<br/>" + "Your find character is " + find + " and your find character index is "+ index)


// // answer 5

// var city = prompt("Enter your favorite city ")
// var find = prompt("Enter your find character")
// var index = city.indexOf(find)
// document.write("This is your favorite city " + city + "<br/>" + "Your find character is " + index + " and your find character index is "+ find)

// // answer 6

// var firstname = prompt("Enter your first name ")
// var lastname = prompt("Enter your last name ")
// var fullname = firstname.concat(lastname)
// alert("Welcome back " + fullname)

// // answer 7

// var before = prompt("Enter your city ")
// var after = prompt("Enter replacement city")
// var result = before.replace(before,after)
// document.write("Before replacement city name : " + before + "<br>" + "After replacement city name : " + result)

// // answer 8

// var message = "Ali and Sami are best friends. They play cricket and football together."
// var message1 = message.replace(/and/g,"&")
// document.write("Before replacement &<br>" + message + "<br> <br> After replacement & <br>" + message1)

// // answer 9

// var string = prompt("Enter the number value")
// var convat_number = +string
// document.write("Type string :" + string + "<br> <br> Type number :" + convat_number)

// // answer  10

// var input = prompt("Enter your name or everthing else without number ")
// var upper_case = input.toUpperCase()
// alert("Good morning  \n" + upper_case)

// // answer 11

// var input = prompt("Enter your any 10 word with space")
// var newStr = input.split(' ')
//    .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
//    .join(' ');
// document.write(newStr);

// // answer 12

// var number = prompt("Enter your number in dot value")
// var result = number.replace(".","")
// alert(result)

// // answer 13

// var username = prompt("Enter your name without any special symbol ")
// var split = []
// var array = []
// for (let i = 0; i < username.length; i++) {
//         split[i]= username.split(" ")
//         array[i]= username.charAt(i)
//     if (array[i] === "@" || array[i] === "." || array[i] === "," || array[i] === "!") {
    
//         alert("please enter a valid username")
//         break;
        
//     }
// }

    // // answer 14

    // var Items = ["cake", "apple pie", "cookie", "chips", "patties"]
    // var Input = prompt("Enter a snacks").toLowerCase()
    // if (Items.indexOf(Input) !== -1) {

    //     alert(Input + " is available at index " + Items.indexOf(Input))
    // }
    // else {

    //     alert("We are sorry.  " + Input + " is not available in our bakery")

    // }

// answer 15





// // answer 16

// var university = "University of Karachi"
// var values = university.split('')

// for(i = 0; i < values.length; i++){

//     document.write(values[[i]] + "<br>")

// }


// // answer 17

// var character = prompt("Enter your city and see the last character on the disply of browser")
//     var LastChar = (character.length)-1
//     document.write("Your input : " + character + "<br />" + "Your input last character : " + character[LastChar])

// // answer 18

// var n = "The quick brown fox jumps over the lazy dog."
// var lowest = n.toLowerCase()
// var splitedvalue = lowest.split(" ")
// var coutString = 'the'

// var  count = 0
// for (var i = 0; i < splitedvalue.length; i++)
// {
//     if (coutString == (splitedvalue[i]))
//     count++
// }

// document.write("Text : " + n + "<br>")
// document.write("There are " + count + "occurrence(s) of the word 'the' ")



// var n = "The quick brown fox jumps over the lazy dog.".toLowerCase()

// document.write(n + "<br />"+ n.split("the").join(" "))