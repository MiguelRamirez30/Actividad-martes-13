# Actividad-martes-13
Solución del problema

( ()=>{
    
const nombre: string[] = ['Hugo', 'Paco', 'Luis', 'Pedro', 'Hector'];
const edad: number[] = [35, 50, 40, 18, 30];

const indiceMenor: number = edad.findIndex(e => e === Math.min(...edad));
const indiceMayor: number = edad.findIndex(e => e === Math.max(...edad));

document.getElementById("menor")!.textContent =
  `${nombre[indiceMenor]} es el menor con ${edad[indiceMenor]} años (índice ${indiceMenor}).`;

document.getElementById("mayor")!.textContent =
  `${nombre[indiceMayor]} es el mayor con ${edad[indiceMayor]} años (índice ${indiceMayor}).`;



} )()


// INDEX

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Edad Mayor y Menor</title>
</head>
<body>
  <h1>Resultado</h1>
  <p id="menor"></p>
  <p id="mayor"></p>

  <script src="main.js"></script>
</body>
</html>



// JS
(function () {
    var nombre = ['Hugo', 'Paco', 'Luis', 'Pedro', 'Hector'];
    var edad = [35, 50, 40, 18, 30];
    var indiceMenor = edad.findIndex(function (e) { return e === Math.min.apply(Math, edad); });
    var indiceMayor = edad.findIndex(function (e) { return e === Math.max.apply(Math, edad); });
    document.getElementById("menor").textContent =
        "".concat(nombre[indiceMenor], " es el menor con ").concat(edad[indiceMenor], " a\u00F1os (\u00EDndice ").concat(indiceMenor, ").");
    document.getElementById("mayor").textContent =
        "".concat(nombre[indiceMayor], " es el mayor con ").concat(edad[indiceMayor], " a\u00F1os (\u00EDndice ").concat(indiceMayor, ").");
})();
