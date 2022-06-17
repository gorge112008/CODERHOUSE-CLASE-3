
let ingreso = prompt(
    "Ingresa una opción: \n 1-Café solo \n 2-Café con leche \n 3-Té solo \n 4-Té con leche \n 5-Agua hervida caliente \n 0-Salir");
     
    while (ingreso!= "0"){
switch (ingreso) {
    case "1":
        alert("Seleccionaste Café, que lo disfrutes");
        break;
    case "2":
        alert("Seleccionaste Café con leche, que lo disfrutes");
        break;
    case "3":
        alert("Seleccionaste Té, que lo disfrutes");
        break;
    case "4":
        alert("Seleccionaste Té con leche, que lo disfrutes");
        break;
    case "5":
        alert("Seleccionaste Agua hervida caliente");
        break;
    default:
        console.log("Opcion no valida");
        break;
    }   
    ingreso = prompt(
        "Ingresa una opción: \n 1-Café solo \n 2-Café con leche \n 3-Té solo \n 4-Té con leche \n 5-Agua hervida caliente \n 0-Salir");
    if (ingreso == "0") {
        alert ("Muchas Gracias, que tengas un buen dia");
    }
}