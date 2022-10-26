function time() {
  let dateTime = new Date();
  let hrs = dateTime.getHours();
  let min = dateTime.getMinutes();
  let sec = dateTime.getSeconds();

  let hour_range = document.querySelector("#hour");
  let hour = document.querySelector(".hr");

  let mintes_range = document.querySelector("#mintes");
  let minutes = document.querySelector(".min");

  let seconds_range = document.querySelector("#seconds");
  let seconds = document.querySelector(".sec");

  hour_range.max = 86400;
  hour.innerHTML = hrs + "HR";
  hour_range.value = hrs * 3600;
  console.log(hour_range.value);

  mintes_range.max = 3600;
  minutes.innerHTML = min + "MIN";
  mintes_range.value = min * 59;

  seconds_range.max = 59;
  seconds.innerHTML = sec + "SEC";
  seconds_range.value = sec;
}

setInterval(time, 1000);
