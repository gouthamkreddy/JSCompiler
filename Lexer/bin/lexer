#! /usr/bin/python
import sys
import lex
# import pprint
# import texttable as tt
import prettytable
# List of token names.   This is always required

keywords = ('BREAK', 'EXPORT', 'SUPER', 'CASE', 'EXTENDS', 'SWITCH', 'CLASS', 'FINALLY', 'THIS', 'CATCH', 'FOR', 'THROW', 'CONST', 'FUNCTION', 'TRY', 'CONTINUE', 'IF', 'TYPEOF', 'DEBUGGER', 'IMPORT', 'VAR', 'DEFAULT', 'IN', 'VOID', 'DELETE', 'INSTANCEOF', 'WHILE', 'DO', 'NEW', 'WITH', 'ELSE', 'RETURN', 'YIELD', 'EVAL', 'ALERT');

tokens = (
	# Punctuators
	'DOT', 'COMMA', 'SEMICOLON', 'COLON', 'PLUS', 'MINUS', 'INTO', 'DIVIDE', 'NUMBER', 'MOD', 'BINAND', 'BINOR', 'BINXOR', 'BINNOT', 'CONDOP', 'NOT', 'LEFTPAREN', 'RIGHTPAREN', 'LEFTBRACE', 'RIGHTBRACE', 'LEFTBRACKET', 'RIGHTBRACKET', 'EQ', 'DOUBLEEQ', 'NOTEQUAL', 'STREQUAL', 'STRNEQUAL', 'LT', 'GT', 'LTE', 'GTE', 'OR', 'AND', 'INCR', 'DECR', 'LSHIFT', 'RSHIFT', 'URSHIFT', 'PLUSEQ', 'MINUSEQ', 'INTOEQ', 'DIVEQ',  'LSHIFTEQ', 'RSHIFTEQ', 'URSHIFTEQ', 'ANDEQ', 'MODEQ', 'XOREQ', 'OREQ', 'ID', 'STRING', 'LCOMMENT', 'BCOMMENT', 'GETPROP', 'SETPROP', 'REGEX', 'GETP', 'SETP'
)+keywords

keywords_dict = {keyword.lower(): keyword for keyword in keywords}
# pprint.pprint(keywords_dict)
# Regular expression rules for simple tokens
t_DOT 	        = r'\.'
t_COMMA         = r','
t_SEMICOLON     = r';'
t_COLON         = r':'
t_PLUS          = r'\+'
t_MINUS         = r'-'
t_INTO          = r'\*'
t_DIVIDE        = r'/'
t_MOD           = r'%'
t_BINAND        = r'&'
t_BINOR         = r'\|'
t_BINXOR        = r'\^'
t_BINNOT        = r'~'
t_CONDOP        = r'\?'
t_NOT           = r'!'
t_LEFTPAREN     = r'\('
t_RIGHTPAREN    = r'\)'
t_LEFTBRACE     = r'{'
t_RIGHTBRACE    = r'}'
t_LEFTBRACKET   = r'\['
t_RIGHTBRACKET  = r'\]'
t_EQ            = r'='
t_DOUBLEEQ      = r'=='
t_NOTEQUAL      = r'!='
t_STREQUAL      = r'==='
t_STRNEQUAL     = r'!=='
t_LT            = r'<'
t_GT            = r'>'
t_LTE           = r'<='
t_GTE           = r'>='
t_OR            = r'\|\|'
t_AND           = r'&&'
t_INCR          = r'\+\+'
t_DECR          = r'--'
t_LSHIFT        = r'<<'
t_RSHIFT        = r'>>'
t_URSHIFT       = r'>>>'
t_PLUSEQ        = r'\+='
t_MINUSEQ       = r'-='
t_INTOEQ        = r'\*='
t_DIVEQ         = r'/='
t_LSHIFTEQ      = r'<<='
t_RSHIFTEQ      = r'>>='
t_URSHIFTEQ     = r'>>>='
t_ANDEQ         = r'&='
t_MODEQ         = r'%='
t_XOREQ         = r'\^='
t_OREQ          = r'\|='
t_NUMBER = r"""
(?:
    0[xX][0-9a-fA-F]+              # hex_integer_literal
 |  0[0-7]+                        # or octal_integer_literal (spec B.1.1)
 |  (?:                            # or decimal_literal
        (?:0|[1-9][0-9]*)          # decimal_integer_literal
        \.                         # dot
        [0-9]*                     # decimal_digits_opt
        (?:[eE][+-]?[0-9]+)?       # exponent_part_opt
     |
        \.                         # dot
        [0-9]+                     # decimal_digits
        (?:[eE][+-]?[0-9]+)?       # exponent_part_opt
     |
        (?:0|[1-9][0-9]*)          # decimal_integer_literal
        (?:[eE][+-]?[0-9]+)?       # exponent_part_opt
     )
)
"""

t_LCOMMENT = r'//[^\r\n]*'
t_BCOMMENT = r'\/\*[^*]*\*\/'

