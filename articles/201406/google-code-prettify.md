##google code prettify##

這是一套由 google 出品的程式碼美化工具，主要用來美化分享在網站上的程式碼，通常我們的程式碼會使用`pre`的標籤包覆，但內容的樣式卻是非常的死板，若自己進行樣式的編輯，而要使用各種不同的顏色來滿足各種不同的代碼，這項工程更比登天還難，這時候就很需要程式碼美化的工具。

自己曾經使用過一套名為 SyntaxHighlighter 的程式碼美化工具，不過後來使用過 google code prettify，整體而言比 SyntaxHighlighter 更為輕薄短小便利，產生出來的美化效果也相當不錯，在此推薦給大家使用！使用與安裝的方式如下：

- **下載 google code prettify**  
	由這裡下載 [https://code.google.com/p/google-code-prettify/](https://code.google.com/p/google-code-prettify/)

- **載入`run_prettify.js`**  
	把 js 放入你需要美化程式碼的頁面當中

		<script src="js/lrun_prettify.js"></script>

- **添加樣式**  
	接著別忘記在`pre`的標籤，加上`prettyprint`的樣式，一切就大功告成囉！

		<pre class="prettyprint">

- **置換樣式**  
	我個人偏好一套名為 tomorrow 的樣式，可以從這裡下載：[http://jmblog.github.io/color-themes-for-google-code-prettify/tomorrow/](http://jmblog.github.io/color-themes-for-google-code-prettify/tomorrow/)

如此一來就能夠輕鬆做出美美的程式碼囉！  

美化過的 HTML 範例：

	<!doctype html>
	<html lang="en">
	<head>
	  <meta charset="utf-8">
	  <title></title>
	  <link rel="stylesheet" href="css/style.css">
	</head>
	<body>
	  <header></header>
	  <div role="main"></div>
	  <footer></footer>
	  <script src="js/script.js"></script>
	</body>
	</html>