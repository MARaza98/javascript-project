
var mobileDetails = {
    samsung: {
        galaxy_S20: {
            imgUrl: "images/galaxy_S20.gif",
            name: "Galaxy s20",
            brand: "samsung",
            price: 65000,
            camera: "12px",
        },
        galaxy_S10: {
            imgUrl: "images/GalaxyS10.gif",
            name: "Galaxy s10",
            brand: "samsung",
            price: 50000,
            camera: "12px",
        },
        galaxy_A21: {
            imgUrl: "images/Samsung-Galaxy-A21.gif",
            name: "Galaxy s20",
            brand: "samsung",
            price: 65000,
            camera: "12px",
        }
    },
    apple: {
        iphone_7: {
            imgUrl: "images/i_phone_7.gif",
            name: "Iphone 7",
            brand: "apple",
            price: 80000,
            camera: "12px",
        },
        iphone_9: {
            imgUrl: "images/i_phone_9.gif",
            name: "Iphone 9",
            brand: "apple",
            price: 90000,
            camera: "12px",
        },
        iphone_11: {
            imgUrl: "images/i_phone_11.gif",
            name: "Iphone 11",
            brand: "apple",
            price: 90000,
            camera: "12px",
        },
        iphone_11_pro_Max: {
            imgUrl: "images/iphone_11_Pro.gif",
            name: "Iphone 11 pro max",
            brand: "apple",
            price: 95000,
            camera: "12px",
        },
        iphone_12: {
            imgUrl: "images/i_phone_12.gif",
            name: "Iphone 12",
            brand: "apple",
            price: 120000,
            camera: "12px",
        },
    },
    infinix: {
        infinix_Zero_8i: {
            imgUrl: "images/infinix_Zero_8i.jpg",
            name: "Infinix zero 8i",
            brand: "infinix",
            price: 45000,
            camera: "12px",
        },
        infinix_Hot_S4: {
            imgUrl: "images/Hot_S4_TP.gif",
            name: "Infinix hot s4",
            brand: "infinix",
            price: 58000,
            camera: "12px",
        }
    },
}

var image = document.createElement("img")
var div = document.getElementById("child_box")

for (key in mobileDetails) {
    for (key2 in mobileDetails[key]) {

        div.innerHTML += `

        <div class="mobile_model">
        <img src="${mobileDetails[key][key2].imgUrl}" id="img" alt="">
        <p class="model_title">${mobileDetails[key][key2].name}</p>
        <p>Brand : ${mobileDetails[key][key2].brand}</p>
        <p>Price : ${mobileDetails[key][key2].price}</p>
        <p>Camera : ${mobileDetails[key][key2].camera}</p>
        
        </div>
        `

    }
}


// var storeMemory = document.getElementsByClassName("mobile_model")


// if () {
//     document.write(storeMemory)
// }else{
//     document.write("sorry not found")
// }

function play() {
    var searchBoxValue = document.getElementById("filter_box").value.toLowerCase()
    var filteredObjects = []
    var mobileDetailsKeys = Object.keys(mobileDetails)
    for (let i = 0; i < mobileDetailsKeys.length; i++) {
        let innerObjectKeys = Object.keys(mobileDetails[mobileDetailsKeys[i]])
        for (let j = 0; j < innerObjectKeys.length; j++) {
            let phone = mobileDetails[mobileDetailsKeys[i]][innerObjectKeys[j]]
            if (phone.name.toLowerCase().includes(searchBoxValue)
                || phone.brand.toLowerCase().includes(searchBoxValue)) {
                filteredObjects.push(phone)
            }
        }
    }

    div.innerHTML = ""
    for (let i = 0; i < filteredObjects.length; i++) {
        var obj = filteredObjects[i]
        div.innerHTML += `

        <div class="mobile_model">
        <img src="${obj.imgUrl}" id="img" alt="">
        <p class="model_title">${obj.name}</p>
        <p>Brand : ${obj.brand}</p>
        <p>Price : ${obj.price}</p>
        <p>Camera : ${obj.camera}</p>
        
        </div>
        `
    }

}














