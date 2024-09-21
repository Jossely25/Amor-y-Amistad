// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Si alguna vez te encuentras atrapado en medio del mar", time: 0 },
  { text: "Navegaré el mundo para encontrarte", time: 8 },
  { text: "Si alguna vez te pierdes en la oscuridad y no puedes ver", time: 15 },
  { text: "Seré la luz que te guíe", time: 23 },
  { text: "Descubre de qué estamos hechos", time: 30 },
  { text: "Cuando nos llaman para ayudar a nuestros amigos necesitados", time: 35 },
  { text: "Puedes contar conmigo como uno, dos, tres", time: 42 },
  { text: "Estaré ahí", time: 50 },
  { text: "Y sé que cuando lo necesite, puedo contar contigo como cuatro, tres, dos", time: 57 },
  { text: "Estarás ahí", time: 66 },
  { text: "Porque eso es lo que se supone que deben hacer los amigos, oh sí", time: 74 },
  { text: "Si estás llorando y te lo recuerdas", time: 83 },
  { text: "No puedo dormir", time: 91 },
  { text: "No he dormido", time: 97 },
  { text: "Para cada vez que te muerdes", time: 104 },
  { text: "Eres mi cita", time: 108 },
  { text: "Si alguna vez olvidas lo mucho que significas para mí", time: 115 },
  { text: "Todos los días te lo recordaré", time: 122 },
  { text: "Descubre de qué estamos hechos", time: 130 },
  { text: "Cuando nos llaman para ayudar a nuestros amigos necesitados", time: 136 },
  { text: "Puedes contar conmigo como uno, dos, tres", time: 144 },
  { text: "Estaré ahí", time: 153 },
  { text: "Y sé que cuando lo necesite, puedo contar contigo como cuatro, tres, dos", time: 159 },
  { text: "Estarás ahí", time: 168 },
  { text: "Porque eso es lo que se supone que deben hacer los amigos, oh sí", time: 176 },
  { text: "Siempre podrás contar conmigo, oh oh", time: 185 },
  { text: "Y siempre podré contar contigo", time: 192 },
  { text: "Puedes contar conmigo como uno, dos, tres", time: 200 },
  { text: "Estaré ahí", time: 208 },
  { text: "Y sé que cuando lo necesite, puedo contar contigo como cuatro, tres, dos", time: 215 },
  { text: "Estarás ahí", time: 223 },
  { text: "Porque eso es lo que se supone que deben hacer los amigos, oh sí", time: 231 },
  { text: "Siempre podrás contar conmigo, oh oh", time: 240 },
  { text: "Y siempre podré contar contigo", time: 247 },
];

// Función para animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Actualiza las letras cada segundo
setInterval(updateLyrics, 1000);

// Función para ocultar el título después de 197 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 197 segundos (197,000 milisegundos)
setTimeout(ocultarTitulo, 197000);
