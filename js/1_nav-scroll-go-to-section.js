// Go to section -> necessity to write it in jquery, otherwise I could download an external library

const nav = $('nav');

$('nav a').on('click', function () {

    const goToSection = '[data-section=' + $(this).attr('data-goto') + ']';

    $('body, html').animate({

        scrollTop: $(goToSection).offset().top - nav.height()

    }, 400);

})
