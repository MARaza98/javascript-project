function logOut() {
    localStorage.setItem("count", "0")
    window.location.href = `../index.html`
}

var name = localStorage.getItem("fname")
var name1 = localStorage.getItem("lname")

document.getElementsByClassName("heading")[0].innerHTML = `Welcome, ${name} ${name1}.`

function joinQuiz(link, sub, name) {
    localStorage.setItem("course", link)
    localStorage.setItem("subject", sub)
    localStorage.setItem("coursename", name)
    window.location.href = `${link}/${link}.html`
}

