import { validateParams, showValueAndTimeByIndex } from './helpers/fibonacciHelper';

const fibonacci = async (req, res) => {
  var index = req.body.index;
  var maxLength = req.body.max;

  if (validateParams(index, maxLength)) return res.status(422).send(
            { error: 'index param must be an integer >= 0 && <= 100 and max param integer >= 2 && <=100 and index <= max' });

  index = parseInt(index);
  maxLength = parseInt(maxLength);
  var getData = await showValueAndTimeByIndex(index, maxLength);
  var value = getData.value;
  var time = getData.time;

  res.status(200).send({ value, time: `${time} milliseconds.` });
}

module.exports = {
  fibonacci
}
