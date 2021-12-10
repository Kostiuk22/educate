var names = ['misha', 'sasha', 'masha', 'alex'];
var indexNames = Math.floor(Math.random()* names.length);

function whoPay(){
  console.log('Платить: ', names[indexNames]);
}

whoPay()
