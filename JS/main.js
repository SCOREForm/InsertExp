// function checkSpace(){
//     var val = document.getElementById('myText').value;
//     if(val.charAt(0)==" "){
//       alert("Name field Cannot be empty")
//     }
//   }

document.getElementById("UserName").addEventListener('keydown', function (e) {
    if (this.value.length === 0 && e.which === 32) e.preventDefault();
});


function handleComp() {
    if (this.value == '01') {
        document.getElementById('comp').disabled = true;
    } else {
        document.getElementById('comp').disabled = false;
    }
}

function handleExp() {
    if (this.value == '01') {
        document.getElementById('exp').disabled = true;
    } else {
        document.getElementById('exp').disabled = false;
    }
}

function handletechDev() {
    if (this.value == '01') {
        document.getElementById('tech-dev').disabled = true;
    } else {
        document.getElementById('tech-dev').disabled = false;
    }
}

function handletechtest() {
    if (this.value == '01') {
        document.getElementById('tech-tester').disabled = true;
    } else {
        document.getElementById('tech-tester').disabled = false;
    }
}

function enableSubmit() {
    if (this.value == '01') {
        document.getElementById('submitbutton').disabled = true;
    } else {
        document.getElementById('submitbutton').disabled = false;
    }
}

function showDev() {
    var element = document.getElementById("devTech");
    element.style.display = "inline";
}

function hideDev() {
    var element = document.getElementById("devTech");
    element.style.display = "none";
}

function showTest() {
    var element = document.getElementById("testerTech");
    element.style.display = "inline";
}

function hideTest() {
    var element = document.getElementById("testerTech");
    element.style.display = "none";
}

function showName() {
    var x = document.getElementById("UserName").value;
    document.getElementById("CandName").innerHTML = x;
}




function showAGrade() {
    var e = document.getElementById("edu");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    if (text == "Diploma") {
        document.getElementById("Grade").textContent = "D";;
    }
    if (text == "Graduate") {
        document.getElementById("Grade").textContent = "C";;
    }
    if (text == "Post Graduate") {
        document.getElementById("Grade").textContent = "B";;
    }
    if (text == "Masters") {
        document.getElementById("Grade").textContent = "A";;
    }
}


function showResult() {
    var element = document.getElementById("result");
    element.style.display = "inline-block";
}

function showReportbutton() {
    if (this.value == '01') {
        document.getElementById('reportsbutton').disabled = true;
    } else {
        document.getElementById('reportsbutton').disabled = false;
    }
}

function enableButton() {
    if (this.value == '01') {
        document.getElementById('button').disabled = true;
    } else {
        document.getElementById('button').disabled = false;
    }
}

function handleRadioHall() {
    if (this.value == '01') {
        document.getElementById('Hall').disabled = true;
    } else {
        document.getElementById('Hall').disabled = false;
    }
}

function handleRadioBaker() {
    if (this.value == '01') {
        document.getElementById('Baker').disabled = true;
    } else {
        document.getElementById('Baker').disabled = false;
    }
}

function handleRadioWeather() {
    if (this.value == '01') {
        document.getElementById('WeatherF').disabled = true;
    } else {
        document.getElementById('WeatherF').disabled = false;
    }
}

function handleRadioOther() {
    if (this.value == '01') {
        document.getElementById('Other').disabled = true;
    } else {
        document.getElementById('Other').disabled = false;
    }
}

function handleCompentency() {
    if (this.value == '01') {
        document.getElementById('com1').disabled = true;
    } else {
        document.getElementById('com1').disabled = false;
    }
    if (this.value == '01') {
        document.getElementById('com2').disabled = true;
    } else {
        document.getElementById('com2').disabled = false;
    }
    if (this.value == '01') {
        document.getElementById('com3').disabled = true;
    } else {
        document.getElementById('com3').disabled = false;
    }
    if (this.value == '01') {
        document.getElementById('com4').disabled = true;
    } else {
        document.getElementById('com4').disabled = false;
    } if (this.value == '01') {
        document.getElementById('com5').disabled = true;
    } else {
        document.getElementById('com5').disabled = false;
    }
    if (this.value == '01') {
        document.getElementById('com6').disabled = true;
    } else {
        document.getElementById('com6').disabled = false;
    }
    if (this.value == '01') {
        document.getElementById('com7').disabled = true;
    } else {
        document.getElementById('com7').disabled = false;
    }
    if (this.value == '01') {
        document.getElementById('com8').disabled = true;
    } else {
        document.getElementById('com8').disabled = false;
    }
    if (this.value == '01') {
        document.getElementById('com9').disabled = true;
    } else {
        document.getElementById('com9').disabled = false;
    }
    if (this.value == '01') {
        document.getElementById('com10').disabled = true;
    } else {
        document.getElementById('com10').disabled = false;
    }

    if (this.value == '01') {
        document.getElementById('com11').disabled = true;
    } else {
        document.getElementById('com11').disabled = false;
    }

    if (this.value == '01') {
        document.getElementById('com12').disabled = true;
    } else {
        document.getElementById('com12').disabled = false;
    }
    if (this.value == '01') {
        document.getElementById('com13').disabled = true;
    } else {
        document.getElementById('com13').disabled = false;
    }
    if (this.value == '01') {
        document.getElementById('com14').disabled = true;
    } else {
        document.getElementById('com14').disabled = false;
    }
    if (this.value == '01') {
        document.getElementById('com15').disabled = true;
    } else {
        document.getElementById('com15').disabled = false;
    }

    if (this.value == '01') {
        document.getElementById('com16').disabled = true;
    } else {
        document.getElementById('com16').disabled = false;
    }

    if (this.value == '01') {
        document.getElementById('com17').disabled = true;
    } else {
        document.getElementById('com17').disabled = false;
    }
    // For WL Services

    if (this.value == '01') {
        document.getElementById('wl1').disabled = true;
    } else {
        document.getElementById('wl1').disabled = false;
    }
    if (this.value == '01') {
        document.getElementById('wl2').disabled = true;
    } else {
        document.getElementById('wl2').disabled = false;
    }
    if (this.value == '01') {
        document.getElementById('wl3').disabled = true;
    } else {
        document.getElementById('wl3').disabled = false;
    }
    // if (this.value == '01') {
    //     document.getElementById('wl4').disabled = true;
    // } else {
    //     document.getElementById('wl4').disabled = false;
    // }

    //For core services
    if (this.value == '01') {
        document.getElementById('core1').disabled = true;
    } else {
        document.getElementById('core1').disabled = false;
    }
    if (this.value == '01') {
        document.getElementById('core2').disabled = true;
    } else {
        document.getElementById('core2').disabled = false;
    }
    if (this.value == '01') {
        document.getElementById('core3').disabled = true;
    } else {
        document.getElementById('core3').disabled = false;
    }
    if (this.value == '01') {
        document.getElementById('core4').disabled = true;
    } else {
        document.getElementById('core4').disabled = false;
    }
}

function handleCom1(com1) {
    var comInt1 = document.getElementById("comInt1");
    comInt1.disabled = com1.checked ? false : true;
    if (!comInt1.disabled) {
        comInt1.focus();
    }
    var comAdv1 = document.getElementById("comAdv1");
    comAdv1.disabled = com1.checked ? false : true;
    if (!comAdv1.disabled) {
        comAdv1.focus();
    }
    var comExp1 = document.getElementById("comExp1");
    comExp1.disabled = com1.checked ? false : true;
    if (!comExp1.disabled) {
        comExp1.focus();
    }
}

