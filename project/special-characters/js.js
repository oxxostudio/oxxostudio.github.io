~(async function () {
  // let datas = await fetch('list.json').then(res => {
  //     return res.json();
  // }).then(result => {
  //     return result;
  // });

  //const list = document.querySelector('.list');

  document.addEventListener("scroll", more);
  document.addEventListener("scroll", showAD);
  document.addEventListener("mousemove", more);
  document.addEventListener("mousemove", showAD);

  //copyToClipBoard('.copy');

  function more() {
    document.removeEventListener("mousemove", more);
    document.removeEventListener("scroll", more);
    const lazydom = document.querySelectorAll(".lazydom");
    lazydom.forEach((ele) => {
      let cc = "";
      const lazydomArr = ele.innerText.split("");
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
const ad = document.querySelector(".ad");
function adPos() {
  let windowScrollTop = window.scrollY;
  if (windowScrollTop >= 105) {
    ad.classList.add("fixed");
  } else {
    ad.classList.remove("fixed");
  }
}
