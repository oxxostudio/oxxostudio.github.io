##CSS Specificity##
什麼是 CSS Specificity 呢？翻成中文就是 CSS 的權重，而什麼是 CSS 的權重？就是指我們套用在 DOM 上頭的樣式，互相覆蓋的權力，例如直接寫在 DOM 上頭的樣式，權重一定會大於外部嵌入的樣式，寫在後頭的樣式，權重一定會大於寫在前頭的樣式，雖然看起來很容易理解，但實際上 CSS 的權重卻是分的非常仔細，許多人也常常會掉入權重的陷阱而不知所措。

以下用以下這張圖來做說明：

![CSS Specificity](https://lh3.googleusercontent.com/-Adw4oGZ7u9c/U4itz0xDNrI/AAAAAAAA35s/Jy9fhflgsQo/s000/20140530_1_03.jpg)

簡單來說，可以分成四個區塊，從左而右分別是寫在 DOM 內的行內樣式，ID 的樣式，Class、CSS選擇器以及偽類的樣式，元素與偽元素樣式，這裡可以像 ip 一樣表示成四個數字：**0-0-0-0** ，越往左邊權重越大，而數字越大權重也越大，舉例來說，如果今天樣式表只有寫：`div { color:red; }`，所產生的數字就是：**0-0-0-1** ，如果今天寫成：`body div div { color:red; }`，那麼數字就可以表示為：**0-0-0-3** ，如果今天寫成：`#header div { color:red }`，那麼數字就要表示為：**0-1-0-1** ，而 **0-0-0-3** 一定會覆蓋過 **0-0-0-1** ，**0-1-0-1** 會覆蓋過 **0-0-0-3** ，當然，如果兩個數字完全相同的，就是樣式擺放的比先後順序了，依此類推，這也可以很容易的幫助我們理解 CSS 的權重問題，如果還是不了解的，可以參考以下這兩張圖片：


![CSS Specificity](https://lh3.googleusercontent.com/-Elt04jWMKCs/U4ixsjYshiI/AAAAAAAA36I/ix7MMQZHHDE/s000/20140530_1_04.png)

![CSS Specificity](https://lh3.googleusercontent.com/-pUtSYZPVtfM/U4ixstWUWMI/AAAAAAAA36M/L-MU1rD1Kyc/s000/20140530_1_05.png)

或許有人會問說，為什麼一定要用這些數字來表示呢？答案其實很簡單，這是 CSS 的規則，也是這麼久以來 CSS 設計師們的經驗心得，畢竟 CSS 這麼容易上手，卻也非常容易出錯，理解這些邏輯，也更能幫助我們在使用 CSS 上能得心應手。最後，可以參考這個網站： [CSS Specificity](http://cssspecificity.com/)，裏頭就只有一張圖，將 CSS 的權重非常清楚的表列出來，由這張圖可以看到，`!important` 真是無敵呀！ ( 不過也不能亂用就是了 )


![CSS Specificity](https://lh5.googleusercontent.com/-V7NnH4-izqE/U4it0G78p9I/AAAAAAAA354/vF9S1BgKofs/s000/20140530_1_02.jpg)