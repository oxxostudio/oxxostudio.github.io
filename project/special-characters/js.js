~(async function () {
  // let datas = await fetch('list.json').then(res => {
  //     return res.json();
  // }).then(result => {
  //     return result;
  // });

  //const list = document.querySelector('.list');
  const menu = document.getElementById("menu");
  const reddot = document.getElementById("reddot");
  const aside = document.querySelector("aside");

  // if (!localStorage.reddot) {
  //   reddot.classList.remove("hidden");
  // }

  menu.addEventListener("click", function () {
    let self = this;
    //localStorage.reddot = true;
    reddot.classList.add("hidden");
    if (self.classList.contains("open")) {
      self.classList.remove("open");
      aside.classList.remove("show");
    } else {
      self.classList.add("open");
      aside.classList.add("show");
    }
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

  //copyToClipBoard('.copy');

  function more() {
    document.removeEventListener("mousemove", more);
    document.removeEventListener("scroll", more);
    const lazydom = document.querySelectorAll(".lazydom");
    lazydom.forEach((ele, i) => {
      let cc = "";
      let lazydomArr;
      if (i == 16) {
        lazydomArr = ele.innerText.split(" ");
      } else {
        lazydomArr = ele.innerText.split("");
      }
      lazydomArr.forEach((e) => {
        cc = cc + `<span class="copy" data-character="${e}">${e}</span> `;
      });
      ele.innerHTML = cc;
      ele.classList.remove("lazydom");
    });
    copyToClipBoard(".copy");
  }

  // function more() {
  //     document.removeEventListener('mousemove', more);
  //     document.removeEventListener('scroll', more);
  //     const list = document.querySelector('.list');
  //     let content = '';
  //     for (let i = 3; i <= 22; i++) {
  //         content = `${content}<h3>${datas['s' + i].title}</h3>`;
  //         let arr = datas['s' + i].arr;
  //         arr.forEach(ele => {
  //             content = `${content}<span class="copy" data-character="${ele}">${ele}</span>`;
  //         });
  //     }
  //     list.innerHTML = list.innerHTML + content;
  //     copyToClipBoard('.copy');
  // }
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
