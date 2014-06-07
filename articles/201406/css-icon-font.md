##Icon Font 的使用方式
之前介紹過 [Web Font 的使用方式][5]，這篇則是介紹 Icon Font 的使用，Icon Font 顧名思義就是使用小圖示 ( icon ) 當作字體，只需要打入對應的代碼，或是加上固定名稱的樣式，就能夠產生一個小圖示。這種方式的好處其實不少，因為使用 Icon Font 除了可以減少圖片的使用率，也可以讓 icon 的大小、顏色都能夠像文字一樣隨心所欲的調整，但相對的也是有些壞處，例如一定得使用外部載入字體、icon 只能夠使用單色 ( 因為文字只能單色 )...等。

對於要自己製作 Icon Font 的朋友們可以參考這篇文章：[How to make your own icon webfont](http://www.webdesignerdepot.com/2012/01/how-to-make-your-own-icon-webfont/)，我這邊就不多作介紹，因為就算你會自己製作自己的 Icon Font，最後你還是會使用免費的 Web Icon Font，為什麼呢？畢竟 Web Icon Font 是眾多設計師的結晶，而且版權免費公開，在這個資訊爆炸快速的時代，用最省力的方式當然是最好的，加上近年來 Bootstrap 的興起，連帶搭配許多 Icon Font 都是免費且容易被大眾所接受的，我們就不用在花時間，設計出一個還要測試大眾口味的 icon 囉！

現在開始介紹如何使用 Icon Font，首先我們要先知道哪裡有免費的 Icon Font 可以使用，可以參考下列網站：

- [Font Awesome][1]
- [Fontello][2]
- [Icomoon][3]
- [WE LOVE ICON FONTS][4]

這幾個網站的使用方式都差不多，第一個步驟一定得載入他們的 css，以 Font Awesome 來說，這是一個有搭配 BootStrap 的 Icon Font 網站，相較於其他網站必須自己輸入對應的 Unicode來說，更為便利使用，因為只需把 icon 放在`<i></i>`裏頭，要輸入對應的 class，這個`<i></i>`就會變身成為對應的 icon。 ( [使用方式](http://fortawesome.github.io/Font-Awesome/get-started/) )

<br/>
若使用 Font Awesome ，我們要先載入這個 CSS，你也可以下載下來放在自己的網站空間。

	<link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">

接下來只要參考網站所列的 [icon 列表][6]，輸入對應的`class`，就能夠產出對應的 icon：

	<i class="fa fa-camera-retro"></i> fa-camera-retro

 ![Icon Font](https://lh4.googleusercontent.com/-1TeMXDxT9XA/U5LNRUTYyrI/AAAAAAAA4AA/9RxvnP54Dpc/s000/20140607_1_02.png)

<br/>
而也可以根據不同的`class`放大縮小

	<i class="fa fa-camera-retro fa-lg"></i> fa-lg
	<i class="fa fa-camera-retro fa-2x"></i> fa-2x
	<i class="fa fa-camera-retro fa-3x"></i> fa-3x
	<i class="fa fa-camera-retro fa-4x"></i> fa-4x
	<i class="fa fa-camera-retro fa-5x"></i> fa-5x

![Icon Font](https://lh3.googleusercontent.com/-pQ1UkbwNeb8/U5LNRZQPCBI/AAAAAAAA4AE/dHqP8CFT8mc/s000/20140607_1_03.png)

<br/>
官方網站還列出了更多的樣式，都是單純使用`<i></i>`搭配`class`就可以辦到了。( [參考這篇][7] )

順應扁平化設計的趨勢，CSS3 技術的興起，以及瀏覽器的進步，使用 Icon Font 的方式也越來越普遍，但我認為一個好的網頁設計，也不單純只是靠一個新的技術就夠了，如何讓 Icon Font 和傳統的 Icon 做最完美的搭配，如何讓 Icon Font 和版面有最佳的協調性，才是一個好的網頁設計最重要的精神所在喔！


[1]:http://fortawesome.github.io/Font-Awesome/
[2]:http://fontello.com/
[3]:http://icomoon.io/
[4]:http://weloveiconfonts.com/
[5]:http://www.oxxostudio.tw/articles/201406/css-web-font.html
[6]:http://fortawesome.github.io/Font-Awesome/icons/
[7]:http://fortawesome.github.io/Font-Awesome/examples/