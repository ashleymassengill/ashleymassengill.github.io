// $(document).ready(function(event){
//   // jQuery code
// });

$(document).ready(function(event){
    $('li').click(function(){
      $('div').removeClass("active");
      $(this).addClass("active");
      console.log ("nav toggle working");
  });
});
