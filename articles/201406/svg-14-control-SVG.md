##SVG 研究之路 (14) - 控制 SVG 的注意事項
學會如何繪製 SVG 不稀奇，厲害的是學會如何利用 JS 和 CSS 去控制 SVG,以下將介紹兩個要注意的小地方，這也是我自己在學習的過程中所遇到的問題，搞懂這兩個小眉角，對於控制 SVG 一定就會更得心應手。( 當然後續還會有不同的小技巧，不過就等我寫到了再一起分享吧！ )

- **第一、使用 CSS 控制 SVG**：  
	或許很多人會有疑問，為什麼 CSS 裏頭沒有`fill`或`stroke`這些類型的控制屬性，我們卻能使用 CSS 來直接修改 SVG 的`fill`或`stroke`呢？因為 SVG 規範將屬性區分成 properties 和其他 attributes，前者是可以用 CSS 設置的，後者不能。可以參考 W3C 的 SVG 規範：[properties 可以使用 CSS 控制](http://www.w3.org/TR/SVG/propidx.html) 和 [attributes 不能使用 CSS 控制](http://www.w3.org/TR/SVG/attindex.html)。

- **第二、使用 jQuery 或 javascript 控制 SVG**：  
	我自己有一次要嘗試直接用 innerHTML 或 append 的方式，要在 SVG 內動態新增`<path>`或`<rect>`等元素，結果發現雖然最後的結果有產生程式碼，但在瀏覽器上就是不會顯示，一開始花了很多時間以為是自己程式寫錯，後來才知道，因為瀏覽器對於 innerHTML 或 append 等方式解析出來的都是在 HTML 的命名空間，並不是 SVG 的命名空間，換句話說，SVG 是一個 xmlns 而並非 HTML 元素，因此瀏覽器無法解析`<rect>`或`<path>`在 SVG 的命名空間，也因此使用 innerHTML 或 jQuery 所提供的 append、HTML 方式都是會失敗的。 ( 參考 [這篇文章](http://stackoverflow.com/questions/3642035/jquerys-append-not-working-with-svg-element) )

	不過仍有方式可以讓我們動態放入我們要的程式碼並且順利運行，	也就是使用`createElementNS`來進行轉換，如此一來便可以動態的新增元素進入 SVG 了

		<!DOCTYPE html>
		<html xmlns="http://www.w3.org/1999/xhtml"><head>
		</head><body>
		    <svg id="s" xmlns="http://www.w3.org/2000/svg"/>
		    <script type="text/javascript">
		        function makeSVG(tag, attrs) {
		            var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
		            for (var k in attrs)
		                el.setAttribute(k, attrs[k]);
		            return el;
		        }
		
		        var circle= makeSVG('circle', {cx: 100, cy: 50, r:40, stroke: 'black', 'stroke-width': 2, fill: 'red'});
		        document.getElementById('s').appendChild(circle);
		    </script>
		</body></html>






