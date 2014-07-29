##CSS Water Wave (水波效果)
以前玩 flash 的時候，總是會利用 flash 的遮色片做些特效，「水波」這個效果就是這樣子發想而來的，這個效果坦白說應該很多人見過也做過，但使用 CSS 來製作的人就很少了，因此這篇特別介紹如何使用 CSS，來完成這個水波的效果。範例：[CSS Water Wave](http://goo.gl/3VQRH7) ( 使用 EZoApp 設計工具，點選 preview 可以看效果喔！ )

雖然 webkit 具有遮色片的能力 ( webkit mask )，不過就如同我之前在 [CSS 模糊效果](http://www.oxxostudio.tw/articles/201407/css-blur.html) 所提到的，webkit 雖然強大，但在跨瀏覽器上總是它的罩門，況且在效能上也是往往會造成困擾 ( 這也是為什麼 chrome 要這麼吃資源了@@ )，因此撇開 webkit 不談，我們該用什麼方法，才可以做出像 flash 水波的效果呢？答案就是用「**疊**」的，這個水波效果的原理其實就是用六個 div 疊在一起，接著最重要的就是將背景設為固定：`background-attachment:fixed;`，然後讓背景的尺寸有大有小，就可以完成了，詳細原理如下：

把六個 div 疊在一起，搭配 CSS 的 animation，就可以讓六個 div 依序出現

![CSS Water Wave](https://lh5.googleusercontent.com/-507FxMtdEVY/U9ewdoszCFI/AAAAAAAA808/tBKRa7awHxA/s000/20140729_1_02.gif)

HTML:

    <div class="wave wave5"></div>
    <div class="wave wave4"></div>
    <div class="wave wave3"></div>
    <div class="wave wave2"></div>
    <div class="wave wave1"></div>
    <div class="wave wave0"></div>

CSS:

	.wave{
	  position:absolute;
	  top:calc((100% - 30px)/2);
	  left:calc((100% - 30px)/2);
	  width:30px;
	  height:30px;
	  border-radius:300px;
	}
	.wave0{
	  background:#f00;
	  z-index:2;
	  background-size:auto 106%;
	  -webkit-animation:w 1s forwards;
	}
	.wave1{
	  background:#d00;
	  z-index:3;
	  -webkit-animation:w 1s .2s forwards;
	}
	.wave2{
	  background:#b00;
	  z-index:4;
	  -webkit-animation:w 1s .4s forwards;
	}
	.wave3{
	  background:#900;
	  z-index:5;
	  -webkit-animation:w 1s .5s forwards;
	}
	.wave4{
	  background:#700;
	  z-index:6;
	  -webkit-animation:w 1s .8s forwards;
	}
	.wave5{
	  background:#500;
	  z-index:7;
	  -webkit-animation:w 1s 1s forwards;
	}
	@-webkit-keyframes w{
	  0%{
	    top:calc((100% - 30px)/2);
	    left:calc((100% - 30px)/2);
	    width:30px;
	    height:30px;
	  }
	  100%{
	    top:calc((100% - 300px)/2);
	    left:calc((100% - 300px)/2);
	    width:300px;
	    height:300px;
	  }
	}

上面有幾個地方要稍微注意一下，第一個是因為位置都使用了絕對位置 ( absolute )，因此我們要將所有的 div 定位在圓心一定有難度，這時候就必須使用 CSS3 的好用工具：`calc`，`calc`可以自動計算位置，藉由這個方式，我們直接可以讓 CSS 替我們計算出圓心，相當的方便。( 注意！`calc` 的 + 、 - 號前後必須有空格，不然會出錯 )，然後就是每個 animation 要逐一加上延遲時間，就可以逐一地冒出來，如果我們再把半徑設大一點，就會變成圓形或是橢圓形囉！

了解了水波的原理之後，再來我們只要把上面的顏色換成背景圖，就可以順利的產生水波了。

![CSS Water Wave](https://lh4.googleusercontent.com/-1kmYlurQqxM/U9ewds0uOHI/AAAAAAAA81A/gMWEC3F6WAw/s000/20140729_1_03.gif)

HTML:

    <div class="wave wave5"></div>
    <div class="wave wave4"></div>
    <div class="wave wave3"></div>
    <div class="wave wave2"></div>
    <div class="wave wave1"></div>
    <div class="wave wave0"></div>

CSS:

	.wave{
	  position:absolute;
	  top:calc((100% - 30px)/2);
	  left:calc((100% - 30px)/2);
	  width:30px;
	  height:30px;
	  border-radius:300px;
	  background:url(圖片路徑);
	  background-attachment:fixed;
	  background-position:center center;
	}
	.wave0{
	  z-index:2;
	  background-size:auto 106%;
	  -webkit-animation:w 1s forwards;
	}
	.wave1{
	  z-index:3;
	  background-size:auto 102%;
	  -webkit-animation:w 1s .2s forwards;
	}
	.wave2{
	  z-index:4;
	  background-size:auto 104%;
	  -webkit-animation:w 1s .4s forwards;
	}
	.wave3{
	  z-index:5;
	  background-size:auto 101%;
	  -webkit-animation:w 1s .5s forwards;
	}
	.wave4{
	  z-index:6;
	  background-size:auto 102%;
	  -webkit-animation:w 1s .8s forwards;
	}
	.wave5{
	  z-index:7;
	  background-size:auto 100%;
	  -webkit-animation:w 1s 1s forwards;
	}
	@-webkit-keyframes w{
	  0%{
	    top:calc((100% - 30px)/2);
	    left:calc((100% - 30px)/2);
	    width:30px;
	    height:30px;
	  }
	  100%{
	    top:calc((100% - 300px)/2);
	    left:calc((100% - 300px)/2);
	    width:300px;
	    height:300px;
	  }
	}

比較需要注意的地方，就是背景的位置**千萬要設為固定 ( background-attachment:fixed; )**，然然統一將背景置中，如此一來，背景的位置相同，但背景的大小不同，就會讓欺騙眼睛，讓眼睛認為看到了水波，不過裏頭也用了一個小技巧讓水波看起來更逼真，就是讓每一個背景大小都不同，換句話說就是**讓水波的震幅越來越小**，讓背景大小從 106 > 102 > 104 > 101 > 102 > 100，如此一來就會讓水波更逼真囉！

以上就是單純利用 CSS 製作水波的原理，當然最後就是要撰寫一段 JS 讓水波可以在滑鼠點擊的剎那產生，而且下一個水波必須覆蓋上一個水波，然後水波產生後會自動消失，避免過多的 div 造成畫面延遲。

jQuery:

    var mx, my, timer;
    var z = 2;
    $(document).on('click', function (e) {
      mx = e.pageX;
      my = e.pageY;
      z = z + 1;
      _wave(mx, my, z);
    });

    function _wave(i, j, k) {
      $('.ui-content').prepend(
        '<div class="wave-position water' + k + '" style="z-index:' + k + ';top:' + (j - 150) + 'px;left:' + (i - 150) + 'px;">' +
        '<div class="wave-body">' +
        '<div class="wave wave5"></div>' +
        '<div class="wave wave4"></div>' +
        '<div class="wave wave3"></div>' +
        '<div class="wave wave2"></div>' +
        '<div class="wave wave1"></div>' +
        '<div class="wave wave0"></div>' +
        '</div>' +
        '</div>'
      );
      setTimeout(function () {
        $('.water' + k).remove();
      }, 3000);
    }

範例：[CSS Water Wave](http://goo.gl/3VQRH7) ( 使用 EZoApp 設計工具，點選 preview 可以看效果喔！ )

[![CSS Water Wave](https://lh6.googleusercontent.com/-LdmPHTcZJlo/U9exGiMs7iI/AAAAAAAA81M/VgReRrC50z4/s000/20140729_1_04.gif)](http://goo.gl/3VQRH7)
