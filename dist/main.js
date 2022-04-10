(()=>{"use strict";const e=()=>fetch("http://localhost:3000/goods").then((e=>{if(e.ok)return e.json();throw new Error(`Данные не были получены, ошибка ${data.status} ${data.statusText}`)})),t=e=>{const t=document.querySelector(".goods");t.textContent="",localStorage.setItem("goods",JSON.stringify(e)),e.forEach((e=>{t.insertAdjacentHTML("beforeend",`<div class="col-12 col-md-6 col-lg-4 col-xl-3">\n        <div class="card" data-key="${e.id}">\n            ${e.sale?'<div class="card-sale">🔥Hot Sale🔥</div>':""}\n            <div class="card-img-wrapper">\n                <span class="card-img-top"\n                    style="background-image: url('${e.img}')"></span>\n            </div>\n            <div class="card-body justify-content-between">\n                <div class="card-price">${e.price} ₽</div>\n                <h5 class="card-title">${e.title}</h5>\n                <button class="btn btn-primary">В корзину</button>\n            </div>\n        </div>\n    </div>`)}))},c=(e,t,c)=>e.filter((e=>""===t&&""===c?e:""!=t&&""!=c?e.price>+t&&e.price<+c:""!=t&&""===c?e.price>+t:""===t&&""!==c?e.price<+c:void 0)),a=e=>{const t=document.querySelector(".cart-wrapper");t.textContent="",0===e.length?t.insertAdjacentHTML("beforeend",'<div id="cart-empty">\n        Ваша корзина пока пуста\n    </div>'):e.forEach((e=>{t.insertAdjacentHTML("beforeend",`<div class="card" data-key="${e.id}">\n            ${e.sale?'<div class="card-sale">🔥Hot Sale🔥</div>':""}\n            <div class="card-img-wrapper">\n                <span class="card-img-top"\n                    style="background-image: url('${e.img}')"></span>\n            </div>\n            <div class="card-body justify-content-between">\n                <div class="card-price">${e.price} ₽</div>\n                <h5 class="card-title">${e.title}</h5>\n                <button class="btn btn-primary">Удалить</button>\n            </div>\n        </div>`)}))};e().then((e=>{t(e)})),(()=>{const c=document.querySelector(".catalog-button"),a=document.querySelector(".catalog"),n=document.querySelectorAll(".catalog li");let r=!1;c.addEventListener("click",(e=>{r=!r,a.style.display=r?"block":"none"})),n.forEach((c=>{c.addEventListener("click",(a=>{const n=c.textContent;e().then((e=>{var c;t((c=n,e.filter((e=>e.category===c))))}))}))}))})(),(()=>{const a=document.getElementById("min"),n=document.getElementById("max");document.getElementById("discount-checkbox"),document.querySelector(".filter-check_checkmark"),a.addEventListener("input",(()=>{e().then((e=>{t(c(e,a.value,n.value))}))})),n.addEventListener("input",(()=>{e().then((e=>{t(c(e,a.value,n.value))}))}))})(),(()=>{const c=document.getElementById("discount-checkbox"),a=document.querySelector(".filter-check_checkmark");c.addEventListener("change",(()=>{c.checked?a.classList.add("checked"):a.classList.remove("checked"),e().then((e=>{var a,n;t((a=e,n=c.checked,a.filter((e=>n?!0===e.sale:e))))}))}))})(),(()=>{const e=document.getElementById("cart"),t=document.querySelector(".cart"),c=document.querySelector(".cart-close"),n=document.querySelector(".goods"),r=document.querySelector(".cart-wrapper"),o=document.querySelector(".cart-total > span"),s=document.querySelector(".cart-confirm"),l=document.querySelector(".counter");e.addEventListener("click",(e=>{const c=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[];t.style.display="flex",a(c),o.textContent=c.reduce(((e,t)=>e+t.price),0)})),c.addEventListener("click",(e=>{t.style.display="none"})),n.addEventListener("click",(e=>{if(e.target.classList.contains("btn-primary")){const t=e.target.closest(".card").dataset.key,c=JSON.parse(localStorage.getItem("goods")),a=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],n=c.find((e=>e.id===+t));a.push(n),localStorage.setItem("cart",JSON.stringify(a))}d()}));const d=()=>{const e=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[];l.textContent=e.length};r.addEventListener("click",(e=>{if(e.target.classList.contains("btn-primary")){const t=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],c=e.target.closest(".card").dataset.key,n=t.findIndex((e=>e.id===+c));t.splice(n,1),localStorage.setItem("cart",JSON.stringify(t)),a(t),o.textContent=t.reduce(((e,t)=>e+t.price),0)}d()})),s.addEventListener("click",(()=>{(e=>fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((e=>e.json())))(localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]).then((()=>{localStorage.removeItem("cart"),a([]),o.textContent=0,d(),t.style.display="none"}))}))})(),document.querySelector(".search-wrapper_input").addEventListener("input",(c=>{const a=c.target.value;e().then((e=>{t(((e,t)=>e.filter((e=>e.title.toLowerCase().includes(t.toLowerCase()))))(e,a))}))}))})();