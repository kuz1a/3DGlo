(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),m=e=>e>0&&e<10?"0"+e:e,s=()=>{let e,t,n,o=(new Date("23 december 2021").getTime()-(new Date).getTime())/1e3;return e=Math.floor(o/60/60),t=Math.floor(o/60%60),n=Math.floor(o%60),{timeRemaining:o,hours:e,minutes:t,seconds:n}},i=()=>{let e=s();t.textContent=m(e.hours),n.textContent=m(e.minutes),o.textContent=m(e.seconds)};if(s().timeRemaining>0){i();let e=setInterval((()=>{s.dateNow>s.dateStop?clearInterval(e):i()}),1e3)}})(),console.log("Two Module")})();