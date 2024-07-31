
//画面をした時の処理
$(window).on('load', function() {
  console.log("loadイベントが発生しました");
});

$(document).ready(function(){
//画面をスクロールした時の処理
$(window).on('scroll', function() {
  console.log("scrollイベントが発生しました");
  });
});