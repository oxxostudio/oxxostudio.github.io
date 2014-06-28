##CSS Cubic Bezier
Cubic Bezier 就是一個具有兩個端點與兩個貝茲控制點的曲線，( SVG 裏頭 Path 的 "C" 參數 )，其實這個利用貝茲曲線的控制方式在大多數的 CSS 中都不常見，主因這是 CSS3 裏頭動畫的速度控制選項，通常我們在設定動畫的速度，大多直接使用 ease in 或 ease out 來取代，但藉由 Cubic Bezier，我們更可以創造出各種不同速度控制的動畫效果。

在學習 Cubic Bezier 之前，要先來看看在 CSS3 裏頭哪些時候會用上 Cubic Bezier，會用到的時機有兩個，第一個是 **transition**，第二個是 **animation**，使用的方式如下：

transition：

	-webkit-transition:漸變樣式 動畫時間 延遲時間 cubic-bezier(x1,y1,x2,y2);
	-moz-transition:漸變樣式 動畫時間 延遲時間 cubic-bezier(x1,y1,x2,y2);
	-o-transition:漸變樣式 動畫時間 延遲時間 cubic-bezier(x1,y1,x2,y2);
	transition:漸變樣式 動畫時間 延遲時間 cubic-bezier(x1,y1,x2,y2);

animation：

	-webkit-anumation:影格名稱 動畫時間 延遲時間 cubic-bezier(x1,y1,x2,y2);
	-moz-anumation:影格名稱 動畫時間 延遲時間 cubic-bezier(x1,y1,x2,y2);
	-o-anumation:影格名稱 動畫時間 延遲時間 cubic-bezier(x1,y1,x2,y2);
	anumation:影格名稱 動畫時間 延遲時間 cubic-bezier(x1,y1,x2,y2);

animation keyframes：

	-webkit-animation-timing-function:cubic-beziercubic-bezier(x1,y1,x2,y2);
	-moz-animation-timing-function:cubic-beziercubic-bezier(x1,y1,x2,y2);
	-o-animation-timing-function:cubic-beziercubic-bezier(x1,y1,x2,y2);
	animation-timing-function:cubic-beziercubic-bezier(x1,y1,x2,y2);
<br/>
Cubic Bezier 的原理很簡單，總共有四個參數，分別是第一個貝茲曲線控制點的 x1 和 座標 y1，第二個貝茲曲線控制點的 x2 和 y2 座標，可以參考下面這張 W3C 對於 cubic-bezier 參數設置的圖片，往上為 1，往下為 0。( 參考 [W3C 文章](http://www.w3.org/TR/css3-transitions/#transition-timing-function-property) )

![](https://lh6.googleusercontent.com/-ADaUODvAz_k/U67MgNMbWhI/AAAAAAAA4-Y/ufxOjX7swtk/s300/20140628_1_04.png)
<br/>

藉由控制 Cubic Bezier，我們便可以很容易地做出加減速的效果， ( 可以參考 [cubic-bezier.com](http://cubic-bezier.com/) )

	  -webkit-animation:testkeyframes 2s infinite cubic-bezier(.89,-0.93,.2,1.58);

![](https://lh6.googleusercontent.com/-oybcdaTz0YQ/U67PzCp7nSI/AAAAAAAA4-o/Sto8MsYHHAs/s300/20140628_1_05.png)
	  
<br/>

此外，若我們把貝茲曲線上下超過了 0 和 1，就會產生很有意思的一個特效，就是有點皮球反彈的效果。

	  -webkit-animation:testkeyframes 2s infinite cubic-bezier(.89,-1.3,.2,1.3);

![](https://lh5.googleusercontent.com/-d3bW37xkcZ4/U67MgG3Wp-I/AAAAAAAA4-c/22ddAQHzbds/s300/20140628_1_03.png)
<br/>

以上就是 Cubic Bezier 的介紹，因為這是一個三次函數曲線，所以會發生垂直或水平的地方有兩個點交會的情形喔！也因為有了 Cubic Bezier，我們的 CSS3 動畫也就更別具特色了！