function handleCom2(com2) {
    var comInt2 = document.getElementById("comInt2");
    comInt2.disabled = com2.checked ? false : true;
    if (!comInt2.disabled) {
        comInt2.focus();
    }
    var comAdv2 = document.getElementById("comAdv2");
    comAdv2.disabled = com2.checked ? false : true;
    if (!comAdv2.disabled) {
        comAdv2.focus();
    }
    var comExp2 = document.getElementById("comExp2");
    comExp2.disabled = com2.checked ? false : true;
    if (!comExp2.disabled) {
        comExp2.focus();
    }
}

function handleCom3(com3) {
    var comInt3 = document.getElementById("comInt3");
    comInt3.disabled = com3.checked ? false : true;
    if (!comInt3.disabled) {
        comInt3.focus();
    }
    var comAdv3 = document.getElementById("comAdv3");
    comAdv3.disabled = com3.checked ? false : true;
    if (!comAdv3.disabled) {
        comAdv3.focus();
    }
    var comExp3 = document.getElementById("comExp3");
    comExp3.disabled = com3.checked ? false : true;
    if (!comExp3.disabled) {
        comExp3.focus();
    }
}

function handleCom4(com4) {
    var comInt4 = document.getElementById("comInt4");
    comInt4.disabled = com4.checked ? false : true;
    if (!comInt4.disabled) {
        comInt4.focus();
    }
    var comAdv4 = document.getElementById("comAdv4");
    comAdv4.disabled = com4.checked ? false : true;
    if (!comAdv4.disabled) {
        comAdv4.focus();
    }
    var comExp4 = document.getElementById("comExp4");
    comExp4.disabled = com4.checked ? false : true;
    if (!comExp4.disabled) {
        comExp4.focus();
    }
}
function handleCom5(com5) {
    var comInt5 = document.getElementById("comInt5");
    comInt5.disabled = com5.checked ? false : true;
    if (!comInt5.disabled) {
        comInt5.focus();
    }
    var comAdv5 = document.getElementById("comAdv5");
    comAdv5.disabled = com5.checked ? false : true;
    if (!comAdv5.disabled) {
        comAdv5.focus();
    }
    var comExp5 = document.getElementById("comExp5");
    comExp5.disabled = com5.checked ? false : true;
    if (!comExp5.disabled) {
        comExp5.focus();
    }
}

function handleCom6(com6) {
    var comInt6 = document.getElementById("comInt6");
    comInt6.disabled = com6.checked ? false : true;
    if (!comInt6.disabled) {
        comInt6.focus();
    }
    var comAdv6 = document.getElementById("comAdv6");
    comAdv6.disabled = com6.checked ? false : true;
    if (!comAdv6.disabled) {
        comAdv6.focus();
    }
    var comExp6 = document.getElementById("comExp6");
    comExp6.disabled = com6.checked ? false : true;
    if (!comExp6.disabled) {
        comExp6.focus();
    }
}

function handleCom7(com7) {
    var comInt7 = document.getElementById("comInt7");
    comInt7.disabled = com7.checked ? false : true;
    if (!comInt7.disabled) {
        comInt7.focus();
    }
    var comAdv7 = document.getElementById("comAdv7");
    comAdv7.disabled = com7.checked ? false : true;
    if (!comAdv7.disabled) {
        comAdv7.focus();
    }
    var comExp7 = document.getElementById("comExp7");
    comExp7.disabled = com7.checked ? false : true;
    if (!comExp7.disabled) {
        comExp7.focus();
    }
}

function handleCom8(com8) {
    var comInt8 = document.getElementById("comInt8");
    comInt8.disabled = com8.checked ? false : true;
    if (!comInt8.disabled) {
        comInt8.focus();
    }
    var comAdv8 = document.getElementById("comAdv8");
    comAdv8.disabled = com8.checked ? false : true;
    if (!comAdv8.disabled) {
        comAdv8.focus();
    }
    var comExp8 = document.getElementById("comExp8");
    comExp8.disabled = com8.checked ? false : true;
    if (!comExp8.disabled) {
        comExp8.focus();
    }
}

function handleCom9(com9) {
    var comInt9 = document.getElementById("comInt9");
    comInt9.disabled = com9.checked ? false : true;
    if (!comInt9.disabled) {
        comInt9.focus();
    }
    var comAdv9 = document.getElementById("comAdv9");
    comAdv9.disabled = com9.checked ? false : true;
    if (!comAdv9.disabled) {
        comAdv9.focus();
    }
    var comExp9 = document.getElementById("comExp9");
    comExp9.disabled = com9.checked ? false : true;
    if (!comExp9.disabled) {
        comExp9.focus();
    }
}

function handleCom10(com10) {
    var comInt10 = document.getElementById("comInt10");
    comInt10.disabled = com10.checked ? false : true;
    if (!comInt10.disabled) {
        comInt10.focus();
    }
    var comAdv10 = document.getElementById("comAdv10");
    comAdv10.disabled = com10.checked ? false : true;
    if (!comAdv10.disabled) {
        comAdv10.focus();
    }
    var comExp10 = document.getElementById("comExp10");
    comExp10.disabled = com10.checked ? false : true;
    if (!comExp10.disabled) {
        comExp10.focus();
    }
}

function handleCom11(com11) {
    var comInt11 = document.getElementById("comInt11");
    comInt11.disabled = com11.checked ? false : true;
    if (!comInt11.disabled) {
        comInt11.focus();
    }
    var comAdv11 = document.getElementById("comAdv11");
    comAdv11.disabled = com11.checked ? false : true;
    if (!comAdv11.disabled) {
        comAdv11.focus();
    }
    var comExp11 = document.getElementById("comExp11");
    comExp11.disabled = com11.checked ? false : true;
    if (!comExp11.disabled) {
        comExp11.focus();
    }
}

function handleCom12(com12) {
    var comInt12 = document.getElementById("comInt12");
    comInt12.disabled = com12.checked ? false : true;
    if (!comInt12.disabled) {
        comInt12.focus();
    }
    var comAdv12 = document.getElementById("comAdv12");
    comAdv12.disabled = com12.checked ? false : true;
    if (!comAdv12.disabled) {
        comAdv12.focus();
    }
    var comExp12 = document.getElementById("comExp12");
    comExp12.disabled = com12.checked ? false : true;
    if (!comExp12.disabled) {
        comExp12.focus();
    }
}

function handleCom13(com13) {
    var comInt13 = document.getElementById("comInt13");
    comInt13.disabled = com13.checked ? false : true;
    if (!comInt13.disabled) {
        comInt13.focus();
    }
    var comAdv13 = document.getElementById("comAdv13");
    comAdv13.disabled = com13.checked ? false : true;
    if (!comAdv13.disabled) {
        comAdv13.focus();
    }
    var comExp13 = document.getElementById("comExp13");
    comExp13.disabled = com13.checked ? false : true;
    if (!comExp13.disabled) {
        comExp13.focus();
    }
}

function handleCom14(com14) {
    var comInt14 = document.getElementById("comInt14");
    comInt14.disabled = com14.checked ? false : true;
    if (!comInt14.disabled) {
        comInt14.focus();
    }
    var comAdv14 = document.getElementById("comAdv14");
    comAdv14.disabled = com14.checked ? false : true;
    if (!comAdv14.disabled) {
        comAdv14.focus();
    }
    var comExp14 = document.getElementById("comExp14");
    comExp14.disabled = com14.checked ? false : true;
    if (!comExp14.disabled) {
        comExp14.focus();
    }
}

function handleCom15(com15) {
    var comInt15 = document.getElementById("comInt15");
    comInt15.disabled = com15.checked ? false : true;
    if (!comInt15.disabled) {
        comInt15.focus();
    }
    var comAdv15 = document.getElementById("comAdv15");
    comAdv15.disabled = com15.checked ? false : true;
    if (!comAdv15.disabled) {
        comAdv15.focus();
    }
    var comExp15 = document.getElementById("comExp15");
    comExp15.disabled = com15.checked ? false : true;
    if (!comExp15.disabled) {
        comExp15.focus();
    }
}

