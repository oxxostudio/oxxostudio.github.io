~(async function () {
  const menu = document.getElementById("menu");
  const reddot = document.getElementById("reddot");
  const aside = document.querySelector("aside");

  menu.addEventListener("click", function () {
    reddot.classList.add("hidden");
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


  let datas = await fetch("list.json")
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      return result;
    });

  let content = {};
  let contentArr = [
    "sport",
    "hand",
    "clothes",
    "animal",
    "plants",
    "food",
    "world",
    "car",
    "time",
    "weather",
    "music",
    "tool",
    "flag",
    "symbol",
    "other",
  ];
  contentArr.forEach((i) => {
    content[i] = {};
    content[i].content = "";
    content[i].ele = document.querySelector(`.${i}`);
  });

  copyToClipBoard(".copy");

  document.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset;
    let ad = document.querySelector(".ad");
    if (scrollTop >= 75) {
      ad.classList.add("fixed");
    } else {
      ad.classList.remove("fixed");
    }
  });

  document.addEventListener("scroll", more);
  document.addEventListener("scroll", showAD);
  document.addEventListener("mousemove", more);
  document.addEventListener("mousemove", showAD);

  function more() {
    document.removeEventListener("mousemove", more);
    document.removeEventListener("scroll", more);
    const lazydom = document.querySelectorAll(".lazydom");
    for (let i in datas) {
      const w = 45;
      let x = w * datas[i].x * -1 - 8;
      let y = w * datas[i].y * -1 - 8;
      let inner = `<div class="copy" data-i="${i}" data-x="${datas[i].x}" data-y="${datas[i].y}" data-unicode="${datas[i].unicode}" data-emoji="${datas[i].emoji}" style="background-position:${x}px ${y}px;"></div>`;
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
    lazydom.forEach(e => {
      e.classList.remove("lazydom");
    });
    copyToClipBoard(".copy");
  }

  function copyToClipBoard(className) {
    new ClipboardJS(className, {
      text: function (trigger) {
        return trigger.getAttribute("data-emoji");
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
        ga("send", "event", self.getAttribute("data-unicode"), "click");
      });
    });
  }

  function showAD() {
    let ad = document.querySelector(".ad");
    let adContent = document.querySelector(".ad-content");
    ad.classList.remove("hidden");
    adContent.classList.remove("hidden");
    let element = document.createElement("script");
    element.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    document.body.appendChild(element);
    (adsbygoogle = window.adsbygoogle || []).push({
      google_ad_client: "ca-pub-8629612872829139",
      enable_page_level_ads: true,
    });
    document.removeEventListener("scroll", showAD);
    document.removeEventListener("mousemove", showAD);
    adPos();
  }
  document.addEventListener("scroll", adPos);
  //const aside = document.querySelector("aside");
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
})();
