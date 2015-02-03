(function(){
  if(!document.convarea) return;

  var $form = document.convarea,
    $input_text = $form.input_text,
    $unicode_text = $form.unicode_text,
    $html_text = $form.html_text,
    language = $form.getAttribute('data-language'),
    convert = function(){
      var converted_data = ILC.convert($input_text.value, ILC.data[language]);
      $unicode_text.value = converted_data.unicode_text;
      $html_text.value = converted_data.html_text;
    };

  var s = document.createElement('script');
  s.src = 'js/languages/'+language+'.js';
  s.onload = function(){
    $input_text.value = ILC.data[language].default_input;
    convert();
  };
  document.body.appendChild(s);

  $input_text.addEventListener('keyup', convert);
  $input_text.addEventListener('focus', convert);

  $form.show_html && $form.show_html.addEventListener('change', function(){
    this.checked ? $form.classList.add('show_html') : $form.classList.remove('show_html');
  });


}());



$(function(){

$('.nav-header').on('click', '.more-icon', function(ev){
  console.log('more icon click');
  if(!$('.nav-header .more-menu-list').is(':visible')){
    $('.nav-header .more-menu-list').show();
  }
  ev.stopPropagation();
})
.on('click', '.selected-lang', function(ev){
  console.log('lang selector click');
  if(!$('.nav-header .lang-menu-list').is(':visible')){
    $('.nav-header .lang-menu-list li').removeClass('active');
    $('.nav-header .lang-menu-list li').filter(function(i, el){ return el.textContent==$('.nav-header .selected-lang').text(); })
    .addClass('active').get(0).scrollIntoViewIfNeeded();
    $('.nav-header .lang-menu-list').show();
  }
  ev.stopPropagation();
})
.on('click', '.lang-menu-list li', function(){
  $('.nav-header .selected-lang').html($(this).html());
});



$('.accordion-header').on('click', function(){
  $(this).next('.accordion-content').slideToggle();
}).next('.accordion-content').hide();



  $('body').on('click', function(ev){
      console.log('body click', ev);
      //$('.nav-header .more-menu-list').hide();
      setTimeout(function(){
        console.log("menu list hiding");
        $('.nav-header .more-menu-list').hide();
        $('.nav-header .lang-menu-list').hide();
      }, 100);
  });


});