const year = document.getElementById('year');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const days = document.getElementById('days');

const loading = document.getElementById('loading');
const countdown = document.getElementById('countdown');


const currentTime = new Date().getFullYear();
const newDate =  new Date(`1 january ${currentTime + 1} 00:00:00`);

year.innerText = currentTime + 1;


function updateTime() {
 const time = new Date();
 const Diff = newDate - time;

 const d = Math.floor(Diff/ 1000/ 60/ 60/ 24);
 const h = Math.floor(Diff/ 1000/ 60/ 60) % 24;
 const m = Math.floor(Diff/ 1000/ 60) % 60;
 const s = Math.floor(Diff/ 1000) % 60;

 days.innerHTML = d;
 hours.innerHTML = h < 10 ? '0' + h : h;
 minutes.innerHTML = m < 10 ? '0' + m : m;
 seconds.innerHTML = s < 10 ? '0' + s : s;
}

setTimeout( () => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);

setInterval(updateTime, 1000);