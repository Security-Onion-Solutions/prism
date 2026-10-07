// Resource: https://prismjs.com/extending
Prism.languages.esql = {
	'string': {
		pattern: /"""[\s\S]*?"""|"(?:\\.|[^"\\\r\n])*"/,
		greedy: true
	},
	'keyword': /\b(?:from|metadata|where|eval|stats|by|keep|drop|rename|sort|limit|fork|mv_expand|dissect|grok|enrich|lookup|join|on|with|row|show|and|or|not|in|is|null|like|rlike|asc|desc|nulls|first|last)\b/i,
	'boolean': /\b(?:true|false)\b/i,
	'function': /\b\w+(?=\()/,
	'number': /\b\d+(?:\.\d+)?/,
	'operator': /==|!=|<=|>=|[<>=+\-*\/%:]/,
	'punctuation': /[(),\[\]|]/
};
