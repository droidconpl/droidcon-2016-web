$(document).ready(function() {

    //timer function
    $(function(){
        var d = new Date();
        d.setTime(1480572000*1000); // from: 12/01/2016 08:00 am +0200
        $('.clock-builder-output').countdown(d, function(event) {
            $(this).html(event.strftime('%D days %H:%M:%S'));
        });
    });

    //banner on-scroll action
    var $animation_elements = $('.to_change');
    var $window = $(window);
    $window.on('scroll resize', check_if_in_scrolled);
    $window.trigger('scroll');

    function check_if_in_scrolled() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();

            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            var element_visible_height = element_height - window_top_position;
            //we set up opacity value
            var element_opacity = (1 - (element_visible_height / element_height).toFixed(2));
            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                // $element.addClass('in-view');
                $element.css("opacity", element_opacity);
            } else {
                $element.css("opacity", "0");
            }
        });
    }

});

