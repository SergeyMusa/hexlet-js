#! Makefile
DATE='date +%D'
DAT2=date +%D

install: install-deps

push:
	@echo "Git_$DATE"+'='+$DAT2+'=='+date +%D
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
