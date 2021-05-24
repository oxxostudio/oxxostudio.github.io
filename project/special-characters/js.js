~(async function () {
  //setTimeout(optCLS, 0);
  const menu = document.getElementById("menu");
  const aside = document.querySelector("aside");
  const ad = document.querySelector(".ad");
  const adFooter = document.querySelector(".ad-footer");
  const adIn = document.querySelectorAll(".ad-content.in");
  const main = document.querySelector("main");

  const windowWidth = window.innerWidth;
  const asideX = aside.offsetLeft + main.offsetLeft;
  const adX = ad.offsetLeft + main.offsetLeft;
  
  let adShow = false;

  copyToClipBoard(".copy");

  menu.addEventListener("click", function () {
    menu.classList.toggle("open");
    aside.classList.toggle("show");
  });
  const aside_a = document.querySelectorAll("aside a");
  aside_a.forEach((e) => {
    e.addEventListener("click", () => {
      aside.classList.remove("show");
      menu.classList.remove("open");
    });
  });

  document.addEventListener("scroll", showMore);
  document.addEventListener("scroll", more2);
  document.addEventListener("mousemove", showMore);


  async function showMore(){
    if(window.innerWidth>800){
      document.removeEventListener("mousemove", showMore);
      document.removeEventListener("scroll", showMore);
      if(!adShow){
        ADinit();
      }
      more();
    }
    else{
      if(window.scrollY>250){
        if(!adShow){
          ADinit();
        }
      }
      if(window.scrollY>600){
        document.removeEventListener("mousemove", showMore);
        document.removeEventListener("scroll", showMore);
        more();
      }
    }
  }

  async function more() {
    const list = await fetch("list.json")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        return result;
      });
    for (let i in list) {
      let symbol;
      let dom = document.querySelector(`.${i}`);
      let domHTML = "";
      switch (i) {
        case "s21":
        case "s22":
        case "s23":
          symbol = list[i].split(" ");
          break;
        default:
          symbol = list[i].split("");
          break;
      }
      symbol.forEach((e) => {
        domHTML =
          domHTML + `<span class="copy" data-character="${e}">${e}</span> `;
      });
      dom.innerHTML = domHTML;
    }
    copyToClipBoard(".copy");
  }

  async function more2() {
    if(window.scrollY>5000){
      document.removeEventListener("scroll", more2);
      const list2 = await fetch("list2.json")
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          return result;
        });
      for (let i in list2) {
        let symbol;
        let dom = document.querySelector(`.${i}`);
        let domHTML = "";
        switch (i) {
          case "s19":
          case "s20":
            symbol = list2[i].split(" ");
            break;
          default:
            symbol = list2[i].split("");
            break;
        }
        symbol.forEach((e) => {
          domHTML =
            domHTML + `<span class="copy" data-character="${e}">${e}</span> `;
        });
        dom.innerHTML = domHTML;
      }
      copyToClipBoard(".copy");
    }
  }

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
      if(!adShow){
        setTimeout(ADinit, 500);
      }
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
      gtag("event", "click", {
        'event_label': self.getAttribute("data-character")
      });
    });
  });
}
function ADinit() {
  adShow  = true;
  let element = document.createElement("script");
  element.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  document.body.appendChild(element);
  if(window.innerWidth>800){
    ad.innerHTML = `<ins class="adsbygoogle" style="display: block; height: 600px" data-ad-client="ca-pub-8629612872829139" data-ad-slot="1963329493" data-full-width-responsive="true" data-ad-format="auto"></ins>`;
  }else{
    adFooter.style.display = 'block';
    adFooter.innerHTML = `<ins class="adsbygoogle" style="display:block; height:50px;" data-ad-client="ca-pub-8629612872829139" data-ad-slot="3027578274"></ins>`;
  }
  (adsbygoogle = window.adsbygoogle || []).push({});

  adIn.forEach((e) => {
    e.innerHTML = `<ins class="adsbygoogle in" style="display:block; height:280px;" data-ad-client="ca-pub-8629612872829139" data-ad-slot="1963329493" data-ad-format="auto" data-full-width-responsive="true"></ins>`;
    (adsbygoogle = window.adsbygoogle || []).push({});
  });
}

// function showAD() {
//   let scrollY = window.scrollY;
//   if (scrollY > 300) {
//     document.removeEventListener("scroll", showAD);
//     adIn.forEach((e) => {
//       e.innerHTML = `<ins class="adsbygoogle in" style="display:block; height:280px;" data-ad-client="ca-pub-8629612872829139" data-ad-slot="1963329493" data-ad-format="auto" data-full-width-responsive="true"></ins>`;
//       (adsbygoogle = window.adsbygoogle || []).push({});
//     });
//   }
// }

document.addEventListener("scroll", adPos);
function adPos() {
  let windowScrollTop = window.scrollY;
  if (windowScrollTop >= 75) {
    ad.classList.add("fixed");
    aside.classList.add("fixed");
    if(windowWidth > 640){
      ad.style.left = adX + 'px';
      ad.style.right = 'auto';
      aside.style.left = asideX + 'px';
      aside.style.right = 'auto';
    }
  } else {
    ad.classList.remove("fixed");
    aside.classList.remove("fixed");
    if(windowWidth > 640){
      ad.style.removeProperty('left');
      ad.style.removeProperty('right');
      aside.style.removeProperty('left');
      aside.style.removeProperty('right');
    }
  }
}

/* function optCLS() {
  const content = document.querySelector(".content");
  const content_width = content.offsetWidth;
  const box = document.querySelectorAll(".box");
  const h3 = document.querySelectorAll("h3");
  let wn;
  if (content_width > 640) {
    wn = ~~(content_width / 44);
  } else {
    wn = ~~((content_width - 18) / 50);
  }
  h3.forEach((e) => {
    e.setAttribute("hidden", "");
  });
  box.forEach((e) => {
    e.setAttribute("hidden", "");
    const n = e.getAttribute("num");
    const h = Math.floor(n / wn) + 1;

    if (content_width > 640) {
      e.style.height = `${h * 45}px`;
    } else {
      e.style.height = `${h * 50}px`;
    }
  });
  box.forEach((e) => {
    e.removeAttribute("hidden");
  });
  h3.forEach((e) => {
    e.removeAttribute("hidden");
  });
} */

})();
