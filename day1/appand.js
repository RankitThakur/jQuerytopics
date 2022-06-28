$(document).ready(function () {
  $(`div`).css("border","2px solid red")
  $('#btn1').click(function(){
    $("div").append("div</br>")
  })
   $('#btn2').click(function(){
    $("div").prepend("<h1>hello</h1>")
  })
})
