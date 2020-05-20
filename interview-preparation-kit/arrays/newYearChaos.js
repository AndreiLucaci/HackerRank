function minimumBribes(q) {
  let sol = 0;

  for (let i = 0; i < q.length; i++) {
    if (i + 1 + 2 < q[i]) {
      console.log("Too chaotic");
      return;
    }

    for (let j = Math.max(0, i - 1); j >= q[i] - 2; j--) {
      if (q[i] < q[j]) {
        sol++;
      }
    }
  }

  console.log(sol);
}

const normal = [2, 1, 5, 3, 4];

minimumBribes(normal);
