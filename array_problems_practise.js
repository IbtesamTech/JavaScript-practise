function findMaxFromAnArray(arr) {
  let max = arr[0];

  // One way your custom logic of sort
  arr.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });

  // result
  alert(max); // Custom logic of sort
}

function findMinFromAnArray(arr) {
  let small = arr[0];

  // One way your custom logic of sort
  arr.forEach((element) => {
    if (element < small) {
      small = element;
    }
  });

  // result
  alert(small); // Custom logic of sort
}

function findSumBetweenIndexes(arr, firstIndex, secondIndex) {
  // Logic
  let sum = 0;
  for (let index = firstIndex; index <= secondIndex; index++) {
    sum = sum + arr[index];
  }

  // Result
  alert(sum);
}
