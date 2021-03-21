#! Makefile
d1='date +%D'
d2='date +"%y.%m.%d"'

install: install-deps

push:
	git pull
	git add .
	git commit -m "edit_$d2"
	git push
	echo "Push_OK_$d1_$d2"

pull:
	git pull
	@echo "Pull_from_Git_OK"

test:
	@echo $d
	@echo "Git_$d1" + ' = ' + $d2 '=='  'date +%D'
#	npm test

.PHONY: test
