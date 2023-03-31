function admin_panel() {
    var email_type = document.getElementById("email_input2").value
    var adminPenelPassword = "admin0123@H"
    var adminPenelEmail = "admin123@gmail.com"
    var password_type = document.getElementById("password_input3").value

    if (adminPenelEmail === email_type && adminPenelPassword === password_type) {
        window.location.href = `submit-form-data/form-data.html`
    } else {
        for (i = 1; i < 3; i++) {
            var inp_val = document.getElementsByClassName(`id${i}`)[0];
            if (inp_val.value === "") {
                inp_val.nextElementSibling.classList.remove("hidden")
            }
        }
        setTimeout(function () {
            for (i = 1; i < 3; i++) {
                var inp_val = document.getElementsByClassName(`id${i}`)[0];
                inp_val.nextElementSibling.classList.add("hidden")
            }
        }, 3000)
        if (adminPenelEmail !== email_type) {
            document.getElementsByClassName("email_info_admin_penel")[0].children[2].classList.remove("hidden")
            setTimeout(function () {
                document.getElementsByClassName("email_info_admin_penel")[0].children[2].classList.add("hidden")
            }, 2000)
        }
        else if (adminPenelPassword !== password_type) {
            document.getElementsByClassName("Password_info_admin_penel")[0].children[2].classList.remove("hidden")
            setTimeout(function () {
                document.getElementsByClassName("Password_info_admin_penel")[0].children[2].classList.add("hidden")
            }, 2000)
        }

    }

}

//  Show password and hide password function in Admin penel


function showPasswordAdminPenel() {
    var pass_type = document.getElementById("password_input3").type
    if (pass_type === "password") {
        document.getElementById("password_input3").type = "text"
    } else {
        document.getElementById("password_input3").type = "password"
    }
}

//  Show password and hide password function in Sign Up

function showPass() {
    var pass_type = document.getElementById("password_input").type
    if (pass_type === "password") {
        document.getElementById("password_input").type = "text"
    } else {
        document.getElementById("password_input").type = "password"
    }
}

// Show Password and hide Password Function in Log In

function showPassword() {
    var pass_type = document.getElementById("password_input2").type
    if (pass_type === "password") {
        document.getElementById("password_input2").type = "text"
    } else {
        document.getElementById("password_input2").type = "password"
    }
}

// Required Method Function in Login Panel

var email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var pass_regex = /^(?=.*\d{1})(?=.*[a-z]{1})(?=.*[A-Z]{1})(?=.*[!@#$%^&*{|}?~_=+.-]{1})(?=.*[^a-zA-Z0-9])(?!.*\s).{6,20}$/;

function LogIn_panel() {
    event.preventDefault();
    var email = document.getElementById("email_input1").value;
    var password = document.getElementById("password_input2").value;
    for (i = 1; i < 3; i++) {
        var inp_val = document.getElementsByClassName(`id${i}`)[0];
        if (inp_val.value === "") {
            inp_val.nextElementSibling.classList.remove("hidden")
        }
    }
    setTimeout(function () {
        for (i = 1; i < 3; i++) {
            var inp_val = document.getElementsByClassName(`id${i}`)[0];
            inp_val.nextElementSibling.classList.add("hidden")
        }
    }, 3000)
    if (!email_regex.test(email)) {
        document.getElementsByClassName("email_info_log_in")[0].children[2].classList.remove("hidden")
        setTimeout(function () {
            document.getElementsByClassName("email_info_log_in")[0].children[2].classList.add("hidden")
        }, 2000)
    }
    else if (!pass_regex.test(password)) {
        document.getElementsByClassName("Password_info_log_in")[0].children[2].classList.remove("hidden")
        setTimeout(function () {
            document.getElementsByClassName("Password_info_log_in")[0].children[2].classList.add("hidden")
        }, 2000)
    }
    else {
        var flag = 0;
        var emailVerify = localStorage.getItem("email")
        var passwordVerify = localStorage.getItem("password")
        if (emailVerify === email) {
            flag = flag + 1;
        }
        else {
            document.getElementsByClassName("email_info_log_in")[0].children[3].classList.remove("hidden")
            setTimeout(function () {
                document.getElementsByClassName("email_info_log_in")[0].children[3].classList.add("hidden")
            }, 3000)
            flag = flag - 1;
        }
        if (passwordVerify === password) {
            flag = flag + 1;
        }
        else {
            document.getElementsByClassName("Password_info_log_in")[0].children[3].classList.remove("hidden")
            setTimeout(function () {
                document.getElementsByClassName("Password_info_log_in")[0].children[3].classList.add("hidden")
            }, 3000)
            flag = flag--;
        }
        if (flag === 2) {
            localStorage.setItem("window", "true");
            localStorage.setItem("count", "1");
            window.location.href = `exam_sub/exam_sub.html`
        }
    }
}

// Sign Up Registration 

var array = []
function Registration() {
    event.preventDefault();
    var fName = document.getElementById("fname_input").value;
    var lName = document.getElementById("lname_input").value;
    var email = document.getElementById("email_input").value;
    var password = document.getElementById("password_input").value;
    for (i = 1; i < 5; i++) {
        var inp_val = document.getElementsByClassName(`id${i}`)[0];
        if (inp_val.value === "") {
            inp_val.nextElementSibling.classList.remove("hidden")
        }
    }
    setTimeout(function () {
        for (i = 1; i < 5; i++) {
            var inp_val = document.getElementsByClassName(`id${i}`)[0];
            inp_val.nextElementSibling.classList.add("hidden")
        }
    }, 3000)
    if (!email_regex.test(email)) {
        document.getElementsByClassName("email_info")[0].children[2].classList.remove("hidden")
        setTimeout(function () {
            document.getElementsByClassName("email_info")[0].children[2].classList.add("hidden")
        }, 3000)
    }
    else if (!pass_regex.test(password)) {
        document.getElementsByClassName("password_info")[0].children[2].classList.remove("hidden")
        setTimeout(function () {
            document.getElementsByClassName("password_info")[0].children[2].classList.add("hidden")
        }, 3000)
    }
    else {
        // array.push({"fname": fName,"Lname": lName})
        // localStorage.setItem("data",JSON.stringify(array))
        // // localStorage.setItem("arr",[{fName,lName,email,password}])
        // // localStorage.setItem("fname", fName)
        // // localStorage.setItem("lname", lName)
        // // localStorage.setItem("email", email)
        // // localStorage.setItem("password", password)
        // // // array.push(Obj) 
        // // localStorage.setItem("score", JSON.stringify([0]))
        // window.location.href = `exam_sub/exam_sub.html`
    }
    // obj[fName.toLowerCase()] = {
    //     fname: fName,
    //     lname: lName,
    //     email: email,
    //     password: password,
    // }
    // // localStorage.setItem("data", JSON.stringify(obj))

    // localStorage.setItem("array", arr)
}




