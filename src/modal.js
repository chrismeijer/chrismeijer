$('.btn__portfolio').click(function() {
    var loadModal = $(this).attr('data-project');
    $('.modal__' + loadModal).toggle();
});

$('.modal__close-link').click(function() {
    $(this).parent().parent().animate({
        top: "3000px"
    }, function() {
        $(this).toggle().css("top","0");
    });
});