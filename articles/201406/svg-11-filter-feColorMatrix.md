##SVG 研究之路 (11) - filter - feColorMatrix
feColorMatrix 顧名思義就是色彩矩陣的濾鏡，用一個矩陣的計算，將圖片的色彩重新計算後輸出，便可以達到各種不同的色彩變化效果，在此之前，要先介紹一下圖片顏色定義，因為如果不了解圖片的顏色組成原理，就會無法明白色彩該如何去計算。( 可以先閱讀我的這篇文章：[淺談位元色版](http://www.oxxostudio.tw/articles/201406/color-channel.html) )

基本上在網路的圖片裡頭 ( jpg、png )，每一個像素的顏色，都是由 R ( 紅 ) 、G ( 綠 ) 、B ( 藍 ) 、A ( 透明 / Alpha ) 四個色版所組成 ( 使用過 Photoshop 應該很清楚，不清楚的請好好重學 Photoshop ) ，每一個色版具有 0~255 階 ( 2 的八次方 )，透過色彩矩陣的換算，我們可以輕易地改變圖片裡每一個像素的顏色，色彩矩陣的公式如下：  

![SVG filter - feColorMatrix](https://lh4.googleusercontent.com/-fBfCqhB34-E/U6WgNjmEFMI/AAAAAAAA4yA/DpvgEJ0Wn_0/s000/20140621_1_02.png)

![SVG filter - feColorMatrix](https://lh4.googleusercontent.com/-bOXig9RxK7s/U6WgNt2EGdI/AAAAAAAA4x8/v6zlWyOb2C4/s000/20140621_1_03.png)  

裏頭的 R in 代表原來的紅色色版，R out 代表轉換過的紅色色版，依此類推 G 和 B 也是如此，最後一個 1 是固定參數就先別理他了，因此由公式我們可以知道，經過這個色彩矩陣的轉換，我們可以輕鬆地把一張圖片裏頭的某些顏色換成另外的顏色，或是把某些顏色直接拿掉，