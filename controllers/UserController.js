const UserService = require('../services/UserService');

class UserController {

  showRegisterPage(req, res) {
    res.render('user', {
      loggedIn: !!req.session.user,
      user: req.session.user || null,
      success: null,
      error: null,
      username: '',
      email: ''
    });
  }

  async register(req, res) {
    try {
      await UserService.register(req.body);

      res.render('user', {
        loggedIn: false,
        user: null,
        success: "You can now log in!",
        error: null,
        username: '',
        email: ''
      });

    } catch (err) {
      res.render('user', {
        loggedIn: false,
        user: null,
        success: null,
        error: err.message,
        username: req.body.username,
        email: req.body.email
      });
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;

      const user = await UserService.login(username, password);

      req.session.user = user;

      res.redirect('/user');

    } catch (err) {
      res.render('user', {
        loggedIn: false,
        user: null,
        success: null,
        error: 'Invalid username or password',
        username: '',
        email: ''
      });
    }
  }

  logout(req, res) {
    req.session.destroy(() => {
      res.redirect('/user');
    });
  }
}

module.exports = new UserController();
