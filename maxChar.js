//To find max character in string
function maxChar(str){
let strObj={};
let maxChar='';
let maxCount=0;
for(let i=0;i<str.length;i++){
    let char=str[i];
    strObj[char]=strObj[char] + 1 || 1;
    if(strObj[char]> maxCount){
       maxChar=char;
       maxCount=strObj[char];
    }
}
return maxChar;
}
//Time Complexity :o(n)
// Space complexity :o(1)