# Define a rule so we can track line numbers
def t_newline(t):
    r'\n+'
    t.lexer.lineno += len(t.value)



# A string containing ignored characters (spaces and tabs)
t_ignore  = ' \t'

# Error handling rule
def t_error(t):
    print("Illegal character '%s'" % t.value[0])
    t.lexer.skip(1)

string = r"""
(?:
	# single quoted string
    (?:'                               # opening single quote
        (?: [^'\\\n\r]                 # no \, line terminators or '
            | \\[a-zA-Z!-\/:-@\[-`{-~] # or escaped characters
            | \\x[0-9a-fA-F]{2}        # or hex_escape_sequence
            | \\u[0-9a-fA-F]{4}        # or unicode_escape_sequence
        )*?                            # zero or many times
        (?: \\\n                       # multiline ?
          (?:
            [^'\\\n\r]                 # no \, line terminators or '
            | \\[a-zA-Z!-\/:-@\[-`{-~] # or escaped characters
            | \\x[0-9a-fA-F]{2}        # or hex_escape_sequence
            | \\u[0-9a-fA-F]{4}        # or unicode_escape_sequence
          )*?                          # zero or many times
        )*
    ')                                 # closing single quote
	|
    # double quoted string
    (?:"                               # opening double quote
        (?: [^"\\\n\r]                 # no \, line terminators or "
            | \\[a-zA-Z!-\/:-@\[-`{-~] # or escaped characters
            | \\x[0-9a-fA-F]{2}        # or hex_escape_sequence
            | \\u[0-9a-fA-F]{4}        # or unicode_escape_sequence
        )*?                            # zero or many times
        (?: \\\n                       # multiline ?
          (?:
            [^"\\\n\r]                 # no \, line terminators or "
            | \\[a-zA-Z!-\/:-@\[-`{-~] # or escaped characters
            | \\x[0-9a-fA-F]{2}        # or hex_escape_sequence
            | \\u[0-9a-fA-F]{4}        # or unicode_escape_sequence
          )*?                          # zero or many times
        )*
    ")                                 # closing double quote    
)
"""  # "

@lex.TOKEN(string)
def t_STRING(t):
    t.value = t.value.replace('\\\n', '')
    return t

identifier = r'[a-zA-Z_][a-zA-Z_0-9]*'
@lex.TOKEN(identifier)
def t_ID(t):
	# pprint.pprint(t.value)
	t.type = keywords_dict.get(t.value,'ID')    # Check for reserved words
	return t



getp = r'get' + r'(?=\s' + identifier + r')'
@lex.TOKEN(getp)
def t_GETP(token):
    return token

setp = r'set' + r'(?=\s' + identifier + r')'
@lex.TOKEN(setp)
def t_SETP(token):
    return token



# Give the lexer some input
def lex_fun(data, toks):	
	lexer = lex.lex()
	lexer.input(data)
	# Tokenize
	count = 0
	while True:
		tok = lexer.token()
		if not tok: 
			break      # No more input
		if(tok.type=='EVAL'):
			count = 1
		if count>0:
			count += 1
		if count!=4:
			# pprint.pprint(tok)
			toks.append(tok)
		if count==4:
			a = tok.value
			if a[0]=='"' or a[0]=="'": 
				a = a[1:-1]
			else:
				a = a
			lex_fun(a, toks)
			count = 0		

def draw_table(symbol_table):
	header = ['Token', 'Occurrances', 'Lexemes']
	tab = prettytable.PrettyTable(header)
	for st_entry in symbol_table:
		temp_count = 0
		while len(st_entry['token_values'])>0:
			if temp_count == 0:
				abcde = st_entry['token_values'][0]
				row = [st_entry['token_type'], st_entry['occurances'], abcde]
				tab.add_row(row)
				st_entry['token_values'].remove(abcde)
				temp_count += 1
			else:
				abcde = st_entry['token_values'][0]
				row = ['','', abcde]
				tab.add_row(row)
				st_entry['token_values'].remove(abcde)
	print tab

def symbol_table(toks):
	symbol_table = []
	while len(toks)!=0:
		tok = toks[0]
		temp_tok = tok
		st_entry = { 
		'token_type':temp_tok.type,
		'occurances': 1,
		'token_values': [temp_tok.value]
		}
		toks.remove(tok)
		temp_counter = 0
		while temp_counter<len(toks):
			# print t.type
			t = toks[temp_counter]
			if t.type == temp_tok.type:
				st_entry['occurances'] += 1
				if t.value not in st_entry['token_values']:
					st_entry['token_values'].append(t.value) 
				toks.remove(t)
			else:
				temp_counter = temp_counter + 1
		symbol_table.append(st_entry)
	# pprint.pprint(symbol_table)	
	draw_table(symbol_table)

if __name__ == '__main__':
	a = './' + sys.argv[1]
	f = open(a, 'r')
    	data = f.read()
	toks = []
    	lex_fun(data, toks)
	# pprint.pprint(toks)
	symbol_table(toks)
	# pprint.pprint(toks)
