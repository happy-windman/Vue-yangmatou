export default (function() {
    var ua = window.navigator.userAgent;
    var docEl = document.documentElement;
    var html = document.querySelector('html');
    var isAndorid = /Android/i.test(ua);
    var dpr = window.devicePixelRatio || 1;
    var rem = docEl.clientWidth / 10;
    html.style.fontSize = rem + 'px';
})();