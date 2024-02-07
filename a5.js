const countPeopleByCity = (people) => {
  const counts = new Map();

  for (const person of people) {
    const city = person.city;
    if (!counts.has(city)) {
      counts.set(city, 0);
    }
    counts.set(city, counts.get(city) + 1);
  }

  return counts;
};