function handleCom16(com16) {
    var comInt16 = document.getElementById("comInt16");
    comInt16.disabled = com16.checked ? false : true;
    if (!comInt16.disabled) {
        comInt16.focus();
    }
    var comAdv16 = document.getElementById("comAdv16");
    comAdv16.disabled = com16.checked ? false : true;
    if (!comAdv16.disabled) {
        comAdv16.focus();
    }
    var comExp16 = document.getElementById("comExp16");
    comExp16.disabled = com16.checked ? false : true;
    if (!comExp16.disabled) {
        comExp16.focus();
    }
}

function handleCom17(com17) {
    var comInt17 = document.getElementById("comInt17");
    comInt17.disabled = com17.checked ? false : true;
    if (!comInt17.disabled) {
        comInt17.focus();
    }
    var comAdv17 = document.getElementById("comAdv17");
    comAdv17.disabled = com17.checked ? false : true;
    if (!comAdv17.disabled) {
        comAdv17.focus();
    }
    var comExp17 = document.getElementById("comExp17");
    comExp17.disabled = com17.checked ? false : true;
    if (!comExp17.disabled) {
        comExp17.focus();
    }
}

function handleWl1(wl1) {
    var wlInt1 = document.getElementById("wlInt1");
    wlInt1.disabled = wl1.checked ? false : true;
    if (!wlInt1.disabled) {
        wlInt1.focus();
    }
    var wlAdv1 = document.getElementById("wlAdv1");
    wlAdv1.disabled = wl1.checked ? false : true;
    if (!wlAdv1.disabled) {
        wlAdv1.focus();
    }
    var wlExp1 = document.getElementById("wlExp1");
    wlExp1.disabled = wl1.checked ? false : true;
    if (!wlExp1.disabled) {
        wlExp1.focus();
    }
}

function handleWl2(wl2) {
    var wlInt2 = document.getElementById("wlInt2");
    wlInt2.disabled = wl2.checked ? false : true;
    if (!wlInt2.disabled) {
        wlInt2.focus();
    }
    var wlAdv2 = document.getElementById("wlAdv2");
    wlAdv2.disabled = wl2.checked ? false : true;
    if (!wlAdv2.disabled) {
        wlAdv2.focus();
    }
    var wlExp2 = document.getElementById("wlExp2");
    wlExp2.disabled = wl2.checked ? false : true;
    if (!wlExp2.disabled) {
        wlExp2.focus();
    }
}

function handleWl3(wl3) {
    var wlInt3 = document.getElementById("wlInt3");
    wlInt3.disabled = wl3.checked ? false : true;
    if (!wlInt3.disabled) {
        wlInt3.focus();
    }
    var wlAdv3 = document.getElementById("wlAdv3");
    wlAdv3.disabled = wl3.checked ? false : true;
    if (!wlAdv3.disabled) {
        wlAdv3.focus();
    }
    var wlExp3 = document.getElementById("wlExp3");
    wlExp3.disabled = wl3.checked ? false : true;
    if (!wlExp3.disabled) {
        wlExp3.focus();
    }
}

function handleWl4(wl4) {
    var wlInt4 = document.getElementById("wlInt4");
    wlInt4.disabled = wl4.checked ? false : true;
    if (!wlInt4.disabled) {
        wlInt4.focus();
    }
    var wlAdv4 = document.getElementById("wlAdv4");
    wlAdv4.disabled = wl4.checked ? false : true;
    if (!wlAdv4.disabled) {
        wlAdv4.focus();
    }
    var wlExp4 = document.getElementById("wlExp4");
    wlExp4.disabled = wl4.checked ? false : true;
    if (!wlExp4.disabled) {
        wlExp4.focus();
    }
}

function handlecCre1() {
    if (this.value == '01') {
        document.getElementById('winchText').disabled = true;
    } else {
        document.getElementById('winchText').disabled = false;
    }
}

function handlecCre2(core2) {
    var coreInt2 = document.getElementById("coreInt2");
    coreInt2.disabled = core2.checked ? false : true;
    if (!coreInt2.disabled) {
        coreInt2.focus();
    }
    var coreAdv2 = document.getElementById("coreAdv2");
    coreAdv2.disabled = core2.checked ? false : true;
    if (!coreAdv2.disabled) {
        coreAdv2.focus();
    }
    var coreExp2 = document.getElementById("coreExp2");
    coreExp2.disabled = core2.checked ? false : true;
    if (!coreExp2.disabled) {
        coreExp2.focus();
    }
}

function handlecCre3(core3) {
    var coreInt3 = document.getElementById("coreInt3");
    coreInt3.disabled = core3.checked ? false : true;
    if (!coreInt3.disabled) {
        coreInt3.focus();
    }
    var coreAdv3 = document.getElementById("coreAdv3");
    coreAdv3.disabled = core3.checked ? false : true;
    if (!coreAdv3.disabled) {
        coreAdv3.focus();
    }
    var coreExp3 = document.getElementById("coreExp3");
    coreExp3.disabled = core3.checked ? false : true;
    if (!coreExp3.disabled) {
        coreExp3.focus();
    }
}


function handlecCre4(core4) {
    var coreInt4 = document.getElementById("coreInt4");
    coreInt4.disabled = core4.checked ? false : true;
    if (!coreInt4.disabled) {
        coreInt4.focus();
    }
    var coreAdv4 = document.getElementById("coreAdv4");
    coreAdv4.disabled = core4.checked ? false : true;
    if (!coreAdv4.disabled) {
        coreAdv4.focus();
    }
    var coreExp4 = document.getElementById("coreExp4");
    coreExp4.disabled = core4.checked ? false : true;
    if (!coreExp4.disabled) {
        coreExp4.focus();
    }
}


// function getCheckboxCount() {
//     return document.querySelectorAll('input[name=Winch Control]:checked').length;
//   }

// console.log(getCheckboxCount());  

function core1Cal() {
    var a = document.getElementById("winchText").value
    if (a >= 1 && a <= 3) {
        document.getElementById("crInt1").style.display = "block";
        document.getElementById("crAdv1").style.display = "none";
        document.getElementById("crExp1").style.display = "none";
    }
    else if (a >= 4 && a <= 5) {
        document.getElementById("crInt1").style.display = "none";
        document.getElementById("crAdv1").style.display = "block";
        document.getElementById("crExp1").style.display = "none";
    }
    else if (a >= 6 && a <= 10) {
        document.getElementById("crInt1").style.display = "none";
        document.getElementById("crAdv1").style.display = "none";
        document.getElementById("crExp1").style.display = "block";
    }
    else if (a <= 0) {
        document.getElementById("crInt1").style.display = "none";
        document.getElementById("crAdv1").style.display = "none";
        document.getElementById("crExp1").style.display = "none";
    }
}

function core2Cal() {
    var b = document.getElementById("unitsText").value
    if (b == 1) {
        document.getElementById("crInt2").style.display = "block";
        document.getElementById("crAdv2").style.display = "none";
        document.getElementById("crExp2").style.display = "none";
    }
    else if (b >= 2 && b <= 5) {
        document.getElementById("crInt2").style.display = "none";
        document.getElementById("crAdv2").style.display = "block";
        document.getElementById("crExp2").style.display = "none";
    }
    else if (b >= 6 && b <= 10) {
        document.getElementById("crInt2").style.display = "none";
        document.getElementById("crAdv2").style.display = "none";
        document.getElementById("crExp2").style.display = "block";
    }
    else if (b <= 0) {
        document.getElementById("crInt2").style.display = "none";
        document.getElementById("crAdv2").style.display = "none";
        document.getElementById("crExp2").style.display = "none";
    }
}

