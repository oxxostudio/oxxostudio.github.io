##SVG 研究之路 (13) - filter - feGaussianBlur
使用過 Photoshop 都知道，模糊就跟斯斯一樣多種，其中的一種就是「高斯模糊」，同樣的，在 illustrator 裏頭也有高斯模糊，因此 SVG 也就擁有高斯模糊的能力！以往我們單純用網頁製作「假」的高斯模糊，常常是將十幾二十張圖片更改透明度與些微的座標差距，來做出類似的效果 ( [可以參考這個我以前做的效果](https://dl.dropboxusercontent.com/u/59597657/oxxo_code/Jquery_20120712_imageBlurMask.html) )，這個方式其實在一些 3D 軟體做景深渲染的時候也常常使用，不過這種方法在網頁上必須撰寫一些程式才能辦到。今天有了 SVG 的 feGaussianBlur 濾鏡，我們只需要下幾個指令就能夠達到模糊的效果，且還能夠使用程式做互動的反應，是相當方便的喔！

`feGaussianBlur`應該算是 SVG filter 裏頭最簡單的濾鏡，因為它只有一個參數需要注意：`stdDeviation`，這也是控制模糊程度的參數，數字越大越模糊，數字為零則是圖片原本的狀態，在這邊有一個比較需要注意的地方，就是要記得設定 filter 的`filterUnits`為 userSpaceOnUse ，因為預設值是會讓 filter 跟隨著套用該 filter 的物件跑，所以要記得設定成跟隨整個 SVG space。

![](https://lh6.googleusercontent.com/-8QIrh7zQ2o8/U6rbvx6UspI/AAAAAAAA47U/L5CsnP-kyZY/s000/20140625_1_03.png)

	<defs>
	<filter width="200" height="200" x="0" y="0" id="blur" filterUnits="userSpaceOnUse">
	  <feGaussianBlur stdDeviation="1" />
	</filter>
	</defs>
	<rect x="30" y="30" width="70" height="70" fill="#a00" filter=url("#blur") />

![](https://lh5.googleusercontent.com/-ggvIy9nBGeI/U6rbv6M_MAI/AAAAAAAA47c/idZdbe-T9a0/s000/20140625_1_02.png)

	<defs>
	<filter width="200" height="200" x="0" y="0" id="blur" filterUnits="userSpaceOnUse">
	  <feGaussianBlur stdDeviation="5" />
	</filter>
	</defs>
	<rect x="30" y="30" width="70" height="70" fill="#a00" filter=url("#blur") />

![](https://lh4.googleusercontent.com/-jHr18Vz-qPU/U6rbv46yZwI/AAAAAAAA47g/CvbsocMxfx4/s000/20140625_1_04.png)

	<defs>
	<filter width="200" height="200" x="0" y="0" id="blur" filterUnits="userSpaceOnUse">
	  <feGaussianBlur stdDeviation="10" />
	</filter>
	</defs>
	<rect x="30" y="30" width="70" height="70" fill="#a00" filter=url("#blur") />
<br/>

`feGaussianBlur`的`stdDeviation`還有一個鮮為人知且相當好用的設定，就是可以撰寫兩個數值在裏頭，分別代表水平與垂直方向的模糊程度。

![](https://lh5.googleusercontent.com/-M67z83fLo1c/U6roE3dX_eI/AAAAAAAA48Y/VKDH_VR-ciA/s000/20140625_1_08.png)

	<filter width="200" height="200" x="0" y="0" id="blur1" filterUnits="userSpaceOnUse" >
	  <feGaussianBlur stdDeviation="1 15"/>
	</filter>
	</defs>
	<rect x="30" y="30" width="70" height="70" fill="#ff4500" filter=url("#blur1") />

![](https://lh4.googleusercontent.com/-CIFgWfDiQOY/U6roE3nOZLI/AAAAAAAA48U/Tkk7nuE-dfY/s000/20140625_1_09.png)

	<filter width="200" height="200" x="0" y="0" id="blur1" filterUnits="userSpaceOnUse" >
	  <feGaussianBlur stdDeviation="15 1"/>
	</filter>
	</defs>
	<rect x="30" y="30" width="70" height="70" fill="#ff4500" filter=url("#blur1") />
<br/>

理解了`feGaussianBlur`的用法之後，我們就可以利用它來做一些與眾不同的變化，例如：  

- 不同的景深

	![](https://lh6.googleusercontent.com/-i9PYgstzeOY/U6rd3scljlI/AAAAAAAA47s/McZ8Th9b8Hg/s000/20140625_1_05.png)

		  <defs>
		  <filter width="200" height="200" x="0" y="0" id="blur1" filterUnits="userSpaceOnUse">
		    <feGaussianBlur stdDeviation="10" />
		  </filter>
		  <filter width="200" height="200" x="0" y="0" id="blur2" filterUnits="userSpaceOnUse">
		    <feGaussianBlur stdDeviation="2" />
		  </filter>
		  <filter width="200" height="200" x="0" y="0" id="blur3" filterUnits="userSpaceOnUse">
		    <feGaussianBlur stdDeviation="0" />
		  </filter>
		  </defs>
		    <rect x="30" y="30" width="70" height="70" fill="#a00" filter=url("#blur1") />
		    <circle cx="100" cy="100" r="50" fill="#09a" filter=url("#blur2") />
		    <rect x="100" y="100" width="70" height="70" fill="#fa0" filter=url("#blur3") />
<br/>

- 陰影  
	陰影其實說好做很好做，就做一個黑色的色塊讓它模糊即可，不過這裡用了一個比較有趣的方法，就是讓濾鏡套用在物件的 Aplha 色版 ( in="SourceAlpha" )，如此一來也可以做出陰影。

	![](https://lh5.googleusercontent.com/--8Z6SsSLKKg/U6re4sDIQ4I/AAAAAAAA470/JCUGaEr_rC0/s000/20140625_1_06.png)

		  <defs>
		  <filter width="200" height="200" x="0" y="0" id="blur1" filterUnits="userSpaceOnUse" >
		    <feGaussianBlur stdDeviation="5" in="SourceAlpha"  />
		  </filter>
		  </defs>
		    <rect x="30" y="35" width="70" height="70" fill="#f00" filter=url("#blur1") />
		    <rect x="30" y="30" width="70" height="70" fill="#6f9"/>
<br/>

- 不同形狀的陰影
	
	![](https://lh4.googleusercontent.com/-mhTRqjePiPg/U6rhHuLnucI/AAAAAAAA48A/7dOImQtmX38/s000/20140625_1_07.png)

		  <defs>
		  <filter width="200" height="200" x="0" y="0" id="blur1" filterUnits="userSpaceOnUse" >
		    <feGaussianBlur stdDeviation="5"/>
		  </filter>
		  </defs>
		    <path d="M30 30 L100 30 Q90 65 100 100 L30 100 Q40 65 30 30" fill="#000" filter=url("#blur1") />
		    <rect x="30" y="30" width="70" height="70" fill="#6f9"/>
<br/>
陰影的做法萬變不離其宗，跟我們以往使用 photoshop 和 illustrator 總是幾分類似，畢竟身為設計師，最拿手的也應該就是利用光影的變化來欺騙眼睛，學會了 SVG 的`feGaussianBlur`，相信一定能做出更多有趣的效果。



