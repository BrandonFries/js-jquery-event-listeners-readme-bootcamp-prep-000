function getIt() {
  $('p').on("click", function() {
    alert("hey!")
  })
}

function frameIt(){
  $("img").on('load', function() {
    $(this).css('border', "solid 2px red").addClass('tasty')
  })
}




$(document).ready(function(){

// call functions here

});
