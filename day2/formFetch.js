function myFun(event){
  event.preventDefault();
  fetch("https://jsonplaceholder.typicode.com/posts",{
  method:"POST",
  body: new FormData(myform),
   headers: {
    'Content-type': 'application/x-www-form-urlencoded'}
}).then(function(res){
  return res.json()}).then(function(finalres){
  console.log(finalres)}).catch(function(error){
  console.log("data not find")})
}


