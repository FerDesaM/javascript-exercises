const add = function(first ,second) {
	return first+second;
};

const subtract = function(first,second) {
	return first-second;
};

const sum = function(array) {
	return array.reduce((total,currentItem)=>total+currentItem,0)
};

const multiply = function(array) {
  return array.reduce((total,currentItem)=>total*currentItem,1)
};

const power = function(first,second) {
	return first**second;
};

const factorial = function(number) {
  if(number===0)
    return 1;
  else
	return number*(factorial(number-1))
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
