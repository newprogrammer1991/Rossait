var isMobile = false;
var isDesktop = false;

$(window).on("load resize",function(e){
    //mobile detection
    if(Modernizr.mq('only all and (max-width: 767px)') ) {
        isMobile = true;
    }else{
        isMobile = false;
    }


    //tablette and mobile detection
    if(Modernizr.mq('only all and (max-width: 1024px)') ) {
        isDesktop = false;
    }else{
        isDesktop = true;
    }
});

//RESIZE EVENTS
$(window).resize(function () {
    Modernizr.addTest('ipad', function () {
        return !!navigator.userAgent.match(/iPad/i);
    });

});

$(document).ready(function() {

    /*|--------------------------------------------------------------------------
     | APPEAR
     |--------------------------------------------------------------------------
     */
    if($('.activateAppearAnimation').length){

        nekoAnimAppear();
        $('.reloadAnim').click(function (e) {
            $(this).parent().parent().find('img[data-nekoanim]').attr('class', '').addClass('img-responsive');
            nekoAnimAppear();
            e.preventDefault();
        });
    }
});

/* Appear function */
function nekoAnimAppear(){
    $("[data-nekoanim]").each(function() {

        var $this = $(this);

        $this.addClass("nekoAnim-invisible");

        if($(window).width() > 767) {

            $this.appear(function() {

                var delay = ($this.data("nekodelay") ? $this.data("nekodelay") : 1);
                if(delay > 1) $this.css("animation-delay", delay + "ms");

                $this.addClass("nekoAnim-animated");
                $this.addClass('nekoAnim-'+$this.data("nekoanim"));

                setTimeout(function() {
                    $this.addClass("nekoAnim-visible");
                }, delay);

            }, {accX: 0, accY: -150});

        } else {
            $this.animate({ opacity: 1 }, 300, 'easeInOutQuad',function() { });
        }
    });
}