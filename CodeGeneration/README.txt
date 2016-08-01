Running the assignment

$ cd asgn2
$ make
_____________________________________________ 

	Here we use "make" to make all the test cases. In the make we first run the preprocess.py on each of the test case and then from the output file we will run the code codegen.py to get assembly code for the test case.
_____________________________________________

In the assignment we have used two file 

+-----------------------------------+
| 1)codegen.py						|
| 2)preprocess.py                 	|
+-----------------------------------+

_____________________________________________

The functions that we used in the codegen.py are 

+------------------------------------------+
| 1)getreg                          	   |
| 2)asm_copy							   |
| 3)print_assembly						   |
| 4)return_content						   |
| 5)process								   |
+------------------------------------------+

_____________________________________________

+-----------------------------------+
| function getreg                   |
+-----------------------------------+

	As discussed in the class this function is used to get the registers that will be required to generate the assembly code. For this the input that will be given are the variable, the operation and the symbol_table.

	If the location of the variable is already register then the variable is already allocated a register and we shall use this register.

	If this is not the case then we shall look at the register descriptor, if there is a register which is empty then we will consider this register and in that register we will put this variable and change its descipter. We return false to show that the variable was not in the register but is allocated now.

	Even after this if the variable is not allocated a register then we will use the heuristic "farthest next use". In this we will spill that register which will have the farthest next use.


+-----------------------------------+
| function print_assembly           |
+-----------------------------------+
	
	This is the function that is used to print the assembly code from the given three address code. The input to this function are the set of basic blocks, the list of the symbol tables that we use, the variables that are present in each line.

	In this we deal with each of the operation that are allowed in the three address code.

	Based on the operation that is specified and the requirements of the registers we will call the getreg function. Also along with calling the getreg function we also make appropriate changes to the address descripter and the register descripter.


+-----------------------------------+
| function return_content           |
+-----------------------------------+

	This function defines the text that is in the basic block. The input for this file is the basic block. Then for this basic block it gives what all variables are used in each line of the basic block. Also it defines all the variables that are used in the basic block.


+-----------------------------------+
| function asm_copy                 |
+-----------------------------------+

	This function basically takes two inputs "a,b" and then moves a to b.


+-----------------------------------+
| function process                  |
+-----------------------------------+

	The function process basically creates the list of symbol tables for a given basic block. The input to this function is the basic block. It reads the basic block line by line at after each line it will create a symbol table holds information about all variables that are present in the block.

	It store what is the next use for each of the variables after each line. It also stores state, last use and the next use. The state describes whether the variables is dead or alive, and the last use stores when the variable was last used in the given basic block.

	Then the function process takes each line of the basic block and send it to the function print_assembly which print the assembly code for the respective line of the basic block.


_____________________________________________

preprocess.py

	In the assignment we defined a function named preprocess. The fucntion of preprocess is to assign line numbers to the given input file for which we have to generate the assembly code.

_____________________________________________





















