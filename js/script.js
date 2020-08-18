$(document).ready(function(event){
  // mobile nav open close
  $(".navtoggle").click(function(){
    $("#header").toggleClass("open");
    // console.log ("nav toggle working");
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
  // console.log ('sticky working');
}

$(document).ready(function(event){
  // gallery image filtering
  $('.city').change(function(){
    $this = $(this);
    $('.thumbnail').hide();
    $('.'+$this.val()).show();
    console.log("filtering images working");
   });

  $('.orientation').change(function(){
    $this = $(this);
    $('.thumbnail').hide();
    $('.'+$this.val()).show();
   });

   $('.date').change(function(){
     $this = $(this);
     $('.thumbnail').hide();
     $('.'+$this.val()).show();
    });
});
