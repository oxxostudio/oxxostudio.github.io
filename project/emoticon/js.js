~(async function () {
  const menu = document.getElementById("menu");
  const aside = document.querySelector("aside");
  const ad = document.querySelector(".ad");
  const adFooter = document.querySelector(".ad-footer");
  const adIn = document.querySelectorAll(".ad-content.in");
  const main = document.querySelector("main");
  const box = document.querySelectorAll('.box');

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

  let adShow = false;

  document.addEventListener("scroll", showMore);
  document.addEventListener("mousemove", showMore);

  async function showMore(){
    if(window.innerWidth>800){
      document.removeEventListener("mousemove", showMore);
      document.removeEventListener("scroll", showMore);
      if(!adShow){
        ADinit();
      }
    }
    else{
      if(window.scrollY>250){
        document.removeEventListener("mousemove", showMore);
        document.removeEventListener("scroll", showMore);
        if(!adShow){
          ADinit()
        }
      }
    }
  }

  box.forEach(e => {
    e.innerHTML = e.innerHTML.replace(/<!--|-->/g,'');
  });
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
      ad.innerHTML = `<ins class="adsbygoogle" style="display: block; height: 600px" data-ad-client="ca-pub-8629612872829139" data-ad-slot="4731510363" data-full-width-responsive="true" data-ad-format="auto"></ins>`;
    }else{
      adFooter.style.display = 'block';
      adFooter.innerHTML = `<ins class="adsbygoogle" style="display:block; height:50px;" data-ad-client="ca-pub-8629612872829139" data-ad-slot="6337054312"></ins>`;
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
  //       e.innerHTML = `<ins class="adsbygoogle in" style="display: block; height: 280px" data-ad-client="ca-pub-8629612872829139" data-ad-format="auto" data-ad-slot="4731510363" data-full-width-responsive="true"></ins>`;
  //       (adsbygoogle = window.adsbygoogle || []).push({});
  //     });
  //   }
  // }


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
