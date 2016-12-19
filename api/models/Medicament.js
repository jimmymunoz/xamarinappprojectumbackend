/**
 * Medicament.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	attributes: {
		user: {
			model: 'user'
		},
		name: { type: 'string', required: true},
		startDate: { type: 'datetime', required: true},
		expireMins: { type: 'float', required: true},
		enabled: { type: 'boolean', required: true}
	}
};

