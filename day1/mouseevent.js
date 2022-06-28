$(document).ready(function () {
  $("#box").css({"background":"green","color":"white"})
  $("#box").click(function(){
    $("#box").css({"background":"red","color":"white"})
  })
  $("#box").dblclick(function(){
    $("#box").css({"background":"yellow","color":"black"})
  })
  $("#box").mouseout(function(){
    $("#box").css({"background":"blue","color":"black"})
  })
  $("#box").mouseover(function(){
    $("#box").css({"background":"green","color":"black"})
  })
})
