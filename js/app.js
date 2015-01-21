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

  $form.show_html.addEventListener('change', function(){
    this.checked ? $form.classList.add('show_html') : $form.classList.remove('show_html');
  });


}());



$(function(){

});