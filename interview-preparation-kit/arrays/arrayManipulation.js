const fs = require("fs");
const readline = require("readline");

function arrayManipulation(n, queries) {
  let arr = new Array(n + 1).fill(0);
  let max = 0;

  queries.forEach((item) => {
    arr[item[0]] += item[2];
    arr[item[1] + 1] -= item[2];
  });

  arr.reduce((prev, curr) => {
    const sum = prev + curr;
    max = sum > max ? sum : max;
    return sum;
  });

  return max;
}

const compute = () => {
  return new Promise((resolve, reject) => {
    const result = { n: 0, queries: [] };

    const readInterface = readline.createInterface({
      input: fs.createReadStream("./arrayManipulationInput.txt"),
      console: false,
    });

    let index = 0;

    readInterface.on("line", function (line) {
      if (index++ === 0) {
        result.n = parseInt(line.split(" ")[0]);
      } else {
        result.queries.push(line.split(" ").map((x) => parseInt(x)));
      }
    });

    readInterface.on("close", function () {
      resolve(result);
    });
  });
};

const doWork = async () => {
  const { n, queries } = await compute();
  const result = arrayManipulation(n, queries);
  console.log(result);
};

doWork();
