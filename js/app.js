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
            li.innerHTML = langData.name;
            li.setAttribute('lang-code', langData.code);
            li.setAttribute('lang-name', langData.name);
            $menu.appendChild(li);
        });

    }());

    (function(){
        var inputText = localStorage && localStorage.getItem('inputText');
        if(inputText) {
            $input_text.value = inputText;
        }
    }());


function changeLanguage(language){
    var langCode = ILC.languages[language].code,
        langName = ILC.languages[language].name;
    $('.nav-header .selected-lang').html(langName).attr('lang-code', langCode).attr('lang-name', langName);
    localStorage && localStorage.setItem('language', langCode);
    convert();
    var tables = characterTable(langCode);
    var vBlock = document.getElementsByClassName('vowels-block').item(0),
        cBlock = document.getElementsByClassName('consonants-block').item(0);
    cBlock.innerHTML = vBlock.innerHTML = '';
    vBlock.appendChild(tables.v);
    cBlock.appendChild(tables.c);
}

function convert(){
  var converted_data = ILC.convert($input_text.value, $('.nav-header .selected-lang').attr('lang-code'));
  $unicode_text.value = converted_data.unicode_text;
  //$html_text.value = converted_data.html_text;

   localStorage && localStorage.setItem('inputText', $input_text.value);
}



function characterTable(langCode){
    var data = ILC.languages[langCode].characterCodeTable;
    var i,j,k,l,
      vowels = data.vowels,
      consonants = data.consonants;
    var vowelTable = document.createElement('table'),
      consonantTable = document.createElement('table');

    vowelTable.setAttribute('border', true);
    vowelTable.setAttribute('width', '100%');
    consonantTable.setAttribute('border', true);
    consonantTable.setAttribute('width', '100%');
    var caption = document.createElement('caption');
    caption.textContent = "Vowels";
    vowelTable.appendChild(caption);
    caption = document.createElement('caption');
    caption.textContent = "Consonants";
    consonantTable.appendChild(caption);

    for(i=0,j=vowels.length;i<j;i++){
      tr = document.createElement('tr');
      for(k=0,l=vowels[i].length;k<l;k++){
        td = document.createElement('td');
        keyValue = getKeyValue(vowels[i][k]);
        td.innerHTML = keyValue[0] + '<br/>' + keyValue[1];
        tr.appendChild(td);
      }
      vowelTable.appendChild(tr);
    }

    for(i=0,j=consonants.length;i<j;i++){
      tr = document.createElement('tr');
      for(k=0,l=consonants[i].length;k<l;k++){
        td = document.createElement('td');
        keyValue = getKeyValue(consonants[i][k]);
        td.innerHTML = keyValue[0] + '<br/>' + keyValue[1];
        tr.appendChild(td);
      }
      consonantTable.appendChild(tr);
    }

    return {v: vowelTable, c: consonantTable};
}

function getKeyValue(object){
  for(var key in object){
    if(object.hasOwnProperty(key)){
      return [key, object[key]];
    }
  }
}


$('.nav-header').on('click', '.more-icon', function(ev){
  if(!$('.nav-header .more-menu-list').is(':visible')){
    $('.nav-header .more-menu-list').show();
  }
  ev.stopPropagation();
})
.on('click', '.select-box .select-btn', function(ev){
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

var selectedLang = localStorage && localStorage.getItem('language');
if(selectedLang){
  $('.nav-header .lang-menu-list li[lang-code="'+selectedLang+'"]').click();
}
else {
  $('.nav-header .lang-menu-list li:first').click();
}


$('.nav-header .more-menu-list').on('click', 'li', function(){
    window.location = $(this).attr('data-href');
});

$('.accordion-header').on('click', function(){
  $(this).next('.accordion-content').slideToggle();
}).next('.accordion-content').hide();


$($input_text).on('change keyup focus', convert)
.on('focus', function(){
    this.scrollIntoViewIfNeeded();
  });

  $('body').on('click', function(ev){
      //$('.nav-header .more-menu-list').hide();
      setTimeout(function(){
        $('.nav-header .more-menu-list').hide();
        $('.nav-header .lang-menu-list').hide();
      }, 100);
  });


});