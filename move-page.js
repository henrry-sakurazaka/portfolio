// *=======================================
	ページ遷移
	// =========================================*/

barba.init({
    transitions: [{

        beforeEnter() {
        //追記
        const scrollElem = document.scrollingElement || document.documentElement
        scrollElem.scrollTop = 0;
        },

        // 現在のページを離れる時のフック
        leave: function (data) {
            return new Promise(function (resolve, reject) {
                leaveAnimation(data.current.container);
                setTimeout(function () {
                    resolve();
                }, 800)
            });
        },
       // 次のページを表示する時のフック
        enter: function (data) {
            enterAnimation(data.next.container);
        }
    }]
});

// 同じurlの場合、ページ遷移させない
const eventDelete = e => {
    if (e.currentTarget.href === window.location.href) {
      e.preventDefault()
      e.stopPropagation()
      return
    }
  }
  
  const links = [...document.querySelectorAll('a[href]')]
  links.forEach(link => {
    link.addEventListener('click', e => {
      eventDelete(e)
    }, false)
  })




// 現在のページを離れる時のアニメーション
function leaveAnimation(e) {
  anime.timeline().add({
      easing: 'easeOutSine',
      targets: e.querySelector('.section-01'),
      duration: 500,
      opacity: [1, 0],
      translateY: [0, '-15px']
  }).add({
      easing: 'easeOutSine',
      targets: '.mask',
      duration: 400,
      translateY: ['100%', 0]
  }, '-=200');
}
// 次のページを表示する時のアニメーション
function enterAnimation(e) {
  anime.timeline().add({
      easing: 'easeInSine',
      targets: '.mask',
      duration: 300,
      delay: 200,
      translateY: [0, '-100%']
  }).add({
      easing: 'easeInSine',
      targets: e.querySelector('.section-01'),
      duration: 400,
      opacity: [0, 1],
      translateY: ['15px', 0]
  }, '-=100');
}




// head内のタグを変更
function replaceHeadTags(target) {
    var $newPageHead = $('<head />').html($.parseHTML(target.html.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0], document, true));
    var headTags = [
        "meta[name='keywords']",
        "meta[name='description']",
        "meta[property^='og']",
        "meta[property^='fb']",
        "meta[name^='twitter']",
        "meta[name='robots']",
        "meta[itemprop]",
        "link[itemprop]",
        "link[rel='prev']",
        "link[rel='next']",
        "link[rel='canonical']",
    ].join(',');
    $('head').find(headTags).remove();
    $newPageHead.find(headTags).appendTo('head');
}


var gaPush = function () {
    if (typeof ga === 'function') {
        ga('send', 'pageview', location.pathname);
    }
    if (typeof gtag === 'function') {
        gtag('config', 'UA-153438389-1', {'page_path': location.pathname});
    }
}
