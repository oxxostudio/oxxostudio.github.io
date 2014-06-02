##CSS 文字的換行##
由於響應式網頁技術的興起，間接造成排版上不小的挑戰和創新，其中的一小部分就是文字的排版，這篇就來介紹一下在 CSS 裏頭文字的斷行，為什麼要特別寫這一篇呢？因為在做這個 blog 的時候，我竟然也遇到了斷行的問題，解決了文字的斷行，又冒出來`pre`的斷行問題，不過最後總算是都解決了，就寫下這一篇作為紀錄。

在網頁裡頭文字斷行會遇到兩種情況，第一種就是單純的文字，第二種就是被`pre`所包覆的文字，通常在`pre`裏頭，都會是完整的呈現程式碼，也是最基本展現程式碼的標籤，或許是因為這樣子的差異，我們如果只將斷行的 CSS 設定在網頁上，對於`pre`內的程式碼是沒有作用的 ( 不過如果有設定`overflow:scroll`這種方式又另當別論 )，以下整理了所有斷行的方式，如果未來又遇到的話，也才有個比較完整的參考。

###word-wrap### 
強迫文字斷行，預設是 normal 不會斷行，但這是針對**過長的英文文字**，如果是**整段句子**還是會斷行的，我們今天要讓英文字斷行，可以直接在 CSS 寫上`word-wrap:break-word;`，這樣過長的文字就會直接被折行，除了直接由外框寬度折行，也可以在過長的文字當中加入`&shy;`這個瀏覽器不會顯示的語法，這樣子過長的英文字，就會在有加入`&shy;`的地方折行，同時補上「-」的符號。( 也可以加入`&#8203;`這個代碼，但不會補「-」，只會補上空白 )  
可以參考這個範例：[http://codepen.io/oxxo/pen/nisIq](http://codepen.io/oxxo/pen/nisIq)  

![word-wrap](https://lh5.googleusercontent.com/-S5TVA189W-A/U4yUwYmPBeI/AAAAAAAA3-A/sHoyqvoZVFU/s000/20140602_2_02.png)

<br/>
###white-space###
由於`word-wrap`只能讓英文單字換行，對於整段文章無法換行該怎麼做呢？這時候我們就需要用到`white-space`的屬性，有興趣的人也可以參考 w3schools 的 [說明](http://www.w3schools.com/cssref/pr_text_white-space.asp) 和 [範例](http://www.w3schools.com/cssref/playit.asp?filename=playcss_white-space)，如果我們只是要單純地讓一段文章不要換行，可以使用`white-space:nowrap;`的方式，就可以讓一段文章不要換行，而這裡還有個有趣的小技巧，就是搭配`overflow:hidden;`和`text-overflow:ellipsis;`，還可以做出文字後方變成「...」的效果喔！ 
可以參考這個範例：[http://codepen.io/oxxo/pen/GjFwL](http://codepen.io/oxxo/pen/GjFwL)  

![white-space](https://lh4.googleusercontent.com/-T1KtJHxt6lY/U4yUwq7d6OI/AAAAAAAA398/zmBBfylzaa0/s000/20140602_2_03.png)  

<br/>
除此之外，在面對`pre`標籤的時候，`white-space:nowrap;`就無用武之處了，這時候我們就必須使用`white-space:pre-wrap;`，如此一來，在`pre`內的文字和程式碼，也就會斷行囉！



