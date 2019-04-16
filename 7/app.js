$(function(){

  $('.box1').on('click', function(){
    $(this).slideUp();
  });

  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});
