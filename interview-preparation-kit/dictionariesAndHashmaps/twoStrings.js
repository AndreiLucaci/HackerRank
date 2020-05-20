function twoStrings(s1, s2) {
  const [small, large] = s1.length > s2.length ? [s2, s1] : [s1, s2];

  for (let item of small.split("")) {
    if (large.includes(item)) return "YES";
  }

  return "NO";
}

twoStrings("hello", "world");
