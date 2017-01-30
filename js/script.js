// $(document).ready(function(event){
//   // jQuery code
// });

// $(document).ready(function(event){
//     $('li').click(function(){
//       $('div').removeClass("active");
//       $(this).addClass("active");
//       console.log ("nav toggle working");
//   });
// });

$(document).ready(function(event){
  $(".fa-bars").click(function(){
    $(".menunavMobile li").slideToggle("slow");
    console.log ("nav toggle working");
  });
});