function core3Cal() {
    var c = document.getElementById("rigUpText").value
    if (c == 1) {
        document.getElementById("crInt3").style.display = "block";
        document.getElementById("crAdv3").style.display = "none";
        document.getElementById("crExp3").style.display = "none";
    }
    else if (c >= 2 && c <= 5) {
        document.getElementById("crInt3").style.display = "none";
        document.getElementById("crAdv3").style.display = "block";
        document.getElementById("crExp3").style.display = "none";
    }
    else if (c >= 6 && c <= 10) {
        document.getElementById("crInt3").style.display = "none";
        document.getElementById("crAdv3").style.display = "none";
        document.getElementById("crExp3").style.display = "block";
    }
    else if (c <= 0) {
        document.getElementById("crInt3").style.display = "none";
        document.getElementById("crAdv3").style.display = "none";
        document.getElementById("crExp3").style.display = "none";
    }
}

function core4Cal() {
    var d = document.getElementById("basicText").value
    if (d == 1) {
        document.getElementById("crInt4").style.display = "block";
        document.getElementById("crAdv4").style.display = "none";
        document.getElementById("crExp4").style.display = "none";
    }
    else if (d >= 2 && d <= 5) {
        document.getElementById("crInt4").style.display = "none";
        document.getElementById("crAdv4").style.display = "block";
        document.getElementById("crExp4").style.display = "none";
    }
    else if (d >= 6 && d <= 10) {
        document.getElementById("crInt4").style.display = "none";
        document.getElementById("crAdv4").style.display = "none";
        document.getElementById("crExp4").style.display = "block";
    }
    else if (d <= 0) {
        document.getElementById("crInt4").style.display = "none";
        document.getElementById("crAdv4").style.display = "none";
        document.getElementById("crExp4").style.display = "none";
    }
}

function wl1Cal() {
    var d = document.getElementById("radiationText").value
    if (d >= 1 && d <= 3) {
        document.getElementById("wlInt1").style.display = "block";
        document.getElementById("wlAdv1").style.display = "none";
        document.getElementById("wlExp1").style.display = "none";
    }
    else if (d >= 4 && d <= 5) {
        document.getElementById("wlInt1").style.display = "none";
        document.getElementById("wlAdv1").style.display = "block";
        document.getElementById("wlExp1").style.display = "none";
    }
    else if (d >= 6 && d <= 10) {
        document.getElementById("wlInt1").style.display = "none";
        document.getElementById("wlAdv1").style.display = "none";
        document.getElementById("wlExp1").style.display = "block";
    }
    else if (d <= 0) {
        document.getElementById("wlInt1").style.display = "none";
        document.getElementById("wlAdv1").style.display = "none";
        document.getElementById("wlExp1").style.display = "none";
    }
}

function wl2Cal() {
    var d = document.getElementById("ExplosivesText").value
    if (d >= 1 && d <= 3) {
        document.getElementById("wlInt2").style.display = "block";
        document.getElementById("wlAdv2").style.display = "none";
        document.getElementById("wlExp2").style.display = "none";
    }
    else if (d >= 4 && d <= 5) {
        document.getElementById("wlInt2").style.display = "none";
        document.getElementById("wlAdv2").style.display = "block";
        document.getElementById("wlExp2").style.display = "none";
    }
    else if (d >= 6 && d <= 10) {
        document.getElementById("wlInt2").style.display = "none";
        document.getElementById("wlAdv2").style.display = "none";
        document.getElementById("wlExp2").style.display = "block";
    }
    else if (d <= 0) {
        document.getElementById("wlInt2").style.display = "none";
        document.getElementById("wlAdv2").style.display = "none";
        document.getElementById("wlExp2").style.display = "none";
    }
}

function wl3Cal() {
    var d = document.getElementById("controlText").value
    if (d >= 1 && d <= 3) {
        document.getElementById("wlInt3").style.display = "block";
        document.getElementById("wlAdv3").style.display = "none";
        document.getElementById("wlExp3").style.display = "none";
    }
    else if (d >= 4 && d <= 5) {
        document.getElementById("wlInt3").style.display = "none";
        document.getElementById("wlAdv3").style.display = "block";
        document.getElementById("wlExp3").style.display = "none";
    }
    else if (d >= 6 && d <= 10) {
        document.getElementById("wlInt3").style.display = "none";
        document.getElementById("wlAdv3").style.display = "none";
        document.getElementById("wlExp3").style.display = "block";
    }
    else if (d <= 0) {
        document.getElementById("wlInt3").style.display = "none";
        document.getElementById("wlAdv3").style.display = "none";
        document.getElementById("wlExp3").style.display = "none";
    }
}

function comp1Cal() {
    var d = document.getElementById("acousticsText").value
    if (d == 1) {
        document.getElementById("comInt1").style.display = "block";
        document.getElementById("comAdv1").style.display = "none";
        document.getElementById("comExp1").style.display = "none";
    }
    else if (d >= 2 && d <= 3) {
        document.getElementById("comInt1").style.display = "none";
        document.getElementById("comAdv1").style.display = "block";
        document.getElementById("comExp1").style.display = "none";
    }
    else if (d >= 4 && d <= 10) {
        document.getElementById("comInt1").style.display = "none";
        document.getElementById("comAdv1").style.display = "none";
        document.getElementById("comExp1").style.display = "block";
    }
    else if (d <= 0) {
        document.getElementById("comInt1").style.display = "none";
        document.getElementById("comAdv1").style.display = "none";
        document.getElementById("comExp1").style.display = "none";
    }
}

function comp2Cal() {
    var d = document.getElementById("seismicText").value
    if (d == 1) {
        document.getElementById("comInt2").style.display = "block";
        document.getElementById("comAdv2").style.display = "none";
        document.getElementById("comExp2").style.display = "none";
    }
    else if (d >= 2 && d <= 5) {
        document.getElementById("comInt2").style.display = "none";
        document.getElementById("comAdv2").style.display = "block";
        document.getElementById("comExp2").style.display = "none";
    }
    else if (d >= 6 && d <= 10) {
        document.getElementById("comInt2").style.display = "none";
        document.getElementById("comAdv2").style.display = "none";
        document.getElementById("comExp2").style.display = "block";
    }
    else if (d <= 0) {
        document.getElementById("comInt2").style.display = "none";
        document.getElementById("comAdv2").style.display = "none";
        document.getElementById("comExp2").style.display = "none";
    }
}
function comp3Cal() {
    var d = document.getElementById("cementText").value
    if (d == 1) {
        document.getElementById("comInt3").style.display = "block";
        document.getElementById("comAdv3").style.display = "none";
        document.getElementById("comExp3").style.display = "none";
    }
    else if (d >= 2 && d <= 5) {
        document.getElementById("comInt3").style.display = "none";
        document.getElementById("comAdv3").style.display = "block";
        document.getElementById("comExp3").style.display = "none";
    }
    else if (d >= 6 && d <= 10) {
        document.getElementById("comInt3").style.display = "none";
        document.getElementById("comAdv3").style.display = "none";
        document.getElementById("comExp3").style.display = "block";
    }
    else if (d <= 0) {
        document.getElementById("comInt3").style.display = "none";
        document.getElementById("comAdv3").style.display = "none";
        document.getElementById("comExp3").style.display = "none";
    }
}

