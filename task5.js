
function reverseNumber(num) {
    var reversedString = num.toString().split('').reverse().join('');
    var reversedNumber = parseInt(reversedString, 10);
    return reversedNumber;
  }
var x = 32243;
var reversedX = reverseNumber(x);
console.log(reversedX)  
