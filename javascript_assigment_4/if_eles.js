var exper = prompt("Enter your experince separated by space \n <h2>Note : Html , css , javascript (2 chezan lazmi hon)</h2>")
var age = prompt("Enter your age \n Note : (18 above and 30 under)")
var city = prompt("Enter your city \n Note : (Karachi lazmi)")
var input = exper.split(" ")
var str = parseInt(age)
if ((input.includes("html") || input.includes("css")) && input.includes("javascript")) {
    if (str > 18 || str === 30) {
        if (city === "karachi") {
            alert("your are qualified this job ") 

        } else {
            alert("sorry other cityz are not allowed")
        }
    } else {
        if (city === "karachi") {

        } else {
            alert("sorry other cityz are not allowed")
        }
        alert("you are not under age")
    }
} else {
    alert("please pick atleast two things.(javascript is compulsory)")
}
// html,css,javascript
