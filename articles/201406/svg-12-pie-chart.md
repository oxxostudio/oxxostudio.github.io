##SVG 研究之路 (12) - pie chart 圓餅圖實作
在之前我所撰寫的 SVG path 的文章 [SVG 研究之路 (5) - Path 進階篇](http://www.oxxostudio.tw/articles/201406/svg-05-path-2.html) 當中，詳細介紹了關於 path 的 A 參數用法，回想一下，A 參數是拿來繪製弧形，因此這篇就藉由 A 參數的精妙之處，來繪製圓餅圖；什麼是圓餅圖呢？圓餅圖 ( pie chart ) 是在各式各樣的圖表中，常見且最基本的圖表類型，雖然我們常常使用 Excel 等試算表工具來繪製，但往往在轉成網頁的時候，就必須轉換成圖檔，無法動態的產生圓餅圖，不過在瀏覽器進步的今天，我們就可以藉由程式來繪製出相當精緻的圖表。

要繪製圓餅圖的第一步，我們先來使用 SVG path 的 A 參數繪製一個四分之一圓	，四分之一圓的原理很簡單，就是將 A 參數的兩軸設為相等 ( 也就是圓形 )，接著只要知道頂點和側邊頂點的座標，就能夠畫出四分之一圓。  

![SVG - pie chart](https://lh3.googleusercontent.com/-Zpt9DDQ6alA/U6mPtG-N7NI/AAAAAAAA46U/6LBhFd6frvo/s800/20140623_1_02.png)

    <path d="M100 100,L100 50,A50 50 0 0 0 50 100,Z" fill="#fa0"/>
<Br/>

接下來我們來繪製一個四分之一圓，一個四分之三圓  

![SVG - pie chart](https://lh5.googleusercontent.com/-1xMA03yVSiU/U6mPtF_nXKI/AAAAAAAA46Y/4P3DgclIk_E/s000/20140623_1_03.png)


    <path d="M100 100,L100 50,A50 50 0 0 0 50 100,Z" fill="#fa0"/>
    <path d="M100 100,L100 50,A50 50 0 1 1 50 100,Z" fill="#09d"/>
<br/>

從上圖我們可以發現，如果要繪製大於 180 度的圓，我們程式上必須要讓繪製的路徑角度弧線設為大角度弧線 ( 數字為 1 )，這也是在繪製圓餅圖的時候必須要注意的，不然就會變成下面這樣：   

![SVG - pie chart](https://lh6.googleusercontent.com/-2Crjy4lMdWk/U6mQp42hVnI/AAAAAAAA46g/JhhtXGDtV_M/s000/20140623_1_04.png)

    <path d="M100 100,L100 50,A50 50 0 1 0 50 100,Z" fill="#09d"/>
    <path d="M100 100,L100 50,A50 50 0 0 0 50 100,Z" fill="#fa0"/>
<br/>

了解了圓餅圖的構造，現在我們要來繪製一個不同角度的圓餅圖 ( 剛剛都使用 90 度和 90 度的倍數 )，如果要繪製不同角度的圓餅圖，就必須要使用三角函數去計算起點和終點，有了起點和終點才能夠畫出弧線，舉例來說，要畫一個夾角 30 度的弧線，我就必須先用 javascript 計算：  

![SVG - pie chart](https://lh6.googleusercontent.com/-34WolE6GNS4/U6mUDGi4qOI/AAAAAAAA46w/oNxUkwWM8a0/s000/20140623_1_05.png)

JS：

    $(function(){ 
      var startAngle=0;                                  // 起始角度
      var deg1 = 30 + startAngle;                        // 夾角
      var x0 = 100+50*Math.cos(startAngle*Math.PI/180);  // 計算起點x座標
      var y0 = 100-50*Math.sin(startAngle*Math.PI/180);  // 計算起點y座標
      var x1 = 100+50*Math.cos(deg1*Math.PI/180);        // 計算終點x座標
      var y1 = 100-50*Math.sin(deg1*Math.PI/180);        // 計算終點y座標   
      
      $('path').attr('d','M100 100,L100 50,A'+x0+' '+y0+' 0 0 1 '+x1+' '+y1+',Z');  
    });

SVG：

	<path fill="#fa0"/>
<br/>

理解了圓餅圖的原理之後，我們就可以設定相關的參數，並且統一讓畫圓的方向固定為順時針或逆時針，就可以畫出漂亮的圓餅圖。( 當然，更進階的可以去做判斷，讓大於 180 度的圓餅使用大角度弧線，避免畫出來會很奇怪囉！ ) 當然，pie chart 也可以先變萬化，例如我們可以使用各種不同數值的半徑，就可以做出每個半徑都不盡相同的圓餅區塊，整體也會更具特色喔！

![SVG - pie chart](https://lh3.googleusercontent.com/-Na5ePGvCG5E/U6mVZ08OjzI/AAAAAAAA468/0d8NtxJNq5g/s000/20140623_1_06.png)

JS：

	$(function(){ 
	 var startAngle=0;
	 var cx = 100;
	 var cy = 100;
	 var r = 100;
	 var deg1 = 30 + startAngle;
	 var deg2 = 240 + deg1;
	 var deg3 = 90 + deg2;
	
	 var x0 = cx+r*Math.cos(startAngle*Math.PI/180);
	 var y0 = cy-r*Math.sin(startAngle*Math.PI/180);
	
	 var x1 = cx+r*Math.cos(deg1*Math.PI/180); 
	 var y1 = cy-r*Math.sin(deg1*Math.PI/180); 
	
	 var x2 = cx+r*Math.cos(deg2*Math.PI/180); 
	 var y2 = cy-r*Math.sin(deg2*Math.PI/180); 
	
	 var x3 = cx+r*Math.cos(deg3*Math.PI/180); 
	 var y3 = cy-r*Math.sin(deg3*Math.PI/180); 
	
	 $("#test1").attr("d","M "+cx+","+cy+" L "+x0+","+y0+" A "+r+","+r+" 0 0,0 "+x1+","+y1+" Z");
	 $("#test2").attr("d","M "+cx+","+cy+" L "+x1+","+y1+" A "+r+","+r+" 0 1,0 "+x2+","+y2+" Z");
	 $("#test3").attr("d","M "+cx+","+cy+" L "+x2+","+y2+" A "+r+","+r+" 0 0,0 "+x3+","+y3+" Z");
	});

SVG：

	<path id="test1" style="fill:#fe0; stroke:#fff; stroke-width:5;" />
	<path id="test2" style="fill:#0a0; stroke:#fff; stroke-width:5;" />
	<path id="test3" style="fill:#e00; stroke:#fff; stroke-width:5;" />