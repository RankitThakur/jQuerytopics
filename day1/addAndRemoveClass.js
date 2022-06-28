$(document).ready(function() {
  $("#btn1").click(function(){
     var result = $("div h2").addClass("newclass")
 console.log(result)
  })
  $("#btn2").click(function(){
     var result = $("div h2").removeClass("newclass")
 console.log(result)
  })
  $("#btn3").dblclick(function(){
     var result = $("div h2").toggleClass("newclass")
 console.log(result)
  })
})
