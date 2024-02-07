const averagePages = (books) => {
  const pages = books.map((book) => book.pages);

  const totalPages = pages.reduce((a, b) => a + b, 0);

  const average = totalPages / books.length;

  return average;
};
