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

// 	$Id: oriya.js,v 1.5 2006-03-26 03:10:56 vijay Exp $	
// 	Author: Vijay Lakshminarayanan	
// 	$Date: 2006-03-26 03:10:56 $	

var vowels = "(A((h(h|n))|(m)|(n))?)|(a(a|i|u)?)|(ee?)|(i)|(oo?)|(rRr?)|(u)"

var consonants = "(Ch)|(Dh?)|(L)|(N)|(Rr?)|(Sh)|(Th?)|(Y)|(bh?)|(ch)|(dh?)|(gh?)|(h)|(jh?)|(kh?)|(l)|(m)|(n(g|y)?)|(ph?)|(r)|(sh?)|(th?)|(y)|(v)"

var letter_codes = {
    "~a" : "&#2821;",
    "~aa" : "&#2822;",
    "~i" : "&#2823;",
    "~ee" : "&#2824;",
    "~u" : "&#2825;",
    "~oo" : "&#2826;",
    "~rR" : "&#2827;",
    "~e" : "&#2831;",
    "~ai" : "&#2832;",
    "~o" : "&#2835;",
    "~au" : "&#2836;",
    "~rRr" : "&#2912;",
    "~Ahn" : "&#2817;",  // chandrabind 
    "~Am" : "&#2818;",  // anusvara 
    "~Ahh" : "&#2819;", // visarga 
    "~An" : "&#2876;",  // nukta 
    "~A" : "&#2877;",  // avagraha 

    "a" : "",
    "*" : "&#2893;",       //virama
    "aa" : "&#2878;",
    "i" : "&#2879;",
    "ee" : "&#2880;",
    "u" : "&#2881;",
    "oo" : "&#2882;",
    "rR" : "&#2883;",
    "e" : "&#2887;",
    "ai" : "&#2888;",
    "o" : "&#2891;",
    "au" : "&#2892;",
    "rRr" : "&#2912;",
    "Ahn" : "&#2817;",  // chandrabind 
    "Am" : "&#2818;",  // anusvara 
    "Ahh" : "&#2819;", // visarga 
    "An" : "&#2876;",  // nukta 
    "A" : "&#2877;",  // avagraha 

    "k" : "&#2837;",
    "kh" : "&#2838;",
    "g" : "&#2839;",
    "gh" : "&#2840;",
    "ng" : "&#2841;",
    "ch" : "&#2842;",
    "Ch" : "&#2843;",
    "j" : "&#2844;",
    "jh" : "&#2845;",
    "ny" : "&#2846;",
    "t" : "&#2847;",
    "T" : "&#2848;",
    "d" : "&#2849;",
    "D" : "&#2850;",
    "N" : "&#2851;",
    "th" : "&#2852;",
    "Th" : "&#2853;",
    "dh" : "&#2854;",
    "Dh" : "&#2855;",
    "n" : "&#2856;",
    "p" : "&#2858;",
    "ph" : "&#2859;",
    "b" : "&#2860;",  "v" : "&#2860;",
    "bh" : "&#2861;", "B" : "&#2861;", "Bh" : "&#2861;",
    "m" : "&#2862;",
    "y" : "&#2863;",
    "r" : "&#2864;",
    "l" : "&#2866;",
    "L" : "&#2867;",
    "sh" : "&#2870;",
    "Sh" : "&#2871;",
    "s" : "&#2872;",
    "h" : "&#2873;",
    "R" : "&#2908;",
    "Rr" : "&#2909;",
    "Y" : "&#2911;"
    }

