const between = (min, max) =>{
    return Math.floor(Math.random() * (max - min) + min);
}

const objetoFinal ={}
console.log(objetoFinal[1])
for(let i=0; i<1000; i++){
    const resultado = between(1,20);
}

if(objetoFinal[resultado]){
    // La clave ya existe, ya salió una vez
    objetoFinal[resultado] = objetoFinal[resultado] + 1;
}else{
    // La clave no existe, es la primera vez que sale
    objetoFinal[resultado] = 1;
}