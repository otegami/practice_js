$(function(){
  //$('.box1').css({
    //'background-color' : '#0000FF',
    //'height' : '100px'
  //});
  //$('.box1').slideUp();
  //$('.box1').hide();
  //$('.box1').css({'background-color' : '#0000FF'});
  $('.box1').slideDown(function(){
    $('.box1').css({
      'background-color' : '#0000FF',
      'height' : '100px',
      'width' : '200px'
    });
  });
  $('.box1').slideUp(5000);
});
