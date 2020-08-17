// $(document).ready(function(event){
//   // jQuery code
// });

$(document).ready(function(event){

  // mobile nav open close
  $(".navtoggle").click(function(){
    $("#header").toggleClass("open");
    console.log ("nav toggle working");
  });

  //gallery filtering
  $('.orientation').change(function(){
    $('.thumbnail').hide();
    $('.'+$(this).val()).show();
    console.log("showing "+$(this).val()+" thumbnail");
   });

   // $('.date').change(function(){
   //   $('.thumbnail').hide();
   //   $('.'+$(this).val()).show();
   //   console.log("showing "+$(this).val()+" thumbnail");
   //  });

});

//header sticky on scroll
window.onscroll = function() {myFunction()};

var header = document.getElementById("header");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
