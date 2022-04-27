//To print the fizz and buzz for passed number
function fizzBuzz(n){

    for(let i=1;i<=n;i++){

        if(i%3===0){
            console.log('fizz');
        }else if(i%5===0){
            console.log('buzz');
        }else if(i%5===0 && i%3===0){
            console.log('fizzbuzz');
        }else{
            console.log(i);
        }
    }
}

//Time Complexity: o(n)
//Space Complexity: o(1)
