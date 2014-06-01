##結構化資料 SEO 與 meta 標籤##

隨著這個 blog 放到網路上開始，SEO 也變得重要起來，而在 SEO 裏頭，最重要的第一項重點就是 meta 標籤，這也是要告訴搜尋引擎和社群網站，你的 blog 或是網站主旨是什麼，作者是誰，分享的縮圖是什麼...等這些我們認為理所當然的資訊，畢竟這些搜尋引擎的蜘蛛和社群網站的人工智慧，現在還無法分辨你我網站內容的重點，因此我們必須靠這些 meta 或結構化資料 itemprop，來告訴它們。

本篇主要在介紹，如何正確設定分享文章到 google plus 以及 facebook 的標題、縮圖與內文概要，因為有了這些正確的設定，分享到社群網站就不會跳出莫名其妙的縮圖，同時在 google 的搜尋，也會呈現作者的大頭照與姓名，這些都是會吸引更多使用者瀏覽的好方法。

這是在我的網站 header 裏頭，所加入的 meta 標籤：
	
	<meta name="author" content="作者名稱">
  	<meta name="copyright" content="版權所有人名稱">
  
  	<link rel="author" href="google plus 個人頁網址/posts">
  	<link rel="publisher" href="google plus 個人頁網址">
  	<meta name="description" content="網頁描述">

  	<meta itemprop="name" content="網站名稱或標題">
  	<meta itemprop="image" content="要顯示的縮圖網址">
  	<meta itemprop="description" content="網頁描述">

  	<meta property="og:title" content="網站名稱或標題" >
  	<meta property="og:url" content="網址">
  	<meta property="og:image" content="要顯示的縮圖網址">
  	<meta property="og:description" content="網頁描述" >

<br/>
其中以下這三行，是寫給搜尋引擎看的 ( 特別是 google )，當中最重要的，就是`rel="author"`這一句，有寫這一段，接下來我們就可以去去 google plus 進行互相認證的作業 ( 也就是要讓 google plus 確認這個網頁的作者是你 )

  	<link rel="author" href="google plus 個人頁網址/posts">
  	<link rel="publisher" href="google plus 個人頁網址">
  	<meta name="description" content="網頁描述">

而認證的過程，可以點選 [google 結構化資料測試工具](http://www.google.com/webmasters/tools/richsnippets) 連結，進行相關的認證作業，認證的過程其實也很簡單，就是進入 google plus 的個人頁面，點選「帳戶」，點選「編輯個人資料」，接著將「連結」裏頭的「作品刊載於」，新增目前的網站，接著 google plus 就會去查詢你的網站是否有放上`rel="author"`，如果有，就完成囉！

<br/>
而這三行是寫給 google plus 看的，分享到 google plus 上頭，就會正確顯示

  	<meta itemprop="name" content="網站名稱或標題">
  	<meta itemprop="image" content="要顯示的縮圖網址">
  	<meta itemprop="description" content="網頁描述">

<br/>
而這四行是寫給 facebook 看的，分享到 facebook 上頭，就會正確顯示，如果發現都已經照著設定了，分享時仍有問題，可以點選 [Facebook Debugger](https://developers.facebook.com/tools/debug) 進行查詢和重新設定，完成後再次分享應該就不會有問題囉！

  	<meta property="og:title" content="網站名稱或標題" >
  	<meta property="og:url" content="網址">
  	<meta property="og:image" content="要顯示的縮圖網址">
  	<meta property="og:description" content="網頁描述" >

<br/>
當然 meta 標籤絕對不止這一些，因為除了 facebook 和 google plus，還有一個世界前三大的社群平台 twitter，以下列出在這些平台上完整的 meta 標籤語法，如果有需要也可以都加進自己的網站喔！

	<!-- Update your html tag to include the itemscope and itemtype attributes. --> 
	<html itemscope itemtype="http://schema.org/Article">
	
	<!-- Place this data between the <head> tags of your website --> 
	<title>Page Title. Maximum length 60-70 characters</title> 
	<meta name="description" content="Page description. No longer than 155 characters." />
	
	<!-- Google Authorship and Publisher Markup --> 
	<link rel="author" href=" https://plus.google.com/[Google+_Profile]/posts"/>
	<link rel="publisher" href=” https://plus.google.com/[Google+_Page_Profile]"/>
	
	<!-- Schema.org markup for Google+ --> 
	<meta itemprop="name" content="The Name or Title Here"> 
	<meta itemprop="description" content="This is the page description"> 
	<meta itemprop="image" content=" http://www.example.com/image.jpg">
	
	<!-- Twitter Card data --> 
	<meta name="twitter:card" content="summary_large_image"> 
	<meta name="twitter:site" content="@publisher_handle"> 
	<meta name="twitter:title" content="Page Title"> 
	<meta name="twitter:description" content="Page description less than 200 characters"> 
	<meta name="twitter:creator" content="@author_handle"> 
	<!-- Twitter summary card with large image must be at least 280x150px --> 
	<meta name="twitter:image:src" content=" http://www.example.com/image.html">
	
	<!-- Open Graph data --> 
	<meta property="og:title" content="Title Here" /> 
	<meta property="og:type" content="article" /> 
	<meta property="og:url" content=" http://www.example.com/" />
	<meta property="og:image" content=" http://example.com/image.jpg" />
	<meta property="og:description" content="Description Here" /> 
	<meta property="og:site_name" content="Site Name, i.e. Moz" /> 
	<meta property="article:published_time" content="2013-09-17T05:59:00+01:00" /> 
	<meta property="article:modified_time" content="2013-09-16T19:08:47+01:00" /> 
	<meta property="article:section" content="Article Section" /> 
	<meta property="article:tag" content="Article Tag" /> 
	<meta property="fb:admins" content="Facebook numberic ID" />

更多的資訊也可以參考 [這個網站](http://moz.com/blog/meta-data-templates-123)，會更有幫助和收穫喔！  
^____^