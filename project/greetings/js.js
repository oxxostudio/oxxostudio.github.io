const site = location.href;
const menu = document.getElementById("menu");
const aside = document.querySelector("aside");
const ad = document.querySelector(".ad");
const adFooter = document.querySelector(".ad-footer");
const adIn = document.querySelectorAll(".ad-content.in");
const main = document.querySelector("main");
const content = document.querySelector(".content");

const windowWidth = window.innerWidth;
const asideX = aside.offsetLeft + content.offsetLeft;
const adX = ad.offsetLeft + content.offsetLeft;

menu.addEventListener("click", menuClick);
function menuClick() {
  gtag("event", "menu-click");
  menu.classList.toggle("open");
  aside.classList.toggle("show");
}
document.addEventListener("scroll", ADinit);
document.addEventListener("mousemove", ADinit);
document.addEventListener("scroll", showAD);


function ADinit() {
  document.removeEventListener("scroll", ADinit);
  document.removeEventListener("mousemove", ADinit);
  if(window.innerWidth>800){
    ad.innerHTML = `<ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-8629612872829139" data-ad-slot="5374659189" data-ad-format="auto"></ins>`;
  }else{
    adFooter.style.display = 'block';
    adFooter.innerHTML = `<ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-8629612872829139" data-ad-slot="5749014922"></ins>`;
  }
  (adsbygoogle = window.adsbygoogle || []).push({});
}

function showAD() {
  let scrollY = window.scrollY;
  if (scrollY > 300) {
    adIn.forEach(e => {
      e.innerHTML = `<ins class="adsbygoogle in" style="display:block;" data-ad-client="ca-pub-8629612872829139" data-ad-slot="5374659189" data-ad-format="auto" data-full-width-responsive="true"></ins>`;
      (adsbygoogle = window.adsbygoogle || []).push({});
    });
    document.removeEventListener("scroll", showAD);
    document.removeEventListener("mousemove", showAD);
  }
  gtag("event", "scroll");
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
    'event_label': copyContent,
  });
});

document.addEventListener("scroll", asidePos);
function asidePos() {
  let windowScrollTop = window.scrollY;
  if (windowScrollTop >= 105) {
    aside.classList.add("fixed");
    ad.classList.add("fixed");
    if(windowWidth > 640){
      ad.style.left = adX + 'px';
      ad.style.right = 'auto';
      aside.style.left = asideX + 'px';
      aside.style.right = 'auto';
    }
  } else {
    aside.classList.remove("fixed");
    ad.classList.remove("fixed");
    if(windowWidth > 640){
      ad.style.removeProperty('left');
      ad.style.removeProperty('right');
      aside.style.removeProperty('left');
      aside.style.removeProperty('right');
    }
  }
}
