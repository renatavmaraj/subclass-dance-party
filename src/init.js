$(document).ready(function() {
  window.dancers = [];

  $('.lineUpButton').on('click', function(event) {
    var niceOffset = 100;
    var naughtyOffset = 100;
    var $niceNode = $("<span class='nice-banner'>Santa's Nice Dancers</span>");
    var $naughtyNode = $("<span class='naughty-banner'>Santa's Naughty Dancers</span>");
    $niceNode.css({top: 35, left: 350});
    $naughtyNode.css({top: 35, left: 800});
    $('.content').append($niceNode);
    $('.content').append($naughtyNode);
    for (var i = 0; i < window.dancers.length; i ++) {
      console.log(i, window.dancers[i]);
      if (window.dancers[i].$node.hasClass('nice')) {
        window.dancers[i].lineUpNice(niceOffset);
        niceOffset += 100;
      }
      if (window.dancers[i].$node.hasClass('naughty')) {
        window.dancers[i].lineUpNaughty(naughtyOffset);
        naughtyOffset += 100;
      }
    }
  });

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
      $('.content').height() * Math.random(),
      $('.content').width() * Math.random(),
      Math.random() * 1000 + 500
    );
    $('.content').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $(document).on("mouseenter", ".nice", function() {
    $( this ).append( $( "<span class='nice-banner'>NICE</span>" ) );
  });
  $(document).on("mouseleave", ".nice", function() {
    $( this ).find( "span:last" ).remove();
  });

  $(document).on("mouseenter", ".naughty", function() {
    $( this ).append( $( "<span class='naughty-banner'>NAUGHTY</span>" ) );
  });
  $(document).on("mouseleave", ".naughty", function() {
    $( this ).find( "span:last" ).remove();
  });

});

