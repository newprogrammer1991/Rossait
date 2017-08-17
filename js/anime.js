$(function() {
    $(document.body).on('appear', '.someselector', function(e, $affected) {

        /* добавляем класс под названием “appeared” для каждого появившегося элемента */

        $(this).yellowFade();

    });

    $('.someselector').appear({force_process: true});

});