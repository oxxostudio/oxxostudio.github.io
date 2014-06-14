##SVG 研究之路 (7) - fill 填色
介紹過了 stroke 邊框之後，接下來就要介紹 fill 填色，填色分成三種，一種是純色的填色，一種是漸層的填色，最後一種是利用圖案的填色，一張圖片的好看與否，很重要的一部分往往取決於色彩的呈現，因此掌握填色的技巧，對於圖片的表現也更能引人入勝，而 SVG 的好處，填色也是向量化，更可以用程式去控制色彩，以下將分別介紹三種填色的方式：

- **基本純色**  
  基本純色其實沒什麼特別的，只需要在 fill 裏頭加上顏色的名稱或是色碼，就可以完成

	![SVG-fill](https://lh6.googleusercontent.com/-GQjX8LBU5oM/U5x4ZgT3CdI/AAAAAAAA4II/1yttmojzuns/s000/20140614_1_02.png)

		<rect x="50" y="50" width="100" height="100" stroke="#000" stroke-width="10" fill="#f40"></rect>
		<rect x="170" y="50" width="100" height="100" stroke="#000" stroke-width="10" fill="#0f5"></rect>
		<rect x="290" y="50" width="100" height="100" stroke="#000" stroke-width="10" fill="#09f"></rect>
<br/>

- **漸層**  
  SVG 裏頭的漸層做法比較特殊，首先要先建立一個漸層的定義檔，接著讓需要漸層的元件，指向這個定義檔，就可以讓元件具有漸層，除了漸層是這麼做的，SVG 文字的變化也有一部分是使用定義檔來表現，會之後的篇幅提到。至於定義檔的寫法，會在外層統一用一個`<defs></defs>`( definitions ) 的標籤包著，這樣也方便識別當中的標籤是定義檔 ( 我測試過不包也是可以，不過基於 W3C 的定義規則，還是包起來吧 )，接著在`<defs></defs>`裏頭加入`<linearGradient></linearGradient>`的標籤，這就完成了**線性漸層**漸層定義檔的架構 ( 放射狀漸層使用`<radialGradient></radialGradient>` ) ，不過別急，還沒結束，`<linearGradient></linearGradient>`裏頭還有漸層顏色的設定，就是使用`<stop>`的標籤來設定，可以看看下面的設定：

		<defs>
		   <linearGradient id="a1">
		     <stop offset="5%" stop-color="#F00" />
		     <stop offset="95%" stop-color="#ff0" />
		   </linearGradient>
		</defs>
<br/>

	由上面的定義檔可以看到，我們給`<linearGradient></linearGradient>`加上了`id`，這是為了讓要套用這個定義檔的元件可以有一個指向的參考，這樣不同的元件只要套用同一個定義檔，就可以套用同樣的漸層，而`stop`裏頭的`offset`，使用百分比進行設定，`stop-color`則是該位置的顏色，可以自行添加`stop`的數量決定漸層顏色的數量。

	![SVG-fill](https://lh4.googleusercontent.com/-SEKUCHfwzw0/U5x4ZoFJcvI/AAAAAAAA4Hk/oU0RJ5zpn78/s000/20140614_1_03.png)

		<rect x="50" y="250" width="100" height="100" stroke="#000" stroke-width="5" fill="url(#a1)"></rect>
		<circle cx="220" cy="300" r="50" stroke="#000" stroke-width="5" fill="url(#a1)"></circle>
		<rect x="290" y="250" width="100" height="100" stroke="url(#a1)" stroke-width="5" fill="none"></rect>
<br/>


	我們也可以設定剛剛提過了`<radialGradient></radialGradient>`的**放射狀**漸層。

	![SVG-fill](https://lh4.googleusercontent.com/-zvdEPjKlSdY/U5x4ZoAxI1I/AAAAAAAA4Ho/DBHPcWeeNXE/s000/20140614_1_04.png)

		<defs>
		   <radialGradient id="a1">
		     <stop offset="5%" stop-color="#ff0" />
		     <stop offset="95%" stop-color="#f00" />
		   </radialGradient>
		</defs>
<br/>

	如果看到這邊你認為結束了，那就太小看 SVG 漸層了，`linearGradient`與`radialGradient`標籤裏頭其實還有很多的屬性可以設定，可以設定線性漸層的方向，以及放射狀漸層的圓心。( 別忘了也都是用百分比設定 )

	- 換成垂直的漸層：
	
		![SVG-fill](https://lh3.googleusercontent.com/-IMOPAQgqvKo/U5x4aLTuiJI/AAAAAAAA4Hs/CtdHEWQFdMY/s000/20140614_1_05.png)

			<defs>
			   <linearGradient id="a1" x1="0%" y1="0%" x2="0%" y2="100%">
			     <stop offset="5%" stop-color="#F00" />
			     <stop offset="95%" stop-color="#ff0" />
			   </linearGradient>
			</defs>
<br/>

	- 換成傾斜的漸層
		
		![SVG-fill](https://lh5.googleusercontent.com/-bGFFlBxlm2E/U5x4aVPzTYI/AAAAAAAA4IE/fJX6jDtxv90/s000/20140614_1_06.png)

			<defs>
			   <linearGradient id="a1" x1="0%" y1="0%" x2="100%" y2="100%">
			     <stop offset="5%" stop-color="#F00" />
			     <stop offset="95%" stop-color="#ff0" />
			   </linearGradient>
			</defs>
<br/>

	- 改變中心點的漸層
	
		![SVG-fill](https://lh3.googleusercontent.com/-rO9c5erqQ34/U5x4anDUYSI/AAAAAAAA4IA/0b2e-qTUb1M/s000/20140614_1_07.png)
	
			<defs>
			   <radialGradient id="a1" cx="20%" cy="40%">
			     <stop offset="5%" stop-color="#ff0" />
			     <stop offset="95%" stop-color="#f00" />
			   </radialGradient>
			</defs>

<br/>

- **圖案**  
	看完了漸層，最後一個就是利用圖案來表現 fill ，要利用圖案來填色，第一步仍然是和漸層使用相同的做法，就是先建立一個定義檔，接著在`defs`裡加入`<pattern></pattern>`的標籤，`pattern`表示的是一個圖案的區域，會用這個區域進行重複排列圖案的動作，因此我們要重複的圖案，必須要比`pattern`小，不然就會被裁切掉了。

		<defs>
		  <pattern id="a2" patternUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
		    <rect x="0" y="0" width="25" height="25" stroke="#none" fill="#09f"></rect>
		  </pattern> 
		</defs>

	接著在我們要填色的區域和定義檔連結就可以完成圖案的填色

	![SVG-fill](https://lh6.googleusercontent.com/-3cCIxre2taE/U5x4awjaIPI/AAAAAAAA4H8/9mSKA0RrJVg/s000/20140614_1_08.png)

		<circle cx="220" cy="300" r="50" stroke="#000" stroke-width="5" fill="url(#a2)"></circle>
<br/>

其實填色是千變萬化的，這裡只是將填色的方式做了一個最基本的介紹，至於如何能填出漂亮的顏色，就真的要看個人的經驗和練習囉！( 更詳細的設定可以參考 [W3C 的介紹](http://www.w3.org/TR/SVG/pservers.html) )
