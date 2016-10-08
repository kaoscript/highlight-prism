/**
 * prism-kaoscript.js
 * Version 0.1.0
 * October 8th, 2016
 *
 * Copyright (c) 2016 Baptiste Augrain
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 **/
Prism.languages.kaoscript = {
	'block-comment': [
		{
			pattern: /(^|[^\\])---[\w\W]*?---/,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
			lookbehind: true
		}
	],
	'comment': {
		pattern: /(^|[^\\:])\/\/.*/,
		lookbehind: true
	},
	'attr-name': /#!?\[.+?\]/,
	'string': {
		pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'template-string': {
		pattern: /`(?:\\\\|\\?[^\\])*?`/,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /\\\([^}]+\)/,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\\\(|\)$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.kaoscript
				}
			},
			'string': /[\w\W]+/
		}
	},
	'regex': {
		pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.})]))/,
		lookbehind: true,
		greedy: true
	},
	'import-block': {
		pattern: /\bimport\s*\{[\w\W]*?\}/,
		inside: {
			'keyword': /\b(as|import)\b(?!\s*:)/,
			'from': {
				pattern: /\bfrom\s*([^:][\w\W]*)\s*/,
				inside: {
					'keyword': /\b(from)\b(?!\s*:)/,
					'string': /\S*/
				}
			}
		}
	},
	'import-line': {
		pattern: /\bimport\s*[\w\W]*?(\r|\n)+/,
		inside: {
			'keyword': /\b(as|import)\b(?!\s*:)/,
			'from': {
				pattern: /\bfrom\s*([^:][\w\W]*)\s*/,
				inside: {
					'keyword': /\b(from)\b(?!\s*:)/,
					'string': /\S*/
				}
			}
		}
	},
	'keyword': /\b(class|const|func|enum|impl|let|struct|type|await|break|catch|continue|do|else|export|extern|finally|for|if|include|return|switch|throw|try|unless|until|while|as|by|from|in|is|of|til|to|with|async|extends|final|private|protected|public|static|new)\b(?!\s*:)/,
	'builtin': /\b(super|this|Array|array|Boolean|bool|class|enum|Function|func|Number|number|Object|object|RegExp|String|string)\b(?!\s*:)/,
	'boolean': /\b(true|false)\b/,
	'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/,
	'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
	'operator': /[-+\/*=<>!&\|\^\?:]+|\.\.\./,
	'punctuation': /[{}[\](),.:]/
};

Prism.languages.ks = Prism.languages.kaoscript;