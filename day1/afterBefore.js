$(document).ready(function () {
  $(`div`).css("border","2px solid red")
  $('#btn1').click(function(){
    $("div").before("<div>hello</div>")
  })
   $('#btn2').click(function(){
    $("div").after("<h1>hello</h1>")
  })
})
