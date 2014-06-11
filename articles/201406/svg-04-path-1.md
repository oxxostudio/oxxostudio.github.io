##SVG 研究之路 (4) - Path 基礎篇
接下來要談談 SVG 裡頭最為重要的元素：Path，因為SVG 是向量圖，所有的物件和元素都是由 Path ( 路徑 ) 所組成，所以 Path 就具有相當多的指令讓使用者設定， 換句話說，搞懂了 Path 就等於搞定了SVG ( 或是搞定 80% 的 SVG，不管啦 )。

本篇文章先將 Path 的指令表列出來，方便之後查找有個列表整裡，其中一個非常需要注意的地方，參數大寫代表絕對座標，小寫代表與前一個座標的相對座標，要特別注意！然後介紹裏頭基本的指令，後續會用其他篇介紹進階的指令。

<Br/>
###SVG Path 指令列表
<table>
<tr>
<th style="width:10%; background:#ddd;">指令</th>
<th style="width:20%; background:#ddd;">參數</th>
<th style="width:70%; background:#ddd;">指令說明</th>
</tr>
<tr>
<td>M</td>
<td>x y</td>
<td>起始點的 x , y 座標 ( move to )</td>
</tr>
<tr>
<td>L</td>
<td>x y</td>
<td>從目前點的座標畫直線到指定點的 x , y 座標 ( line to )</td>
</tr>
<tr>
<td>H</td>
<td>x</td>
<td>從目前點的座標畫水平直線到指定的 x 軸座標 ( horizontal line to )</td>
</tr>
<tr>
<td>V</td>
<td>y</td>
<td>從目前點的座標畫垂直線到指定的 y 軸座標 ( vertical line to )</td>
</tr>
<tr>
<td>C</td>
<td>x1 y1 x2 y2 x y</td>
<td>從目前點的座標畫條貝茲曲線到指定點的 x, y 座標：其中 x1, y1 及 x2, y2 為控制點 ( curve )</td>
</tr>
<tr>
<td>S</td>
<td>x2 y2 x y</td>
<td>從目前點的座標畫條反射的貝茲曲線到指定點的 x, y 座標：其中 x2, y2 為反射的控制點 ( smooth curve )</td>
</tr>
<tr>
<td>Q</td>
<td>x1 y1 x y</td>
<td>從目前點的座標畫條二次貝茲曲線到指定點的 x, y 座標：其中 x1, y1 為控制點 ( quadratic Bézier curve )</td>
</tr>
<tr>
<td>T</td>
<td>x y</td>
<td>從目前點的座標畫條反射二次貝茲曲線到指定點的 x, y 座標：以前一個座標為反射控制點( smooth quadratic Bézier  curve )</td>
</tr>
<tr>
<td>A</td>
<td>rx ry x-axis-rotation large-arc-flag sweep-flag x y</td>
<td>從目前點的座標畫個橢圓形到指定點的 x, y 座標：其中 rx, ry 為橢圓形的 x 軸及 y 軸的半徑，x-axis-rotation 是弧線與 x 軸的旋轉角度，large-arc-flag 則設定 1 最大角度的弧線或是 0 最小角度的弧線，sweep-flag 設定方向為 1 順時針方向或 0 逆時針方向 ( Arc )</td>
</tr>
<tr>
<td>Z</td>
<td></td>
<td>關閉路徑，將目前點的座標與第一個點的座標連接起來 ( closepath )</td>
</tr>
</table>

