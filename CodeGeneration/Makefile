all: test1 test2 test3 test4 test5

test1:
	python src/preprocess.py test/test1 > bin/temp1
	python src/codegen.py bin/temp1 > bin/temp1.s
	as --32 bin/temp1.s -o bin/temp1.o
	ld -m elf_i386 bin/temp1.o -o bin/key1 -lc -dynamic-linker /lib/ld-linux.so.2
	bin/key1

test2:
	python src/preprocess.py test/test2 > bin/temp2
	python src/codegen.py bin/temp2 > bin/temp2.s
	as --32 bin/temp2.s -o bin/temp2.o
	ld -m elf_i386 bin/temp2.o -o bin/key2 -lc -dynamic-linker /lib/ld-linux.so.2
	bin/key2

test3:
	python src/preprocess.py test/test3 > bin/temp3
	python src/codegen.py bin/temp3 > bin/temp3.s
	as --32 bin/temp3.s -o bin/temp3.o
	ld -m elf_i386 bin/temp3.o -o bin/key3 -lc -dynamic-linker /lib/ld-linux.so.2
	bin/key3

test4:
	python src/preprocess.py test/test4 > bin/temp4
	python src/codegen.py bin/temp4 > bin/temp4.s
	as --32 bin/temp4.s -o bin/temp4.o
	ld -m elf_i386 bin/temp4.o -o bin/key4 -lc -dynamic-linker /lib/ld-linux.so.2
	bin/key4

test5:
	python src/preprocess.py test/test5 > bin/temp5
	python src/codegen.py bin/temp5 > bin/temp5.s
	as --32 bin/temp5.s -o bin/temp5.o
	ld -m elf_i386 bin/temp5.o -o bin/key5 -lc -dynamic-linker /lib/ld-linux.so.2
	bin/key5

clear:
	rm -rf bin/*.s bin/*.o bin/key* bin/temp*

