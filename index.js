import{a as m,S as y,i}from"./assets/vendor-Db2TdIkw.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="39486318-698ac6813de625d5bba6b85f3",h="https://pixabay.com/api/";async function b(s){const r={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get(h,{params:r})).data}const l=document.querySelector(".gallery"),u=document.querySelector(".loader");let L=new y(".gallery a",{captionsData:"alt",captionDelay:250});function w(s){const r=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:a,comments:p,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${a}</p>
          <p><b>Comments:</b> ${p}</p>
          <p><b>Downloads:</b> ${f}</p>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",r),L.refresh()}function S(){l.innerHTML=""}function q(){u.classList.remove("hidden")}function c(){u.classList.add("hidden")}const d=document.querySelector(".form"),v=d.elements["search-text"];d.addEventListener("submit",async s=>{s.preventDefault();const r=v.value.trim();if(!r){i.warning({message:"Please enter a search query!",position:"topRight"});return}S(),q();try{const o=await b(r);if(c(),o.hits.length===0){i.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}w(o.hits)}catch(o){c(),i.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(o)}});
//# sourceMappingURL=index.js.map
