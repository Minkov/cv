$(function () {
    $(".btn-scroll").on("click", function (ev) {
        var el = $(this).attr("href");
        console.log(el);
        $('body').scrollTo($(el), {
            duration: 1000
        });
        ev.preventDefault();
    })
});