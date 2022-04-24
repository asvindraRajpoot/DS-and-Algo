//Check string is palindrom
const revStr = (str) => {
  // return str.split('').reverse().join('');
  let res = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    res = char + res;
  }
  return res;
};

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
