/**
 * Contact.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	attributes: {
		/*
		user: {
			model: 'user'
		},
		 */
		name: { type: 'STRING', required: true},
		phone: { type: 'STRING', defaultsTo: '11 22 33 44 55', required: true},
		contactType: {
			collection: 'contactType',
			via: 'id'
		}
	}
};

