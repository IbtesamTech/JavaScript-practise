function checkPalindrome(inputString) {
  let reverseString = "";
  for (let loop = inputString.length; loop >= 0, loop--; ) {
    reverseString = reverseString + inputString[loop];
  }
  if (reverseString == inputString) {
    alert("The given string is palindrome");
  } else {
    alert("The given string is not palindrome");
  }
}

function shapeAreaCount(n) {
  sphareCount = 0;
  for (let loop = 0; loop < n; loop++) {
    if (loop == 0) {
      sphareCount = 1;
    } else {
      sphareCount = loop * 4 + sphareCount;
    }
  }
  alert(sphareCount);
}

function matrixElementsSum(matrix) {
  let sum = 0;
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == 0 && i + 1 < matrix.length) {
        matrix[i + 1][j] = 0;
      }
      sum += matrix[i][j];
    }
  }
  alert(sum);
}

function allLongestStrings(inputArray) {
  var longestLength = 0;
  var resArray = [];
  for (let loop = 0; loop < inputArray.length; loop++) {
    if (inputArray[loop].length > longestLength) {
      longestLength = inputArray[loop].length;
    }
  }
  for (let loop = 0; loop < inputArray.length; loop++) {
    if (inputArray[loop].length == longestLength) {
      resArray.push(inputArray[loop]);
    }
  }

  console.log(resArray);
}


function commonCharacterCount(s1, s2) {
  var count = 0;
  s1 = s1.split("");
  s2 = s2.split("");

  s1.forEach((e) => {
    if (s2.includes(e)) {
      count++;
      s2.splice(s2.indexOf(e), 1);
    }
  });

  alert(count);
}

function isLucky(input) {
  let arr = input.toString().split("");
  let length = parseInt(arr.length / 2);
  let first = 0;
  let second = 0;
  debugger;
  for (let loop = 0; loop < arr.length; loop++) {
    if (loop < length) {
      first = first + parseInt(arr[loop]);
    } else {
      second = second + parseInt(arr[loop]);
    }
  }

  if (first == second) {
    alert(true);
  } else {
    alert(false);
  }
}