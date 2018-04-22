//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('hey!')
  })
}

function frameIt(){
  $("img").on('load',function(){
    $(this).addClass("tasty");
  })
}

function pressIt(){
  $("#typing").on("keydown",function(key){
    if(key.which == 71) {
      alert('g was pressed');
    }
  })
}
<form>
    <input id="typing" type="text">
    <input type="submit">
function submitIt(){
  $()
}
$(document).ready(function(){
});
