function logOut() {
    localStorage.setItem("count", "0")
    window.location.href = `../index.html`
}
var getData = localStorage.getItem('data')
// console.log(getData)
// if(getData){
//     array = JSON.parse(getData);
// }
// var save = localStorage.getItem("arr")

// for (key of save) {
//     document.getElementById("tableData").children[0].innerHTML +=
//     `
//     <tr>
//     <td>${save[key].firstname}</td>
//     <td>${save[key].lastname}</td>
//     <td>${save[key].email}</td>
//     <td>${save[key].password}</td>
//     <td><center><button onclick="del()" id="deletebtn">Delete</button></center></td>
//     </tr>
//     `
// }

