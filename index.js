import{a as f,S as u,i as a}from"./assets/vendor-C1DvvBV_.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",m="57604076-2ca9fc931dc441a1039dbd39e";async function p(o){return(await f.get(d,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new u(".gallery a",{captionsData:"alt",captionDelay:250});function g(o){const s=o.map(t=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
        <img class="gallery-image"
        src="${t.webformatURL}" 
        alt="${t.tags}"
        />
        </a>
        <ul class="info">
        <li class="info-item">
        <p class="info-title">Likes</p>
        <p class="info-number">${t.likes}</p>
        </li>
        <li class="info-item">
        <p class="info-title">Views</p>
        <p class="info-number">${t.views}</p>
        </li>
        <li class="info-item">
        <p class="info-title">Comments</p>
        <p class="info-number">${t.comments}</p>
        </li>
        <li class="info-item">
        <p class="info-title">Downloads</p>
        <p class="info-number">${t.downloads}</p>
        </li>
        </ul>
        </li>
        `).join("");l.insertAdjacentHTML("beforeend",s),y.refresh()}function h(){l.innerHTML=""}function L(){c.classList.add("is-hidden")}function b(){c.classList.remove("is-hidden")}const w=document.querySelector(".form");w.addEventListener("submit",async o=>{o.preventDefault();const s=o.target.elements["search-text"].value;if(s.trim()===""){a.warning({message:"Введіть дані для пошуку"});return}b(),h();try{const{hits:t}=await p(s);t.length===0?a.error({message:"Sorry, there are no images matching your search query. Please try again!"}):g(t)}catch(t){a.error({message:t.message})}finally{L()}});
//# sourceMappingURL=index.js.map
