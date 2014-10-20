(function(global){
  "use strict";

  var ILC = global.ILC = global.ILC || {data: {}};

  function split_word(word, lang_data) {
    var vowels = lang_data.vowels,
        consonants = lang_data.consonants,
        letter_codes = lang_data.letter_codes;

    var syllables = [],
        vowel_start_p = true,
        re, index, matched;
    while (word.length) {
      re = new RegExp(vowels);
      index = word.search(vowels);
      if (index === 0) { //the vowel's at the start of word
        matched = re.exec(word)[0]; //what is it?
        if (vowel_start_p) {
          syllables.push(("~" + matched)); //one more to the syllables
        } else {
          syllables.push(matched);
        }
        vowel_start_p = true;
        word = word.substring(matched.length);
      }
      else {
        re = new RegExp(consonants);
        index = word.search(consonants);
        if (index === 0) {
          matched = re.exec(word)[0];
          syllables.push(matched);
          vowel_start_p = false;
          word = word.substring(matched.length);

          //look ahead for virama setting
          var next = word.search(vowels);
          if (next !== 0 || word.length === 0)
            syllables.push('*');
        }
        else {
          syllables.push(word.charAt(0));
          word = word.substring(1);
        }
      }
    }
    return syllables;
  }

  function match_code(syllable_mcc, lang_data) {
    var vowels = lang_data.vowels,
        consonants = lang_data.consonants,
        letter_codes = lang_data.letter_codes;

    var matched = letter_codes[syllable_mcc];

    if (matched !== null){
      return matched;
    }
    return syllable_mcc;
  }

  function one_word(word_ow, lang_data) {
    if (!word_ow) return "";
    var syllables_ow = split_word(word_ow, lang_data);
    var letters_ow = [];

    for (var i_ow = 0; i_ow < syllables_ow.length; i_ow++) {
      letters_ow.push(match_code(syllables_ow[i_ow], lang_data));
    }
    return letters_ow.join("");
  }

  function many_words(sentence, lang_data) {
    var vowels = lang_data.vowels,
        consonants = lang_data.consonants,
        letter_codes = lang_data.letter_codes;

    var regex = "((" + vowels + ")|(" + consonants + "))+";
    var words = [],
        re, match;
    while (sentence.length >= 1) {
      re = new RegExp("^``" + regex);
      match = re.exec(sentence);
      if (match !== null) {
        match = match[0];
        words.push("`");
        words.push(one_word(match.substring(2), lang_data));
        sentence = sentence.substring(match.length);
      }
      else {
        re = new RegExp("^`" + regex);
        match = re.exec(sentence);
        if (match !== null) {
          match = match[0];
          words.push(match.substring(1));
          sentence = sentence.substring(match.length);
        }
        else {
          re = new RegExp("^" + regex);
          match = re.exec(sentence);
          if (match !== null) {
            match = match[0];
            words.push(one_word(match, lang_data));
            sentence = sentence.substring(match.length);
          }
          else {
            words.push(sentence.charAt(0));
            sentence = sentence.substring(1);
          }
        }
      }
    }
    return words.join("");
  }


  ILC.convert = function print_many_words(text, lang_data) {
    var text_pmw = many_words(text, lang_data);

    var ans = "",
        re, matche, search, i;
    while (text_pmw.length) {
      var unicode_chars = /&#[0-9]+;/;
      re = unicode_chars;
      matche = re.exec(text_pmw);
      if (matche !== null) {
        matche = matche[0];
        search = text_pmw.search(unicode_chars);
        ans += text_pmw.substring(0, search);
        ans += String.fromCharCode(matche.match(/[0-9]+/));
        text_pmw = text_pmw.substring(search + matche.length);
      }
      else {
        ans += text_pmw.substring(0);
        text_pmw = "";
      }
    }

    var html_txt = "";
    for (i = 0; i < ans.length; i++) {
      var unicode_character = ans.charCodeAt(i);
      switch (unicode_character) {
        case 32:
          html_txt += " ";
          break;
        case 10:
        case 13:
          html_txt += "<br/>\n";
          break;
        default:
          html_txt += "&#" + unicode_character + ";";
      }
    }

    return {
      unicode_text: ans,
      html_text: html_txt
    };
  };

  return ILC;

}(window));


