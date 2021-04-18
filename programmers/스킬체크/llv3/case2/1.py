#!/usr/bin/env python
# -*- coding: utf-8 -*-
# -*- coding: euc-kr -*-
# UTF-8 encoding when using korean
import re

sentence = "한국 주식에 투자하는 게 미국 주식에 투자하는 것보다 낫다."

pattern = re.compile("주식")

# '한국'으로 시작하기 때문에 None 리턴
print(pattern.match(sentence)) # None

# 문자열 모든 위치에 대해서 검색(처음 일치하는 부분 문자열)
print(pattern.search(sentence)) # <re.Match object; span=(3, 5), match='주식'>

# 패턴에 해당되는 부분 문자열을 list로 리턴
pattern.findall(sentence) # ['주식', '주식']