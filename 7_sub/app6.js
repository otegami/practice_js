$(function(){
  $('.box1').on('click', function(){
    $('.box1').addClass('box1-ext');
    //css({'background-color' : '#0000FF'});
  });

  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
    //css({'background-color' : '#FF0000'});
  });
});
