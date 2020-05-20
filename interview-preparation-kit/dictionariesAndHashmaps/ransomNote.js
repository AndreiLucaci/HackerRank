function checkMagazine(magazine, notes) {
  const magazineObj = magazine.reduce((acc, cur) => {
    (acc[cur] || (acc[cur] = [])).push(cur);
    return acc;
  }, {});

  for (let note of notes) {
    if (!magazineObj[note] || !magazineObj[note].pop()) {
      console.log("No");
      return;
    }
  }

  console.log("Yes");
}
