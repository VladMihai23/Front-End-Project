exports.up = pgm => {
  pgm.createTable("books", {
    id: "id",
    title: { type: "text", notNull: true },
    author: { type: "text", notNull: true },
    genre: { type: "text", notNull: true },
    price: { type: "numeric", notNull: true },
    image_url: { type: "text" },
    created_at: {
      type: "timestamp",
      default: pgm.func("current_timestamp")
    }
  });
};

exports.down = pgm => {
  pgm.dropTable("books");
};
