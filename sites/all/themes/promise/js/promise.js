var $ = jQuery.noConflict();

$(document).ready(function () {
    $(window).resize(function(){
        var windowWidth = $(window).width();

        $('#details').css({'width': windowWidth+'px'});
        //$('#details img').css({'width': windowWidth/4 +'px'});

    });
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
    var url = '/grid-body/' + nid;
    window.open(url, 'mywin',
        'left=500,top=20,width=950,height=800');
    return false;
    /*
    if($(window).width() < 500){
        window.location = '/grid-body/' + nid;
    }else{
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
     */



}

function get_body(nid){
    var base_url = 'http://' + window.location.host;
    $('.drop-in').html('<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>');
    $.ajax({
        url: base_url + '/grid-body/' + nid,
        success: function(data) {
            $('#details  .drop-in').empty();
            $(data).appendTo('#details .drop-in');
        }
    }).done(function() {
        var window_width = $(window).width();

        $('.drop-in, .drop-in p').css({'width':window_width/2 + 'px'});
        $('#details img').css({'width': windowWidth/4 +'px'});
    });
}