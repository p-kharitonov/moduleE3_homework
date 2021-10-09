// Задание 3

function example(number1) {
    return function(number2) {
      return number1 + number2
    }
  }
  
  const temp = example(5);
  console.log(temp(5));
