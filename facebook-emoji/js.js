~(async function () {
  //setTimeout(optCLS, 0);
  const menu = document.getElementById("menu");
  const aside = document.querySelector("aside");
  const ad = document.querySelector(".ad");
  const adIn = document.querySelectorAll(".adsbygoogle.in");
  const main = document.querySelector("main");
  const windowWidth = window.innerWidth;
  const asideX = aside.offsetLeft + main.offsetLeft;
  const adX = ad.offsetLeft + main.offsetLeft;
  let webp;

  function creatBG(uri, r){
    let style = document.createElement("style");
    let styleContent;
    if(r){
      styleContent = document.createTextNode(`.recommend .copy { background-image: url(${uri}); }`);
    }else{
      styleContent = document.createTextNode(`.copy { background: url(${uri}); }`);
    }
    style.appendChild(styleContent);
    document.head.appendChild(style);
  }

  Modernizr.on('webp', function(result) {
    if (result) {
      webp = true;
      creatBG('facebook-emoji-first-s.webp', true);
    } else {
      webp = false;
      creatBG('facebook-emoji-first-s.jpg', true);
    }
  });

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

  let content = {};
  let contentArr = ["sport", "hand", "clothes", "animal", "plants", "food", "world", "car", "time", "weather", "music", "tool", "flag", "symbol", "other"];
  contentArr.forEach((i) => {
    content[i] = {};
    content[i].content = "";
    content[i].ele = document.querySelector(`.${i}`);
  });

  let adShow = false;

  copyToClipBoard(".copy");

  document.addEventListener("scroll", showMore);
  document.addEventListener("mousemove", showMore);

  async function showMore() {
    if (window.innerWidth > 800) {
      document.removeEventListener("mousemove", showMore);
      document.removeEventListener("scroll", showMore);
      if (!adShow) {
        ADinit();
      }
      more();
    } else {
      if (window.scrollY > 50) {
        document.removeEventListener("mousemove", showMore);
        document.removeEventListener("scroll", showMore);
        more();
        if (!adShow) {
          ADinit();
        }
      }
    }
  }

  async function more() {
    const lazydom = document.querySelectorAll(".lazydom");
    if(webp){
      creatBG('facebook-emoji-list-s.webp');
    }else{
      creatBG('facebook-emoji-list-s.jpg');
    }
    let datas = await fetch("list.json")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        return result;
      });
    for (let i in datas) {
      const w = 45;
      let x = w * datas[i].x * -1 - 8;
      let y = w * datas[i].y * -1 - 8;
      let inner;
      if (datas[i].t) {
        inner = `<div class="copy" title="${datas[i].t}" unicode="${datas[i].unicode}" emoji="${datas[i].emoji}" style="background-position:${x}px ${y}px;"></div> `;
      } else {
        inner = `<div class="copy" unicode="${datas[i].unicode}" emoji="${datas[i].emoji}" style="background-position:${x}px ${y}px;"></div> `;
      }
      if (i >= 1004 && i <= 1235) {
        content.sport.content = `${content.sport.content}${inner}`;
      } else if (i >= 1291 && i <= 1483) {
        content.hand.content = `${content.hand.content}${inner}`;
      } else if (i >= 1534 && i <= 1566) {
        content.clothes.content = `${content.clothes.content}${inner}`;
      } else if (i >= 1567 && i <= 1657) {
        content.animal.content = `${content.animal.content}${inner}`;
      } else if (i >= 1658 && i <= 1706) {
        content.plants.content = `${content.plants.content}${inner}`;
      } else if (i >= 1707 && i <= 1781) {
        content.food.content = `${content.food.content}${inner}`;
      } else if (i >= 1782 && i <= 1841) {
        content.world.content = `${content.world.content}${inner}`;
      } else if (i >= 1842 && i <= 1902) {
        content.car.content = `${content.car.content}${inner}`;
      } else if (i >= 1903 && i <= 1934) {
        content.time.content = `${content.time.content}${inner}`;
      } else if (i >= 1935 && i <= 1979) {
        content.weather.content = `${content.weather.content}${inner}`;
      } else if (i >= 2005 && i <= 2068) {
        content.music.content = `${content.music.content}${inner}`;
      } else if (i >= 2069 && i <= 2210) {
        content.tool.content = `${content.tool.content}${inner}`;
      } else if (i >= 2211 && i <= 2415) {
        content.symbol.content = `${content.symbol.content}${inner}`;
      } else if (i >= 2416 && i <= 2420) {
        content.tool.content = `${content.tool.content}${inner}`;
      } else if (i >= 2421 && i <= 2682) {
        content.flag.content = `${content.flag.content}${inner}`;
      } else if (i >= 2683 && i <= 2708) {
        content.symbol.content = `${content.symbol.content}${inner}`;
      } else {
        content.other.content = `${content.other.content}${inner}`;
      }
    }
    for (let i in content) {
      content[i].ele.innerHTML = content[i].content;
    }
    lazydom.forEach((e) => {
      e.classList.remove("lazydom");
    });
    copyToClipBoard(".copy");
  }

  function copyToClipBoard(className) {
    new ClipboardJS(className, {
      text: function (trigger) {
        return trigger.getAttribute("emoji");
      },
    });

    const copy = document.querySelectorAll(className);
    copy.forEach((ele) => {
      let self = ele;
      self.addEventListener("click", function () {
        if (!adShow) {
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
        ga("send", "event", self.getAttribute("unicode"), "click");
      });
    });
  }

  function ADinit() {
    adShow = true;
    let element = document.createElement("script");
    element.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    document.body.appendChild(element);
    if(window.innerWidth>800){
      ad.innerHTML = `<ins class="adsbygoogle" style="display: block; height: 600px" data-ad-client="ca-pub-8629612872829139" data-ad-slot="5997943274" data-full-width-responsive="true" data-ad-format="auto"></ins>`;
      (adsbygoogle = window.adsbygoogle || []).push({});
    }
  
    adIn.forEach((e) => {
      e.innerHTML = `<ins class="adsbygoogle in" style="display:block; height:280px;" data-ad-client="ca-pub-8629612872829139" data-ad-slot="5997943274" data-ad-format="auto" data-full-width-responsive="true"></ins>`;
      (adsbygoogle = window.adsbygoogle || []).push({});
    });
  }

  // function showAD() {
  //   let scrollY = window.scrollY;
  //   if (scrollY > 300) {
  //     document.removeEventListener("scroll", showAD);
  //     document.querySelectorAll(".adsbygoogle.in").forEach((e) => {
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
      if (windowWidth > 640) {
        ad.style.left = adX + "px";
        ad.style.right = "auto";
        aside.style.left = asideX + "px";
        aside.style.right = "auto";
      }
    } else {
      ad.classList.remove("fixed");
      aside.classList.remove("fixed");
      if (windowWidth > 640) {
        ad.style.removeProperty("left");
        ad.style.removeProperty("right");
        aside.style.removeProperty("left");
        aside.style.removeProperty("right");
      }
    }
  }

  /*   function optCLS() {
    const content = document.querySelector(".content");
    const content_width = content.offsetWidth;
    const box = document.querySelectorAll(".box");
    const h3 = document.querySelectorAll("h3");
    let wn;
    if (content_width > 640) {
      wn = ~~(content_width / 46);
    } else {
      wn = ~~((content_width - 18) / 46);
    }
    h3.forEach((e) => {
      e.setAttribute("hidden", "");
    });
    box.forEach((e) => {
      e.setAttribute("hidden", "");
      const n = e.getAttribute("num");
      const h = Math.floor(n / wn) + 1;
      e.style.height = `${h * 40 + 40}px`;
    });
    box.forEach((e) => {
      e.removeAttribute("hidden");
    });
    h3.forEach((e) => {
      e.removeAttribute("hidden");
    });
  } */
})();