function comp4Cal() {
    var d = document.getElementById("coringText").value
    if (d == 1) {
        document.getElementById("comInt4").style.display = "block";
        document.getElementById("comAdv4").style.display = "none";
        document.getElementById("comExp4").style.display = "none";
    }
    else if (d >= 2 && d <= 5) {
        document.getElementById("comInt4").style.display = "none";
        document.getElementById("comAdv4").style.display = "block";
        document.getElementById("comExp4").style.display = "none";
    }
    else if (d >= 6 && d <= 10) {
        document.getElementById("comInt4").style.display = "none";
        document.getElementById("comAdv4").style.display = "none";
        document.getElementById("comExp4").style.display = "block";
    }
    else if (d <= 0) {
        document.getElementById("comInt4").style.display = "none";
        document.getElementById("comAdv4").style.display = "none";
        document.getElementById("comExp4").style.display = "none";
    }
}
function comp4Cal() {
    var d = document.getElementById("coringText").value
    if (d == 1) {
        document.getElementById("comInt4").style.display = "block";
        document.getElementById("comAdv4").style.display = "none";
        document.getElementById("comExp4").style.display = "none";
    }
    else if (d >= 2 && d <= 5) {
        document.getElementById("comInt4").style.display = "none";
        document.getElementById("comAdv4").style.display = "block";
        document.getElementById("comExp4").style.display = "none";
    }
    else if (d >= 6 && d <= 10) {
        document.getElementById("comInt4").style.display = "none";
        document.getElementById("comAdv4").style.display = "none";
        document.getElementById("comExp4").style.display = "block";
    }
    else if (d <= 0) {
        document.getElementById("comInt4").style.display = "none";
        document.getElementById("comAdv4").style.display = "none";
        document.getElementById("comExp4").style.display = "none";
    }
}

function comp5Cal() {
    var d = document.getElementById("corrosionText").value
    if (d == 1) {
        document.getElementById("comInt6").style.display = "block";
        document.getElementById("comAdv6").style.display = "none";
        document.getElementById("comExp6").style.display = "none";
    }
    else if (d >= 2 && d <= 5) {
        document.getElementById("comInt6").style.display = "none";
        document.getElementById("comAdv6").style.display = "block";
        document.getElementById("comExp6").style.display = "none";
    }
    else if (d >= 6 && d <= 10) {
        document.getElementById("comInt6").style.display = "none";
        document.getElementById("comAdv6").style.display = "none";
        document.getElementById("comExp6").style.display = "block";
    }
    else if (d <= 0) {
        document.getElementById("comInt6").style.display = "none";
        document.getElementById("comAdv6").style.display = "none";
        document.getElementById("comExp6").style.display = "none";
    }
}
function comp7Cal() {
    var d = document.getElementById("geologyText").value
    if (d == 1) {
        document.getElementById("comInt7").style.display = "block";
        document.getElementById("comAdv7").style.display = "none";
        document.getElementById("comExp7").style.display = "none";
    }
    else if (d >= 2 && d <= 5) {
        document.getElementById("comInt7").style.display = "none";
        document.getElementById("comAdv7").style.display = "block";
        document.getElementById("comExp7").style.display = "none";
    }
    else if (d >= 6 && d <= 10) {
        document.getElementById("comInt7").style.display = "none";
        document.getElementById("comAdv7").style.display = "none";
        document.getElementById("comExp7").style.display = "block";
    }
    else if (d <= 0) {
        document.getElementById("comInt7").style.display = "none";
        document.getElementById("comAdv7").style.display = "none";
        document.getElementById("comExp7").style.display = "none";
    }
}
function comp8Cal() {
    var d = document.getElementById("magneticText").value
    if (d == 1) {
        document.getElementById("comInt8").style.display = "block";
        document.getElementById("comAdv8").style.display = "none";
        document.getElementById("comExp8").style.display = "none";
    }
    else if (d >= 2 && d <= 5) {
        document.getElementById("comInt8").style.display = "none";
        document.getElementById("comAdv8").style.display = "block";
        document.getElementById("comExp8").style.display = "none";
    }
    else if (d >= 6 && d <= 10) {
        document.getElementById("comInt8").style.display = "none";
        document.getElementById("comAdv8").style.display = "none";
        document.getElementById("comExp8").style.display = "block";
    }
    else if (d <= 0) {
        document.getElementById("comInt8").style.display = "none";
        document.getElementById("comAdv8").style.display = "none";
        document.getElementById("comExp8").style.display = "none";
    }
}
function comp9Cal() {
    var d = document.getElementById("nuclearText").value
    if (d == 1) {
        document.getElementById("comInt9").style.display = "block";
        document.getElementById("comAdv9").style.display = "none";
        document.getElementById("comExp9").style.display = "none";
    }
    else if (d >= 2 && d <= 3) {
        document.getElementById("comInt9").style.display = "none";
        document.getElementById("comAdv9").style.display = "block";
        document.getElementById("comExp9").style.display = "none";
    }
    else if (d >= 4 && d <= 10) {
        document.getElementById("comInt9").style.display = "none";
        document.getElementById("comAdv9").style.display = "none";
        document.getElementById("comExp9").style.display = "block";
    }
    else if (d <= 0) {
        document.getElementById("comInt9").style.display = "none";
        document.getElementById("comAdv9").style.display = "none";
        document.getElementById("comExp9").style.display = "none";
    }
}
function comp10Cal() {
    var d = document.getElementById("pPText").value
    if (d == 1) {
        document.getElementById("comInt10").style.display = "block";
        document.getElementById("comAdv10").style.display = "none";
        document.getElementById("comExp10").style.display = "none";
    }
    else if (d >= 2 && d <= 5) {
        document.getElementById("comInt10").style.display = "none";
        document.getElementById("comAdv10").style.display = "block";
        document.getElementById("comExp10").style.display = "none";
    }
    else if (d >= 6 && d <= 10) {
        document.getElementById("comInt10").style.display = "none";
        document.getElementById("comAdv10").style.display = "none";
        document.getElementById("comExp10").style.display = "block";
    }
    else if (d <= 0) {
        document.getElementById("comInt10").style.display = "none";
        document.getElementById("comAdv10").style.display = "none";
        document.getElementById("comExp10").style.display = "none";
    }
}
function comp11Cal() {
    var d = document.getElementById("Perforation").value
    if (d == 1) {
        document.getElementById("comInt11").style.display = "block";
        document.getElementById("comAdv11").style.display = "none";
        document.getElementById("comExp11").style.display = "none";
    }
    else if (d >= 2 && d <= 5) {
        document.getElementById("comInt11").style.display = "none";
        document.getElementById("comAdv11").style.display = "block";
        document.getElementById("comExp11").style.display = "none";
    }
    else if (d >= 6 && d <= 10) {
        document.getElementById("comInt11").style.display = "none";
        document.getElementById("comAdv11").style.display = "none";
        document.getElementById("comExp11").style.display = "block";
    }
    else if (d <= 0) {
        document.getElementById("comInt11").style.display = "none";
        document.getElementById("comAdv11").style.display = "none";
        document.getElementById("comExp11").style.display = "none";
    }
}
function comp12Cal() {
    var d = document.getElementById("productionText").value
    if (d == 1) {
        document.getElementById("comInt12").style.display = "block";
        document.getElementById("comAdv12").style.display = "none";
        document.getElementById("comExp12").style.display = "none";
    }
    else if (d >= 2 && d <= 5) {
        document.getElementById("comInt12").style.display = "none";
        document.getElementById("comAdv12").style.display = "block";
        document.getElementById("comExp12").style.display = "none";
    }
    else if (d >= 6 && d <= 10) {
        document.getElementById("comInt12").style.display = "none";
        document.getElementById("comAdv12").style.display = "none";
        document.getElementById("comExp12").style.display = "block";
    }
    else if (d <= 0) {
        document.getElementById("comInt12").style.display = "none";
        document.getElementById("comAdv12").style.display = "none";
        document.getElementById("comExp12").style.display = "none";
    }
}
function comp13Cal() {
    var d = document.getElementById("RMText").value
    if (d == 1) {
        document.getElementById("comInt13").style.display = "block";
        document.getElementById("comAdv13").style.display = "none";
        document.getElementById("comExp13").style.display = "none";
    }
    else if (d >= 2 && d <= 5) {
        document.getElementById("comInt13").style.display = "none";
        document.getElementById("comAdv13").style.display = "block";
        document.getElementById("comExp13").style.display = "none";
    }
    else if (d >= 6 && d <= 10) {
        document.getElementById("comInt13").style.display = "none";
        document.getElementById("comAdv13").style.display = "none";
        document.getElementById("comExp13").style.display = "block";
    }
    else if (d <= 0) {
        document.getElementById("comInt13").style.display = "none";
        document.getElementById("comAdv13").style.display = "none";
        document.getElementById("comExp13").style.display = "none";
    }
}
function comp14Cal() {
    var d = document.getElementById("RPText").value
    if (d == 1) {
        document.getElementById("comInt14").style.display = "block";
        document.getElementById("comAdv14").style.display = "none";
        document.getElementById("comExp14").style.display = "none";
    }
    else if (d >= 2 && d <= 5) {
        document.getElementById("comInt14").style.display = "none";
        document.getElementById("comAdv14").style.display = "block";
        document.getElementById("comExp14").style.display = "none";
    }
    else if (d >= 6 && d <= 10) {
        document.getElementById("comInt14").style.display = "none";
        document.getElementById("comAdv14").style.display = "none";
        document.getElementById("comExp14").style.display = "block";
    }
    else if (d <= 0) {
        document.getElementById("comInt13").style.display = "none";
        document.getElementById("comAdv13").style.display = "none";
        document.getElementById("comExp13").style.display = "none";
    }
}
function comp15Cal() {
    var d = document.getElementById("resistivityText").value
    if (d == 1) {
        document.getElementById("comInt15").style.display = "block";
        document.getElementById("comAdv15").style.display = "none";
        document.getElementById("comExp15").style.display = "none";
    }
    else if (d >= 2 && d <= 5) {
        document.getElementById("comInt15").style.display = "none";
        document.getElementById("comAdv15").style.display = "block";
        document.getElementById("comExp15").style.display = "none";
    }
    else if (d >= 6 && d <= 10) {
        document.getElementById("comInt15").style.display = "none";
        document.getElementById("comAdv15").style.display = "none";
        document.getElementById("comExp15").style.display = "block";
    }
    else if (d <= 0) {
        document.getElementById("comInt15").style.display = "none";
        document.getElementById("comAdv15").style.display = "none";
        document.getElementById("comExp15").style.display = "none";
    }
}
function comp16Cal() {
    var d = document.getElementById("resolveText").value
    if (d == 1) {
        document.getElementById("comInt16").style.display = "block";
        document.getElementById("comAdv16").style.display = "none";
        document.getElementById("comExp16").style.display = "none";
    }
    else if (d >= 2 && d <= 5) {
        document.getElementById("comInt16").style.display = "none";
        document.getElementById("comAdv16").style.display = "block";
        document.getElementById("comExp15").style.display = "none";
    }
    else if (d >= 6 && d <= 10) {
        document.getElementById("comInt16").style.display = "none";
        document.getElementById("comAdv16").style.display = "none";
        document.getElementById("comExp16").style.display = "block";
    }
    else if (d <= 0) {
        document.getElementById("comInt16").style.display = "none";
        document.getElementById("comAdv16").style.display = "none";
        document.getElementById("comExp16").style.display = "none";
    }
}
function comp17Cal() {
    var d = document.getElementById("pipeText").value
    if (d == 1) {
        document.getElementById("comInt17").style.display = "block";
        document.getElementById("comAdv17").style.display = "none";
        document.getElementById("comExp17").style.display = "none";
    }
    else if (d == 2) {
        document.getElementById("comInt17").style.display = "none";
        document.getElementById("comAdv17").style.display = "block";
        document.getElementById("comExp17").style.display = "none";
    }
    else if (d >= 3) {
        document.getElementById("comInt17").style.display = "none";
        document.getElementById("comAdv17").style.display = "none";
        document.getElementById("comExp17").style.display = "block";
    }
    else if (d <= 0) {
        document.getElementById("comInt17").style.display = "none";
        document.getElementById("comAdv17").style.display = "none";
        document.getElementById("comExp17").style.display = "none";
    }
}
function comp18Cal() {
    var d = document.getElementById("conveyanceText").value
    if (d == 1) {
        document.getElementById("comInt18").style.display = "block";
        document.getElementById("comAdv18").style.display = "none";
        document.getElementById("comExp18").style.display = "none";
    }
    else if (d >= 2 && d <= 5) {
        document.getElementById("comInt18").style.display = "none";
        document.getElementById("comAdv18").style.display = "block";
        document.getElementById("comExp18").style.display = "none";
    }
    else if (d >= 6 && d <= 10) {
        document.getElementById("comInt18").style.display = "none";
        document.getElementById("comAdv18").style.display = "none";
        document.getElementById("comExp18").style.display = "block";
    }
    else if (d <= 0) {
        document.getElementById("comInt18").style.display = "none";
        document.getElementById("comAdv18").style.display = "none";
        document.getElementById("comExp18").style.display = "none";
    }
}

