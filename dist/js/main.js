(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds"),o=e=>e>0&&e<10?"0"+e:e,l=()=>{let e,t,n,r=(new Date("23 december 2021").getTime()-(new Date).getTime())/1e3;return e=Math.floor(r/60/60),t=Math.floor(r/60%60),n=Math.floor(r%60),{timeRemaining:r,hours:e,minutes:t,seconds:n}},c=()=>{let e=l();t.textContent=o(e.hours),n.textContent=o(e.minutes),r.textContent=o(e.seconds)};if(l().timeRemaining>0){c();let e=setInterval((()=>{l.dateNow>l.dateStop?clearInterval(e):c()}),1e3)}else t.style.color="red",n.style.color="red",r.style.color="red"})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),r=t.querySelectorAll("ul>li>a"),o=e=>{t.classList.toggle("active-menu")};e.addEventListener("click",o),n.addEventListener("click",o),r.forEach((e=>{e.addEventListener("click",(e=>{o()}))}))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),n=t.querySelector(".popup-content"),r=t.querySelector(".popup-close");n.style.left="50%",n.style.transform="translateX(-50%)",t.style.display="block",t.style.transform="translateY(-100%)";let o,l=100;const c=()=>{o=requestAnimationFrame(c),l--,l>=0?t.style.transform=`translateY(${l}%)`:cancelAnimationFrame(o)};e.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),document.body.clientWidth>768?requestAnimationFrame(c):t.style.transform="translateY(0)"}))})),r.addEventListener("click",(e=>{e.preventDefault(),l=100,t.style.transform="translateY(-100%)"}))})(),(()=>{const e=document.querySelectorAll("a");for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const n=t.getAttribute("href");document.querySelector(n)&&document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}))})()})();