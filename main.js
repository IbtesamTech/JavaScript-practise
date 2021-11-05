const findMaxFromAnArray = () => {
  let max = -2;
  let arr = [1, -3, 2, -6, 9];

  // One way your custom logic of sort

  arr.forEach((element) => {
    if (element < 0 && max < 0) {
      if (max < element) {
        max = element;
      }
    } else {
      if (max < element) {
        max = element;
      }
    }
  });

  // Second way array sort using default functions
  arr.sort();

  // result
  alert(arr[arr.length - 1] + " default functions"); // default functions
  alert(max + " custom logic of sort"); // Custom logic of sort
}