function calculateGrade() {
    var a = document.forms["core"];
    var b = document.forms["wl"];
    var c = document.forms["com"];
    var coreCheck = a.querySelectorAll('input[type="checkbox"]:checked');
    var coreIntCheck = a.querySelectorAll('input[value="Intermediate"]:checked');
    var coreAdvCheck = a.querySelectorAll('input[value="Advanced"]:checked');
    var coreExpCheck = a.querySelectorAll('input[value="Expert"]:checked');
    var wlCheck = b.querySelectorAll('input[type="checkbox"]:checked');
    var wlIntCheck = b.querySelectorAll('input[value="Intermediate"]:checked');
    var wlAdvCheck = b.querySelectorAll('input[value="Advanced"]:checked');
    var wlExpCheck = b.querySelectorAll('input[value="Expert"]:checked');
    var comCheck = c.querySelectorAll('input[type="checkbox"]:checked');
    var comIntCheck = c.querySelectorAll('input[value="Intermediate"]:checked');
    var comAdvCheck = c.querySelectorAll('input[value="Advanced"]:checked');
    var comExpCheck = c.querySelectorAll('input[value="Expert"]:checked');

    //G08//
    var d = coreIntCheck.length + coreAdvCheck.length + coreExpCheck.length;
    var e = wlIntCheck.length + wlAdvCheck.length + wlExpCheck.length;
    var f = comIntCheck.length + comAdvCheck.length + comExpCheck.length;

    //G09
    var g = coreAdvCheck.length + coreExpCheck.length;
    var h = wlAdvCheck.length + wlExpCheck.length;

    //G10//
    var i = wlIntCheck.length + wlAdvCheck.length;

    if (coreExpCheck.length >= 3) {
        if (wlExpCheck.length >= 2 && f >= 11 ||
            h >= 3 && f >= 11) {
            document.getElementById("Grade").textContent = "G11";
        }
        else if (wlExpCheck.length >= 1 && f >= 8 && f <= 10 ||
            h >= 2 && f >= 8 && f <= 10) {
            document.getElementById("Grade").textContent = "G10"
        }
    }

    else if (g >= 3 && h >= 1 && f >= 6) {
        document.getElementById("Grade").textContent = "G09"
    }

    else if (d >= 3 && e >= 1 && f >= 6) {
        document.getElementById("Grade").textContent = "G08"
    }

    else if (document.getElementById("Grade").textContent = " ") {
        document.getElementById("errorGrade").textContent = "Your Candidate grade is either G08 or G09";
    }
}




