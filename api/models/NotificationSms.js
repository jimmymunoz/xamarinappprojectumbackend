/**
 * NotificationSms.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	attributes: {
		message: { type: 'STRING', required: true},
		contact: {
			collection: 'contact',
			via: 'id'
		},
		send: { type: 'boolean', defaultsTo: false},
	  	medicament_history: {
			collection: 'medicamentHistory',
			via: 'id'
		}
	}
};

