const heroSec=document.querySelector(".sec-hero"),header=document.querySelector(".header"),links=window.document.querySelectorAll("a"),togglerBtn=window.document.querySelector(".toggler-btn"),headerContent=window.document.querySelector(".header__content"),currentYearElements=window.document.querySelectorAll(".current-year"),scrollToTopBtn=window.document.querySelector(".scroll-to-top-btn");let headerHeight=header.getBoundingClientRect().height;togglerBtn.addEventListener("click",(()=>{headerContent.classList.toggle("open"),window.setTimeout((()=>{togglerBtn.blur()}),1e3)})),links.forEach((e=>{e.addEventListener("click",(t=>{const o=e.getAttribute("href");if(headerHeight=header.getBoundingClientRect().height,"#"===o)t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"});else if(1!==o.lenght&&o.startsWith("#")){t.preventDefault();const e=document.querySelector(o);window.scrollTo({top:""+(e.offsetTop-headerHeight),behavior:"smooth"})}window.setTimeout((()=>{e.blur()}),1e3),headerContent.classList.contains("open")&&headerContent.classList.remove("open")}))}));const currentYear=(new Date).getFullYear();currentYearElements.forEach((e=>{e.textContent=currentYear})),scrollToTopBtn.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"}),window.setTimeout((()=>{scrollToTopBtn.blur()}),1e3)}));const obs=new IntersectionObserver((e=>{const t=e[0];headerHeight=header.getBoundingClientRect().height,!1===t.isIntersecting?(header.classList.add("sticky"),scrollToTopBtn.classList.add("show")):(header.classList.remove("sticky"),scrollToTopBtn.classList.remove("show"))}),{root:null,threshold:0});obs.observe(heroSec);
//# sourceMappingURL=index.3f087e07.js.map