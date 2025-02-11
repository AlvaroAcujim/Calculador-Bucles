let number = 5;
let acumulator = 0;
let contador = 0;
while(contador <= number){
  if(contador == number){
    console.log('la suma de los numeros del 1 al ' +  number + ' es ' + acumulator);
  }
  ++contador;
  acumulator += contador;
}