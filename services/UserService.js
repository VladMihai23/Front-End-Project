const bcrypt = require('bcryptjs');
const UserRepository = require('../repositories/UserRepository');

class UserService {

  async register({ username, email, password }) {
    const existing = await UserRepository.findByEmail(email);
    if (existing) throw new Error("Email already in use");

    const hashed = await bcrypt.hash(password, 10);

    return await UserRepository.createUser({
      username,
      email,
      password: hashed
    });
  }

  async login(username, password) {
    const user = await UserRepository.findByUsername(username);
    if (!user) throw new Error("Invalid username or password");

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error("Invalid username or password");

    return user;
  }
}

module.exports = new UserService();
