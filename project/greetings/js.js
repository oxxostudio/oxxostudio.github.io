const site = location.href;
const menu = document.getElementById('menu');
const aside = document.querySelector('aside');
menu.addEventListener('click', function () {
  let self = this;
  if (self.classList.contains('open')) {
    self.classList.remove('open');
    aside.classList.remove('show');
  } else {
    self.classList.add('open');
    aside.classList.add('show');
  }
});
document.addEventListener('scroll', showAD);
document.addEventListener('mousemove', showAD);
function showAD() {
  let ad = document.querySelector('.ad');
  let adContent = document.querySelectorAll('.ad-content');
  ad.classList.remove('hidden');
  adContent.forEach(e => {
    e.classList.remove('hidden');
  })
  let element = document.createElement("script");
  element.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  document.body.appendChild(element);
  (adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "ca-pub-8629612872829139",
    enable_page_level_ads: true
  });
  document.removeEventListener('scroll', showAD);
  document.removeEventListener('mousemove', showAD);
}
document.addEventListener('copy', function (e) {
  const selection = document.getSelection();
  const copyContent = selection.toString();
  const copyLength = copyContent.toString().length;
  if (copyLength > 20) {
    event.clipboardData.setData('text/plain', `${copyContent} ( 原文出處：${site} )`);
    event.preventDefault();
  }
  gtag('event', 'copy', {
    'value': copyContent
  });
});