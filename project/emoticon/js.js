~(async function () {
  const menu = document.getElementById("menu");
  const aside = document.querySelector("aside");
  const ad = document.querySelector(".ad");

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

  document.addEventListener("scroll", showAD);
  document.addEventListener("mousemove", showAD);

  copyToClipBoard(".copy");

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
  function showAD() {
    let element = document.createElement("script");
    element.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    document.body.appendChild(element);
    document.querySelectorAll(".adsbygoogle").forEach((e) => {
      (adsbygoogle = window.adsbygoogle || []).push({});
    });
    document.removeEventListener("scroll", showAD);
    document.removeEventListener("mousemove", showAD);
  }

  document.addEventListener("scroll", adPos);
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
