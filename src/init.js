$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $(".dancers").height() * Math.random(),
      $(".dancers").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('.dancers').append(dancer.$node);
  });

  $('.lineupButton').on("click", function(event){
    $(".dancer").css("left", "100px");
    // $(".dancer").css("flex-direction", "column");
    // $(".dancer").css("align-items", "flex-start");
  });

  //when one of our dancers are moused over
  //will run a function that changes the moused over dancer to blue
  $('.thingOne').mouseover(function(){
    $('.thingOne').css("color", "lightblue")
  });
});

