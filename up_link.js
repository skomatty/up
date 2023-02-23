function getStoreUrl() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  var appUrl;
  if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
    appUrl = "https://app.adjust.com/o9kprhr";
  } else if (userAgent.match(/Android/i)) {
    appUrl = "https://app.adjust.com/oan0zjz";
  } else {
    appUrl = "https://magazine.jp.square-enix.com/mangaup/";
  }
  window.location.href = appUrl;
}