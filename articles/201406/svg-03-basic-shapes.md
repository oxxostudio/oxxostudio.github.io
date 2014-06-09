##SVG 研究之路 (3) - 基本形狀
通常我們在學習向量圖，第一個一定是學基本形狀，基本形狀不外乎這幾個：矩形、圓角矩形、圓形、橢圓、多邊形，因此 SVG 的基本形狀也從這幾個出發，當然，如果會使用 Illustrator，我也會建議直接用 Illustrator 拉形狀，然後儲存成 SVG，再去理解 SVG 的程式碼奧妙是很不錯的方式。

SVG 裏頭針對基本形狀，其實程式碼超級簡單的，也就是一個該形狀的名稱，加上一些設定就完成，舉例來說，就有點類似 Illustrator 或 Flash 裏頭的形狀工具名稱，搭配屬性面板去做設定。

- **矩形：**  
  矩形就是指正方形或是長方形，下列這段程式碼可以產生兩個不同顏色的矩形，如同之前 [layer][1] 章節提過的，`id`是該形狀的名稱，而`x`和`y`則是矩形左上角的座標，`fill`代表填充的顏色，`stroke`代表線段的顏色，`stroke-width`是線段的寬度，，`width`和`height`就是寬和高，數值均是使用螢幕的 pixel 值。  
	![SVG-矩形](https://lh5.googleusercontent.com/-1Oe5oMvG__8/U5XSeKjDz2I/AAAAAAAA4Cw/DBa4-dUMzt0/s000/20140609_2_02.png)

		<rect id="A" x="33" y="34" fill="#FF6CC4" stroke="#C30D23" stroke-width="3" width="75" height="75"/>
		<rect id="B" x="119" y="54" fill="#6EA9FF" stroke="#036EB7" stroke-width="3" width="117" height="55"/>

<br/>

- **圓角矩形：**  
  圓角矩形就是在矩形的`rect`屬性內額外增加`rx`、`ry`的圓角半徑屬性，不過這裡要注意一點，如果是使用 Illustrator 存出的 SVG，圓角矩形會被轉換為`path`。 ( `path`會在之後介紹 )  
	![SVG-圓角矩形](https://lh6.googleusercontent.com/-Ve7E3U0VIy0/U5XSc8Z9GrI/AAAAAAAA4CM/Jxdjfq3IPqE/s000/20140609_2_03.png)

		<rect x="60" y="10" rx="10" ry="10" width="75" height="75" stroke="#FF5500" stroke-width="5" fill="#FFB255"/>

<br/>

- **圓形：**  
  圓形的標籤顧名思義就是`circle`，屬性的設定比較不同的，是使用`cx`和`cy`代表圓心 ( c:center )，`r`代表半徑。  
	![SVG-圓形](https://lh6.googleusercontent.com/-wnRGVr_sZqQ/U5XSdVqX_EI/AAAAAAAA4Cc/V0icqX7_Oz0/s000/20140609_2_04.png)

		<circle fill="#FF4343" stroke="#890000" stroke-width="5" cx="80.141" cy="73.446" r="44"/>

<br/>

- **橢圓：**  
  橢圓和圓形最大的不同點，就在於橢圓形具有 x 方向的半徑`rx`與 y 方向的半徑`ry`，看起來容易理解，但實際上橢圓的公式卻是頗為複雜，可以參考 [維基百科：橢圓](http://zh.wikipedia.org/wiki/%E6%A4%AD%E5%9C%86)，或是可由下列這張圖來表示：  
	![SVG-橢圓](https://lh6.googleusercontent.com/-Q0oaSv-su0o/U5XSe6zh0EI/AAAAAAAA4C8/GRvrept2hW0/s000/20140609_2_06.gif)  
	![SVG-橢圓](https://lh5.googleusercontent.com/-zd0Syhs14dI/U5XSeqm5fqI/AAAAAAAA4C4/t_JHFL3b0EQ/s144/20140609_2_05.png)

		<ellipse fill="#77DD47" stroke="#246614" stroke-width="5" cx="100" cy="75" rx="67" ry="44"/>

<br/>

- **多邊形：**
  多邊形是使用`polygon`標籤，在當中`point`表示有幾個點，每個點的座標，當然三角形有三個點，五邊形有五個點，星形則有十個點，其餘的設定都跟矩形依樣喔！  
	![SVG-多邊形](https://lh4.googleusercontent.com/-VXpmKdWM9II/U5XSfCDuZbI/AAAAAAAA4C0/xaAl4tUZ_5M/s000/20140609_2_06.png)

		<polygon fill="#D271FF" points="100,56 62,107 37,49"/>
		<polygon fill="#68EADD" points="151,39 163,63 189,66 170,85 175,111 151,99 127,111 132,85 
			113,66 139,63 "/>
		<polygon fill="#FF7900" points="219,110 206,70 240,46 274,70 261,110 "/>

<br/>
以上就是 SVG 的基本形狀介紹，這些基本形狀不僅簡單，又很容易使用，也是一定要理解的基礎。

[1]:http://www.oxxostudio.tw/articles/201406/svg-02-layer.html