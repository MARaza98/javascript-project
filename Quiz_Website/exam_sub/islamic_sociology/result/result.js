document.getElementById("islamic_sociology").innerHTML = JSON.parse(localStorage.getItem("score"))[0] + " out of 10";

function logOut() {
    localStorage.setItem("count", "0");
    window.location.href = `../../../index.html`;
}
