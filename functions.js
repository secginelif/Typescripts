function sum(x, y) {
    return x + y;
}
var sum2 = function (x, y) {
    return x + y;
};
function sum3(x, y) {
    if (y) {
        return x + y;
    }
    return x;
}
console.log(sum3(3));
