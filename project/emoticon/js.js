~(async function () {
  const menu = document.getElementById("menu");
  const aside = document.querySelector("aside");
  const ad = document.querySelector(".ad");
  const main = document.querySelector("main");

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

  document.addEventListener("scroll", ADinit);
  document.addEventListener("mousemove", ADinit);
  document.addEventListener("scroll", showAD);

  copyToClipBoard(".copy");

  function copyToClipBoard(className) {
    new ClipboardJS(className, {
      text: function (trigger) {
        return trigger.innerText;
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
    ad.innerHTML = `<ins class="adsbygoogle" style="display: block; height: 600px" data-ad-client="ca-pub-8629612872829139" data-ad-slot="4731510363" data-full-width-responsive="true" data-ad-format="auto"></ins>`;
    (adsbygoogle = window.adsbygoogle || []).push({});
    document.removeEventListener("scroll", ADinit);
    document.removeEventListener("mousemove", ADinit);
  }

  function showAD() {
    let scrollY = window.scrollY;
    if (scrollY > 300) {
      document.removeEventListener("scroll", showAD);
      document.querySelectorAll("[lazyload]").forEach((e) => {
        (adsbygoogle = window.adsbygoogle || []).push({});
      });
    }
  }


  const windowWidth = window.innerWidth;
  const asideX = aside.offsetLeft + main.offsetLeft;
  const adX = ad.offsetLeft + main.offsetLeft;
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
})();