function clearRadioButtonsCom() {
    var ele = document.querySelectorAll("input[name= com1]");
    for (var i = 0; i < ele.length; i++) {
        ele[i].checked = false;
    }
    var ele2 = document.querySelectorAll("input[name= com2]");
    for (var i = 0; i < ele2.length; i++) {
        ele2[i].checked = false;
    }
    var ele3 = document.querySelectorAll("input[name= com3]");
    for (var i = 0; i < ele3.length; i++) {
        ele3[i].checked = false;

    } var ele4 = document.querySelectorAll("input[name= com4]");
    for (var i = 0; i < ele4.length; i++) {
        ele4[i].checked = false;
    }
    var ele5 = document.querySelectorAll("input[name= com5]");
    for (var i = 0; i < ele5.length; i++) {
        ele5[i].checked = false;
    }
    var ele6 = document.querySelectorAll("input[name= com6]");
    for (var i = 0; i < ele6.length; i++) {
        ele6[i].checked = false;
    }
    var ele7 = document.querySelectorAll("input[name= com7]");
    for (var i = 0; i < ele7.length; i++) {
        ele7[i].checked = false;

    } var ele8 = document.querySelectorAll("input[name= com8]");
    for (var i = 0; i < ele8.length; i++) {
        ele8[i].checked = false;
    }
    var ele9 = document.querySelectorAll("input[name= com9]");
    for (var i = 0; i < ele9.length; i++) {
        ele9[i].checked = false;
    }
    var ele10 = document.querySelectorAll("input[name= com10]");
    for (var i = 0; i < ele10.length; i++) {
        ele10[i].checked = false;
    }
    var ele11 = document.querySelectorAll("input[name= com11]");
    for (var i = 0; i < ele11.length; i++) {
        ele11[i].checked = false;

    } var ele12 = document.querySelectorAll("input[name= com12]");
    for (var i = 0; i < ele12.length; i++) {
        ele12[i].checked = false;
    }
    var ele13 = document.querySelectorAll("input[name= com13]");
    for (var i = 0; i < ele13.length; i++) {
        ele13[i].checked = false;
    }
    var ele14 = document.querySelectorAll("input[name= com14]");
    for (var i = 0; i < ele14.length; i++) {
        ele14[i].checked = false;
    }
    var ele15 = document.querySelectorAll("input[name= com15]");
    for (var i = 0; i < ele15.length; i++) {
        ele15[i].checked = false;

    } var ele16 = document.querySelectorAll("input[name= com16]");
    for (var i = 0; i < ele16.length; i++) {
        ele16[i].checked = false;
    }
    var ele17 = document.querySelectorAll("input[name= com17]");
    for (var i = 0; i < ele17.length; i++) {
        ele17[i].checked = false;
    }
}

function clearcheckCom() {
    var ele = document.querySelectorAll("input[id= com1]");
    for (var i = 0; i < ele.length; i++) {
        ele[i].checked = false;
    }
    var ele2 = document.querySelectorAll("input[id= com2]");
    for (var i = 0; i < ele2.length; i++) {
        ele2[i].checked = false;
    }
    var ele3 = document.querySelectorAll("input[id= com3]");
    for (var i = 0; i < ele3.length; i++) {
        ele3[i].checked = false;

    } var ele4 = document.querySelectorAll("input[id= com4]");
    for (var i = 0; i < ele4.length; i++) {
        ele4[i].checked = false;
    }
    var ele5 = document.querySelectorAll("input[id= com5]");
    for (var i = 0; i < ele5.length; i++) {
        ele5[i].checked = false;
    }
    var ele6 = document.querySelectorAll("input[id= com6]");
    for (var i = 0; i < ele6.length; i++) {
        ele6[i].checked = false;
    }
    var ele7 = document.querySelectorAll("input[id= com7]");
    for (var i = 0; i < ele7.length; i++) {
        ele7[i].checked = false;

    } var ele8 = document.querySelectorAll("input[id= com8]");
    for (var i = 0; i < ele8.length; i++) {
        ele8[i].checked = false;
    }
    var ele9 = document.querySelectorAll("input[id= com9]");
    for (var i = 0; i < ele9.length; i++) {
        ele9[i].checked = false;
    }
    var ele10 = document.querySelectorAll("input[id= com10]");
    for (var i = 0; i < ele10.length; i++) {
        ele10[i].checked = false;
    }
    var ele11 = document.querySelectorAll("input[id= com11]");
    for (var i = 0; i < ele11.length; i++) {
        ele11[i].checked = false;

    } var ele12 = document.querySelectorAll("input[id= com12]");
    for (var i = 0; i < ele12.length; i++) {
        ele12[i].checked = false;
    }
    var ele13 = document.querySelectorAll("input[id= com13]");
    for (var i = 0; i < ele13.length; i++) {
        ele13[i].checked = false;
    }
    var ele14 = document.querySelectorAll("input[id= com14]");
    for (var i = 0; i < ele14.length; i++) {
        ele14[i].checked = false;
    }
    var ele15 = document.querySelectorAll("input[id= com15]");
    for (var i = 0; i < ele15.length; i++) {
        ele15[i].checked = false;

    } var ele16 = document.querySelectorAll("input[id= com16]");
    for (var i = 0; i < ele16.length; i++) {
        ele16[i].checked = false;
    }
    var ele17 = document.querySelectorAll("input[id= com17]");
    for (var i = 0; i < ele17.length; i++) {
        ele17[i].checked = false;
    }
}

function clearRadioButtonswl() {
    var ele = document.querySelectorAll("input[name= wl1]");
    for (var i = 0; i < ele.length; i++) {
        ele[i].checked = false;
    }
    var ele2 = document.querySelectorAll("input[name= wl2]");
    for (var i = 0; i < ele2.length; i++) {
        ele2[i].checked = false;
    }
    var ele3 = document.querySelectorAll("input[name= wl3]");
    for (var i = 0; i < ele3.length; i++) {
        ele3[i].checked = false;

    } var ele4 = document.querySelectorAll("input[name= wl4]");
    for (var i = 0; i < ele4.length; i++) {
        ele4[i].checked = false;
    }
}

function clearcheckwl() {
    var ele = document.querySelectorAll("input[id= wl1]");
    for (var i = 0; i < ele.length; i++) {
        ele[i].checked = false;
    }
    var ele2 = document.querySelectorAll("input[id= wl2]");
    for (var i = 0; i < ele2.length; i++) {
        ele2[i].checked = false;
    }
    var ele3 = document.querySelectorAll("input[id= wl3]");
    for (var i = 0; i < ele3.length; i++) {
        ele3[i].checked = false;

    } var ele4 = document.querySelectorAll("input[id= wl4]");
    for (var i = 0; i < ele4.length; i++) {
        ele4[i].checked = false;
    }
}

function clearRadioButtonscore() {
    var ele = document.querySelectorAll("input[name= core1]");
    for (var i = 0; i < ele.length; i++) {
        ele[i].checked = false;
    }
    var ele2 = document.querySelectorAll("input[name= core2]");
    for (var i = 0; i < ele2.length; i++) {
        ele2[i].checked = false;
    }
    var ele3 = document.querySelectorAll("input[name= core3]");
    for (var i = 0; i < ele3.length; i++) {
        ele3[i].checked = false;

    } var ele4 = document.querySelectorAll("input[name= core4]");
    for (var i = 0; i < ele4.length; i++) {
        ele4[i].checked = false;
    }
}

function clearcheckcore() {
    var ele = document.querySelectorAll("input[id= core1]");
    for (var i = 0; i < ele.length; i++) {
        ele[i].checked = false;
    }
    var ele2 = document.querySelectorAll("input[id= core2]");
    for (var i = 0; i < ele2.length; i++) {
        ele2[i].checked = false;
    }
    var ele3 = document.querySelectorAll("input[id= core3]");
    for (var i = 0; i < ele3.length; i++) {
        ele3[i].checked = false;

    } var ele4 = document.querySelectorAll("input[id= core4]");
    for (var i = 0; i < ele4.length; i++) {
        ele4[i].checked = false;
    }
}

