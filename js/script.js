// Memanggil prompt untuk menanyakan nama user
let name = prompt("Halo, siapakah nama anda?","");
document.getElementById("user-greeting").innerHTML=name;


// Banner image previous & next
var slideIndex=1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex +=n);
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("banner-image");
    if (n > imgList.length) slideIndex=1; 
    else if (n<1) slideIndex = imgList.length;

    for(i=0; i < imgList.length; i++){
        imgList[i].style.display = "none";
    }
    imgList[slideIndex - 1].style.display = 'block';
}

// Banner image, gerak sendiri setelah 3 detik
setInterval(()=> {
    plusDivs(1);
},3000);

// Validasi Form
function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name==""||birthDate==""||gender==""||messages=="") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);
    return false;
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

