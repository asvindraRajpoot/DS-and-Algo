//To Capitalize a string in camle case

function capitalize(str) {
 
    let spStr=str.split(' ');
    for(let i=0;i<spStr.length;i++){
        const word=spStr[i];
        spStr[i]=(word[0].toUpperCase() + word.slice(1).toLowerCase());
    }
    return spStr.join(' ');
}
capitalize('asvindra is Good coder');
//Time Complexity: o(n)
//Space Complexity: o(n)
