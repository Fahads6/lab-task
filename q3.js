input=23617;
str=input.toString();
console.log(str)
const arr = Array.from(str);
console.log(arr);
let sum=0;
for(let i=0;i<=str.length;i++){
    if(i%2==0){
        console.log(i)
        sum+=i;
        console.log(sum);

    }
}