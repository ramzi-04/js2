const countStrings = (strings) => {
  const counts = new Map();
  for (const string of strings) {
    if (!counts.has(string)) {
      counts.set(string, 0);
    }
    counts.set(string, counts.get(string) + 1);
  }

  return counts;
};
