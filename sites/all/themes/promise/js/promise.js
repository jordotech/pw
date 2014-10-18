var $ = jQuery.noConflict();

$(document).ready(function () {

    $('.close-button').click(function () {
        $(this).hide();
        $('.grid-item').removeClass('dark');
        $('#details .drop-in').empty();
        $('.grid-item-img').show();
    });
});

function itemDetail(nid) {


    var item = $('.grid-item[nid="' + nid + '"]');
    if(!$(item).hasClass('dark')){
        $('.close-button').show();
        $(item).siblings('.grid-item').addClass('dark');
        var body = $(item).find('.grid-item-body').clone();
        $(body).appendTo('#details .drop-in');
        $(item).find('.grid-item-img').hide();
    }



}