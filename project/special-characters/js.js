~(async function () {
  //setTimeout(optCLS, 0);
  const menu = document.getElementById("menu");
  const aside = document.querySelector("aside");


  menu.addEventListener("click", function () {
    menu.classList.toggle('open');
    aside.classList.toggle("show");
  });
  const aside_a = document.querySelectorAll('aside a');
  aside_a.forEach(e => {
    e.addEventListener('click',()=>{
      aside.classList.remove('show');
      menu.classList.remove('open');
    });
  });

  document.addEventListener("scroll", more);
  document.addEventListener("scroll", showAD);
  document.addEventListener("mousemove", more);
  document.addEventListener("mousemove", showAD);

  async function more() {
    document.removeEventListener("mousemove", more);
    document.removeEventListener("scroll", more);
    const list = await fetch('list.json')
    .then(res => {
      return res.json();
    }).then(result =>{
      return result;
    });
    for(let i in list){
      let symbol;
      let dom = document.querySelector(`.${i}`);
      let domHTML = '';
      if(i != 's19'){
        symbol = list[i].split('');
      }else{
        symbol = list[i].split(' ');
      }
      symbol.forEach(e => {
        domHTML = domHTML + `<span class="copy" data-character="${e}">${e}</span> `;
      });
      dom.innerHTML = domHTML;
    }
    copyToClipBoard(".copy");
  }

})();

function copyToClipBoard(className) {
  new ClipboardJS(className, {
    text: function (trigger) {
      return trigger.getAttribute("data-character");
    },
  });

  const copy = document.querySelectorAll(className);
  copy.forEach((ele) => {
    let self = ele;
    self.addEventListener("click", function () {
      let now = document.querySelector(".now");
      if (now) {
        now.classList.add("selected");
        now.classList.remove("now");
      }
      if (self.classList.contains("selected")) {
        self.classList.add("now");
        self.classList.remove("selected");
      } else {
        self.classList.add("now");
      }
      ga("send", "event", self.getAttribute("data-character"), "click");
    });
  });
}
function showAD() {
  let element = document.createElement("script");
  element.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  document.body.appendChild(element);
  document.querySelectorAll('.adsbygoogle').forEach(e => {
    (adsbygoogle = window.adsbygoogle || []).push({});
  });
  document.removeEventListener("scroll", showAD);
  document.removeEventListener("mousemove", showAD);
}

document.addEventListener("scroll", adPos);
const aside = document.querySelector("aside");
const ad = document.querySelector(".ad");
function adPos() {
  let windowScrollTop = window.scrollY;
  if (windowScrollTop >= 75) {
    ad.classList.add("fixed");
    aside.classList.add("fixed");
  } else {
    ad.classList.remove("fixed");
    aside.classList.remove("fixed");
  }
}

function optCLS() {
  const content = document.querySelector(".content");
  const content_width = content.offsetWidth;
  const box = document.querySelectorAll(".box");
  const h3 = document.querySelectorAll("h3");
  let wn;
  if(content_width>640){
    wn = ~~(content_width / 44);
  }else{
    wn = ~~((content_width-18) / 40);
  }
  h3.forEach((e) => {
    e.setAttribute("hidden", "");
  });
  box.forEach((e) => {
    e.setAttribute("hidden", "");
    const n = e.getAttribute("num");
    const h = Math.floor(n / wn) + 1;
    e.style.height = `${h * 45}px`;
  });
  box.forEach((e) => {
    e.removeAttribute("hidden");
  });
  h3.forEach((e) => {
    e.removeAttribute("hidden");
  });
}