function clearCore() {
    document.getElementById("winchText").value = "";
    document.getElementById("unitsText").value = "";
    document.getElementById("rigUpText").value = "";
    document.getElementById("basicText").value = "";
    document.getElementById("crInt4").style.display = "none";
    document.getElementById("crAdv4").style.display = "none";
    document.getElementById("crExp4").style.display = "none";
    document.getElementById("crInt3").style.display = "none";
    document.getElementById("crAdv3").style.display = "none";
    document.getElementById("crExp3").style.display = "none";
    document.getElementById("crInt2").style.display = "none";
    document.getElementById("crAdv2").style.display = "none";
    document.getElementById("crExp2").style.display = "none";
    document.getElementById("crInt1").style.display = "none";
    document.getElementById("crAdv1").style.display = "none";
    document.getElementById("crExp1").style.display = "none";
}

function clearWl() {
    document.getElementById("radiationText").value = "";
    document.getElementById("ExplosivesText").value = "";
    document.getElementById("controlText").value = "";
    document.getElementById("wlInt3").style.display = "none";
    document.getElementById("wlAdv3").style.display = "none";
    document.getElementById("wlExp3").style.display = "none";
    document.getElementById("wlInt2").style.display = "none";
    document.getElementById("wlAdv2").style.display = "none";
    document.getElementById("wlExp2").style.display = "none";
    document.getElementById("wlInt1").style.display = "none";
    document.getElementById("wlAdv1").style.display = "none";
    document.getElementById("wlExp1").style.display = "none";
}

function clearComp() {
    document.getElementById("acousticsText").value = "";
    document.getElementById("seismicText").value = "";
    document.getElementById("controlText").value = "";
    document.getElementById("cementText").value = "";
    document.getElementById("coringText").value = "";
    document.getElementById("corrosionText").value = "";
    document.getElementById("geologyText").value = "";
    document.getElementById("magneticText").value = "";
    document.getElementById("nuclearText").value = "";
    document.getElementById("pPText").value = "";
    document.getElementById("perforationText").value = "";
    document.getElementById("productionText").value = "";
    document.getElementById("RMText").value = "";
    document.getElementById("RPText").value = "";
    document.getElementById("resistivityText").value = "";
    document.getElementById("resolveText").value = "";
    document.getElementById("pipeText").value = "";
    document.getElementById("conveyanceText").value = "";
    document.getElementById("comInt18").style.display = "none";
    document.getElementById("comAdv18").style.display = "none";
    document.getElementById("comExp18").style.display = "none";
    document.getElementById("comInt17").style.display = "none";
    document.getElementById("comAdv17").style.display = "none";
    document.getElementById("comExp17").style.display = "none";
    document.getElementById("comInt16").style.display = "none";
    document.getElementById("comAdv16").style.display = "none";
    document.getElementById("comExp16").style.display = "none";
    document.getElementById("comInt15").style.display = "none";
    document.getElementById("comAdv15").style.display = "none";
    document.getElementById("comExp15").style.display = "none";
    document.getElementById("comInt14").style.display = "none";
    document.getElementById("comAdv14").style.display = "none";
    document.getElementById("comExp14").style.display = "none";
    document.getElementById("comInt13").style.display = "none";
    document.getElementById("comAdv13").style.display = "none";
    document.getElementById("comExp13").style.display = "none";
    document.getElementById("comInt12").style.display = "none";
    document.getElementById("comAdv12").style.display = "none";
    document.getElementById("comExp12").style.display = "none";
    document.getElementById("comInt11").style.display = "none";
    document.getElementById("comAdv11").style.display = "none";
    document.getElementById("comExp11").style.display = "none";
    document.getElementById("comInt10").style.display = "none";
    document.getElementById("comAdv10").style.display = "none";
    document.getElementById("comExp10").style.display = "none";
    document.getElementById("comInt9").style.display = "none";
    document.getElementById("comAdv9").style.display = "none";
    document.getElementById("comExp9").style.display = "none";
    document.getElementById("comInt8").style.display = "none";
    document.getElementById("comAdv8").style.display = "none";
    document.getElementById("comExp8").style.display = "none";
    document.getElementById("comInt7").style.display = "none";
    document.getElementById("comAdv7").style.display = "none";
    document.getElementById("comExp7").style.display = "none";
    document.getElementById("comInt5").style.display = "none";
    document.getElementById("comAdv5").style.display = "none";
    document.getElementById("comExp5").style.display = "none";
    document.getElementById("comInt4").style.display = "none";
    document.getElementById("comAdv4").style.display = "none";
    document.getElementById("comExp4").style.display = "none";
    document.getElementById("comInt3").style.display = "none";
    document.getElementById("comAdv3").style.display = "none";
    document.getElementById("comExp3").style.display = "none";
    document.getElementById("comInt2").style.display = "none";
    document.getElementById("comAdv2").style.display = "none";
    document.getElementById("comExp2").style.display = "none";
    document.getElementById("comInt1").style.display = "none";
    document.getElementById("comAdv1").style.display = "none";
    document.getElementById("comExp1").style.display = "none";
}

function exportHTMLtoPDF() {
    // let htmlElement = document.getElementById('Elements');
    // let htmlElement2 = document.getElementById('heading');

    // html2pdf().from(htmlElement2).save('exported_file.pdf');
    // // html2pdf().from(htmlElement).save('exported_file.pdf');
    // console.log(htmlElement)
    var elementToPrint = document.createElement('div');
    var el1 = document.getElementById('heading')
    var el2 = document.getElementById('formtop');
    var el3 = document.getElementById('Elements');
    var el4 = document.getElementById('result')

    elementToPrint.appendChild(el1.cloneNode(true));
    elementToPrint.appendChild(el2.cloneNode(true));
    elementToPrint.appendChild(el3.cloneNode(true));
    elementToPrint.appendChild(el4.cloneNode(true));

    // html2pdf(elementToPrint);
    html2pdf().from(elementToPrint).save('exported_file.pdf')
}

//  document.getElementById('reportsbutton').addEventListener('click', exportHTMLtoPDF);

//   var doc = new jsPDF();
//   var specialElementHandlers = {
//       '#editor': function (element, renderer) {
//           return true;
//       }
//   };
//   $('#reportsbutton').click(function () {
//       doc.fromHTML($('#header').html(), 15, 15, {
//           'width': 190,
//               'elementHandlers': specialElementHandlers
//       });
//       doc.save('sample-page.pdf');
//   });


// function getComanyName(){
//     var companyName = document.querySelector('input[name = profile]:checked').value;
//     result.innerHTML = companyName;
//     console.log(result.innerHTML)
// }

// function getUserName(){
//     var userName = document.querySelector('input[name = fname]:value').value;
//     result.innerHTML = userName;
//     console.log(result.innerHTML)
// }

// function clearRadioButtonsAdv(){
//     var ele = document.querySelectorAll("input[value= Advanced]");
//      for(var i=0;i<ele.length;i++){
//         ele[i].checked = false;
//      }
//   }

//   function clearRadioButtonsExp(){
//     var ele = document.querySelectorAll("input[value= Expert]");
//      for(var i=0;i<ele.length;i++){
//         ele[i].checked = false;
//      }
//   }
  // // return x.length;
    // alert(y.length);
    // if(x.length >= 2){
    //     console.log("Grade 2")
    //  }
    //  if(x.length < 2){
    //     console.log("Grade 1")
    //  }



// function generateGrade(){
//     if(countCheckboxes()>2){
//        console.log("Grade 1")
//     }
//     else{
//         console.log("Grade 2")
//     }
// }   