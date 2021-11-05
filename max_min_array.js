function findMaxFromAnArray() {
  let arr = [1, -3, 2, -6, 9];
  let max = arr[0];

  // One way your custom logic of sort
  arr.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });

  // result
  alert(max + " custom logic of sort"); // Custom logic of sort
}

function findMinFromAnArray() {
  let arr = [-1, -3, -2, -6, -9];
  let small = arr[0];

  // One way your custom logic of sort
  arr.forEach((element) => {
    if (element < small) {
      small = element;
    }
  });

  // result
  alert(small + " custom logic of sort"); // Custom logic of sort
}
