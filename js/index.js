$(function(){function i(i){$.getJSON("/json/pageList.json",function(e){var a;s=e.length,a=s<6?s:6;!function(i){var n,t;for((t=i+a)>=s&&(t=s),n=i;n<t;n++){var o;o=e[n].img?e[n].img:"/img"+e[n].site.replace(".html","-s.jpg"),$("#content-grid>ul").append('<li><i class="'+e[n].tag+'"></i><h2>'+e[n].title+'</h2><h3><i class="icon-date"></i>'+e[n].date+'</h3><h3><i class="icon-author"></i>OXXO.STUDIO</h3><a href="'+e[n].site+'" title="'+e[n].title+'"><div class="content-img"><span></span><img src="'+o+'"></div></a><div class="content-grid-line"></div><h4 content="'+e[n].site+'"></h4><a href="'+e[n].site+'"><div class="read-more">Read more</div></a></li>')}}(6*(-1+i)),o(),n(s,i),t()})}function e(i,e){$.getJSON("/json/pageList.json",function(t){s=t.length;var r,c,l=[],d=0;for(r=0;r<s;r++)t[r].tag==i&&(l[d]=t[r],d+=1);c=d<6?d:6;!function(i){var e,n;for((n=i+c)>=d&&(n=d),e=i;e<n;e++){var t;t=l[e].img?l[e].img:"/img"+l[e].site.replace(".html","-s.jpg"),$("#content-grid>ul").append('<li><i class="'+l[e].tag+'"></i><h2>'+l[e].title+'</h2><h3><i class="icon-date"></i>'+l[e].date+'</h3><h3><i class="icon-author"></i>OXXO.STUDIO</h3><a href="'+l[e].site+'"><div class="content-img"><span></span><img src="'+t+'"></div></a><div class="content-grid-line"></div><h4 content="'+l[e].site+'"></h4><a href="'+l[e].site+'"><div class="read-more">Read more</div></a></li>')}}(6*(-1+e)),o(),n(d,e),a()})}function n(i,e){var n,t;for(n=Math.ceil(i/6),t=1;t<=n;t++)$("#page-num").append("<div>"+t+"</div>");$("#page-num div").hide(),e-3>=0&&$("#page-num div").eq(e-3).show(),e-2>=0&&$("#page-num div").eq(e-2).show(),$("#page-num div").eq(e-1).show(),$("#page-num div").eq(e).show(),$("#page-num div").eq(e+1).show(),$("#page-num div").eq(e+2).show(),$("#page-num div").eq(e+3).show(),$("#page-num div").eq(e-1).css({background:"#888",color:"#fff"})}function t(){$("#page-num div").on("click",function(){var i=$(this).index()+1;1==i?window.open(g,"_self"):window.open(g+"index.html?="+i,"_self")})}function a(){$("#page-num div").on("click",function(){var i=$(this).index()+1;1==i?window.open(g+"index.html?"+l,"_self"):window.open(g+"index.html?"+l+"="+i,"_self")})}function o(){$("#content-grid>ul").find("h4").each(function(){var i=$(this),e=i.attr("content");$.ajax({url:e,success:function(e){for(var n=$.parseHTML(e),t=0;t<n.length;t++)if("main"==n[t].localName){var a=n[t].querySelector("p"),o=a.innerHTML;-1!=o.indexOf("img")&&(a=n[t].querySelector("p+p"),o=a.innerHTML);var s=a.querySelectorAll("a");Array.apply(null,s).forEach(function(i){var e=i.outerHTML,n=i.innerHTML;o=o.replace(e,n)}),String.prototype.allReplace=function(i){var e=this;for(var n in i)e=e.replace(new RegExp(n,"g"),i[n]);return e},(o=o.allReplace({"<code>":"","</code>":"","<strong>":"","</strong>":""})).length>100?i.html(o.substr(0,100)+" ..."):i.html(o)}}})})}$(window);var s,r,c,l,d=location.href,h=d.split("?"),p=d.split("/"),g=p[0]+"//"+p[2]+"/";h[1]?(r=h[1].split("="),l=r[0],(c=Number(r[1]))?""==r[0]?i(c):e(l,c):e(l,1)):i(1)});