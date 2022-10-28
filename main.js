let intentos=+prompt("Cuantas veces quiere jugar?");
let contador=0;
let contadorEmpate=0;
let contadorPc=0;
let contadorUser=0;
let veri=false;
function resultados() {
    alert("Partidas jugadas: " + contador +"\nPartidas ganadas por el PC: " + contadorPc +"\nPartidas ganadas por el jugador: " + contadorUser + "\nPartidas empatadas: "+ contadorEmpate)  
}
function resultadosPc(){
    let pc= Math.floor(Math.random()*3+1);
    return pc;
}
function comparar(pc,usuario){
    if (pc!==usuario){
        if((pc===1)&&(usuario===2)){
            alert("gana el jugador \nPc= Piedra \nusuario= Papel");
            contadorUser++;
        }else if((pc===2)&&(usuario===3)){
            alert("gana el jugador \nPc= Papel \nusuario= Tijera");
            contadorUser++;
        }else if((pc===3)&&(usuario===1)){
            alert("gana el jugador \nPc= Tijera \nusuario= Piedra");
            contadorUser++;
        }else if((pc===1)&&(usuario===3)){
            alert("gana el Pc \nPc= Piedra \nusuario= Tijera");
            contadorPc++;
        }else if((pc===2)&&(usuario===1)){
            alert("gana el Pc \nPc= Papel \nusuario= Piedra");
            contadorPc++;
        }else if((pc===3)&&(usuario===2)){
            alert("gana el Pc \nPc= Tijera \nusuario= Papel");
            contadorPc++;
        }                             
    }else{
        if((pc===3)&&(usuario===3)){
            alert("Empate \nusuario= Tijera \nPC= Tijera");
        }else if((pc===2)&&(usuario===2)){
            alert("Empate \nusuario= Papel \nPC= Papel");
        }else if((pc===1)&&(usuario===1)){
            alert("Empate \nusuario= Piedra \nPC= Piedra");
        }
        contadorEmpate++;
    }
}
if(intentos==0){
    alert("¿Tons no quiere jugar manito 😔?"); 
}else if(!isNaN(intentos) ){

    for(let i=1;i<=intentos;i++){
    let usuario=+prompt("Escoja una de las seguientes opciones  \n1 - Piedra \n2 - Papel \n3 - Tijera");
    if(usuario>=1 && usuario<=3){
        pc=resultadosPc();
        comparar(pc,usuario);
        contador++;   
    }else{
        alert("Error mano, vuelva a intentar");
        i--;
    }
}
resultados();

  
}else{
    alert("dato invalido, vuelva a intentar");   
}
