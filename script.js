function daysInYear(year) {
  try {
    if (!Number.isInteger(year) || Number(year) <= 0) {
      throw new Error('The year is not a number or not greater than 0.');
    }
    return (year % 4 === 0 || year % 100 !== 0) || (year % 400 === 0)
      ? 366 : 365;
  } catch (error) {
    return 'an exception';
  }
}

console.log(daysInYear(2019));  // 365
console.log(daysInYear( '2019'));  // 'an exception'
console.log(daysInYear(2020));  // 366
console.log(daysInYear(2020,2));  // 'an exception'
console.log(daysInYear(2100));  // 365
console.log(daysInYear({год: 2100}));  // 'an exception'
console.log(daysInYear(-1)); // 'an exception'
