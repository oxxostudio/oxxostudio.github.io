##SVG 研究之路 (8) - text 文字
「文字」雖然字面上的解釋很簡單，但深入研究之後，發現 SVG 對於文字的設定，比我想像的複雜得多，但也因為有了這些我所不知道的設定和屬性，讓原本單純樸實的文字，更添加了幾分華麗的色彩和變化，這篇將介紹文字基本的屬性設定，以及一些進階的文字用法，學完之後，也就更能使用程式來控制文字，製作出與眾不同的動畫和特效了。

- **基本用法**  
	文字的基本用法很簡單，就是使用`<text></text>`標籤，然後將需要顯示的文字放在裏頭即可，而`<text>`標籤裡具有 x、y、dx、dy、rotate、textLength、lengthAdjust 屬性，可以進行基本的文字編輯，此外你也可以自行添加 CSS 樣式，讓字體的變化更多元。  

	![SVG-text](https://lh5.googleusercontent.com/-aBOyeVUJRcQ/U51WBJpXa0I/AAAAAAAA4JY/tpG8P2sScjI/s000/20140615_1_02.png)

	    <text x="50" y="20">TEXT</text>
	    <text x="50" y="40" fill="#09c">Fill</text>
	    <text x="50" y="60" stroke="#f00">Stroke</text>
	    <text x="50" y="90" stroke="#0a0" style="font-size:24px;">使用 STYLE</text>
	    <text x="200" y="0" style="font-size:24px; writing-mode: tb;">垂直文字</text>
<br/>
	比較特別的是，這些屬性的設定，都可以視為一個單行陣列的形式呈現，例如除了寫`x="10"`之外，也可以寫成`x="10,20,30,40"`，裏頭的數值分別代表了文字的每個字，如果只寫了一個值，就是設定第一個字的屬性，因為沒有其他值，因此從第二個字開始就會接續第一個字。  

	![SVG-text](https://lh6.googleusercontent.com/-YyC63puF-Z0/U51WBEmsqiI/AAAAAAAA4Jg/cYv5bU5J5os/s00/20140615_1_02_1.png)

	    <text x="0" y="30" style="font-size:24px;">單純的文字表現</text>
	    <text x="0,20,50,80,120" y="60,80,70,55,60" style="font-size:24px;">每個字都可以不同</text>
<br/>
	x、y 與 dx、dy 的差異，一個是絕對位置，一個相對位置，x、y 是基於原本的位置去做改變，而 dx、dy 則是基於前一個字的位置去做變化。  

	![SVG-text](https://lh4.googleusercontent.com/-6wvGS6Ei9Jc/U51WCDZ-A2I/AAAAAAAA4JM/BzasocE87Bo/s000/20140615_1_02_4.png)

	    <text x="0,10,20,30,40,50,60" y="30">這是使用x,y</text>
	    <text x="0" y="60" dx="0,10,20,30,40,50,60,">這是使用dx,dy</text>
<br/>

	`rotate`同樣也可以使用陣列的方式，讓文字可以旋轉。  

	![SVG-text](https://lh3.googleusercontent.com/--bEkoMoDeNk/U51WBG796VI/AAAAAAAA4Ik/lateTsw1jPg/s000/20140615_1_02_2.png)

	    <text x="0" y="60" rotate="30" style="font-size:24px;">旋轉文字</text>
	    <text x="0" y="90" rotate="30,60,90,120,150,180,210" style="font-size:24px;">旋轉每一個文字</text>
<br/>
	`textLength`設定這段文字的長度，和`lengthAdjust`( 設定對這段文字長度的調整 ) 搭配進行，`lengthAdjust`有兩種值可以設定，一種是`spacing`，就是拉寬文字間距，讓文字滿足`textLength`的寬度，另外一種是`spacingAndGlyphs`，也就是把文字拉寬，直到滿足`textLength`的寬度為止。  

	![SVG-text](https://lh3.googleusercontent.com/-7q60m7lPjQ0/U51WB0FCR7I/AAAAAAAA4Iw/f5m8MMB_fpk/s000/20140615_1_02_3.png)

	    <text x="0" y="30" textLength="100" lengthAdjust="spacing">lengthAdjust</text>
	    <text x="0" y="60" textLength="200" lengthAdjust="spacing">lengthAdjust</text>
	    <text x="0" y="90" textLength="300" lengthAdjust="spacing">lengthAdjust</text>
	    <text x="0" y="120" textLength="300" lengthAdjust="spacingAndGlyphs">lengthAdjust</text>
<br/>

- **TSPAN 元素**  
	`<tspan></tspan>`是 SVG 文字裡頭重要的元素，因為它可以塑造出千變萬化的文字表現方式，而看`<tspan>`的字面，其實可以把它想像成 HTML 裏頭的`span`也無妨，也可以想像成在`<text>`裏頭的一個一個文字群組。`<tspan>`和`<text>`具有的屬性值幾乎一模一樣，也是 x、y、dx、dy、rotate、textLength。  

	![SVG-text](https://lh3.googleusercontent.com/-WpaebM8WQ8g/U51WCQpsuVI/AAAAAAAA4Jc/Sa-EEs_MsQs/s000/20140615_1_03.png)

	    <text x="50" y="20">
	      <tspan fill="#000">The tspan element</tspan>
	      <tspan x="10" y="40" fill="#f00">The tspan element</tspan>
	      <tspan x="10,20,30,60,90,150,200,220" y="60" fill="#0a0">The tspan element</tspan>
	      <tspan x="10" y="80,90,80,85,100,80" fill="#00f">The tspan element</tspan>
	    </text>
<br/>
	同樣也可以使用 x、y 與 dx、dy 的陣列方式做變化。  

	![SVG-text](https://lh5.googleusercontent.com/-LUNd0RA0XRg/U51WCqGhGEI/AAAAAAAA4I8/014E3G_uXBk/s000/20140615_1_04.png)

	    <text x="50" y="20">
	      <tspan x="10,20,30,40,50" y="60" fill="#000">element</tspan>
	      <tspan x="10" y="80" dx="0,10,20,30,40,50" fill="#f60">element</tspan>
	    </text>
<br/>
	使用 `rotate`同樣也可以使用陣列的方式，讓文字可以旋轉。  

	![SVG-text](https://lh3.googleusercontent.com/-2ktG8QCABRY/U51WCwP2TVI/AAAAAAAA4JA/xwNI_Ii9IEY/s000/20140615_1_05.png)

	    <text x="50" y="20">
	      <tspan x="10" y="30" fill="#000" rotate="20" style="font-size:24px;">element</tspan>
	      <tspan x="10" y="60" fill="#f00" rotate="20,30,40,50,60,70,80" style="font-size:24px;">element</tspan>
	    </text>
<br/>

- **使用路徑**  
	除了以上的文字變化外還不稀奇，使用過 Illustrator 的朋友們都知道，我們可以讓文字跟隨路徑，做出各種形狀的文字，至於寫程式該怎麼寫呢？這時候就要回想起上一篇 [fill 漸層](http://www.oxxostudio.tw/articles/201406/svg-07-fill.html) 所提到的定義檔`<defs></defs>`，我們只需要在`<defs></defs>`定義好路徑，讓文字和路徑做連結，就可以讓文字隨著路徑跑囉！
  
	![SVG-text](https://lh3.googleusercontent.com/-IAZU62U7N4o/U51WDOehUsI/AAAAAAAA4JE/UH6nUx4TTNM/s000/20140615_1_06.png)

	定義路徑：

	    <defs>
	      <path id="a1" d="M0 50 C150 150 100 -50 300 50" stroke="#000" fill="none"/>
	    </defs>

	加上`<textPath>`讓文字跟路徑做連結：  

	    <text>
	       <textPath xlink:href="#a1">這是隨著路徑跑的文字，很酷吧
	      </textPath>
	    </text>
<Br/>
	除了單純的設定文字跟隨路徑，也可以藉由`startOffset`來設定文字在路徑上的起始位置。(使用百分比)。  

	![SVG-text](https://lh3.googleusercontent.com/-wzE8GaGvcFk/U51WDa4cUeI/AAAAAAAA4JU/wmW8Dn28ZHo/s000/20140615_1_07.png)

	    <text>
	       <textPath xlink:href="#a1">這是隨著路徑跑的文字，很酷吧</textPath>
	    </text>
	    <text dy="30">
	       <textPath startOffset="30%" xlink:href="#a1">這是隨著路徑跑的文字，很酷吧</textPath>
	    </text>
<br/>

以上就是 SVG 文字的介紹，在 [W3C 的 SVG TEXT 文章](http://www.w3.org/TR/SVG/text.html) 裏頭有更完整豐富的說明，真的是比我想像的複雜太多了！不過其實你只要學會以上幾招，對於文字的應用已經相當足夠囉！
