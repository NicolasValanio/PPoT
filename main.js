let piedra = 1;
let papel = 2;
let tijera = 3;

let user= parseInt(prompt("Digite: 1=piedra, 2=papel, 3=tijera"));
let cpu = Math.floor(Math.random() * (4 - 1)) + 1;


switch (true) {
  case (user == piedra && cpu == papel):
    document.write("Usted eligio piedra <br>");
    document.write("El CPU eligio papel <br>");  
    document.write("ganó cpu");

    break;
  case (user == piedra && cpu == tijera):
    document.write("Usted eligio piedra <br>");
    document.write("El CPU eligio tijera <br>");   
    document.write("gano usuario");
    break;
  case (user == tijera && cpu == papel):
    document.write("Usted eligio tijera <br>");
    document.write("El CPU eligio papel <br>");    
    document.write("gano usuario");
    break;
  case (user == tijera && cpu == piedra):
    document.write("Usted eligio tijera <br>");
    document.write("El CPU eligio piedra <br>");    
    document.write("gano cpu");
    break;
  case (user == papel && cpu == piedra):
    document.write("Usted eligio papel <br>");
    document.write("El CPU eligio piedra <br>");    
    document.write("gano usuario");
    break;
  case (user == papel && cpu == tijera):
    document.write("Usted eligio papel <br>");
    document.write("El CPU eligio tijera <br>");    
    document.write("gano cpu");
    break;
    case( user ==papel && cpu ==papel):
    document.write("Usted eligio papel <br>");
    document.write("El CPU eligio papel <br>");    
    document.write("empate");
    break;
    case( user ==piedra && cpu ==piedra):
    document.write("Usted eligio piedra <br>");
    document.write("El CPU eligio piedra <br>");    
    document.write("empate");
    break;
    case( user ==tijera && cpu ==tijera):
    document.write("Usted eligio tijera <br>");
    document.write("El CPU eligio tijera <br>");    
    document.write("empate");
    break;
    default:
    document.write("error mano sea serio");
}

