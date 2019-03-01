
{/* <script type="text/javascript"> */}
$(function(){
  $("#nav a").click(function(e){
    e.preventDefault();
    $('html,body').scrollTo(this.hash,this.hash); 
  });
});
// </script>


{/* <script type="text/javascript"> */}
 $(document).scroll(function() {
    $('#menu').toggle($(this).scrollTop()>1000)
 });​
//  </script>


{/* <script type="text/javascript"> */}
// Get the container element
var btnContainer = document.getElementById("toolbar");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("li");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}

// </script>