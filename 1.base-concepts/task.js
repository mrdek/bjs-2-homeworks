"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  if (d < 0) {
    return arr;
  } else if (d === 0) {
    arr.push(-b / (2 * a));
  } else {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }

  return arr;
}
10, 20000, 20000, 48

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  if (typeof percent !== 'number' || typeof contribution !== 'number' || typeof amount !== 'number' || typeof countMonths !== 'number') {
    return 'Все аргументы функции должны быть числами';
  }
 
  if (percent < 0 || percent > 100) {
    return 'Процентная ставка должна быть в диапазоне от 0 до 100';
  }
 
  if (contribution < 0) {
    return 'Сумма первоначального взноса не может быть отрицательной';
  }
 
  if (amount < contribution) {
    return 'Сумма кредита должна быть больше суммы первоначального взноса';
  }
 
  if (countMonths <= 0) {
    return 'Срок кредита должен быть положительным числом';
  }
 
  const monthlyPercent = percent / 100 / 12;
 
  const bodyCredit = amount - contribution;
 
  const monthlyPayment = bodyCredit * (monthlyPercent + monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1));
 
  const totalAmount = monthlyPayment * countMonths;
 
  const roundedTotalAmount = parseFloat(totalAmount.toFixed(2));

  return roundedTotalAmount;
}
