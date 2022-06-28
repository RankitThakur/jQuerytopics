$(document).ready(function(){
  $("#fname" ).blur(function(){
    $(this).css("background","green")
  })
  $("#fname" ).focus(function(){
    $(this).css("background","red")
  })

  $("#fname" ).change(function(){
    $(this).css("background","white")
  })
  $("form").submit(function(){
    alert("submit")
  })

})

