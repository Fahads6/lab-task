let arr = [10,2, 3, 5, 1, 4];
check = 10;

if (arr[0] == check || arr[-1]==check) {
    console.log("First Position Matched= ",arr[0]);
}
else{
    console.log("First Position Not Matced")
}
if (arr[-1]==check) {
    console.log("Last Position Matched= ",arr[-1]);
}
else{
    console.log("Last Position Not Matchhed")
}