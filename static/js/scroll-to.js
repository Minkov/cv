$(function () {
    $(".btn-scroll").on("click", function (ev) {
        var el = $(this).attr("href");
        $('body').scrollTo($(el), {
            duration: 1000
        });
        ev.preventDefault();
    })
});