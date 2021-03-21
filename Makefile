#! Makefile
d1='date +%D'
d2=date +%D
d=`date +%y%m%d`

install: install-deps

push:
	@echo "Git_$d1" + ' = ' + d2 '==' + date +%D
	git pull
	git add . 
	git commit -m "edit_$DATE"
	#
	git push

pull:
	git pull

test:
	@echo $d
#	npm test



.PHONY: test
