const sumAll = function (start, end) {
    const increment = start <= end ? 1 : -1;
    let sum = 0;
    if (start < 0 || end < 0) return "ERROR";
    if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";

    for (let i = start; start <= end ? i <= end : i >= end; i += increment) {
        sum += i;
    }
    return sum;

};
// Do not edit below this line
module.exports = sumAll;