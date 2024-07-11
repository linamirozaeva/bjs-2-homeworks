function getArrayParams(...arr){
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}




function summElementsWorker(...arr){
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
  if (arr.length === 0){
    return 0;
  }
}

function differenceMaxMinWorker(...arr){
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max - min;
  if (arr.length === 0){
    return 0;
  }
}

function differenceEvenOddWorker(...arr){
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
  if (arr.length === 0){
    return 0;
  }
}

function averageEvenElementsWorker(...arr){
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  return sumEvenElement / countEvenElement;
  if (arr.length === 0){
    return 0;
  }
}




function makeWork (arrOfArr, func){
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++){
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult){
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}