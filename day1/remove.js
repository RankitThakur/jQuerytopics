$(document).ready(function () {
  $(`div`).css("border","2px solid red")
  $('#btn1').click(function(){
    $("div").remove()
  })
   $('#btn2').click(function(){
    $("div").empty()
  })
})
