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
  
}
$(document).ready(function(){
});
