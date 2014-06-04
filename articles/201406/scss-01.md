##SCSS 安裝與執行##

SCSS 是我在 2013 年才接觸到的技術，其實也不算新，因為在我學習這門技術的時候，已經有不少相對應的工具與文章誕生，也因為看了這些教學和工具，才讓我深入地去學習一套好用的工具！

SCSS 其實也是常聽到的 SASS，兩者的差異只在於 SCSS 和原本的 CSS 寫法一樣都有大括號，而 SASS 則沒有大括號，單純使用縮排來進行巢狀結構，也因為大括號的差異，讓我毅然決然地選擇 SCSS，坦白說也沒有哪種好或哪種壞，SCSS 寫起來反而還多了不少行數 ( 因為大括號也占一行 )，個人喜好還是喜歡有大括號區隔。

這篇在介紹如何安裝和執行 SCSS，因為這個動作基本上只會進行一次，導致我如果要重新安裝，又必須上網找相關的安裝步驟，因此做一下筆記，而更詳細的資料也可以參考 [SASS 官方網站](http://sass-lang.com/)，未來我也會再分享自己的一些使用心得。

安裝 SCSS 第一個步驟就是要先安裝 ruby，接著再利用 ruby 安裝 compass，最後利用 compass 解析 SCSS 成 CSS，就大功告成囉！

- **安裝 ruby**：  
  可以到 [rubyinstaller 網站](http://rubyinstaller.org/downloads/) 下載安裝  

- **安裝 compass**：  
  安裝完成 ruby 之後，開啟命令提示字元 ( CMD )，輸入以下程式碼，就可以安裝 compass

		gem install compass
	
- **compass 建立專案**：  
  在 D 槽新增資料夾 scss_test，接著打開命令提示字元輸入以下三行，就可以完成基本 compass 專案的建置

		d:
		cd scss_test
		compass create style

	![SCSS 安裝與執行](https://lh3.googleusercontent.com/-B6YOctxj9ek/U48lPZHKDfI/AAAAAAAA3-c/jhTAu_KQsaY/s000/20140604_1_02.png)  

	![SCSS 安裝與執行](https://lh6.googleusercontent.com/-_Zel-5Glmec/U48lPzOXq_I/AAAAAAAA3-o/MO2Wsdy1B-Q/s000/20140604_1_03.png)

- **修改設定**：  
  建置完成後應該可以在 scss_test 的資料夾內看到一個 style 資料夾，裏頭包含三個資料夾與一個`config.rb`的檔案，裏頭是專案的設定檔，如果要用預設的也可以，不過我的習慣是會先來修改這個檔案。  
  我的設定其實也很簡單，就是把`css_dir = "stylesheets"`改為`css_dir = "css"`，這樣也比較清楚是 css，也可以把 sass 改成 scss ，接著把那兩行有註解的取消註解 (`# relative_assets = true`、`# line_comments = false`)，這樣才不會轉成 css 的時候多了很多不必要的轉換註解。
  
		http_path = "/"
		css_dir = "stylesheets"
		sass_dir = "sass"
		images_dir = "images"
		javascripts_dir = "javascripts"
		
		# relative_assets = true

		# line_comments = false
		

- **compass 解析 SCSS**：  
  最後我們只要打開 CMD 裏頭，進入 style 目錄，輸入以下程式碼，compass 就會自動監測 scss 檔案的變化，如果有變化並按下儲存，compass 就會自動幫我們轉換，當然如果你在上一層目錄，同樣可以輸入`compass watch style`，也是同樣的效果喔！

		compass watch

	![SCSS 安裝與執行](https://lh5.googleusercontent.com/-1yS1QXSxKBg/U48lPSw4QvI/AAAAAAAA3-k/NEm24ML1wts/s000/20140604_1_04.png)

		
    如果我們要更新 compass 或 sass，只需要輸入`gem update compass`或`gem update sass`就可以囉！