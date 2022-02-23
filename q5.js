//This is Part A

input = "fahad";
let vovel = /[aeiou]/gi;
str = input.split("");
let result = input.match(vovel);
let x = myfun(result);
function myfun(a) {
    for (let i = 0; i < str.length; i++) {
        if (a == i) {
            console.log(i);
        }
    }

}

//This is Part B
let rev = 0;
let a = rever(123456);
function rever(num) {
    rev = Number(String(num).split('').reverse().join(''));

    console.log(rev);

}
