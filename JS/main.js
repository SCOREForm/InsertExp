

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



function enableSubmit() {
    if (this.value == '01') {
        document.getElementById('submitbutton').disabled = true;
    } else {
        document.getElementById('submitbutton').disabled = false;
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





// function getCheckboxCount() {
//     return document.querySelectorAll('input[name=Winch Control]:checked').length;
//   }

// console.log(getCheckboxCount());  

function core1Cal() {
    var a = document.getElementById("winchText").value
    if (a >= 3 && a <= 4) {
        document.getElementById("crInt1").style.display = "block";
        document.getElementById("crAdv1").style.display = "none";
        document.getElementById("crExp1").style.display = "none";
    }
    else if (a >= 5 && a <= 9) {
        document.getElementById("crInt1").style.display = "none";
        document.getElementById("crAdv1").style.display = "block";
        document.getElementById("crExp1").style.display = "none";
    }
    else if ( a >= 10) {
        document.getElementById("crInt1").style.display = "none";
        document.getElementById("crAdv1").style.display = "none";
        document.getElementById("crExp1").style.display = "block";
    }
    else if (a <= 2) {
        document.getElementById("crInt1").style.display = "none";
        document.getElementById("crAdv1").style.display = "none";
        document.getElementById("crExp1").style.display = "none";
    }
}

function core2Cal() {
    var b = document.getElementById("unitsText").value
    if (b >= 1 && b <= 4) {
        document.getElementById("crInt2").style.display = "block";
        document.getElementById("crAdv2").style.display = "none";
        document.getElementById("crExp2").style.display = "none";
    }
    else if (b >= 5 && b <= 9) {
        document.getElementById("crInt2").style.display = "none";
        document.getElementById("crAdv2").style.display = "block";
        document.getElementById("crExp2").style.display = "none";
    }
    else if (b >= 10) {
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
    var b = document.getElementById("rigUpText").value
    if (b >= 1 && b <= 4) {
        document.getElementById("crInt3").style.display = "block";
        document.getElementById("crAdv3").style.display = "none";
        document.getElementById("crExp3").style.display = "none";
    }
    else if (b >= 5 && b <= 9) {
        document.getElementById("crInt3").style.display = "none";
        document.getElementById("crAdv3").style.display = "block";
        document.getElementById("crExp3").style.display = "none";
    }
    else if (b >= 10) {
        document.getElementById("crInt3").style.display = "none";
        document.getElementById("crAdv3").style.display = "none";
        document.getElementById("crExp3").style.display = "block";
    }
    else if (b <= 0) {
        document.getElementById("crInt3").style.display = "none";
        document.getElementById("crAdv3").style.display = "none";
        document.getElementById("crExp3").style.display = "none";
    }
}

function core4Cal() {
    var b = document.getElementById("basicText").value
    if (b >= 1 && b <= 4) {
        document.getElementById("crInt4").style.display = "block";
        document.getElementById("crAdv4").style.display = "none";
        document.getElementById("crExp4").style.display = "none";
    }
    else if (b >= 5 && b <= 9) {
        document.getElementById("crInt4").style.display = "none";
        document.getElementById("crAdv4").style.display = "block";
        document.getElementById("crExp4").style.display = "none";
    }
    else if (b >= 10) {
        document.getElementById("crInt4").style.display = "none";
        document.getElementById("crAdv4").style.display = "none";
        document.getElementById("crExp4").style.display = "block";
    }
    else if (b <= 0) {
        document.getElementById("crInt4").style.display = "none";
        document.getElementById("crAdv4").style.display = "none";
        document.getElementById("crExp4").style.display = "none";
    }
}

function wl1Cal() {
    var d = document.getElementById("radiationText").value
    if (d >= 3 && d <= 4) {
        document.getElementById("wlInt1").style.display = "block";
        document.getElementById("wlAdv1").style.display = "none";
        document.getElementById("wlExp1").style.display = "none";
    }
    else if (d >= 5 && d <= 9) {
        document.getElementById("wlInt1").style.display = "none";
        document.getElementById("wlAdv1").style.display = "block";
        document.getElementById("wlExp1").style.display = "none";
    }
    else if (d >= 10) {
        document.getElementById("wlInt1").style.display = "none";
        document.getElementById("wlAdv1").style.display = "none";
        document.getElementById("wlExp1").style.display = "block";
    }
    else if (d <= 2) {
        document.getElementById("wlInt1").style.display = "none";
        document.getElementById("wlAdv1").style.display = "none";
        document.getElementById("wlExp1").style.display = "none";
    }
}

function wl2Cal() {
    var d = document.getElementById("ExplosivesText").value
    if (d >= 3 && d <= 4) {
        document.getElementById("wlInt2").style.display = "block";
        document.getElementById("wlAdv2").style.display = "none";
        document.getElementById("wlExp2").style.display = "none";
    }
    else if (d >= 5 && d <= 9) {
        document.getElementById("wlInt2").style.display = "none";
        document.getElementById("wlAdv2").style.display = "block";
        document.getElementById("wlExp2").style.display = "none";
    }
    else if (d >= 10) {
        document.getElementById("wlInt2").style.display = "none";
        document.getElementById("wlAdv2").style.display = "none";
        document.getElementById("wlExp2").style.display = "block";
    }
    else if (d <= 2) {
        document.getElementById("wlInt2").style.display = "none";
        document.getElementById("wlAdv2").style.display = "none";
        document.getElementById("wlExp2").style.display = "none";
    }
}

function wl3Cal() {
    var d = document.getElementById("controlText").value
    if (d >= 3 && d <= 4) {
        document.getElementById("wlInt3").style.display = "block";
        document.getElementById("wlAdv3").style.display = "none";
        document.getElementById("wlExp3").style.display = "none";
    }
    else if (d >= 5 && d <= 9) {
        document.getElementById("wlInt3").style.display = "none";
        document.getElementById("wlAdv3").style.display = "block";
        document.getElementById("wlExp3").style.display = "none";
    }
    else if (d >= 10) {
        document.getElementById("wlInt3").style.display = "none";
        document.getElementById("wlAdv3").style.display = "none";
        document.getElementById("wlExp3").style.display = "block";
    }
    else if (d <= 2) {
        document.getElementById("wlInt3").style.display = "none";
        document.getElementById("wlAdv3").style.display = "none";
        document.getElementById("wlExp3").style.display = "none";
    }
}

function comp1Cal() {
    var d = document.getElementById("acousticsText").value
    if (d >= 1 && d <= 2) {
        document.getElementById("comInt1").style.display = "block";
        document.getElementById("comAdv1").style.display = "none";
        document.getElementById("comExp1").style.display = "none";
    }
    else if (d >= 3 && d <= 9) {
        document.getElementById("comInt1").style.display = "none";
        document.getElementById("comAdv1").style.display = "block";
        document.getElementById("comExp1").style.display = "none";
    }
    else if (d >= 10) {
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
    if (d >= 1 && d <= 4) {
        document.getElementById("comInt2").style.display = "block";
        document.getElementById("comAdv2").style.display = "none";
        document.getElementById("comExp2").style.display = "none";
    }
    else if (d >= 5 && d <= 9) {
        document.getElementById("comInt2").style.display = "none";
        document.getElementById("comAdv2").style.display = "block";
        document.getElementById("comExp2").style.display = "none";
    }
    else if (d >= 10) {
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
    if (d >= 1 && d <= 4) {
        document.getElementById("comInt3").style.display = "block";
        document.getElementById("comAdv3").style.display = "none";
        document.getElementById("comExp3").style.display = "none";
    }
    else if (d >= 5 && d <= 9) {
        document.getElementById("comInt3").style.display = "none";
        document.getElementById("comAdv3").style.display = "block";
        document.getElementById("comExp3").style.display = "none";
    }
    else if (d >= 10) {
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
    if (d >= 1 && d <= 4) {
        document.getElementById("comInt4").style.display = "block";
        document.getElementById("comAdv4").style.display = "none";
        document.getElementById("comExp4").style.display = "none";
    }
    else if (d >= 5 && d <= 9) {
        document.getElementById("comInt4").style.display = "none";
        document.getElementById("comAdv4").style.display = "block";
        document.getElementById("comExp4").style.display = "none";
    }
    else if (d >= 10) {
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
// function comp4Cal() {
//     var d = document.getElementById("coringText").value
//     if (d >= 1 && d <= 4) {
//         document.getElementById("comInt5").style.display = "block";
//         document.getElementById("comAdv5").style.display = "none";
//         document.getElementById("comExp5").style.display = "none";
//     }
//     else if (d >= 5 && d <= 9) {
//         document.getElementById("comInt5").style.display = "none";
//         document.getElementById("comAdv5").style.display = "block";
//         document.getElementById("comExp5").style.display = "none";
//     }
//     else if (d >= 10) {
//         document.getElementById("comInt5").style.display = "none";
//         document.getElementById("comAdv5").style.display = "none";
//         document.getElementById("comExp5").style.display = "block";
//     }
//     else if (d <= 0) {
//         document.getElementById("comInt5").style.display = "none";
//         document.getElementById("comAdv5").style.display = "none";
//         document.getElementById("comExp5").style.display = "none";
//     }
// }

function comp5Cal() {
    var d = document.getElementById("corrosionText").value
    if (d >= 1 && d <= 4) {
        document.getElementById("comInt5").style.display = "block";
        document.getElementById("comAdv5").style.display = "none";
        document.getElementById("comExp5").style.display = "none";
    }
    else if (d >= 5 && d <= 9) {
        document.getElementById("comInt5").style.display = "none";
        document.getElementById("comAdv5").style.display = "block";
        document.getElementById("comExp5").style.display = "none";
    }
    else if (d >= 10) {
        document.getElementById("comInt5").style.display = "none";
        document.getElementById("comAdv5").style.display = "none";
        document.getElementById("comExp5").style.display = "block";
    }
    else if (d <= 0) {
        document.getElementById("comInt5").style.display = "none";
        document.getElementById("comAdv5").style.display = "none";
        document.getElementById("comExp5").style.display = "none";
    }
}
function comp7Cal() {
    var d = document.getElementById("geologyText").value
    if (d >= 1 && d <= 4) {
        document.getElementById("comInt7").style.display = "block";
        document.getElementById("comAdv7").style.display = "none";
        document.getElementById("comExp7").style.display = "none";
    }
    else if (d >= 5 && d <= 9) {
        document.getElementById("comInt7").style.display = "none";
        document.getElementById("comAdv7").style.display = "block";
        document.getElementById("comExp7").style.display = "none";
    }
    else if (d >= 10) {
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
    if (d >= 1 && d <= 4) {
        document.getElementById("comInt8").style.display = "block";
        document.getElementById("comAdv8").style.display = "none";
        document.getElementById("comExp8").style.display = "none";
    }
    else if (d >= 5 && d <= 9) {
        document.getElementById("comInt8").style.display = "none";
        document.getElementById("comAdv8").style.display = "block";
        document.getElementById("comExp8").style.display = "none";
    }
    else if (d >= 10) {
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
    if (d >= 1 && d <= 2) {
        document.getElementById("comInt9").style.display = "block";
        document.getElementById("comAdv9").style.display = "none";
        document.getElementById("comExp9").style.display = "none";
    }
    else if (d >= 3 && d <= 9) {
        document.getElementById("comInt9").style.display = "none";
        document.getElementById("comAdv9").style.display = "block";
        document.getElementById("comExp9").style.display = "none";
    }
    else if (d >= 10) {
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
    if (d >= 1 && d <= 4) {
        document.getElementById("comInt10").style.display = "block";
        document.getElementById("comAdv10").style.display = "none";
        document.getElementById("comExp10").style.display = "none";
    }
    else if (d >= 5 && d <= 9) {
        document.getElementById("comInt10").style.display = "none";
        document.getElementById("comAdv10").style.display = "block";
        document.getElementById("comExp10").style.display = "none";
    }
    else if (d >= 10) {
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
    var d = document.getElementById("perforationText").value
    if (d >= 1 && d <= 4) {
        document.getElementById("comInt11").style.display = "block";
        document.getElementById("comAdv11").style.display = "none";
        document.getElementById("comExp11").style.display = "none";
    }
    else if (d >= 5 && d <= 9) {
        document.getElementById("comInt11").style.display = "none";
        document.getElementById("comAdv11").style.display = "block";
        document.getElementById("comExp11").style.display = "none";
    }
    else if (d >= 10) {
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
    if (d >= 1 && d <= 4) {
        document.getElementById("comInt12").style.display = "block";
        document.getElementById("comAdv12").style.display = "none";
        document.getElementById("comExp12").style.display = "none";
    }
    else if (d >= 5 && d <= 9) {
        document.getElementById("comInt12").style.display = "none";
        document.getElementById("comAdv12").style.display = "block";
        document.getElementById("comExp12").style.display = "none";
    }
    else if (d >= 10) {
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
    if (d >= 1 && d <= 4) {
        document.getElementById("comInt13").style.display = "block";
        document.getElementById("comAdv13").style.display = "none";
        document.getElementById("comExp13").style.display = "none";
    }
    else if (d >= 5 && d <= 9) {
        document.getElementById("comInt13").style.display = "none";
        document.getElementById("comAdv13").style.display = "block";
        document.getElementById("comExp13").style.display = "none";
    }
    else if (d >= 10) {
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
    if (d >= 1 && d <= 4) {
        document.getElementById("comInt14").style.display = "block";
        document.getElementById("comAdv14").style.display = "none";
        document.getElementById("comExp14").style.display = "none";
    }
    else if (d >= 5 && d <= 9) {
        document.getElementById("comInt14").style.display = "none";
        document.getElementById("comAdv14").style.display = "block";
        document.getElementById("comExp14").style.display = "none";
    }
    else if (d >= 10) {
        document.getElementById("comInt14").style.display = "none";
        document.getElementById("comAdv14").style.display = "none";
        document.getElementById("comExp14").style.display = "block";
    }
    else if (d <= 0) {
        document.getElementById("comInt14").style.display = "none";
        document.getElementById("comAdv14").style.display = "none";
        document.getElementById("comExp14").style.display = "none";
    }
}
function comp15Cal() {
    var d = document.getElementById("resistivityText").value
    if (d >= 1 && d <= 2) {
        document.getElementById("comInt15").style.display = "block";
        document.getElementById("comAdv15").style.display = "none";
        document.getElementById("comExp15").style.display = "none";
    }
    else if (d >= 3 && d <= 9) {
        document.getElementById("comInt15").style.display = "none";
        document.getElementById("comAdv15").style.display = "block";
        document.getElementById("comExp15").style.display = "none";
    }
    else if (d >= 10) {
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
    if (d >= 1 && d <= 4) {
        document.getElementById("comInt16").style.display = "block";
        document.getElementById("comAdv16").style.display = "none";
        document.getElementById("comExp16").style.display = "none";
    }
    else if (d >= 5 && d <= 9) {
        document.getElementById("comInt16").style.display = "none";
        document.getElementById("comAdv16").style.display = "block";
        document.getElementById("comExp16").style.display = "none";
    }
    else if (d >= 10) {
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
    if (d >= 1 && d <= 4) {
        document.getElementById("comInt18").style.display = "block";
        document.getElementById("comAdv18").style.display = "none";
        document.getElementById("comExp18").style.display = "none";
    }
    else if (d >= 5 && d <= 9) {
        document.getElementById("comInt18").style.display = "none";
        document.getElementById("comAdv18").style.display = "block";
        document.getElementById("comExp18").style.display = "none";
    }
    else if (d >= 10) {
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


