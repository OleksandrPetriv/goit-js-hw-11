import{a as f,S as u,i as a}from"./assets/vendor-C1DvvBV_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const p="https://pixabay.com/api/",d="57604076-2ca9fc931dc441a1039dbd39e";async function m(o){return(await f.get(p,{params:{key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),n=document.querySelector(".loader"),y=new u(".gallery a",{captionsData:"alt",captionDelay:250});function g(o){const r=o.map(t=>`
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
        `).join("");n.textContent="Loading images, please wait...",c.insertAdjacentHTML("beforeend",r),y.refresh()}function h(){c.innerHTML=""}function L(){n.classList.add("is-hidden")}function b(){n.classList.remove("is-hidden")}const w=document.querySelector(".form");w.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements["search-text"].value;if(r.trim()===""){a.warning({message:"Введіть дані для пошуку"});return}b(),h();try{const{hits:t}=await m(r);t.length===0?a.error({class:"css-error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):g(t)}catch(t){a.error({message:t.message})}finally{L()}});
//# sourceMappingURL=index.js.map
