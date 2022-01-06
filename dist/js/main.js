(()=>{"use strict";const e=({formId:e,someElem:t=[]})=>{const o=document.getElementById(e),r=document.createElement("div");try{if(!o)throw new Error("что-то сломалось");o.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=o.querySelectorAll("input"),l=new FormData(o),n={};var c;r.textContent="Loading...",o.append(r),l.forEach(((e,t)=>{n[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?n[e.id]=t.textContent:"input"===e.type&&(n[e.id]=t.value)})),(c=n,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{e.forEach((e=>{r.textContent="Thank you!",e.value=""}))})).catch((e=>{r.textContent="Oops, error"}))})()}))}catch(e){console.log(e.message)}};(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds"),l=e=>e>0&&e<10?"0"+e:e,n=()=>{let e,t,o,r=(new Date("31 december 2021").getTime()-(new Date).getTime())/1e3;return e=Math.floor(r/60/60),t=Math.floor(r/60%60),o=Math.floor(r%60),{timeRemaining:r,hours:e,minutes:t,seconds:o}},c=()=>{let e=n();t.textContent=l(e.hours),o.textContent=l(e.minutes),r.textContent=l(e.seconds)};if(n().timeRemaining>0){c();let e=setInterval((()=>{n.dateNow>n.dateStop?clearInterval(e):c()}),1e3)}else t.style.color="red",o.style.color="red",r.style.color="red"})(),(()=>{document.querySelector(".menu");const e=document.querySelector("menu"),t=(e.querySelector(".close-btn"),e.querySelectorAll("ul>li>a")),o=document.querySelector("body"),r=t=>{e.classList.toggle("active-menu")};o.addEventListener("click",(e=>{(e.target.closest(".menu")||e.target.closest(".close-btn"))&&r()})),t.forEach((e=>{e.addEventListener("click",(e=>{r()}))}))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),o=t.querySelector(".popup-content");t.querySelector(".popup-close"),o.style.left="50%",o.style.transform="translateX(-50%)",e.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),document.body.clientWidth>768?(({timing:e,draw:t,duration:o})=>{let r=performance.now();requestAnimationFrame((function l(n){let c=(n-r)/o;c>1&&(c=1);let a=e(c);t(a),c<1&&requestAnimationFrame(l)}))})({duration:1e3,timing:e=>e,draw(e){t.style.top=0*e+"%",t.style.display="block",t.style.opacity=e,o.style.top=50*e+"%",o.style.transform=`translateY(${-50*e}%) translateX(-50%)`}}):t.style.display="block"}))})),t.addEventListener("click",(e=>{(e.target.classList.contains("popup")||e.target.classList.contains("popup-close"))&&(t.style.display="none")}))})(),(()=>{const e=document.querySelector("menu").querySelectorAll("a");for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const o=t.getAttribute("href");document.querySelector(o)&&document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelector(".calc-block"),t=(e.querySelectorAll("input[type=text]"),document.querySelector("#form1-name")),o=document.querySelector("#form2-name"),r=document.querySelector("#form3-name"),l=document.querySelector(".mess"),n=document.querySelectorAll("input[type=email]"),c=document.querySelectorAll("input[type=tel]");e.addEventListener("input",(e=>{"text"===e.target.type&&(e.target.value=e.target.value.replace(/[^\d]/g,""))})),n.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^a-zA-Z\@\-\_\.\!\~\*\'/]/g,"")}))})),c.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^0-9\(\)\-]/g,"")}))})),t.addEventListener("input",(()=>{"Ваше имя"===t.getAttribute("placeholder")&&(t.value=t.value.replace(/[^а-яА-Я\s\-]/g,""))})),o.addEventListener("input",(()=>{"Ваше имя"===t.getAttribute("placeholder")&&(t.value=t.value.replace(/[^а-яА-Я\s\-]/g,""))})),r.addEventListener("input",(()=>{"Ваше имя"===t.getAttribute("placeholder")&&(t.value=t.value.replace(/[^а-яА-Я\s\-]/g,""))})),l.addEventListener("input",(()=>{"Ваше сообщение"===l.getAttribute("placeholder")&&(l.value=l.value.replace(/[^а-яА-Я\s\-]/g,""))}))})(),(()=>{const e=document.querySelectorAll(".service-tab"),t=document.querySelector(".service-header"),o=document.querySelectorAll(".service-header-tab");t.addEventListener("click",(t=>{if(t.target.closest(".service-header-tab")){const r=t.target.closest(".service-header-tab");o.forEach(((t,o)=>{t===r?(t.classList.add("active"),e[o].classList.remove("d-none")):(t.classList.remove("active"),e[o].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=[],r=document.querySelector(".portfolio-dots");let l=0,n=0;const c=(e,t,o)=>{e[t].classList.remove(o)},a=(e,t,o)=>{e[t].classList.add(o)};for(let e=t.length-1;e>=0;e--){let t=document.createElement("li");t.classList.add("dot"),o[e]=t,r.insertAdjacentElement("afterbegin",o[e])}o[0].classList.add("dot-active");const s=()=>{c(t,l,"portfolio-item-active"),c(o,l,"dot-active"),l++,l===t.length&&(l=0),a(t,l,"portfolio-item-active"),a(o,l,"dot-active")},u=(e=1500)=>{n=setInterval(s,2e3)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(c(t,l,"portfolio-item-active"),c(o,l,"dot-active"),e.target.matches("#arrow-right")?l++:e.target.matches("#arrow-left")?l--:e.target.classList.contains("dot")&&o.forEach(((t,o)=>{e.target===t&&(l=o)})),l>=t.length&&(l=0),l<0&&(l=t.length-1),a(t,l,"portfolio-item-active"),a(o,l,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(n)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&u(2e3)}),!0),u(2e3)})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),l=document.querySelector(".calc-count"),n=document.querySelector(".calc-day");let c=document.querySelector("#total");t.addEventListener("input",(t=>{t.target!==o&&t.target!==r&&t.target!==l&&t.target!==n||(()=>{const t=+o.options[o.selectedIndex].value,a=+r.value;let s=1,u=0,d=1;l.value>1&&(s+=+l.value/10),n.value&&n.value<5?d=2:n.value&&n.value<10&&(d=1.5),o.value||(r.value="",l.value="",n.value="",r.placeholder="Общая площадь*",l.placeholder="Количество пемещений",n.placeholder="Срок исполнения (в днях)"),u=o.value&&r.value?e*t*a*s*d:0,c.textContent=u})()}))})(),e({formId:"form1",someElem:[{type:"block",id:"total"}]}),e({formId:"form2"})})();