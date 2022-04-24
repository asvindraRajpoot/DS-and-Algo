//Check string is palindrom
function isPalindrom(str) {
  const res = revStr(str);
  if (res === str) {
    return true;
  }
  return false;
}

isPalindrom("madam");

//time complexcity: o(n)
//space complexcity:o(n)
