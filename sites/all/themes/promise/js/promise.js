var $ = jQuery.noConflict();

$(document).ready(function () {
    $('.close-button').click(function () {
        $(this).hide();
        $('.grid-item').removeClass('dark');
        $('#details .drop-in').empty();
        $('.grid-item-img').show();
        $('#controls').show();
    });
    $('.grid-item-img').mouseenter(function(){
        $(this).find('.grid-img-overlay').animate({
            opacity: ".7"
        }, 500, function () {
        });
    });
    $('.grid-item-img').mouseleave(function(){
        $(this).find('.grid-img-overlay').animate({
            opacity: "0"
        }, 500, function () {
        });
    });

    $('#controls li').click(function(){
        var tid = $(this).attr('tid');

        $(this).addClass('active').siblings().removeClass('active');
        $('.grid-item').show();
        if($(this).attr('tid') != 'all'){
            $('.grid-item').not('[tid="' + tid + '"]').hide();
        }
    });
    $('#controls .light-button').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('body').addClass('light');
    });
    $('#controls .dark-button').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('body').removeClass('light');
    });
});

function itemDetail(nid) {
    var item = $('.grid-item[nid="' + nid + '"]');
    if(!$(item).hasClass('dark')){
        $('.close-button').show();
        $(item).siblings('.grid-item').addClass('dark');
        var body = $(item).find('.grid-item-body').clone();
        get_body(nid);
        $(item).find('.grid-item-img').hide();
        $('#controls').hide();
    }
}

function get_body(nid){
    var base_url = 'http://' + window.location.host;
    $.ajax({
        url: base_url + '/grid-body/' + nid,
        success: function(data) {
            $(data).appendTo('#details .drop-in');
        }
    }).done(function() {
        var window_width = $(window).width();
        $('.drop-in').find('img').removeAttr('style').css({'width':(window_width/2) + 'px'});
        $('.drop-in').css({'width':window_width-40 + 'px'});
    });
}