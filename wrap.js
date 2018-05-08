const wrap = (string, length) => {
  let returnArray = [];
  let start = 0;

  if (length === 0  || string.length <= length) {
    return string;
  }

  for (var i = length; i < string.length; i += length) {
    const newString = string.slice(start, i);
    start = i;
    returnArray.push(newString);
  }
  returnArray.push(string.slice(start));
  return returnArray.join('\n');
}

console.log(wrap('Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.', 20))

module.exports = wrap;
