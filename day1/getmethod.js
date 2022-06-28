


$(document).ready(function () {
     var a = $("select").attr("id")
    console.log(a)
  })






$(document).ready(function () {
  $("form").submit(function(){
    var a = $("#input").val()
    var b = $("#lname").val()
    var c = $(a).text()
    console.log(c)
  })
})

