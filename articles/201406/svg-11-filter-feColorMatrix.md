##SVG 研究之路 (11) - filter - feColorMatrix
feColorMatrix 顧名思義就是色彩矩陣的濾鏡，用一個矩陣的計算，將圖片的色彩重新計算後輸出，便可以達到各種不同的色彩變化效果，在此之前，要先介紹一下圖片顏色定義，因為如果不了解圖片的顏色組成原理，就會無法明白色彩該如何去計算。( 可以先閱讀我的這篇文章：[淺談位元色版](http://www.oxxostudio.tw/articles/201406/color-channel.html) )

基本上在網路的圖片裡頭 ( jpg、png )，每一個像素的顏色，都是由 R ( 紅 ) 、G ( 綠 ) 、B ( 藍 ) 、A ( 透明 / Alpha ) 四個色版所組成 ( 使用過 Photoshop 應該很清楚，不清楚的請好好重學 Photoshop ) ，每一個色版具有 0~255 階 ( 2 的八次方 )，透過色彩矩陣的換算，我們可以輕易地改變圖片裡每一個像素的顏色，色彩矩陣的公式如下：  

![SVG filter - feColorMatrix](https://lh4.googleusercontent.com/-fBfCqhB34-E/U6WgNjmEFMI/AAAAAAAA4yA/DpvgEJ0Wn_0/s000/20140621_1_02.png)

![SVG filter - feColorMatrix](https://lh4.googleusercontent.com/-bOXig9RxK7s/U6WgNt2EGdI/AAAAAAAA4x8/v6zlWyOb2C4/s000/20140621_1_03.png)  

<br/>
裏頭的 R in 代表原來的紅色色版，R out 代表轉換過的紅色色版，依此類推 G 和 B 也是如此，最後一個 1 是可以額外增加的參數就先別理他了，因此由公式我們可以知道，經過這個色彩矩陣的轉換，我們可以輕鬆地把一張圖片裏頭的某些顏色換成另外的顏色，或是把某些顏色直接拿掉，直接看下面的範例圖比較容易理解：

這是一張 RGB 色光的色彩模型 ( 背景透明 )  
![SVG filter - feColorMatrix](https://lh3.googleusercontent.com/-ShZyFZaqvDM/U6a3TSmH5KI/AAAAAAAA4yg/cyQB-sC8Goc/s000/20140621_1_04.png)  

利用下面的矩陣，我們可以把紅色的數值 255 給變成 0

    <feColorMatrix values="0 0 0 0 0
                           0 1 0 0 0
                           0 0 1 0 0
                           0 0 0 1 0" />

輸出結果：

![SVG filter - feColorMatrix](https://lh6.googleusercontent.com/-NqqXyowTfm4/U6a3qGFXmMI/AAAAAAAA4yo/zeuSsYe4NxQ/s000/20140621_1_05.png)  

為什麼會這樣呢？因為紅色的 255 數值 ( 純紅色的色碼： FF0000 ) 經過矩陣轉換後，變成： (255/255)x0 + (G/255)x0 + (B/255)x0 + (alpha/255)x0 = 0，因為 0*255 = 0，在色碼表中 0 所代表的就是黑色，因此紅色的區域就變成黑色了 ( 000000 )，同樣的道理，我們也可以讓藍色和綠色都消失：

    <feColorMatrix values="1 0 0 0 0
                           0 0 0 0 0
                           0 0 1 0 0
                           0 0 0 1 0" />

![SVG filter - feColorMatrix](https://lh6.googleusercontent.com/-9WiXuBoc5a4/U6a5DiONgSI/AAAAAAAA4y8/ALZWwEGy5OE/s000/20140621_1_06.png)  

    <feColorMatrix values="1 0 0 0 0
                           0 1 0 0 0
                           0 0 0 0 0
                           0 0 0 1 0" />

![SVG filter - feColorMatrix](https://lh4.googleusercontent.com/-RLv3UY4pAnw/U6a5DtWz0oI/AAAAAAAA4y4/YWQML4N6e1Y/s000/20140621_1_07.png) 

如果我們把矩陣的位置互換，就可以把顏色互相對調過來

    <feColorMatrix values="0 0 1 0 0
                           0 1 0 0 0
                           1 0 0 0 0
                           0 0 0 1 0" />

![SVG filter - feColorMatrix](https://lh3.googleusercontent.com/-oXzkM5E5K_Q/U6bg341V6FI/AAAAAAAA4z8/PZvAgmV1EoI/s000/20140621_1_04_1.pngg) 


接著我們看到 Alpha 這個色版，簡單來說這個色版掌管透明度，但實際上這個色版可以想像成遮色片的色版，具有 256 個從黑到白的灰階模式，越黑越透明，越白越不透明，但 alpha 的數字卻是 0~1 組成，一張圖片不管怎樣，如果單純只看 alpha 都是 255/255=1 ( 全白 )，不然的話這張圖片就會變成半透明了，可以看以下的例子,將 alpha 改為 0.5 就變成半透明了：

    <feColorMatrix values="1 0 0 0 0
                           0 1 0 0 0
                           0 0 1 0 0
                           0 0 0 .5 0" />

![SVG filter - feColorMatrix](https://lh3.googleusercontent.com/-tGIMzYtLDN4/U6bMVgQiAbI/AAAAAAAA4zY/HTlcMLNcEjU/s000/20140621_1_08.png) 

<br/>
看完了單純 RGBA 的圖片說明，對於色彩矩陣應該有了初步的認識，接下來就來點比較複雜的，直接用一張具有各種色彩的圖片來玩玩看！以下我選擇了我最喜歡的超現實主義大師 Rene Magritte 的代表作 The Son of Man 的截圖來向大師致敬！

![SVG filter - feColorMatrix](https://lh6.googleusercontent.com/-jGJx-yUAWVQ/U6bNTpOBaPI/AAAAAAAA4zg/phsz77Ai1EI/s000/20140621_1_09.png) 

假設我們今天要把圖片的飽和度提高，該怎麼做呢？首先當然是想想飽和度的成因，就是紅的越紅，藍的越藍，綠的越綠，由這個成因出發，我們的矩陣就可以寫成下面的樣子，看到矩陣當中出現了 3 和 -1，一定會很那悶這是怎麼來的，箇中原理其實很容易理解，讓我們假設某一個像素的 RGB 分別是 (200/255),(100/255),(50/255)，呈現的應該是有點暗沉的橘色，經過矩陣的換算，R 變成了 200/255x3-100/255-50/255= 1.76, G 變成 200/255x(-1)+100/255*3-50/255=0.2，B 變成 200x(-1)+100x(-1)+50x3=-0.59，因此 RGB 轉換後就是：200x1.76,100x0.2,50x-0.5。

    <feColorMatrix values="3 -1 -1 0 0
                           -1 3 -1 0 0
                           -1 -1 3 0 0
                           0 0 0 1 0" />

![SVG filter - feColorMatrix](https://lh5.googleusercontent.com/-ej_v_HrskgM/U6bOzl-sVCI/AAAAAAAA4zs/Ofm9vOdT6r0/s000/20140621_1_10.png)  


<br/>
如果今天要讓一張圖片變成灰階，其實我們可以這麼做：

    <feColorMatrix values="1 0 0 0 0
                           1 0 0 0 0
                           1 0 0 0 0
                           0 0 0 1 0" />

![SVG filter - feColorMatrix](https://lh3.googleusercontent.com/-RNi-RhW-Jo8/U6bhL7HhnAI/AAAAAAAA40E/hyTpKEznppw/s000/20140621_1_11.png)  

做出不同的灰階效果：

    <feColorMatrix values=".5 .2 .3 0 0
                           .5 .2 .3 0 0
                           .5 .2 .3 0 0
                           0 0 0 1 0" />

![SVG filter - feColorMatrix](https://lh6.googleusercontent.com/-QskMzj1gN7Q/U6bhfeJKaxI/AAAAAAAA40M/sM8yorOUXpw/s000/20140621_1_12.png)  

<br/>
此外也可以單純針對 alpha 色版做變化，就可以單純針對紅色、綠色、藍色的 alpha 值，進行遮色片的效果 ( 就有點類似 photoshop 的遮色片 )，我在下方放了一個色塊，就可以清楚知道各個遮色片的效果

    <feColorMatrix values="0 0 0 0 0
                           0 0 0 0 0
                           0 0 0 0 0
                           1 1 1 0 0" />

![SVG filter - feColorMatrix](https://lh5.googleusercontent.com/-kf0UMSh3kKo/U6bjDsqgWuI/AAAAAAAA40w/ZXkp8ksclFQ/s000/20140621_1_13.png)  

    <feColorMatrix values="0 0 0 0 0
                           0 0 0 0 0
                           0 0 0 0 0
                           1 0 0 0 0" />

![SVG filter - feColorMatrix](https://lh3.googleusercontent.com/-CuZzZdmQ4Bc/U6bjDlp2H8I/AAAAAAAA40o/XroWJgWlqTY/s000/20140621_1_14.png)  

    <feColorMatrix values="0 0 0 0 0
                           0 0 0 0 0
                           0 0 0 0 0
                           0 1 0 0 0" />

![SVG filter - feColorMatrix](https://lh6.googleusercontent.com/-dKafRnvFb18/U6bjD1GAzLI/AAAAAAAA40k/VHB3x_NY-7c/s000/20140621_1_15.png)  

    <feColorMatrix values="0 0 0 0 0
                           0 0 0 0 0
                           0 0 0 0 0
                           0 0 1 0 0" />

![SVG filter - feColorMatrix](https://lh3.googleusercontent.com/-pFXhf5zd7Y0/U6bjESxbwyI/AAAAAAAA40s/0tz9-SKS4tY/s000/20140621_1_16.png)  


我了解看到這邊，大家應該已經「灰起」了，總之這就是色彩矩陣的計算原理，不過其實也不用太擔心，SVG 裏頭其實已經幫我們設定好了幾組，只需要輸入 type 名稱以及數值，就可以輕鬆的產生濾鏡效果，也大幅度減少了自己動手運算的門檻，

- **type="matrix"**：  
	這就是剛剛提到的矩陣，也是預設值，values 就是那二十組數字。

- **type="saturate"**：  
	顧名思義就是飽和度，values=0 是無飽和度，數字越大飽和度越高。

		<feColorMatrix type="saturate" values="0" />
	
	![SVG filter - feColorMatrix](https://lh5.googleusercontent.com/-Pdd2s2aPP98/U6blfUIlRoI/AAAAAAAA41E/4ovpyDd2r-k/s000/20140621_1_17.png)  

		<feColorMatrix type="saturate" values="1" />
	
	![SVG filter - feColorMatrix](https://lh4.googleusercontent.com/-o-771ucXpkA/U6blfi5PHqI/AAAAAAAA41I/RqFVTDRw_Ss/s000/20140621_1_18.png)  

		<feColorMatrix type="saturate" values="5" />
	
	![SVG filter - feColorMatrix](https://lh3.googleusercontent.com/-wv_NLueJDRw/U6blfvMO2NI/AAAAAAAA41M/g5sfrZjmfxs/s000/20140621_1_19.png)  
<br/>

- **type="hueRotate"**：  
	顧名思義就是色相，values 帶入的是角度，也就是 [色相環](http://zh.wikipedia.org/wiki/%E8%89%B2%E7%9B%B8) 要旋轉的角度。

    	<feColorMatrix type="hueRotate" values="0" />
	
	![SVG filter - feColorMatrix](https://lh4.googleusercontent.com/-o-771ucXpkA/U6blfi5PHqI/AAAAAAAA41I/RqFVTDRw_Ss/s000/20140621_1_18.png)  
	
    	<feColorMatrix type="hueRotate" values="90" />
	
	![SVG filter - feColorMatrix](https://lh6.googleusercontent.com/-MCBrLf34IH0/U6bmqwcYQII/AAAAAAAA41Y/nnyurV6lFC4/s000/20140621_1_20.png)  

    	<feColorMatrix type="hueRotate" values="180" />
	
	![SVG filter - feColorMatrix](https://lh6.googleusercontent.com/-lbZO0zNlWqw/U6bmqzMM-QI/AAAAAAAA41c/v3pXYIY11zM/s000/20140621_1_21.png)  
<br/>

- **type="luminanceToAlpha"**：  
	直接變成遮色片的形式，沒有 values 值。

		<feColorMatrix type="luminanceToAlpha"/>
	
	![SVG filter - feColorMatrix](https://lh4.googleusercontent.com/-if72h18DF5g/U6bnUoAryBI/AAAAAAAA41k/Y5XzBDMxFZE/s000/20140621_1_22.png)  
<br/>


以上就是 SVG filter feColorMatrix 的介紹，相同的 colormatrix 原理同樣可以應用在 HTML5 的色彩運算上，說難不難，但是真的要深入去計算每個數值，讓產生的圖片變成最完美的效果，就是很難又很複雜的學問了！最後補充上一大堆的參考資料：

- [W3C Filter primitive feColorMatrix](http://www.w3.org/TR/SVG/filters.html#feColorMatrixTypeAttribute)
- [SVG filters](http://docs.webplatform.org/wiki/svg/tutorials/smarter_svg_filters)
- [颜色调整矩阵 ColorMatrix 详解](http://www.cnblogs.com/dreign/archive/2007/12/29/dreign.html)
- [ColorMatrix Basics](http://www.codeproject.com/Articles/3772/ColorMatrix-Basics-Simple-Image-Color-Adjustment)
- [Color Matrix](http://www.adobetutorialz.com/articles/1987/1/Color-Matrix)
- [Filter Effects in SVG](http://srufaculty.sru.edu/david.dailey/svg/SVGOpen2010/Filters2.htm)
- [Shiny Stuff with SVG, Part 5: Primitives II](http://floopily.com/blog/2012/11/11/svg-shinies-5)

