var input = prompt("what would you like to eat in fast food?")
var array = ["egg burger","chicken burger","beef burger","prawn burger","burger","fish burger"]
var array2 = ["pepsi","7up","sprite","dew","sting","coke"]
var save = array.indexOf(input)

if (input === "") {
    alert("plzz order the fast food")
} else {
    if (save !== -1) {
        document.write(array[save] + " is avalable and soft drinks this " + array2 + " avalable")
    }else{
        document.write(input + " fast food is not avalabe " + "fast food is this " + array + " avalable")
    }
}