<br/>
###SVG Path 基本指令
- **M / m**  
  M 也就是起始點，因此所有的 Path 一定從 M 開始，M 也只有兩個參數，x 和 y ，下列程式表示 (0,0) 為起始點，但因為是起始點，所以看不到東西是正常的 ( 可以自己使用 Illustrator 的鋼筆工具點一個點，是看不到東西的 )  
  ![](https://lh4.googleusercontent.com/-O9kGjBoqSzY/U5hzww64KOI/AAAAAAAA4EA/4yChU00VF3U/s000/20140611_1_02.png)

		<path d="M0 0" stroke="black"/>
<br/>

- **H / h**  
  H 可以從目前的點畫水平線到某個 x 座標，只有一個參數，x 數字越大越往左，數字越小越往右。( 小寫則可視為長度 ) 下列程式為畫一條水平線到 (50,0)  
  ![](https://lh5.googleusercontent.com/-YBXzNLg9VFA/U5hzw73xqdI/AAAAAAAA4E8/vvzB4p9AZDY/s000/20140611_1_03.png)

		<path d="M0 0 H50" stroke="black"/>
<br/>


- **V / v**  
  V 可以從目前的點畫垂直線到某個 y 座標，只有一個參數，y 數字越大越往下，數字越小越往上。( 小寫則可視為長度 ) 下列程式為畫一條垂直線到 (0,50)  
  ![](https://lh5.googleusercontent.com/-yrWwXWwGJBY/U5hzwxH5TUI/AAAAAAAA4EM/WIRwevdN7vA/s000/20140611_1_04.png)

		<path d="M0 0 V50" stroke="black"/>
<br/>

- **L / l**  
  L 可以從目前的點畫垂直線到某個座標，有兩個參數個參數 x、y，也就是要移動到的座標點，下列程式為畫一條線到 (50,50)  
  ![](https://lh6.googleusercontent.com/-RPbGC8aTm6E/U5hzxn3fG8I/AAAAAAAA4E0/9MPfeG2PkSU/s000/20140611_1_05.png)

		<path d="M0 0 L50 50" stroke="black"/>
<br/>


- **C / c**  
  C 表示可以畫一個如下圖所示的三次貝茲曲線 ( 對於數學式想了解的可以參考 [這篇](http://en.wikipedia.org/wiki/B%C3%A9zier_curve) )，因此總共會有六個控制點，分別是 x1,y1,x2,y2,x,y，當中 x1,y2 表示第一個貝茲曲線的控制點，x2,y2 表示第二個貝茲曲線的控制點，x,y 則是線段的結束點，這裡 C 和 c 的大小寫一定要搞清楚，如果是使用 Illustrator 畫出來的，c 是小寫喔！下面的程式就會畫出一個波浪型的線段  
  ![](https://lh5.googleusercontent.com/-LGuXrkEX4WI/U5hzx-OVWpI/AAAAAAAA4EY/73xXsWhYBRY/s000/20140611_1_06.png)

		<path d="M0 0 C40 40,60 40,100,0" stroke="black" fill="none"/>
<br/>

- **S / s**  
  S 可以在原本的點後方建立一個帶有貝茲曲線控制點的點，然後原本的點會以同樣的斜率鏡射一個貝茲控制點，講得很像繞口令，可以可以看下圖就明白了  
  ![](https://lh6.googleusercontent.com/-89aaA3TwW84/U5hzyVOYBcI/AAAAAAAA4Ew/ejNg7iMP9Ic/s000/20140611_1_07.png)

		<path d="M0 0 C40 40,60 40,100,0 S150 -40, 200 0" stroke="black" fill="none"/>
<br/>

- **Q / q**
  Q 就簡單多了，就是起點和終點的貝茲曲線共用同一個控制點，只需要有貝茲控制點的座標和終點座標即可  
  ![](https://lh6.googleusercontent.com/-sgYafV8Eqwg/U5hzysyrGqI/AAAAAAAA4Es/gtnqEEpDids/s000/20140611_1_08.png)

		<path d="M0 0 Q50 50, 100 0" stroke="black" fill="none"/>
<br/>

- **T / t**
  T 只有一組參數 x,y ，表示終點的座標，所以 T 的前方要接上 Q 才能畫出對應的座標線  
  ![](https://lh6.googleusercontent.com/-OBkb2yUw9hw/U5hzzMLFtCI/AAAAAAAA4Ek/fyxngKsHfyQ/s000/20140611_1_09.png)

		<path d="M0 0 Q50 50, 100 0 T200 0" stroke="black" fill="none"/>
<br/>

- **Z / z**
  Z 沒有參數，也是放在最後的，有加上 Z 的話，會從終點用一條線連回起點  
  ![](https://lh6.googleusercontent.com/-bNCY9Gthxg0/U5hzzccUNtI/AAAAAAAA4Eo/HHsSjDqGz-o/s000/20140611_1_10.png)

		<path d="M0 0 Q50 50, 100 0 T200 0 Z" stroke="black" fill="none"/>

以上就是基本的命令控制，之後將會介紹 A 這個命令，因為 A 這個命令較為複雜，也是 Path 裏頭滿精華的部分，所以就用一篇文章專門介紹吧！




