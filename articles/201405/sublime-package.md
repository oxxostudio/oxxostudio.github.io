## SublimeText Package ##
這一年多以來，<span itemprop="description" class="desc">自己一直是使用 SublimeText 作為開發的工具，這套由 Google 工程師所設計出來的軟體，因為相當的輕便與快速，又具有非常強大的擴充能力，所以有些人把它當作是好用的文字編輯器，有些人則把它視作方便的開發軟體，總之也慢慢變成了主流的開發工具之一。</span>

不過因為 SublimeText 的擴充特性，衍伸出有一大票的 Package，如果缺少了這些 Package 的輔助，SublimeText 可能就真的只是套好用的文字編輯器，有了這些 Package，SublimeText 則化身為超好用的開發工具！由於 Package 實在太多，我自己也裝了一大堆，為了避免每次重灌都要去想或去找，就用這篇文章做個紀錄。

在安裝之前，我們必須要先安裝 Package Control，按下 **Ctrl+`**，然後貼上這些程式碼，按下 Enter 就可以安裝。  
( 這裡是 SublimeText3 的版本使用的 )

>import urllib.request,os,hashlib; h = '7183a2d3e96f11eeadd761d777e62404e330c659d4bb41d3bdf022e94cab3cd0'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)  

安裝完成後，只要按下 **Ctrl + Shift + p**，輸入 install package，點選後就可以看到一大堆可以安裝的 Package 列表囉！
<br/>
<br/>
### 我所安裝的 Package ###

- **Emmet** ： 非常重要的套件，會有很多程式碼的提示以及快速產生程式碼的指令
- **Scss** ： SCSS 的套件，也可同時安裝 Sass
- **HTML5** ： 直接裝了吧
- **JQuery** ： 直接裝了吧
- **Git** ： 左側選單的 Git 功能
- **GitGutter** ： 會及時呈現哪幾行有修改、新增或刪除 ( 因隨時在抓取變化，會有些效能問題 )
- **DocBlockr** ： 自動產生註解的工具
- **AutoFileName** ： 鍵盤敲出 src 或 href 時會自動帶出選單選擇檔案
- **HTML-CSS-JS Prettify** ： 必裝的格式化工具
- **Bracket​Highlighter** ： 標註出程式碼內各個 tag 區塊，相當方便
- **JSHint** ： 寫 JS 一定要用 JSHint 的呀 ( 我的 JS 還真是錯誤百出~XD )
- **JSHint Gutter** ： 搭配 JSHint
- **Side Bar** ： 左側功能選單，方便開檔和瀏覽
- **Side Bar Git** ： 搭配 Side Bar 服用
- **Theme** ： 強烈推薦 Soda Dark 3.sublime-theme
- **Color-Picker** ： 選擇顏色更容易
<br/>
<br/>
### 補充說明 ###

補充上述的 Theme，安裝之後必須要手動添加相關的設定，重啟 SublimeText 之後才會生效喔！  

	{
	"font_size": 12,
	"ignored_packages":
	[
		"Vintage"
	],
	"margin": 2,
	"soda_classic_tabs": true,
	"soda_folder_icons": false,
	"tab_size": 2,
	"theme": "Soda Dark 3.sublime-theme"
	}

以上就是我所使用的 Package，關於 SublimeText 的使用心得和經驗，會在日後慢慢分享。