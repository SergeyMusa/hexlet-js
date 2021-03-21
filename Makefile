#! Makefile
d1='date +%D'
d2=date +%D
d=`date +%y%m%d`

install: install-deps

push:
	git pull
	git add .
	git commit -m "edit_$d1"
	#
	git push
	echo "Push_OK_$d1"
	
pull:
	git pull

test:
	@echo $d
	@echo "Git_$d1" + ' = ' + d2 '=='  'date +%D'
#	npm test

.PHONY: test
