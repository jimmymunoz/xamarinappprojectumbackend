/**
 * MedicamentHistory.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	attributes: {
		alert: {
			collection: 'alert',
			via: 'id'
		},
		message: { type: 'STRING', required: true},
		sendDate: { type: 'datetime', required: true},
		expireDate: { type: 'datetime', required: true},
		taken: { type: 'boolean', defaultsTo: false},
		notified: { type: 'boolean', defaultsTo: false}
	}
};

