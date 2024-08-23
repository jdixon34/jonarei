$(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();

    // Apply parallax effect to the splash section
    var splashSpeed = -0.5;
    var splashNewPosition = (scrollTop * splashSpeed) + 'px';
    $('#splash').css('background-position', 'center ' + splashNewPosition);

    // Apply parallax effect to the showcase section with reduced speed
    var showcaseSpeed = -0.3; // Reduced speed compared to splash
    var showcaseNewPosition = (scrollTop * showcaseSpeed) + 'px';
    $('.showcase-parallax .parallax-background').css('background-position', 'center ' + showcaseNewPosition);
});