$(function(){

    //var languages = ['bengali', 'hindi', 'kannada'];
    //var initialized = false;
  var $form = document.convarea,
    $input_text = $form.input_text,
    $unicode_text = $form.unicode_text;
    var $menu = document.getElementsByClassName('lang-menu-list')[0];

    (function(){
        var i, j, language, script, li;

        $.each(ILC.languages, function(code, langData){
            var li = document.createElement('li');
            console.log(langData);
            li.innerHTML = langData.name;
            li.setAttribute('lang-code', langData.code);
            li.setAttribute('lang-name', langData.name);
            $menu.appendChild(li);
        });

        /*
        function addToMenu(language){
            var li = document.createElement('li'),
                langData = ILC.languages[language];
            console.log(langData);
            li.innerHTML = langData.name;
            li.setAttribute('lang-code', langData.code);
            li.setAttribute('lang-name', langData.name);
            $menu.appendChild(li);
            if(!initialized){
                $(li).click();
                initialized=true;
            }
        }

        function onloadCallback(language){
            return function(){ addToMenu(language); };
        }

        for(i=0, j=languages.length; i<j; i++){
            language = languages[i];
            script = document.createElement('script');
            script.src = 'js/languages/' + language + '.js';
            script.addEventListener("load", onloadCallback(language));
            document.body.appendChild(script);
        }
        */
    }());


function changeLanguage(language){
    var langCode = ILC.languages[language].code,
        langName = ILC.languages[language].name;
    $('.nav-header .selected-lang').html(langName).attr('lang-code', langCode).attr('lang-name', langName);
    convert();
}

function convert(){
    console.log('convert', $input_text.value);
  var converted_data = ILC.convert($input_text.value, $('.nav-header .selected-lang').attr('lang-code'));
  $unicode_text.value = converted_data.unicode_text;
  //$html_text.value = converted_data.html_text;
}



$('.nav-header').on('click', '.more-icon', function(ev){
  console.log('more icon click');
  if(!$('.nav-header .more-menu-list').is(':visible')){
    $('.nav-header .more-menu-list').show();
  }
  ev.stopPropagation();
})
.on('click', '.select-box .select-btn', function(ev){
  console.log('lang selector click');
  var $selectedLi;
  if(!$('.nav-header .lang-menu-list').is(':visible')){
    $('.nav-header .lang-menu-list li').removeClass('active');
    $selectedLi = $('.nav-header .lang-menu-list li').filter(function(i, el){ return el.textContent==$('.nav-header .selected-lang').text(); })
    .addClass('active');
    $selectedLi.length && $selectedLi.get(0).scrollIntoViewIfNeeded();
    $('.nav-header .lang-menu-list').show();
  }
  ev.stopPropagation();
})
.on('click', '.lang-menu-list li', function(){
    var $li = $(this),
        langCode = $li.attr('lang-code'),
        langName = $li.attr('lang-name');
  changeLanguage(langCode);
});

$('.nav-header .lang-menu-list li:first').click();

$('.accordion-header').on('click', function(){
  $(this).next('.accordion-content').slideToggle();
}).next('.accordion-content').hide();


$($input_text).on('change keyup focus', convert);

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