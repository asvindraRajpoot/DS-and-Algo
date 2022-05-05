//Linear Search

function linearSearch(arr,n){
    for(let i=0;i<arr.length;i++){
        if(n===arr[i]){
            return i;
        }
    }
    return -1;
}
const list=[12,3,4,5,6,7,8,9,9,9,11,3,4,4,5,6,7,8,99];
linearSearch(list,100);



//Time Complexity: o(n)
//Space Complexity: o(1)
