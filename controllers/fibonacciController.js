const { performance } = require('perf_hooks');

function fibonacci(req, res) {
  var startTime = performance.now();

  var params = req.body;
  var index = params.index ? params.index : 0;
  var value = showNumberByIndex(index);

  var endTime = performance.now();
  var totalTime = endTime - startTime;
  res.status(200).send({ value, time: `${totalTime} milliseconds.` });
}

function fibonnaciArray() {
  var a = 0, b = 1, f = 1, array = [0, 1];
  for(var i = 2; i <= 12; i++) {
      f = a + b;
      a = b;
      b = f;
      array.push(f);
  }
  return array;
}

function showNumberByIndex(index) {
  return fibonnaciArray()[index];
}


module.exports = {
  fibonacci
}
