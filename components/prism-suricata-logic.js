Prism.languages['suricata-logic'] = {
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'protocol': {
		pattern: /\b(tcp|udp|icmp|ip|all|any|tcp-pkt|tcp-stream|http[12]?|ftp|tls|smb|dns|dcerpc|dhcp|ssh|smtp|imap|pop3|modbus|dnp3|enip|nfs|ike|krb5|bittorrent-dht|ntp|dhcp|rfb|rdp|snmp|tftp|sip|websocket)\b/,
		alias: 'selector'
	},
	'direction': {
		pattern: /(->|<>)/,
		alias: 'operator'
	},
	'flag-option': {
		pattern: /(noalert|fast_pattern)/,
		alias: 'tag'
	},
	'option-key': {
		pattern: /\w+:/,
		alias: 'selector'
	},
};