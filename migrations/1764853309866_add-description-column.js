exports.up = (pgm) => {
  pgm.addColumn('books', {
    description: { type: 'text' }
  });
};

exports.down = (pgm) => {
  pgm.dropColumn('books', 'description');
};
