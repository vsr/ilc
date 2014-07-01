// -*- mode: java; -*-

// This file is part of Indian Language Converter

// Indian Language Converter is free software; you can redistribute it
// and/or modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2 of
// the License, or (at your option) any later version.

// Copyright (C) 2005, 2006 Vijay Lakshminarayanan <liyer.vijay@gmail.com>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License as
// published by the Free Software Foundation; either version 2 of the
// License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
// 02110-1301, USA.

// 	$Id: gujarati.js,v 1.1 2006-03-30 12:26:30 vijay Exp $	
// 	Author: Yash Gadhiya	
// 	$Date: 2006-03-30 12:26:30 $	

var vowels = "(A((o)|(O))?)|(a((A)|(a)|(u)|(i))?)|(En)|(e(e)?)|(I)|(H)|(TR)|(M)|(o(o)?)|(tR)|(i)|(U)|(u)|([:])|([|]([|])?)|(Om)"

var consonants = "(Ch)|(D(dD|h)?)|(G)|(L(lL)?)|(N(nN)?)|(R(rRU)?)|(Sh)|(Th?)|(Y)|(bh?)|(ch)|(dh?)|(f)|(g(h|G)?)|(h)|(jh?)|(kh?)|(l)|(m)|(nY?)|(ph?)|(qh?)|(r)|(sh?)|(th?)|(v)|(y)|(z)|(Bh?)"

var letter_codes = {
    "~a": "&#2693;",
    "~aa": "&#2694;",    "~A": "&#2694;",
    "~i": "&#2695;",
    "~ee": "&#2696;",    "~I": "&#2696;",
    "~u": "&#2697;",
    "~oo": "&#2698;",    "~U": "&#2698;",
    "~tR": "&#2699;",
    "~En": "&#2701;",
    "~e": "&#2703;",
//    "~ae": "&#2319;",    "~E": "&#2319;",
    "~ai": "&#2704;",
    "~Ao": "&#2705;",
    "~o": "&#2707;", 
//    "~oa": "&#2323;",    "~O": "&#2323;",
    "~au": "&#2708;",
//    "~TR": "&#2400;",
    "~AO": "&#2689;",  //chandrabindu
    "~Om": "&#2768;",
    "~M": "&#2690;",    //anusvara
    "~H": "&#2691;",    //visarga
    "~:": "&#2691;",    //visarga
//    "~aA": "&#2365;",   //avagraha
//    "~|" : "&#2404;",
//    "~||" : "&#2405;",

    "AO": "&#2689;",  //chandrabindu
    "H": "&#2691;",    //visarga
    ":": "&#2691;",    //visarga
    "Ao": "&#2705;",   //chandra o
    "M": "&#2690;",    //anusvara
//    "aA": "&#2365;",   //avagraha
//    "|" : "&#2404;",  //danda
//    "||" : "&#2405;", //double-danda

    "a": "",
    "aa": "&#2750;",    "A": "&#2750;",
    "i": "&#2751;",
    "e": "&#2759;",
    "ee": "&#2752;",    "I": "&#2752;",
    "u": "&#2753;",
    "oo": "&#2754;",    "U": "&#2754;",
//    "ae": "&#2375;",    "E": "&#2375;",
    "ai": "&#2760;",
//    "oa": "&#2379;",    "O": "&#2379;",
    "o":  "&#2763;",
    "au": "&#2764;",
    "*": "&#2765;",
    "tR": "&#2755;",
    "TR": "&#2756;",
//    "En": "&#2373;",

    "k": "&#2709;",
    "kh": "&#2710;",
    "g": "&#2711;",
    "gh": "&#2712;",
    "G": "&#2713;",
    "ch": "&#2714;",
    "Ch": "&#2715;",
    "chh": "&#2715;",
    "j": "&#2716;",
    "jh": "&#2717;",
    "nY": "&#2718;",
    "t": "&#2719;",
    "T": "&#2720;",
    "d": "&#2721;",
    "D": "&#2722;",
    "N": "&#2723;",
    "th": "&#2724;",
    "Th": "&#2725;",
    "dh": "&#2726;",
    "Dh": "&#2727;",
    "n": "&#2728;",
//    "NnN": "&#2345;",
    "p": "&#2730;",
    "ph": "&#2731;",
    "b": "&#2732;",
    "bh": "&#2733;",    "B": "&#2733;",    "Bh": "&#2733;",
    "m": "&#2734;",
    "y": "&#2735;",
    "r": "&#2736;",
    "R": "&#2737;",
    "l": "&#2738;",
    "L": "&#2739;",
//    "LlL": "&#2356;",
    "v": "&#2741;",
    "sh": "&#2742;",
    "Sh": "&#2743;",
    "s": "&#2744;",
    "h": "&#2745;",
//    "q": "&#2392;",
//    "qh": "&#2393;",
//    "gG": "&#2394;",
    "z": "&#2716;&#2765;&#2718;",
//    "DdD": "&#2396;",
    "RrR": "&#2801;",
    "f": "&#2731;",
    "Y": "&#2735;"
    }
