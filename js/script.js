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

var header = document.getElementById("intro");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


//  Allows a dom element to be scrolled into position typical usage - triggered by a click event @param obj

const scrollTo = (obj, offsetHeader) => {
    let navbar = $('#intro');
    let offset = (offsetHeader) ? navbar.outerHeight() : 0;
    $('html, body').animate({
        scrollTop: $(obj).offset().top - offset
    }, 500);
};
