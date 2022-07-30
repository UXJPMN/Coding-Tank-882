let num = 0;

while(num <= 100) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log('FizzBuzz');
  } else if (num % 3 === 0) {
    console.log('Fizz');
  } else if (num % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(num);
  }

  //num++ é a mesma coisa que num += 1 é a mesma coisa de num = num + 1
  num++;
}
