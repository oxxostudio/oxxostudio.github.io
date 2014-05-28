## CSS 偽類 child 和 of-type ##
對於 CSS 的初學者而言，通常比較常用到的偽類大概就是超連結的錨點偽類： `a:link` 、 `a:hover` 、 `a:active` 和 `a:visited` 這四種，但偽類真正的精華在於可以比較精準地控制 HTML 當中的各個 DOM，不僅僅只有這四種而已，偽類分為四大類，第一大類就是剛剛所提到的「**錨點偽類**」，也就是跟隨在超連結後的這四種，第二類是「**狀態偽類**」，就是描述 `:checked` 、 `unchecked` 、 `:enabled` 、 `:disabled` 這幾種，而另外兩類則是 `-child` 和 `of-type`，這兩類是因為 CSS3 新增的偽類，也比較容易搞混，於是今天就來針對這兩類做說明。

<br/>
`child` 顧名思義，就是小孩子的意思，換句話說，凡是套上 child 的 DOM，外頭的 DOM 就是他的爸爸 ( 父元素 )，不管裏頭的元素是甚麼，都是 child，而 `child` 又有以下幾種：
  
- :first-child：第一個子元素
- :last-child：最後一個子元素
- :nth-child(數字)：第幾個子元素
- :nth-last-child()：從後面數來第幾個子元素
- :only-child：只有一個子元素

光是列出來可能還沒有感覺，直接來看看效果，假設你的程式碼如下：    

	<ul>
		<li>1</li>
		<li>2</li>
		<li>3</li>
		<li>4</li>
		<li>5</li>
		<li>6</li>
	</ul>

你的 CSS 如下：

	li{
		list-style:none;
		float:left;
		width:20px;
		height:20px;
		background:#ccc;
		margin:5px;
	}

那麼出來的長相應該會是這樣：  
![img01](https://lh5.googleusercontent.com/-1I9-Y9CJLx4/U4X8lBZ_-KI/AAAAAAAA32U/foW6Xfgyd8Y/s000/20140527_1_02.png)

現在我們來試試看 `:first-child`，照著以下的 CSS 來寫
	
	li:first-child{
		background:#c00;	
	}

所呈現的畫面就會變成這樣：  
![img02](https://lh4.googleusercontent.com/-J7IZ7ebB8JI/U4X8lVGVdrI/AAAAAAAA32g/JGoGVtp0BIw/s000/20140527_1_03.png)

`last-child`
	
	li:last-child{
		background:#00c;	
	}

![img03](https://lh4.googleusercontent.com/-7tKXFUYQia8/U4X8lNsuGaI/AAAAAAAA32k/PUYuvnPlGBo/s000/20140527_1_04.png)

`:nth-child(數字)` 挑選第幾個 ( 注意，這裡是 1 起頭，不是 0 )
	
	li:nth-child(2){
		background:#c00;	
	}

![img04](https://lh6.googleusercontent.com/-tLleuMGmbZs/U4X8l3jRsEI/AAAAAAAA33A/E_FcVNKKNuE/s000/20140527_1_05.png)

`:nth-child(2n)` 把偶數的挑出來 ( 應該說是把 2 的倍數挑出來 )
	
	li:nth-child(2n){
		background:#c00;	
	}

![img05](https://lh6.googleusercontent.com/-F-8DyzU1RuE/U4X8l9PBPZI/AAAAAAAA32s/emhMG58NrNA/s000/20140527_1_06.png)

`:nth-child(2n+1)` 把奇數的挑出來，其他就依此類推
	
	li:nth-child(2n+1){
		background:#c00;	
	}

至於 `nth-last-child()` 剛好就和 nth-child 相反過來，是從後面數過來的，這裡就不多做說明，而最後一個 `only-child()`，只適用於父元素內只有一個子元素的情形，例如你的程式碼是：

	<ul>
		<li>ok</li>
	</ul>
	<br/>
	<ul>
		<li>1</li>
		<li>2</li>
		<li>3</li>
		<li>4</li>
		<li>5</li>
	</ul>

當我們撰寫 `li:only-child{ background:#c00; }`，只有第一組 ul 會變色而已，因為第一組 `ul` 只有一個元素，第二組 `ul` 則具有五個元素，就如同下圖所示：

![img06](https://lh6.googleusercontent.com/-2z1GwcKLyjQ/U4X8mZhH0xI/AAAAAAAA320/el-i_AIs-Sg/s000/20140527_1_07.png)

不過，不要以為 `child` 的偽類就這麼簡單，裏頭隱藏著一個很容易搞混的地方，如果今天子元素不是單純的 `li`，而是許多元素混雜而成的，你就會發現 `:first-child` 無法精準地控制第一個子元素了，例如：

	<div id="test">
		<div>1</div>
		<span>2</span>
		<span>3</span>
		<span>4</span>
		<div>5</div>
		<span>6</span>
		<div>7</div>
	</div>

我們的 CSS 這樣寫：

	#test div, #test span{
		width:20px;
		height:20px;
		background:#ccc;
		display:inline-block;
		margin:5px;
	}
<br/>

長相會是這樣：

![img07](https://lh3.googleusercontent.com/-CpWBP47nO44/U4X8mYMwBuI/AAAAAAAA328/rxV5sanIHng/s000/20140527_1_08.png)


這時候如果我們寫了

	#test span:first-child{
		background:#c00;
	}

就會發現**完全沒有反應！？**為什麼呢？因為 `child` 是只所有的子元素，裏頭的 `:first-child` 表示 `div`，但又因為我們指向 `span`，所以導致這個 `CSS` 是不會被套用進去的，這也是在使用 `child` 的偽類很容易遇到的錯誤，卻又不知道錯誤是如何發生，那麼到這邊，或許你會問，如果交錯混雜，我又想要選取固定元素該怎麼辦呢？這時候我們就要用上 `of-type` 的偽類,`of-type` 的偽類也有以下幾種：

- :first-of-type：同一種元素的第一個
- :last-of-type：同一種元素的最後一個
- :nth-of-type()：同一種元素裏頭的第幾個
- :nth-last-of-type()：同一種元素從後面屬過來第幾個
- :only-of-type：只有這種元素

經過剛剛的 `child` 介紹，相信大家對於上述的這些名詞解釋應該都可以想像出畫面了吧，也因此如果我們要控制剛剛那串程式碼的第一個 `span`，我們就要這樣寫：

	#test span:first-of-type{
		background:#c00;
	}

![img08](https://lh5.googleusercontent.com/-E1HyCTIta1k/U4X-_1OQJXI/AAAAAAAA33Q/4QifacbpGDQ/s000/20140527_1_09.png)

就會如上圖看到的，第一個 `span` 就變色了，也因如此，善用這些好用的偽類，我們更可以精準地控制我們所要控制的元素囉！