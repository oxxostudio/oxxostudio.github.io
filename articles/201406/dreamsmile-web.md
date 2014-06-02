##dreamsmile 網頁設計##
[點選我看範例網站](https://dl.dropboxusercontent.com/u/59597657/worktest/dreamsmile/zh-tw/index.html)

這是之前替公司所設計的產品網頁，介紹 dreamsmile 這套目標紀錄的 app，版面的配置採用現在比較流行的單頁式網頁設計，搭配卷軸滾動的小特效 ( 卷軸捲到哪邊就會出現一些效果 ) ，只是比較可惜的那時候對於 RWD 的技術還不熟練，加上時間比較緊迫，就快速地做出了這個版本，也因為沒有響應式，手機版本也是用 javascript 硬刻出來的。

裏頭花費最多時間的地方，就在上方滑鼠移動的特效，為了讓看起來真的像手機拍攝，除了背景和滑鼠移動必須連動，手機裡頭的圖片也必須連動，而兩者連動的位移比例也要不同，這也是自己第一次嘗試這種作法，但做出來感覺還滿特別，也頗受好評的。程式的部分沒有太特別的，主要就使用`e.pageX`和`e.pageY`來抓取滑鼠的位置，由圖片的中心點出發，計算水平和垂直的位移，進一步乘上或除以固定的比例，就能夠有類似的效果。

至於卷軸的部分就更簡單了，直接利用`scrollTop()`的方式就能夠抓取卷軸的數值，接著用各個 DOM 的`offset().top`就能讀取垂直的位置，就能輕鬆做出卷軸的效果。

最後，這套 app 產品：dreamsmile，這裡也稍微做一點點宣傳，畢竟也是之前同事努力的結晶，自己也負責了許多在行銷相關的工作，也從中對於行銷有更深一層的了解，雖然我認為在很多方面都還需要改善 ( 例如 UI 的設計、在市場上功能的定位、行銷的手法...等 )，不過如果能夠在未來改善，也不失為一套不錯使用的產品喔！

[點選下載 dreamsmile](https://itunes.apple.com/tw/app/dreamsmile-pai-zhao-ji-lu/id656664291?l=zh&mt=8)

![dreamsmile](https://lh6.googleusercontent.com/-jtxZw9RdEvM/U4x-uv0zuEI/AAAAAAAA39o/4jAaTZlrHt0/s000/20140602_1_02.jpg)
