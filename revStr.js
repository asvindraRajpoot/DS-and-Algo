//To reverse a string
const revStr = (str) => {
  // return str.split('').reverse().join('');
  let res = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    res = char + res;
  }
  return res;
};

//time complexcity: o(n)
//space complexcity:o(n)
