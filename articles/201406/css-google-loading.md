##CSS3動畫 - Google Loading Animation
![](http://www.oxxostudio.tw/img/articles/201406/20140629_1_01.gif)  

自從使用了智慧型手機之後，就常常在觀察手機 UI 的設計細節，隨著扁平化設計風格的興起，Google 的載入進度動畫也就變得相當的扁平風且具有設計感，後來發現不只手機的載入進度是用扁平化的風格，連 Google plus、Gmail...等 Google 產品都是使用類似的載入進度動畫，一時興起，使用 CSS3 做了一組 Google 的載入動畫。( 凡是跟 Google 沾上邊好像就高級了一些ㄎㄎ )

在製作載入動畫之前，我們必須要先有 CSS3 的動畫概念以及立體的概念，不過因為這篇不是介紹 CSS3 動畫與立體，因此這邊就不太過著墨，直接來看成品的程式碼來一步步說明。

首先看到動畫的架構，主要分為了三個層，一個是**定位層** ( #googleloading )，一個是**父層** ( #div2、#div1、#div0 )，最後一個是**子層** ( #div2_1、#div1_1、#div0_1 )，定位層目的在於讓整個 loading 可以做定位，位置不會影響到內容，父層包含了 3D 的透視點 perspective，因為在父層進行透視的設定，子層的元素才能按照統一的透視點做 3D 的變化。

	  <div id='google_loading'>
	    <div id='div2'>
	      <div id='div2_1'></div>
	    </div>
	    <div id='div1'>
	      <div id='div1_1'></div>
	    </div>
	    <div id='div0'>
	      <div id='div0_1'></div>
	    </div>
	  </div>
<br/>

讓我們把父層主要的 CSS 給打開來看，可以發現這裡設定了`perspective`和`perspective-origin`，這是透視點的距離和透視點的中心，不過這些都容易理解，比較重要的是要記得設定`transform-style: preserve-3d`，這是**宣告父層空間是一個 3D 的空間**，不然預設是`flat`，就只能做 2D 的變化。( 這裡有加 webkit 前綴字 )

	#div0,#div1,#div2{
	  width:100px;
	  height:100px;
	  position:absolute;
	  z-index:10;
	  -webkit-perspective:200px;
	  -webkit-perspective-origin:50px 50px;
	  -webkit-transform-style: preserve-3d;
	}
</br>

再來看看子層主要的 CSS 結構，沒有太特別的，主要就是讓正方形的 div 利用`border-radius`方式變成**半圓形**，接著設定`transform-origin`讓旋轉時可以固定在直線的邊邊。

	#div0_1,#div1_1,#div2_1{
	  position:absolute;
	  top:0;
	  left:50px;
	  width:50px;
	  height:100px;
	  background:#000;
	  -webkit-border-radius:0 50px 50px 0;
	  -webkit-transform-origin:0 50% 0;
	  -webkit-transform:rotateY(0deg);
	}
</br>

設定完成架構之後，就來看看動畫是如何運作，動畫運作的方式分成兩個，一個是顏色的變化，一個是翻轉，這裡我們將翻轉設定在父層，子層則是顏色的變化，如此一來兩個動畫同時運作，看起來就像是一邊翻轉一邊變色。

	#div0{
	  -webkit-animation:move0_key 3s linear infinite both;
	}
	#div1{
	  -webkit-animation:move1_key 3s linear infinite both;
	}
	#div2{
	  -webkit-animation:move2_key 3s linear infinite both;
	}
	#div0_1{
	  -webkit-animation:color0_key 3s linear infinite both;
	}
	#div1_1{
	  -webkit-animation:color1_key 3s linear infinite both;
	}
	#div2_1{
	  -webkit-animation:color2_key 3s linear infinite both;
	}
<br/>

至於為什麼要分成 1、2、3，其實這是三個動畫組成的一個動畫，若分開來看，其實三個動畫分別長這樣：

補上完整的動畫程式碼：

	@-webkit-keyframes move0_key{
	  0%    {-webkit-transform:rotateZ(180deg) rotateY(180deg);}
	  12.5% {-webkit-transform:rotateZ(180deg) rotateY(90deg);}
	  25%   {-webkit-transform:rotateZ(180deg) rotateY(0deg);}
	  25.01%{-webkit-transform:rotateZ(90deg)  rotateY(0deg);}
	  37.5% {-webkit-transform:rotateZ(90deg)  rotateY(-90deg);}
	  50%   {-webkit-transform:rotateZ(90deg)  rotateY(-180deg);}
	  50.01%{-webkit-transform:rotateZ(0deg)   rotateY(-180deg);}
	  62.5% {-webkit-transform:rotateZ(0deg)   rotateY(-90deg);}
	  75%   {-webkit-transform:rotateZ(0deg)   rotateY(0deg);}
	  75.01%{-webkit-transform:rotateZ(-90deg) rotateY(0deg);}
	  87.5% {-webkit-transform:rotateZ(-90deg) rotateY(90deg);}
	  100%  {-webkit-transform:rotateZ(-90deg) rotateY(180deg);}
	}
	@-webkit-keyframes color0_key{
	  0%    {background: #f52d27;}
	  12.5% {background: #7d0906;}
	  25%   {background: #ffd539;}
	  37.5% {background: #9f7d00;}
	  50%   {background: #00b262;}
	  62.5% {background: #00190e;}
	  75%   {background: #3a71f8;}
	  87.5% {background: #052e94;}
	  100%  {background: #f52d27;}
	}
	@-webkit-keyframes move1_key{
	  0%    {-webkit-transform:rotateZ(0deg);}
	  25%   {-webkit-transform:rotateZ(0deg);}
	  25.01%{-webkit-transform:rotateZ(90deg);}
	  50%   {-webkit-transform:rotateZ(90deg);}
	  50.01%{-webkit-transform:rotateZ(180deg);}
	  75%   {-webkit-transform:rotateZ(180deg);}
	  75.01%{-webkit-transform:rotateZ(270deg);}
	  100%  {-webkit-transform:rotateZ(270deg);}
	}
	@-webkit-keyframes color1_key{
	  0%    {background: #ffd539;}
	  25%   {background: #ffd539;}
	  25.01%{background: #00b262;}
	  50%   {background: #00b262;}
	  50.01%{background: #3a71f8;}
	  75%   {background: #3a71f8;}
	  75.01%{background: #f52d27;}
	  100%  {background: #f52d27;}
	}
	@-webkit-keyframes move2_key{
	  0%    {-webkit-transform:rotateZ(-180deg);}
	  25%   {-webkit-transform:rotateZ(-180deg);}
	  25.01%{-webkit-transform:rotateZ(-90deg);}
	  50%   {-webkit-transform:rotateZ(-90deg);}
	  50.01%{-webkit-transform:rotateZ(0deg);}
	  75%   {-webkit-transform:rotateZ(0deg);}
	  75.01%{-webkit-transform:rotateZ(90deg);}
	  100%  {-webkit-transform:rotateZ(90deg);}
	}
	@-webkit-keyframes color2_key{
	  0%    {background: #f52d27;}
	  25%   {background: #f52d27;}
	  25.01%{background: #ffd539;}
	  50%   {background: #ffd539;}
	  50.01%{background: #00b262;}
	  75%   {background: #00b262;}
	  75.01%{background: #3a71f8;}
	  100%  {background: #3a71f8;}
	}


