##CSS 模糊效果
一直以來 CSS 的效果就受到於瀏覽器的限制，例如超強大的 webkit filter，到了 chrome 以外的瀏覽器幾乎完全沒有用武之地，不過隨著各家瀏覽器對 CSS3 的支援度越來越高，也可以使用一些特殊的技巧來辦到模糊的效果，以下將介紹如何利用這些技巧，完成文字的模糊或是形狀的模糊。( 當然，圖片的模糊就非得借用 webkit filter 或 SVG filter 了 )

首先看到文字的模糊，先解釋一下文字模糊的原理，第一步將文字本身的顏色設為透明 ( 利用 rgba(0,0,0,0) )，接著設定 text shadow，我們知道 text shadow 具有以下四個屬性：x 偏移、y 偏移、模糊程度、模糊顏色，當我們設定偏移為 0，模糊的程度也為0，就可以發現透明顏色的文字變成了具有 shadow 顏色的文字，從下圖可以看到，原本應該透明的字，變成了紅色的字。  

![](https://lh3.googleusercontent.com/-44wv7KxfS5k/U9Nw1Z5-1GI/AAAAAAAA8hY/OD_VS8aOgHk/s000/20140726_1_02.png)

html:  

	<div class="blur0">BLUR</div>

CSS:

	.blur0{
	  font-size:50px;
	  color:rgba(0,0,0,0);
	  text-shadow:0 0 0 rgba(255,0,0,1);
	}
<br/>

了解了這個原理之後，我們只要調整模糊的程度，就能夠做出不同模糊效果的文字。( 而且還可以跨平台 )  

![](https://lh3.googleusercontent.com/-va2V9NPUYmo/U9Nw2j9JtpI/AAAAAAAA8h4/LdQoRW_921s/s000/20140726_1_03.png)

html:

	<div class="blur1">BLUR 1</div>
	<div class="blur2">BLUR 2</div>
	<div class="blur3">BLUR 3</div>
	<div class="blur4">BLUR 4</div>
	<div class="blur5">BLUR 5</div>

CSS:

	.blur1,.blur2,.blur3,.blur4,.blur5{
	  font-size:30px;
	  color:rgba(0,0,0,0);
	}
	.blur1{
	  text-shadow:0 0 0 rgba(255,0,0,1);
	}
	.blur2{
	  text-shadow:0 0 2px rgba(255,0,0,1);
	}
	.blur3{
	  text-shadow:0 0 4px rgba(255,0,0,1);
	}
	.blur4{
	  text-shadow:0 0 6px rgba(255,0,0,1);
	}
	.blur5{
	  text-shadow:0 0 8px rgba(255,0,0,1);
	}
<br/>

學會了文字的效果之後，接下來我們來嘗試形狀的模糊，和文字模糊效果的做法相同，文字使用 text-shadow，形狀則使用 box-shadow，只是對於形狀的模糊，單純使用 CSS 有著先天上的限制，因為我們是使用陰影來偽裝成模糊，所以會導致視覺上形狀越模糊，尺寸也會越大，若要讓形狀不要越來越大，就必須使用 -webkit-transform:scale 來使其變小 ( 或 transform ),至於要變得多小，就自己看當時的情況去去拿捏囉！  

![](https://lh6.googleusercontent.com/-apV7lFmhEOY/U9Nw2KFSK5I/AAAAAAAA8ho/iiRIrCJydAQ/s000/20140726_1_04.png)

HTML:

	<div class="boxblur0"></div>
	<div class="boxblur1"></div>
	<div class="boxblur2"></div>
	<div class="boxblur3"></div>
	<div class="boxblur4"></div>
	<div class="boxblur5"></div>

CSS:

	.boxblur0,.boxblur1,.boxblur2,.boxblur3,.boxblur4,.boxblur5{
	  width:100px;
	  height:50px;
	  background:rgba(0,150,200,1);
	  margin:10px;
	}
	.boxblur1{
	  box-shadow:0 0 1px 1px rgba(0,150,200,1);
	}
	.boxblur2{
	  box-shadow:0 0 2px 2px rgba(0,150,200,1);
	}
	.boxblur3{
	  box-shadow:0 0 3px 3px rgba(0,150,200,1);
	}
	.boxblur4{
	  box-shadow:0 0 4px 3px rgba(0,150,200,1);
	}
	.boxblur5{
	  box-shadow:0 0 5px 3px rgba(0,150,200,1);
	}
<br/>

這裡有個比較需要注意的地方，就是我們必須使用 box-shadow 比 text-shadow 所多出來的第五個屬性：陰影擴展，如果沒有進行陰影擴展的調整，就會發生像下圖這樣的現象，真正變成 "陰影" 了：  

![](https://lh3.googleusercontent.com/-VwDjLI8mF4s/U9Nw2tE9-dI/AAAAAAAA8iU/VUreWFUqRTw/s000/20140726_1_05.png)

	.boxblur20{
	  width:100px;
	  height:50px;
	  background:rgba(0,150,200,1);
	  color:#fff;
	  box-shadow:0 0 20px rgba(0,150,200,1);
	}
<br/>

如果我們使用了陰影擴展，才能夠讓陰影與邊緣接合，讓整體看起來像是模糊了一般，但也因為擴展的緣故，會導致整個大小變大，這時候就必須藉由 -webkit-transform:scale 或 transform:scale 來讓整體恢復我們所需要的大小 ( 缺點就是內容也會跟著變 )。  

![](https://lh5.googleusercontent.com/-XxRGaTX-V-s/U9Nw2jKnZ8I/AAAAAAAA8iQ/q-aZnAf2Tn4/s000/20140726_1_06.png)

	.boxblur20{
	  width:100px;
	  height:50px;
	  background:rgba(0,150,200,1);
	  color:#fff;
	  box-shadow:0 0 20px 10px rgba(0,150,200,1);
	  -webkit-transform:scale(.85);
	  transform:scale(.85);
	}
<br/>

了解了形狀和文字的模糊後，其實我們可以綜合兩者，就能做出 "形狀外框" 模糊的效果 ( 如下圖 )，原理其實就是讓形狀沒有被景色，單靠外陰影與內陰影產生邊框，不過由於只有一組內外陰影所產生的邊框較透明，因此必須使用兩組內外陰影來達成，或使用陰影擴展的屬性來產生邊框。  

![](https://lh6.googleusercontent.com/-Yyrd3jBvlmY/U9Nw3M0Wa2I/AAAAAAAA8h8/AgvTh8L-3jY/s000/20140726_1_07.png)

	.boxblur{
	  width:100px;
	  height:50px;
	  background:none;
	  color:#fff;
	  box-shadow:0 0 0 0 rgba(0,150,200,1),inset 0 0 0 1px rgba(0,150,200,1);
	}
<br/>
![](https://lh6.googleusercontent.com/-eXlG2_yrYH8/U9N1_1rrClI/AAAAAAAA8is/4LEMe-MS7VU/s000/20140726_1_08.png)

	.boxblur{
	  width:100px;
	  height:50px;
	  background:none;
	  margin:60px;
	  color:#fff;
	  box-shadow:0 0 15px 0 rgba(0,200,150,.5),inset 0 0 15px 0 rgba(0,200,150,.5);
	}
<br/>

以上就是使用陰影來實現模糊效果的原理，若能搭配上 CSS3 的 transition 或 animation，就能做出更多有趣的變化和應用，下面的例子就是我利用 text-shadow 和 box-shadow 所做出來的範例，是不是很炫呢！如果大家對於使用 CSS 產生模糊有更高的興致，也可以參考我的這篇文章：[CSS webkit filter]()，裏頭有提到 blur 的濾鏡，能夠更輕鬆地辦到模糊的效果，但很可惜的是，從 2012 年我就已經寫過有這個濾鏡的文章，但 firefox 、IE 一直不支援，只有 chrome 和 firefox 可以運行呀！  

[![](https://lh3.googleusercontent.com/-BMHkEeC5-LU/U9Nw391w2lI/AAAAAAAA8ic/lLJcEU7dS3A/s000/20140726_1_08.gif)](http://jqmdesigner.appspot.com/designer.html#&ref=5681894561677312)


