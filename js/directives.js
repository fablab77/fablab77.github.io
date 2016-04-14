'use strict';

/* Directives */
var app_d = angular.module('scriptsDirectives', []);

app_d.directive('fotorama', function($window){
	return function(scope, element, attrs){
			element.fotorama();
	};
});

app_d.directive('analytics', function($window){
	return function(scope, element, attrs){
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-34687389-2', 'auto');
		ga('send', 'pageview');

		(function (d, w, c) {
			(w[c] = w[c] || []).push(function() {
				try {
					w.yaCounter25982920 = new Ya.Metrika({id:25982920,
						clickmap:true,
						trackLinks:true,
						accurateTrackBounce:true});
				} catch(e) { }
			});
			var n = d.getElementsByTagName("script")[0],
				s = d.createElement("script"),
				f = function () { n.parentNode.insertBefore(s, n); };
			s.type = "text/javascript";
			s.async = true;
			s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";
			if (w.opera == "[object Opera]") {
				d.addEventListener("DOMContentLoaded", f, false);
			} else { f(); }
		})(document, window, "yandex_metrika_callbacks");

		(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-MF2QM3');
	};
});

app_d.directive('socialLikes', function($window){
	return function(scope, element, attrs){
			element.socialLikes();
	};
});

app_d.directive('body', function($window){
	return function(scope, element, attrs){
	};
});