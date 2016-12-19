/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getUsers: function(req, res){
		User.find().populate('userContacts').exec(function(err, users){
			if (err) res.json({ error: 'oups error' }, 500);
			if (users) {
				res.json(users)       
			} else {
				res.json({ message: 'users not found' });
			}
		});
	}
};

