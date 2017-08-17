
$(document).ready(function() {
    $(".navbar a.dropdown-toggle").on("click", function (t) {
        var e = $(this),
            n = $(this).offsetParent(".dropdown-menu");
        return $(this).parent("li").toggleClass("open"), n.parent().hasClass("nav") || e.next().css({
            top: e[0].offsetTop,
            left: n.outerWidth() - 4
        }), $(".nav li.open").not($(this).parents("li")).removeClass("open"), !1
    })
});