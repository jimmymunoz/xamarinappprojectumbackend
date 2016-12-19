/**
 * ContactType.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	attributes: {
	  	/*
	  	idContactType: {
	  		model: 'contact',
	  		unique: true
	  	},
	  	 */
	  	name: { type: 'STRING', required: true},
	  	image: { type: 'STRING', required: true}
	}
};

