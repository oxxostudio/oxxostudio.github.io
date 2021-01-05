const site = location.href;
const menu = document.getElementById("menu");
const aside = document.querySelector("aside");
const ad = document.querySelector(".ad");
const reddot = document.getElementById("reddot");

// if(!localStorage.reddot){
//   reddot.classList.remove('hidden');
// }

menu.addEventListener("click", menuClick);
function menuClick(){
  reddot.classList.add('hidden');
  gtag("event", "menu-click");
  menu.classList.toggle('open');
  aside.classList.toggle("show");
  //lcalStorage.reddot = true;
  // if (menu.classList.contains("open")) {
  //   menu.classList.remove("open");
  //   aside.classList.remove("show");
  // } else {
  //   menu.classList.add("open");
  //   aside.classList.add("show");
  // }
}
document.addEventListener("scroll", showAD);
document.addEventListener("mousemove", showAD);
function showAD() {
  let ad = document.querySelector(".ad");
  let adContent = document.querySelectorAll(".ad-content");
  ad.classList.remove("hidden");
  adContent.forEach((e) => {
    e.classList.remove("hidden");
  });
  let element = document.createElement("script");
  element.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  document.body.appendChild(element);
  (adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "ca-pub-8629612872829139",
    enable_page_level_ads: true,
  });
  gtag("event", "scroll");
  document.removeEventListener("scroll", showAD);
  document.removeEventListener("mousemove", showAD);
}
document.addEventListener("copy", function (e) {
  const selection = document.getSelection();
  const copyContent = selection.toString();
  const copyLength = copyContent.toString().length;
  if (copyLength > 20) {
    encodeURIComponent.clipboardData.setData(
      "text/plain",
      `${copyContent} ( 原文出處：${site} )`
    );
    e.preventDefault();
  }
  gtag("event", "copy", {
    value: copyContent,
  });
});

document.addEventListener("scroll", asidePos);
function asidePos() {
  let windowScrollTop = window.scrollY;
  if (windowScrollTop >= 105) {
    aside.classList.add('fixed');
    ad.classList.add('fixed');
  }else{
    aside.classList.remove('fixed');
    ad.classList.remove('fixed');
  }
}
