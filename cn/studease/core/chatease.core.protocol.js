﻿(function(chatease) {
	chatease.core.protocol = {};
	
	var protocol = chatease.core.protocol;
	
	protocol.cmds = {
		TEXT:    'text',
		HISTORY: 'history',
		MUTE:    'mute',
		KICKOUT: 'kickout',
		EXTERN:  'extern',
		PING:    'ping'
	};
	
	protocol.raws = {
		IDENT:   'ident',
		TEXT:    'text',
		HISTORY: 'history',
		JOIN:    'join',
		LEFT:    'left',
		USERS:   'users',
		MUTE:    'mute',
		KICKOUT: 'kickout',
		EXTERN:  'extern',
		ERROR:   'error',
		PONG:    'pong'
	};
	
	protocol.types = {
		UNI:     0x00,
		MULTI:   0x01,
		HISTORY: 0x02
	};
	
	protocol.roles = {
		VISITOR:   0x00,
		NORMAL:    0x01,
		VIP:       0x0E,
		
		ASSISTANT: 0x10,
		SECRETARY: 0x20,
		ANCHOR:    0x30,
		
		ADMIN:     0x40,
		SU_ADMIN:  0x80,
		SYSTEM:    0xC0
	};
	
	protocol.channelStates = {
		NORMAL: 0x00,
		MUTED:  0x01,
		LOCKED: 0x03
	};
	
	protocol.punishments = {
		MUTED:      0x01,
		KICKED_OUT: 0x03
	};
	
	protocol.errors = {
		BAD_REQUEST:           400,
		UNAUTHORIZED:          401,
		FORBIDDEN:             403,
		NOT_FOUND:             404,
		NOT_ACCEPTABLE:        406,
		REQUEST_TIMEOUT:       408,
		CONFLICT:              409,
		EXPECTATION_FAILED:    417,
		
		INTERNAL_SERVER_ERROR: 500,
		NOT_IMPLEMENTED:       501,
		BAD_GATEWAY:           502,
		SERVICE_UNAVAILABLE:   503,
		GATEWAY_TIMEOUT:       504
	};
})(chatease);
