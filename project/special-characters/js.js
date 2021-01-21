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

  document.addEventListener("scroll", more);
  document.addEventListener("scroll", ADinit);
  document.addEventListener("scroll", showAD);
  document.addEventListener("mousemove", more);
  document.addEventListener("mousemove", ADinit);

  async function more() {
    document.removeEventListener("mousemove", more);
    document.removeEventListener("scroll", more);
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
        case "s19":
        case "s20":
        case "s21":
        case "s22":
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
      gtag("event", "click", {
        'event_label': self.getAttribute("data-character")
      });
    });
  });
}
function ADinit() {
  document.removeEventListener("scroll", ADinit);
  document.removeEventListener("mousemove", ADinit);
  if(window.innerWidth>800){
    ad.innerHTML = `<ins class="adsbygoogle" style="display: block; height: 600px" data-ad-client="ca-pub-8629612872829139" data-ad-slot="4731510363" data-full-width-responsive="true" data-ad-format="auto"></ins>`;
  }else{
    adFooter.style.display = 'block';
    adFooter.innerHTML = `<ins class="adsbygoogle" style="display:block; height:50px;" data-ad-client="ca-pub-8629612872829139" data-ad-slot="6337054312"></ins>`;
  }
  (adsbygoogle = window.adsbygoogle || []).push({});
}

function showAD() {
  let scrollY = window.scrollY;
  if (scrollY > 300) {
    document.removeEventListener("scroll", showAD);
    adIn.forEach((e) => {
      e.innerHTML = `<ins class="adsbygoogle in" style="display:block; height:280px;" data-ad-client="ca-pub-8629612872829139" data-ad-slot="1963329493" data-ad-format="auto" data-full-width-responsive="true"></ins>`;
      (adsbygoogle = window.adsbygoogle || []).push({});
    });
  }
}

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

function optCLS() {
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
}

})();
