function foo(number) {
  if (number === 0) {
    return 'End';
  } else {
    if (number%3 === 0 && number%5 === 0) {
      console.log('MishaKostiuk');
    } else if (number%3 === 0) {
      console.log('Misha');
    } else if (number%5 === 0) {
      console.log('Kostiuk');
    } else {
      console.log(number);
    }
    return foo(number - 1);
  }
}

foo(100)
