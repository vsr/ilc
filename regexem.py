#!/usr/bin/python
# -*- mode: python; -*-

## This file is part of Indian Language Converter

## Copyright (C) 2006 Vijay Lakshminarayanan <liyer.vijay@gmail.com>

## Indian Language Converter is free software; you can redistribute it
## and/or modify it under the terms of the GNU General Public License
## as published by the Free Software Foundation; either version 2 of
## the License, or (at your option) any later version.

## This program is distributed in the hope that it will be useful, but
## WITHOUT ANY WARRANTY; without even the implied warranty of
## MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
## General Public License for more details.

## You should have received a copy of the GNU General Public License
## along with this program; if not, write to the Free Software
## Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
## 02110-1301, USA.

## 	$Id: regexem.py,v 1.4 2006-03-26 03:15:24 vijay Exp $	
## 	Author: Vijay Lakshminarayanan 	
## 	$Date: 2006-03-26 03:15:24 $	

import sys
from re import escape

def regexem (strlst):
    """Returns a single string which is the regular expression to
    identify any single word in the given argument.

    See the Examples given at the end of this file."""
    return regexem_internal([escape(s) for s in strlst])

def regexem_internal (strlst):
    strlst.sort()
    s, rest = strlst[0], strlst[1:]
    groups = {}
    groups[s] = [s]
    for string in rest:
        if string.startswith(s) and len(s) < len(string): # avoid duplicates
            groups[s].append(string[len(s):]) # add the suffix to the group
        else:
            s = string # a fresh prefix
            groups[s] = [s]
    regex = ''
    for prefix, words in groups.items():
        inreg = ''
        if len(words) == 2: # i.e. words[0] is a subset of words[1]
            inreg += words[0] + '(' + words[1] + ')' + '?'
        elif len(words) > 2:
            inreg += words[0] + '(' + regexem_internal(words[1:]) + ')' + '?'
        else:
            inreg += prefix # since prefix == words[0] in this case.
        regex += '(' + inreg + ')' + '|'
    return regex[:-1] # we don't need the last '|'

if __name__ == '__main__':
    print ''.join(regexem(sys.argv[1:]))

## Examples
#
# $ ./regexem.py emacs vi ed
# (ed)|(emacs)|(vi)
#
# $ ./regexem.py batsman bats well
# (well)|(bats(man)?)
#
# $ ./regexem.py houses housefly
# (houses)|(housefly) 		   ## Note that they aren't grouped together
#
## a slightly complicated example
# $ ./regexem.py an anteater and an ant
# (an((d)|(t(eater)?))?)

