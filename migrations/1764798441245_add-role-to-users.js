exports.up = pgm => {
  pgm.addColumn("users", {
    role: { type: "text", notNull: true, default: "user" }
  });
};

exports.down = pgm => {
  pgm.dropColumn("users", "role");
};
