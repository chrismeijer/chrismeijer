$('.btn__portfolio-description').click(function() {
    var portfolioTitle = $(this).parent().parent().find('.card__content').text();
    var loadModal = $(this).parent().parent().attr('data-project');

    $.get('portfolio-'+loadModal+'.html', function(portfolioHTML) {
        $('.modal').find('.article__title').text(portfolioTitle);
        $('.modal').find('.article__content').html(portfolioHTML);
    });    

    $('.modal').toggle();

    return false;
});

$('.modal__close-link').click(function() {
    $(this).parent().parent().animate({
        top: "3000px"
    }, function() {
        $(this).toggle().css("top","0");
    });
    return false;
});