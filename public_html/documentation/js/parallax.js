$(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    // Calculate the new position of the background image
    var newPosition = (scrollTop * -0.5) + 'px';
    // Apply the new position to the background image of the splash element
    $('#splash').css('background-position', 'center ' + newPosition);
});