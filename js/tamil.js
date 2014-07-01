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

// 	$Id: tamil.js,v 1.10 2006-03-26 03:12:17 vijay Exp $	
// 	Author: Vijay Lakshminarayanan	
// 	$Date: 2006-03-26 03:12:17 $	

var vowels = "(a(a|i|e|u)?)|(ee?)|(i)|(o(o|a)?)|(u)|(A(hh)?)|(E)|(I)|(O)|(U)|(H)"

var consonants = "(bh?)|(ch?)|(dh?)|(f)|(g)|(h)|(j)|(kh?)|(l)|(L)|(m)|(n(N|G|Y)?)|(N)|(p)|(q)|(r)|(R)|(sh?)|(th?)|(v)|(w)|(y)|(zh)"

var letter_codes = {
    "~a":  "&#2949;",
    "~aa": "&#2950;",    "~A": "&#2950;",
    "~ae": "&#2959;",    "~E": "&#2959;",
    "~ai": "&#2960;",
    "~au": "&#2964;",
    "~e":  "&#2958;",
    "~ee": "&#2952;",    "~I": "&#2952;",
    "~i":  "&#2951;",
    "~o":  "&#2962;",
    "~oo": "&#2954;",    "~U": "&#2954;",
    "~oa": "&#2963;",    "~O": "&#2963;",
    "~u":  "&#2953;",
    "~Ahh": "&#2947;",    "~H": "&#2947;",

    "*": "&#3021;",   //virama
    "a":  "",
    "Ahh": "&#2947;",    "H": "&#2947;",
   //vowel sounds
    "aa": "&#3006;",    "A": "&#3006;",
    "ae": "&#3015;",    "E": "&#3015;",
    "ai": "&#3016;",
    "au": "&#3020;",
    "e":  "&#3014;",
    "ee": "&#3008;",    "I": "&#3008;",
    "i":  "&#3007;",
    "o":  "&#3018;",
    "oo": "&#3010;",    "U": "&#3010;",
    "oa": "&#3019;",    "O": "&#3019;",
    "u":  "&#3009;",
                        //the consonants
    "b":  "&#2986;", "bh": "&#2986;", "p": "&#2986;",
    "f":  "&#2947;&#2986;",
    "ch": "&#2970;",
    "d":  "&#2975;", "t":  "&#2975;",
    "dh": "&#2980;", "th": "&#2980;",
    "g":  "&#2965;", "k":  "&#2965;", "kh": "&#2965;", "c": "&#2965;",
    "h":  "&#3001;",
    "j":  "&#2972;",
    "l":  "&#2994;",
    "L":  "&#2995;",
    "m":  "&#2990;",
    "n":  "&#2985;",
    "N":  "&#2984;",
    "nN": "&#2979;",
    "nG": "&#2969;",
    "nY": "&#2974;",
    "r":  "&#2992;",
    "R":  "&#2993;",
    "s":  "&#3000;",
    "sh": "&#2999;",
    "v":  "&#2997;",
    "w":  "&#2997;",
    "y":  "&#2991;",
    "zh": "&#2996;"
    }

