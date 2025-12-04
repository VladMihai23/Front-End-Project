class UserModel {
  constructor({id, username, email, password, created_at, role}) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
    this.created_at = created_at;
  }
}

module.exports = UserModel;