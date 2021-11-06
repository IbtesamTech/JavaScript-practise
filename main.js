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
