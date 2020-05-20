const { EOL } = require("os");

function dynamicArray(n, queries) {
  // Write your code here
  let res = [];
  let lastAnswer = 0;
  const seqList = new Array(n).fill(0).map((x) => []);

  for (const [action, x, y, seq = seqList[(x ^ lastAnswer) % n]] of queries) {
    if (action === 1) {
      seq.push(y);
    } else {
      res.push((lastAnswer = seq[y % seq.length]));
    }
  }

  return res;
}

const n = 2;
const queries = [
  [1, 0, 5],
  [1, 1, 7],
  [1, 0, 3],
  [2, 1, 0],
  [2, 1, 1],
];

const result = dynamicArray(n, queries);

console.log(result.join(EOL));
