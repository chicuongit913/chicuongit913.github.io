//alert
alert("Hello, world!");

//Alert message when click btn bigger decoration button
function alertMessage() {
    alert("Bigger Decorations!");
}

function onConvert2PigLatin() {
    let textArea = document.getElementById("desc-decoration");
    textArea.value = convertTextToPigLatin(textArea.value);
}

function convertTextToPigLatin(text) {
    text = text.trim();
    var result = text.toLowerCase();
    var index = text.search(/[ueoai]/);
    switch (index) {
        case 0: result = result + "way"; break;
        case -1: result = result + "ay"; break;
        default:
            result = text.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1ay");
            break;
    }
    return result;
}

function onMalkovichBtnClicked() {
    let textArea = document.getElementById("desc-decoration");
    textArea.value = textArea.value.replace(/\w{5,}/g, "Malkovich");
}

function biggerFontDescDecoration() {
    let descDecoration = document.getElementById("desc-decoration");
    let currentFontSize = window.getComputedStyle(descDecoration).fontSize;
    let currentUnit = currentFontSize.substr(-2);

    let fontSize = parseInt(currentFontSize) + 2;
    descDecoration.style.fontSize = fontSize + currentUnit;


}

function blingChange() {
    let descDecoration = document.getElementById("desc-decoration");
    let mainContain = document.getElementById("main-contain");
    if(this.checked) {
        descDecoration.classList.add("nice-text");
        mainContain.style.background = "url('../assets/images/lab5/hundred-dollar-bill.jpg')";
    } else {
        descDecoration.classList.remove("nice-text");
    }
}


window.onload = function () {
    "use strict";
    let btnBiggerDecoration = document.getElementById("btn-bigger");
    var stopBigger;
    var btnStopBigger = document.getElementById("btn-stop-bigger");

    btnBiggerDecoration.onclick = function () {
        btnStopBigger.classList.remove("d-none");
        btnBiggerDecoration.classList.add("d-none");
        stopBigger = setInterval(biggerFontDescDecoration, 500);
    };

    btnStopBigger.onclick = function () {
        clearInterval(stopBigger);
        btnStopBigger.classList.add("d-none");
        btnBiggerDecoration.classList.remove("d-none");
    };

    let blingCheck = document.getElementById("bling-check");
    blingCheck.onchange = blingChange;
};