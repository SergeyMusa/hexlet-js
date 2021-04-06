#!/bin/bash
#Makefile
d1=`date +%D`
d2=$"XYZ"
#`date +"%y.%m.%d"`
#
#d3=`date +%y%m%d%H%M%S`
#
#
install: install-deps

push:
	git pull
	git add .
	git commit -m "edit_$d1"
	git push
	echo "Push_OK_$d1_$d2"

pull:
	git pull
	@echo "Pull_from_Git_OK"

test:
	@echo $dat $d2 $d3
	echo $d2
	@echo "Git_$d1 + $d2"
#	npm test

.PHONY: test
