function getArrayParams(...arr) {

  if (arr.length === 0) {
    return {};
  }
 
  let min = arr[0];
  let max = arr[0];
  let sum = arr[0];
 
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]; 
    }
    if (arr[i] > max) {
      max = arr[i]; 
    }
    sum += arr[i]; 
  }
 
  const avg = sum / arr.length; 
  const roundedAvg = Number(avg.toFixed(2));
 
  return { min, max, avg: roundedAvg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((sum, num) => sum + num, 0);
}
 
function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}
 
function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEven = 0;
  let sumOdd = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      sumEven += num;
    } else {
      sumOdd += num;
    }
  }
  return sumEven - sumOdd;
}
 
function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEven = 0;
  let countEven = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      sumEven += num;
      countEven++;
    }
  }
  if (countEven === 0) return 0;
  return sumEven / countEven;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let arr of arrOfArr) {
    const result = func(...arr);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}