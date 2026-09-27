var lienzo = document.getElementById("miLienzo");
var pincel=lienzo.getContext("2d");

//cuadrado
pincel.fillStyle = "pink";
pincel.fillRect(150,130,100,100);

//triangulo
pincel.fillStyle = "skyblue";
pincel.beginPath();
pincel.moveTo(200, 75);
pincel.lineTo(150, 130);
pincel.lineTo(250,130)
pincel.closePath();
pincel.fill();

// puerta
pincel.beginPath();
pincel.fillStyle = "red";
pincel.fillRect(190,190,25,40);
pincel.closePath();
pincel.fill();

pincel.fill();
pincel.beginPath();
pincel.fillStyle="gold";
pincel.arc(60,60,30,0,2*Math.PI);
pincel.fill();


// Estilo de las líneas de los rayos
pincel.strokeStyle = "orange";
pincel.lineWidth = 4;
pincel.lineCap = "round"; // Le da un toque suave a las puntas

// Rayo Arriba
pincel.beginPath();
pincel.moveTo(60, 20);
pincel.lineTo(60, 10);
pincel.stroke();

// Rayo Abajo
pincel.beginPath();
pincel.moveTo(60, 100);
pincel.lineTo(60, 110);
pincel.stroke();

// Rayo Izquierda
pincel.beginPath();
pincel.moveTo(20, 60);
pincel.lineTo(10, 60);
pincel.stroke();

// Rayo Derecha
pincel.beginPath();
pincel.moveTo(100, 60);
pincel.lineTo(110, 60);
pincel.stroke();

// --- RAYOS DIAGONALES EXTRA ---

// Rayo Arriba-Izquierda
pincel.beginPath();
pincel.moveTo(32, 32);
pincel.lineTo(25, 25);
pincel.stroke();

// Rayo Arriba-Derecha
pincel.beginPath();
pincel.moveTo(88, 32);
pincel.lineTo(95, 25);
pincel.stroke();

// Rayo Abajo-Izquierda
pincel.beginPath();
pincel.moveTo(32, 88);
pincel.lineTo(25, 95);
pincel.stroke();

// Rayo Abajo-Derecha
pincel.beginPath();
pincel.moveTo(88, 88);
pincel.lineTo(95, 95);
pincel.stroke();

