// math.js - a CommonJS module for performing calculations on a set of numbers

module.exports.sum = (nums) => {
    return nums.reduce((total, num) => total + num, 0);
}

function sum(nums) {
    return nums.reduce((total, num) => total + num, 0);
}

module.exports.mean = (nums) => {
    return sum(nums) / nums.length;
}
