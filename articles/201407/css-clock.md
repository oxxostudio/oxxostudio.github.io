## 電子時鐘效果 ( CSS 偽元素的應用 )
[電子時鐘效果範例 ( 使用 EZoApp，點選 preview 可以預覽 )](http://jqmdesigner.appspot.com/designer.html#&ref=6078331350941696)  
這是單純利用 CSS 做出來的時鐘，大量的應用了 CSS 裡頭的偽元素 ( ::before 和 ::after )，配合簡單的 JS 所作出的效果，以下就來介紹是如何做出來的。

首先介紹一下偽元素這個東西，為什麼稱呼這東西叫做偽元素呢？簡單來說，偽元素並不存在於標準的 HTML 元素當中，而是跟隨在每個元素裡頭，一前一後共有兩個，分別是`::befor`和`::after`，當我們在 CSS 裡頭寫出`a::before`或`a::after`的時候，就等同於在這個 a 元素的前後加上了兩個假的元素，我們就可以更靈活的去針對 a 元素做變化。( 可以看看下面這張圖和對應的程式碼就比較清楚，搭配 [範例檔案](http://jqmdesigner.appspot.com/designer.html#&ref=6236140528992256) ）

![CSS Clock](https://lh4.googleusercontent.com/-ZesUIYBpwqk/U8efaYf7HzI/AAAAAAAA7YM/TFTUWgbQ7VQ/s240/20140717_1_02.png)

	.a{
	  width:100px;
	  height:50px;
	  background:red;
	  position:relative;
	  color:#fff;
	}
	.a::before{   /* 藍色的 before 區塊 */
	  content:'before';
	  width:50px;
	  height:50px;
	  background:blue;
	  display:block;
	  position:absolute;
	  top:0;
	  left:-50px;
	}
	.a::after{    /* 綠色的 after 區塊 */
	  content:'after';
	  width:50px;
	  height:50px;
	  background:green;
	  display:block;
	  position:absolute;
	  top:0;
	  right:-50px;
	}
<br/>

比較需要注意的，偽元素一定要加上`content:'';`的屬性，這個屬性是讓我們可以在偽元素直接填入純文字內容，也可以使用像 alert  一樣的換行語法，這個值基本上都可以為空，但你也可以使用它搭配 HTML5  的 data attributes，就能做出更多的互動變化，也因為偽元素原本是 inline 的屬性，我們若要讓它俱有長寬，就要將其改為 block 或 inline-block。此外，如果要精准控制偽元素的位置，可以把本體的 position 設為 relative，偽元素的 position 設為 absolute，就可以由 top、left、right、bottom 控制位置。

了解了基本的偽元素之後，就可以做出這個時鐘效果了嗎？當然是不行呦～我們還必須要先了解邊框 ( border ) 的概念，如果今天一個正方形的長寬都是 0，但四個邊都有 10px 的寬度，出來的樣子就會像下圖這樣 ( 搭配 [範例檔案](http://jqmdesigner.appspot.com/designer.html#&ref=6236140528992256) )

![CSS Clock](https://lh3.googleusercontent.com/-50yhqUHR3kA/U8efadZ-RJI/AAAAAAAA7YA/9FODu4IfCJI/s000/20140717_1_03.png)

	.b{
	  width:0;
	  height:0;
	  border-width:20px;
	  border-style:solid;
	  border-color:red blue green yellow; /* 上右下左，順時針方向四個邊 */
	}
<br/>

我們如果把邊框的底色設為透明，就可以輕鬆地做出三角形的效果，當然如果搭配 CSS3 的旋轉或變形，就可以做出更多形狀的變化。( 搭配 [範例檔案](http://jqmdesigner.appspot.com/designer.html#&ref=6236140528992256) )

![CSS Clock](https://lh5.googleusercontent.com/-kdLhg4kh7qE/U8efabwENzI/AAAAAAAA7YQ/y5VlGcULImE/s000/20140717_1_04.png)

	.c{
	  width:0;
	  height:0;
	  border-width:20px;
	  border-style:solid;
	  border-color:rgba(0,0,0,0) rgba(0,0,0,1); /* 上下、左右 */
	}
<br/>

搭配本體的元素，就能夠做出箭頭。( 搭配 [範例檔案](http://jqmdesigner.appspot.com/designer.html#&ref=6236140528992256) )

![CSS Clock](https://lh4.googleusercontent.com/-hfC8rw_tAUk/U8efa1btzWI/AAAAAAAA7YE/RQgC_Oh659U/s200/20140717_1_05.png)

	.d{
	  width:100px;
	  height:50px;
	  background:rgba(255,200,0,1);
	  position:relative;
	}
	.d::after{
	  content:'';
	  width:0;
	  height:0;
	  border-width:25px;
	  border-style:solid;
	  position:absolute;
	  top:0;
	  right:-50px;
	  border-color:rgba(255,200,0,0) rgba(255,200,0,0) rgba(255,200,0,0) rgba(255,200,0,1);
	  /* 上右下三個邊的邊框顏色是透明的 */
	}
<br/>

基本知識都都了解了之後，我們只要把各個箭頭 ( 總共七個 ) 組成八的形狀，就可以做出像液晶電子數字的 8 。 ( 搭配 [範例檔案](http://jqmdesigner.appspot.com/designer.html#&ref=6236140528992256) )

![CSS Clock](https://lh5.googleusercontent.com/-mTFQvbyKn4c/U8efbNC9G8I/AAAAAAAA7YI/ezNOPLE9WPM/s000/20140717_1_06.png)

	.clock{
	  margin:20px;
	}
	.show-time{
	  position:absolute;
	}
	.clock span {
	  display: block;
	  width: 6px;
	  height: 20px;
	  background: #000;
	  position: relative;
	  -webkit-transition:.3s;   /* 改變數字的時候有淡入淡出的效果 */
	  transition:.3s;
	  box-shadow:-1px 1px 5px rgba(0,0,0,.6);   /* 讓液晶數字有陰影，有浮起來的效果 */
	}
	.clock span.s1,.clock span.s4,.clock span.s7 {     /* 水平的黑色條 */
	  width: 20px;
	  height: 6px;
	}
	.clock span::before, .clock span::after {    /* 偽元素的基本樣式 */
	  content:'';
	  position: absolute;
	  border: 3px solid rgba(0, 0, 0, 0);
	  width:0;
	  height:0;
	}
	
	.clock span.s1 {   /* 水平黑色條 */
	}
	.clock span.s2,.clock span.s5 {   /* 垂直黑色條 */
	  margin-top:1px;
	  margin-left:-7px;
	}
	.clock span.s3,.clock span.s6 {   /* 垂直黑色條 */
	  margin-top:-20px;
	  margin-left:21px;
	}
	.clock span.s4,.clock span.s7  {   /* 水平黑色條 */
	  margin-top:1px;
	}
	
	/* 左方三角 */
	.clock span.s1::before, .clock span.s4::before, .clock span.s7::before {
	  top:0px;
	  left: -6px;
	  border-right-color:#000;
	}
	/* 右方三角 */	
	.clock span.s1::after, .clock span.s4::after, .clock span.s7::after {
	  right: -6px;
	  border-left-color:#000;
	}
	/* 上方三角 */
	.clock span.s2::before, .clock span.s3::before, .clock span.s5::before, .clock span.s6::before {
	  top: -6px;
	  border-bottom-color: #000;
	}
	/* 下方三角 */
	.clock span.s2::after, .clock span.s3::after, .clock span.s5::after, .clock span.s6::after {
	  bottom: -6px;
	  border-top-color: #000;
	}
<br/>

接著只要在針對不同的數字，讓不同的箭頭消失，就可以做出 0~9 的數字效果。

	.clock-1 span.s1,.clock-1 span.s2,.clock-1 span.s4,.clock-1 span.s5,.clock-1 span.s7{
	  opacity:0;
	}
	.clock-2 span.s2,.clock-2 span.s6{
	  opacity:0;
	}
	.clock-3 span.s2,.clock-3 span.s5{
	  opacity:0;
	}
	.clock-4 span.s1,.clock-4 span.s5,.clock-4 span.s7{
	  opacity:0;
	}
	.clock-5 span.s3,.clock-5 span.s5{
	  opacity:0;
	}
	.clock-6 span.s3{
	  opacity:0;
	}
	.clock-7 span.s2,.clock-7 span.s4,.clock-7 span.s5,.clock-7 span.s7{
	  opacity:0;
	}
	.clock-8{
	}
	.clock-9 span.s5{
	  opacity:0;
	}
	.clock-0 span.s4{
	  opacity:0;
	}
<br/>

會做這些效果之後，只需要再利用 JS 抓取電腦時間，加上其他的 CSS 排版，就能做出非常擬真的電子時鐘囉！最後再看一次範例：[電子時鐘效果範例 ( 使用 EZoApp，點選 preview 可以預覽 )](http://jqmdesigner.appspot.com/designer.html#&ref=6078331350941696) 



