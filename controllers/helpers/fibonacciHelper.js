import { performance } from 'perf_hooks';

const validateParams = (index, maxLength) => {
  if (index < 0 || index > 100
      || typeof index != 'number'
      || maxLength < 2 || maxLength > 100
      || typeof maxLength != 'number'
      || index > maxLength) {
    return true;
  }
}

const fibonnaciArray = async (maxLength) => {
  var startTime = performance.now();

  var promise = new Promise((resolve, reject) => {
    var a = 0, b = 1, f = 1, array = [0, 1];
    for(var i = 2; i <= maxLength; i++) {
        f = a + b;
        a = b;
        b = f;
        array.push(f);
    }
    resolve(array);
  });

  var result = await promise;
  var endTime = performance.now();
  var totalTime = endTime - startTime;
  return { array: result, time: totalTime };
}

const showValueAndTimeByIndex = async (index, maxLength) => {
  var response = await fibonnaciArray(maxLength);
  return { value: response.array[index], time: response.time };
}

module.exports = {
  validateParams,
  showValueAndTimeByIndex
}
