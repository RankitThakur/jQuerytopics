// $(document).ready(function(){
//   getData();
// })



// function getData() {
//   $.ajax({
//     url: `https://jsonplaceholder.typicode.com/todos/1`,
//     type:"GET",
//     dataType: "text",
//     success : successFn,
//     error : errorFn,
//     password : "123",
//     complete: function(xhr, status){
//       console.log("request is complete")
//     }

//   })
// }

// function successFn(result){
//   console.log("success")
//   $("#data").append(result);
// }
// function errorFn(){
//   console.log("errorsss")
// }

$(document).ready(function(){
  $("#btn").click(function(){
    getData()
  })
})


function getData(){
  $.ajax({
    url:"https://jsonplaceholder.typicode.com/todos/1",
    type: "GET",
    dataType: "text",
    success : successFull,


  })
}
  function successFull(result){

     $("#box").append(result + "</br>")
      console.log(" data success ")
    }




