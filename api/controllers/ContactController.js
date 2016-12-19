/**
 * ContactController
 *
 * @description :: Server-side logic for managing contacts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getContacts: function(req, res){
		Contact.find().populate('contactType').exec(function(err, contacts){
			if (err) res.json({ error: 'oups error' }, 500);
			if (contacts) {
				res.json(contacts)       
			} else {
				res.json({ message: 'contacts not found' });
			}
		});
	}
};

