let startbt = document.getElementById("start");
let stopbt = document.getElementById("stop");
let resetbt = document.getElementById("reset");

let n = 0;
let l = document.getElementById("laps");

let [milis, secs, mins, hrs] = [0, 0, 0, 0];

startbt.addEventListener("click", () => {
  timer = true;
  stopWatch();
});

stopbt.addEventListener("click", () => {
  timer = false;
  n = n + 1;
  addLap();
});

resetbt.addEventListener("click", () => {
  timer = false;
  [milis, secs, mins, hrs] = [0, 0, 0, 0];
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("ml").innerHTML = "00";

  document.getElementById("laps").innerHTML = "";
  document.getElementById("times").innerHTML = "";

  n = 0;
});

function stopWatch() {
  if (timer) {
    milis++;

    if (milis == 100) {
      secs++;
      milis = 0;
    }

    if (secs == 60) {
      mins++;
      secs = 0;
    }

    if (mins == 60) {
      hrs++;
      mins = 0;
    }

    let hrstr = hrs.toString();
    let minstr = mins.toString();
    let secstr = secs.toString();
    let milistr = milis.toString();

    if (milis < 10) {
      milistr = "0" + milistr;
    }
    if (secs < 10) {
      secstr = "0" + secstr;
    }
    if (mins < 10) {
      minstr = "0" + minstr;
    }
    if (hrs < 10) {
      hrstr = "0" + hrstr;
    }

    document.getElementById("hr").innerHTML = hrstr;
    document.getElementById("min").innerHTML = minstr;
    document.getElementById("sec").innerHTML = secstr;
    document.getElementById("ml").innerHTML = milistr;

    setTimeout(stopWatch, 10);
  }
}

function addLap() {
  let lt = hrs + ":" + mins + ":" + secs + ":" + milis;

  if (n == 1) {
    document.getElementById("times").innerHTML = "Laps : ";
  }

  console.log(lt);

  l.innerHTML = l.innerHTML + "<p>" + lt + "</p>";
}
