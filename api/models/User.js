/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	attributes: {
		name: { type: 'string', required: true},
		phone: { type: 'string', defaultsTo: '11 22 33 44 55', required: true},
		age: {type: 'INTEGER', max: 150, required: true},
		userContacts: {
			collection: 'contact',
			via: 'id'
		}
	}
};