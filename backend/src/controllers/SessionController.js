const User = require('../models/User');

module.exports = {
  // index, show, update, destroy
  async store(req, res) {
    const { email } = req.body; // desestruturação

    // let user = await User.findOne({ email: email })
    let user = await User.findOne({ email });

    if ( !user ) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
};