##SVG 研究之路 (10) - filter part 1
這篇主要探討 SVG 的濾鏡：filter，是 SVG 裏頭比較少人著墨的地方，但卻也是可以讓圖形變化最大的地方，濾鏡不外乎像高斯模糊、混合、色彩變換...等，在我們使用繪圖軟體的時候，濾鏡是最常用到的功能之一，隨著瀏覽器的進步，幾乎所有的瀏覽起都支援 SVG 的濾鏡了 ( [各家瀏覽器 SVG 支援度](http://caniuse.com/svg-filters) )，但是濾鏡牽涉到太多演算法，例如什麼純量乘積、阿達馬乘積...等，我實在也還沒搞懂，所以這篇先將濾鏡表列出來，之後再來慢慢研究。

一如往常，第一步，在`<defs></defs>`裏頭，加入`<filter></filter>`的標籤，然後給它一個 id 作為識別，接著就是要在`filter`裏頭放入濾鏡，在此之前，`filter`除了 x、y、width、height 幾個基本屬性外，也幾個比較特別的屬性需要設定：

- **filterUnits** ："userSpaceOnUse | objectBoundingBox" ( 位置以 SVG 畫面為主，還是以套用的物件為主 )
- **primitiveUnits** ： "userSpaceOnUse | objectBoundingBox" ( 預設 userSpaceOnUse )
- **filterRes** ： 該屬性定義了中間緩存區域的大小，通常不需要提供

因此濾鏡的程式通常都會寫成：

      <defs>
        <filter id="id名" x="0" y="0" width="100%" height="100%" filterUnits="userSpaceOnUse">
          濾鏡
        </filter>
      </defs>
<br/>

因為我自己也還沒搞清楚一些濾鏡的用法，如果對濾鏡有興趣，可以閱讀這幾篇文章：[W3C SVG Filters](http://www.w3.org/TR/SVG/filters.html)、[Filter Effects in SVG](http://srufaculty.sru.edu/david.dailey/svg/SVGOpen2010/Filters2.htm)，以下是濾鏡的列表：

- **feBlend** ：使用不同的混合模式把兩個對象合成在一起。
- **feColorMatrix** ：應用矩陣轉換。( [Matrix multiplication](http://en.wikipedia.org/wiki/Matrix_multiplication) )
- **feComponentTransfer** ：允許圖片由四個色彩通道重新定義
	- feFuncA、feFuncB、feFuncG、feFuncR
- **feComposite** ：混合圖片，可以以百分比的方式進行混合
- **feConvolveMatrix** ：透過矩陣運算，做出模糊，邊緣檢測，銳化，浮雕和斜角...等效果。
- **feDiffuseLighting** ：使用 alpha channel 計算凹凸
- **feDisplacementMap** ：置換每一英吋的圖像
- **feDistantLight** ：定義光源
	- fePointLight、feSpecularLighting、feSpotLight
- **feFlood** ：重新繪製矩形並和其他物件結合
- **feGaussianBlur** ：高斯模糊
- **feImage** ：插入一張圖片成為濾鏡
- **feMerge** ：不同濾鏡的組合 ( merge )	
	- feMergeNode
- **feMorphology**
- **feOffset** ：移動套用濾鏡的物件位置位置
- **feTile** ：讓圖像以重複模式進入濾鏡
- **feTurbulence** ：創建震盪與紋理




