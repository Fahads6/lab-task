const array = arr([1, 2, 3, 4]);
function arr(number){
    newarr=[];
    let sum = 0;
    var largest=0;
for (let i = 0; i < number.length; i++) {
    sum += number[i];
    if (number[i]>largest) {
        var largest=number[i];
        }
    
}

console.log(largest);
console.log(sum);
const total=sum/4; //sum/array.length
console.log(total);


}