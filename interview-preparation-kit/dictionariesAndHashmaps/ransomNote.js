function checkMagazine(magazine, notes) {
  const magazineObj = magazine.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  for (let note of notes) {
    if (!magazineObj[note] || !magazineObj[note]--) {
      console.log("No");
      return;
    }
  }

  console.log("Yes");
}
