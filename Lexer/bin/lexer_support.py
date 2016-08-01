import ply.lex
import pprint

# List of KeyWords

keywords = ('BREAK', 'EXPORT', 'SUPER', 'CASE', 'EXTENDS', 'SWITCH', 'CLASS', 'FINALLY', 'THIS', 'CATCH', 'FINALLY', 'THIS', 'CATCH', 'FOR', 'THROW', 'CONST', 'FUNCTION', 'TRY', 'CONTINUE', 'IF', 'TYPEOF', 'DEBUGGER', 'IMPORT', 'VAR', 'DEFAULT', 'IN', 'VOID', 'DELETE', 'INSTANCEOF', 'WHILE', 'DO', 'NEW', 'WITH', 'ELSE', 'RETURN', 'YIELD');

# 
# Keywords Dictionary




###### List of Tokens #######
# Punctuator
# Identifier
# Keyword
# String
# Numeric
# Boolean
# NULL
# Regular Expression



tokens = (
	# Punctuators
	# . , ; : + - * / 
	# % & | ^ ~ ? ! ( 
	# ) { } [ ] = 
	# == != === !== < > <= >= 
	# || && ++ -- << >> >>> += -= 
	# *= /= <<= >>= >>= >>>= &= %= 
	# ^= |=
	'DOT', 'COMMA', 'SEMICOLON', 'COLON', 'PLUS', 'MINUS', 'INTO', 'DIVIDE', 
	'MOD', 'BINAND', 'BINOR', 'BINXOR', 'BINNOT', 'CONDOP', 'NOT', 'LEFTPAREN', 
	'RIGHTPAREN', 'LEFTBRACE', 'RIGHTBRACE', 'LEFTBRACKET', 'RIGHTBRACKET', 'EQ', 
	'DOUBLEEQ', 'NOTEQUAL', 'STREQUAL', 'STRNEQUAL', 'LT', 'GT', 'LTE', 'GTE', 
	'OR', 'AND', 'INCR', 'DECR', 'LSHIFT', 'RSHIFT', 'URSHIFT' 'PLUSEQ', 'MINUSEQ', 
	'INTOEQ', 'DIVEQ', 'LSHIFTEQ', 'RSHIFTEQ', 'UNRSHIFTEQ', 'ANDEQ', 'MODEQ', 
	'XOREQ', 'OREQ',

	# Terminal
	'NUMBER', 'STRING', 'ID', 'REGEX'

	# Properties
	'GETPROP', 'SETPROP'

	# Comments
	'LINECOMMENT', 'BLOCKCOMMENT'

	# Line Terminator
	'LINETERMINATOR'
) + keywords


# Regular Expression rule for all tokens
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
