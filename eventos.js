var teclas = {
UP: 38, /* separar valores con coma */
DOWN: 40,
LEFT: 37,
RIGHT: 39

}; /* Coleccion de variables: variable con variables por dentro linea unica con punto y coma */ 
/* Json: JavaScript Object Notation */
/* UP DOWN LEFT RIGHT en mayusculas porque no va a cambiar a lo largo del codigo son las buenas practicas */

console.log(teclas);

document.addEventListener('keyup', dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 149, 149, 151, 151, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
/*   if (evento.keyCode == teclas.UP)
  {
    console.log("Vamo' pa arriba");
  }  
  if (evento.keyCode == teclas.DOWN)
  {
    console.log("Vamo' pa abajo");
  }  
  if (evento.keyCode == teclas.RIGHT)
  {
    console.log("Vamo' pa la derecha");
  }  
  if (evento.keyCode == teclas.LEFT)
  {
    console.log("Vamo' pa la izquierda");
  }   */
  var colorcito = "blue";
  var movimiento = 10;
  switch(evento.keyCode)
  {
      case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      break;   
      case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      break;
      case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel); 
      x = x - movimiento;
      break;
      case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
      break;
      default:
        console.log("Otra tecla");
      break;
      }
  /* el switch se utiliza en casos muy especificos */
}

