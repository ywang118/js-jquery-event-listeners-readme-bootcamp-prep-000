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
    if(key.which )
  })
}
$(document).ready(function(){
});
