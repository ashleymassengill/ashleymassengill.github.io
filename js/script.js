// $(document).ready(function(event){
//   // jQuery code
// });

$(document).ready(function(event){
  $(".fa-bars").click(function(){
    $(".menunavMobile li").slideToggle("slow");
    console.log ("nav toggle working");
  });
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
