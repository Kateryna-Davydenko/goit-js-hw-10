import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as m,i as f}from"./assets/vendor-77e16229.js";function h(e){const u=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),i=Math.floor(e%864e5%36e5/6e4),l=Math.floor(e%864e5%36e5%6e4/1e3);return{days:u,hours:c,minutes:i,seconds:l}}const n=document.querySelector("button"),p=document.querySelector("span.value[data-seconds]"),y=document.querySelector("span.value[data-minutes]"),S=document.querySelector("span.value[data-hours]"),b=document.querySelector("span.value[data-days]");let s;n.disabled=!0;const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){s=e[0],s.getTime()<Date.now()?(n.disabled=!0,f.error({position:"topRight",messageColor:"white",backgroundColor:"red",message:"Please choose a date in the future"})):n.disabled=!1}},r=document.querySelector("#datetime-picker");m(r,v);function d({days:e,hours:o,minutes:t,seconds:a}){p.textContent=String(a).padStart(2,"0"),y.textContent=String(t).padStart(2,"0"),S.textContent=String(o).padStart(2,"0"),b.textContent=String(e).padStart(2,"0")}function g(e){r.disabled=!0,n.disabled=!0;const o=setInterval(()=>{let t=s-Date.now();if(t<=0){r.disabled=!1,clearInterval(o),d({days:0,hours:0,minutes:0,seconds:0});return}const a=h(t);d(a)},1e3)}n.addEventListener("click",g);
//# sourceMappingURL=commonHelpers.js.map