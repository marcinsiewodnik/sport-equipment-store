// Funkcjonalność przechodzenia do danej sekcji -> konieczność napisania w jquery

const nav = $('nav');

$('nav a').on('click', function () {

    const goToSection = '[data-section=' + $(this).attr('data-goto') + ']';

    $('body, html').animate({

        scrollTop: $(goToSection).offset().top - nav.height()

    }, 400);

})
