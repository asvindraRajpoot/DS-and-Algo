//To reverse a number
function revNum(num) {
  let rev = 0;
  let isNeg = false;
  if (num < 0) {
    num = num * -1;
    isNeg = true;
  }
  while (num !== 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  if (isNeg) {
    rev *= -1;
  }

  return rev;
}
revNum(-204);

//time complexcity: o(logn)
//space complexcity: 0(1)
