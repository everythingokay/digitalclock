function updateClock () {

    let date = new Date ();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();


    // adding zeros
    if (m < 10) {
      m = "0" + m;
    }
    else {
      m = "" + m;
    }
 
    if (s < 10) {
      s = "0" + s;
    }
    else {
      s = "" + s;
    }


    // 12 hour standard time
    if (h > 12) {
      h = h - 12;
    }
    else {
      h = h;
    }
    if (h < 10) {
      h = "0" + h;
    }
    else {
      h = "" + h;
    }


    // midnight
    if (h == 0) {
      h = 12;
    }
    else {
      h = h;
    }


    // AM or PM
    if (h < 12) {
      amPM = "PM";
     }
     else {
      amPM = "AM";
     }


    // update
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s + " " + amPM;
}


// changing background color
let i = 0;
function changeBackground() {
  let doc = document.getElementById("background");
  let color = 
    ["#ffb3ba",
    "#ffdfba",
    "#ffffba",
    "#baffc9",
    "#bae1ff"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(changeBackground, 1000);