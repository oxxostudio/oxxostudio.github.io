##Web Font 的使用

隨著雲端的越來越普及，許多字體的使用也逐漸躍上雲端，[Google Fonts][1] 是我很喜歡使用的一個雲端字體工具，最主要是因為完全免費，加上 Google 的空間和速度，讓許多有特色的英文字體可以在網頁上良好的展現，通常 web font 的格式不外乎就是 woff 這種格式 ( Web Open Font Format )，檔案大小會比一般的 TTF 來得小，但隨著瀏覽器的進步，也越來越多的字體使用 svg 的圖形格式，也可以做出 icon font，至於如何製作，會在另外的篇幅介紹。

英文字體除了 Google fonts 之外，其實也有像 [Adobe Edge Web Fonts][2] 、[Fonts.com][3]...等這些選擇，至於中文字體，也有像 [iFontCloud][4]、[justfont][5] 的服務，不過很可惜都要收費就是了，但後面會介紹如何自己製作中文的字體，不過雖然可以自己製作，但還是比較推薦使用預設的新細明體或正黑體，畢竟中文字體一組通常高達 10 MB 以上，對於網頁瀏覽的負擔實在太重了。

<br/>
首先介紹 Google Fonts 的使用方式：

1. 進入 Google Fonts 網站 ： [https://www.google.com/fonts][1]
2. 瀏覽所需要的字體。
3. 點選選擇的字體後方 quick-use 的按鈕。
	
	![Google Fonts](https://lh5.googleusercontent.com/-iffDOBFK5Oo/U5HnMr-52sI/AAAAAAAA3_Q/TEHj4UFw3_s/s000/20140606_1_02.png)

4. 點選後進入詳細頁面，滑鼠往下拉，看到第三點，選擇`@import`，將這段看到的程式碼貼在 CSS 檔案的最上方，就可以載入 Web font。

	![Google Fonts](https://lh5.googleusercontent.com/-FdinmykXEPU/U5HnNiI1P5I/AAAAAAAA3_U/ISyFHhMQNn8/s000/20140606_1_03.png)

5. 接著我們只要在　HTML 裏頭，需要用到這個字體的 DOM ，加上`font-family:'字體名稱'`，就大功告成囉！

	
	![Google Fonts](https://lh5.googleusercontent.com/-EdbRLymo49o/U5HnN-XosQI/AAAAAAAA3_c/YjLa5DUqbYE/s000/20140606_1_04.png)

<br/>
以上就是英文字體的使用方式，基本上在 Google Fonts 都可以找到所需的字體，而且英文字體的素材和資源也較為豐富，不太需要擔心英文字體的使用，我們要擔心的反而是中文字體該如何用，以下介紹如何製作自己的中文字體。

1. 先準備一組自己愛用的字體，例如*娃娃體* ( 也可以去電腦的控制台，把「字型」資料夾打開，直接複製出來即可 )
2. 上傳到這個網站：[http://onlinefontconverter.com/][6]，可以將字體轉換成 Web font 的格式 (woff) ，當然這個網站不僅可以轉中文，各種語言都能轉啦！
3. 轉檔好了之後，使用以下的程式碼載入我們的字體檔 ( 請把字體檔放在你的網站空間上 )，就可以利用`font-family`來控制字體囉！

		@font-face {
		    font-family: 字體名稱;
		    src: url(字體名稱.woff);
		}

	必要的時候可以在後方加上格式，避免舊版的 IE 不支援

		@font-face {
		    font-family: '字體名稱';
		    src: url(字體名稱.woff) format('woff');
		}


[1]:https://www.google.com/fonts
[2]:http://html.adobe.com/edge/webfonts/
[3]:http://www.fonts.com/web-fonts
[4]:http://webfont.arphic.com/
[5]:http://www.justfont.com
[6]:http://onlinefontconverter.com/