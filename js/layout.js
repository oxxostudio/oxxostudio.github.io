$(function(){function n(){i.width()>=980?($("#main-menu>ul").addClass("menuOpen").find("li").show(),$("#container").off("click"),i.scroll(function(){i.scrollTop()>150?($("#header").css({top:"-150px"}),$("#main-menu").css({"box-shadow":"0 5px 5px rgba(0, 0, 0, .35)"}),$("#main-menu>ul").css({"margin-bottom":"2px"})):($("#header").css({top:-i.scrollTop()+"px"}),$("#main-menu").css({"box-shadow":"0 3px 3px rgba(0, 0, 0, .25)"}),$("#main-menu>ul").css({"margin-bottom":"20px"}))})):($("#main-menu ul").removeClass("menuOpen").find("li").hide(),i.scroll(function(){$("#header").css({top:"0px"})}))}var e,i=$(window),o=($("body"),$("main"),location.href.split("/")),l=o[0]+"//"+o[2]+"/",s=o.pop()||"index.html",a=["Design thinking is everywhere","Good design is innovative","I express myself with design","Stay hungry, stay foolish",":::::: www.oxxostudio.tw ::::::"];n(),function(){var n=Math.floor(Math.random()*a.length);$("#banner h2").text(a[n])}(),i.resize(n),i.scroll(function(){e=Math.floor(i.scrollTop()/1e3),ga("send","event","scroll",s,e)}),$("#main-menu>ul>li").on("click",function(){var n=$(this).attr("class");"tag-all"==n?window.open(l,"_self"):"tag-archive"==n?window.open(l+"/list.html","_self"):window.open(l+"index.html?"+n,"_self")}),$("#banner").hover(function(){clearTimeout(void 0),ga("send","event","banner","hover")}),$(".rss").on("click",function(){ga("send","event","header","click","rss")}),$("#banner").on("click",function(){ga("send","event","header","click","banner")}),$(".top-menu-left .list").on("click",function(){ga("send","event","header","click","list")}),$("#footer .license a").on("click",function(){ga("send","event","footer","click","license")}),$(".mobile-menu").on("click",function(){$("#main-menu ul").hasClass("menuOpen")?($("#main-menu ul").removeClass("menuOpen"),$("#main-menu ul li").hide()):($("#main-menu>ul").addClass("menuOpen"),$("#main-menu ul li.tag-archive").removeClass("hide"),$("#main-menu ul li").show(),$("#container").on("click",function(){$(this).off("click"),$("#main-menu ul").removeClass("menuOpen").find("li").hide()})),ga("send","event","mobilemenu","click")})});