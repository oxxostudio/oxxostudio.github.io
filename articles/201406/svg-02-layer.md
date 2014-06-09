##SVG 研究之路 (2) - Layer
許多的設計師談到向量繪圖，總是相當的興奮，但只要一提到向量繪圖裡的程式碼，馬上就暈頭轉向不知所云，這篇將要以 Illustrator 做為輔助工具出發，帶領大家能夠更了解 SVG 的架構。

首先我們看到**「圖層」( Layer )** 這個東西，相信只要是設計師，對於「圖層」的認識一定遠遠高過工程師，但這並不代表在程式領域沒有圖層的概念，在網頁裡頭圖片蓋在圖片上、文字蓋在圖片上、選單疊在內容上方，這些都是圖層的應用，只是往往沒有「圖」，只有「層」。在影像處理軟體中，為了方便理解由上到下的概念，在圖層面版中的圖層都是**由上到下排列** ，上層會蓋住下層，但是在程式裡頭，也因為邏輯規則，圖層則是**由下而上排列**，下層會蓋住上層 ( 除非特別去做設定 )。

在 Illustrator 裏頭的圖層長這樣：

![SVG-Layer](https://lh6.googleusercontent.com/--W42o2mZKR0/U5W8KecX-1I/AAAAAAAA4Bs/kD6HlfoidxI/s000/20140609_1_02.png)

在程式碼中長這樣，由下而上 ( 部分程式碼略過 )：

	  <rect id="a3" ......... />
	  <circle id="a2" .......... />
	  <polygon id="a1" ........... />

<br/>
了解圖層的規則後，我們看看下圖的 SVG 程式碼與 Illustrator 裡頭圖層的對照，如果超過一個圖層，就可以發現每一個圖層，就相當於是 SVG 裡頭的`<g></g>`標籤，一個`<g></g>`就代表一個群組，換句話說，雖然在 Illustrator 當中看到了許多圖層，但是實際上每個圖層都可視作一個群組來使用，這也就大概可以了解了為什麼`<g></g>`無法單純利用 x 或 y 來控制位置，因為這是辦不到的，你可以對圖層內的元素調整位置，但卻無法對圖層位置。

在 Illustrator 裏頭的圖層長這樣：

![SVG-Layer](https://lh5.googleusercontent.com/-w0o9u4lxkuo/U5W8KXBag0I/AAAAAAAA4B0/KF_ZO72l6qk/s000/20140609_1_03.png)

程式碼中是這樣：

	<g id="layer01">
		<rect id="a3" x="52" y="54" fill="#FF6CC4" width="75" height="75"/>
		<circle id="a2" fill="#5CD5FF" stroke="#FFFFFF" stroke-width="5" stroke-miterlimit="10" cx="109.25" cy="118" r="40.75"/>
		<polygon id="a1" fill="#FFB65F" stroke="#FFFFFF" stroke-width="5" stroke-miterlimit="10" points="109.25,112.941 
			129.186,147.471 149.121,182 109.25,182 69.378,182 89.314,147.471 	"/>
	</g>
	<g id="layer02">
		<ellipse fill="#67CE6F" stroke="#FFFFFF" stroke-width="5" stroke-miterlimit="10" cx="75" cy="196.375" rx="47" ry="37.625"/>
	</g>

<br/>
從上面我們也可以看到，圖層的名稱自動對應到 id 的名稱，然而 id 在 HTML 裡頭是唯一的，但為甚麼可以在 Illustrator 裡頭設定同樣名稱的圖層呢？ 因為當我們使用 Illustrator 儲存成 SVG ，相同名稱的圖層會自動在圖層名稱後方添加變數識別，避免不必要的問題發生。

在 Illustrator 裏頭的圖層長這樣：

![SVG-Layer](https://lh4.googleusercontent.com/-I33BhqopAWA/U5W8K3cTXXI/AAAAAAAA4B8/DrHZBvtGFh8/s000/20140609_1_04.png)

在程式碼中長這樣，還是一樣由下而上 ( 部分程式碼略過 )：

	<rect id="a1_2_" ......... />
	<circle id="a1_1_" ......... />
	<polygon id="a1" ......... "/>

<br/>
利用 illustrator 比較視覺化的方式，就更容易能了解 SVG 的架構囉！有興趣的人也可以發現，在 Adobe 裏頭也有 [相關的介紹](http://help.adobe.com/zh_TW/illustrator/cs/using/WS714a382cdf7d304e7e07d0100196cbc5f-6360a.html#WS714a382cdf7d304e7e07d0100196cbc5f-635fa) 喔！