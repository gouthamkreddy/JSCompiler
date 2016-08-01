Assignmet 1

To make file executable

Commands:
	bash $> cd asgn1
	bash $> make
	bash $> bin/lexer test/test1.js

There are five test files
- test1.js
- test2.js
- test3.js
- test4.js
- test5.js  

If the above method doesn't work, run
	bin/lexer.py test/test1.js

If above two do not work, run
	python bin/lexer.py test/test1.js  

Description of the lexer file

First we import ply into the code. After that we define the set of key words that will be used in the Source Language. Next we define the set of all the tokens that will be present in the Source.

After this, we first define the regular expressions for the simple tokens like (+,-,*, etc). These mostly include the operators and the parenthesis that will be used. Within these tokens we will also include the regular expression for finding numbers we divide the number into four parts 

		1) Before the decimal
		2) After the decimal
		3) The decimal dot
		4) The exponent

After this we give a definition so that we can keep track of the line numbers this would help in giving the line no at which we made an error.


After that we defined a rule for handling an error that might occur during the lexical analysis. What we do is we print to stdout that an Illegal Character is present.

Strings
	In this part we define the string that would occur in the source code.
In JS we can have two types of strings 
		1) Single Quoted
		2) Double Quoted
In both these types of strings the only difference is that single quote would start and end with '' while double quotes would be like " ". Hence this is the only difference that can be seen in the regular expressions of these two types of strings.

After this we define the regular expression for the Identifiers. This is a simple regualar expression that starts with a alphabet or _ and after that it can be any alpha-numeric bit.

After this we define the regular expression for 'Get Property' and ’Set Property' constructs of Javascript

After this we define the symbol table where we counted the occurrences of different tokens and printed the table using draw_table function which uses prettytable library for printing the table in formatted way.

We open the test file in the main function and take the whole data as a string, the code will take this string and then tokenize it.