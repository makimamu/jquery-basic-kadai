$(document).ready(function () {
  //色を変えるボタン
  $("#change-color").on('click',function () {
    $("#target").css("color", "blue");//色を青に変更
  });
  //文字を変えるボタン
  $("#change-text").on('click',function () {
    $("#target").text("新しい文字")
  });
  //フェードアウトボタン
  $("#fade-out").on('click',function () {
    $("#target").fadeOut();
  });
  //フェードインボタン
  $("#fade-in").on('click',function () {
    $("#target").fadeIn();
  });
});
