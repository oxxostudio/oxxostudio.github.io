!async function(){const e=location.href,t=location.origin,r=location.pathname,i=await(()=>fetch("/json/pageList.json").then(e=>e.json()).then(e=>e))();let o;const s=document.querySelector(".arrow-left"),n=document.querySelector(".arrow-right"),l=document.querySelector(".previous-article span"),c=document.querySelector(".previous-article b"),a=document.querySelector(".next-article span"),u=document.querySelector(".next-article b");i.every((e,t)=>e.site!=r||(document.querySelector(".tag").classList.add(e.tag),document.querySelector("h1").setAttribute("data-date",e.date),o=(e=>{let t;return t="page"!=e?i.filter(t=>{if(t.tag==e)return t}):i})(e.tag),0==t?(s.setAttribute("href",i[1].site),s.setAttribute("title",i[1].title),a.innerHTML="這是最新的文章",c.innerHTML=`<a href="${i[1].site}">${i[1].title}</a>`):t==i.length-1?(n.setAttribute("href",i[t-1].site),n.setAttribute("title",i[t-1].title),l.innerHTML="這是第一篇文章",u.innerHTML=`<a href="${i[t-1].site}">${i[t-1].title}</a>`):(n.setAttribute("href",i[t-1].site),n.setAttribute("title",i[t-1].title),u.innerHTML=`<a href="${i[t-1].site}">${i[t-1].title}</a>`,s.setAttribute("href",i[t+1].site),s.setAttribute("title",i[t+1].title),c.innerHTML=`<a href="${i[t+1].site}">${i[t+1].title}</a>`),!1));const d=document.getElementById("other-articles");for(let e=0;e<5;e++){let r=o.length;if(r<=e)break;let i=Math.floor(Math.random()*r),s=o.splice(i,1)[0],n=s.img||s.site.replace(".html",".jpg").replace("articles","img/articles");d.innerHTML=d.innerHTML+`<a href="${s.site}" title="${s.title}">\n    <div><img class="lazy" height="1" width="1" data-src="${t}${n}" alt="${s.title}">\n    <b>${s.title}</b>\n    </div></a>`}document.querySelector(".icon-facebook").setAttribute("href",`http://www.facebook.com/share.php?u=${e}`),document.querySelector(".icon-google").setAttribute("href",`https://plus.google.com/share?url=${e}`),document.querySelector(".icon-twitter").setAttribute("href",`http://twitter.com/home/?status=${e}`),document.querySelector(".goto-top").addEventListener("click",()=>{document.documentElement.scrollTop=0});const h=document.querySelector(".social-icon");window.addEventListener("scroll",()=>{this.pageYOffset>150?(n.classList.add("show"),s.classList.add("show"),h.classList.add("show")):(n.classList.remove("show"),s.classList.remove("show"),h.classList.remove("show"))});const m=document.querySelector(".recommend"),f=document.querySelector(".recommend ul");for(let e=0;e<5;e++)f.innerHTML=f.innerHTML+`<li><a href="${i[e].site}?utm_source=recommend">${i[e].title}</a></li>`;const g=()=>{this.pageYOffset>document.body.clientHeight/2?m.classList.add("show"):m.classList.remove("show")};window.addEventListener("scroll",g),document.querySelector(".closeBtn").addEventListener("click",()=>{m.classList.remove("show"),window.removeEventListener("scroll",g)});const L=()=>{let e=this.pageYOffset,t=this.innerHeight,r=document.querySelectorAll(".lazy");r.length>0?r.forEach(r=>{let i=r.getBoundingClientRect().top;if(e+t-i>0){let e=r.getAttribute("data-src");r.setAttribute("src",e),r.removeAttribute("data-src"),r.classList.remove("lazy")}}):window.removeEventListener("scroll",L)};L(),window.addEventListener("scroll",L)}();