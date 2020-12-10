$(function()
{
    var inner=$('.inner-wrapper1');
    var radio1=$('.dot1');
    var i=2;
    $('#page2').css('background','#ff006f');
    setInterval(function(){
        inner.animate({left : '-200%'},1000, function()
        {
            inner.css('left','-100%');
            slide();
            $('.slide1').last().after($('.slide1').first());
        });
    },5000)
    
    $('.prev1').on('click', function(){
        inner.animate({left : '0%'},1000, function()
        {
            inner.css('left','-100%');
            slide();
            $('.slide1').first().before($('.slide1').last());
        });
    });
    $('.next1').on('click', function(){
        inner.animate({left : '-200%'},600, function()
        {
            inner.css('left','-100%');
            slide();
            $('.slide1').last().after($('.slide1').first());
        });
    });
    function slide()
    {
        if(i==0)
        {
            $('#page1').css('background','#ff006f');
            $('#page2').css('background','transparent');
            $('#page3').css('background','transparent');
            i++;
        }
        else if(i==1)
        {
            $('#page1').css('background','transparent');
            $('#page2').css('background','#ff006f');
            $('#page3').css('background','transparent');
            i++;
        }
        else if(i==2)
        {
            $('#page1').css('background','transparent');
            $('#page2').css('background','transparent');
            $('#page3').css('background','#ff006f');
            i=0;
        }
    }
});
