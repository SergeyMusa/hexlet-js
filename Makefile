#! Makefile
DATE='date +%D'

install: install-deps

push:
	@echo "Git_$DATE"
	git pull
	git add . 
	git commit -m "edit_$DATE"
	#
	git push

pull:
	git pull

#test:
#	npm test



.PHONY: test
