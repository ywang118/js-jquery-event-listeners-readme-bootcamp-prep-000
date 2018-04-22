//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('hey!')
  })
}

function pressIt(){
  $("img").on('load',function(){
    $(this).addClass("tasty");
  })
  
}

$(document).ready(function(){
});
