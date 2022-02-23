var input = 23617;
str = input.toString();
a = str.split("");
arr = Array.from(a);
console.log(arr);
const sum=0;

for (let i = 0; i <= arr.length; i++) {
    arr.reduce((partialSum, a) => partialSum + a, 0);
    

}console.log(sum);




