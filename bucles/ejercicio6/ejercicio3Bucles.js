let edad = 20;
if(edad <= 0 || edad > 110 ){
  console.log('Edad no valida');
  
} else if(edad <= 12 ){
  console.log('eres un niño');
  
}else if(edad <= 19 ){
  console.log('eres un adolescente');
  
} else if(edad <= 64){
  console.log('Eres un adulto.');
  
}else{
  console.log('Eres un adulto mayor');
}