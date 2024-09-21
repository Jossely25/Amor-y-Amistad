// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Si alguna vez te encuentras atrapado en medio del mar", time: 5 },
  { text: "voy a navegar por el mundo", time: 10 },
  { text: "para encontrarte", time: 13 },
  { text: "Si alguna vez te encuentras perdido en la oscuridad y no puedes ver", time: 16 },
  { text: "Seré la luz", time: 21 },
  { text: "para guiarte", time: 24 },
  { text: "descubrimos de qué estamos hechos", time: 29 },
  { text: "Cuando somos llamados a ayudar a nuestros amigos en necesidad", time: 32 },
  { text: "Puedes contar conmigo como uno, dos, tres estaré allí", time: 37 },
  { text: "Y sé que cuando lo necesite, puedo contar contigo como cuatro, tres, dos y tu estaras ahi", time: 46 },
  { text: "Porque eso es lo que se supone que deben hacer los amigos", time: 56 },
  { text: "si estás dándo vueltas en la cama, y simplemente no puedes dormir", time: 70 },
  { text: "voy a cantar una canción", time: 75 },
  { text: "a tu lado", time: 78 },
  { text: "y si alguna vez olvidas lo mucho que realmente significas para mí", time: 81 },
  { text: "todos los días", time: 86 },
  { text: "te lo recordaré", time: 89 },
  { text: "descubrimos de qué estamos hechos", time: 93 },
  { text: "Cuando somos llamados a ayudar a nuestros amigos en necesidad", time: 97 },
  { text: "Puedes contar conmigo como uno, dos, tres estaré allí", time: 102 },
  { text: "Y sé que cuando lo necesite, puedo contar contigo como cuatro, tres, dos y tu estaras ahi", time: 110 },
  { text: "Porque eso es lo que se supone que deben hacer los amigos", time: 121 },
  { text: "Siempre tendrás mi hombro cuando quieras llorar", time: 135 },
  { text: "nunca te dejaré ir, nunca me despediré", time: 146 },
  { text: "Puedes contar conmigo como uno, dos, tres estaré allí", time: 157 },
  { text: "Y sé que cuando lo necesite, puedo contar contigo como cuatro, tres, dos y tu estaras ahi", time: 164 },
  { text: "Porque eso es lo que se supone que deben hacer los amigos", time: 175 },
  { text: "Puedes contar conmigo, porque puedo contar contigo", time: 186 },
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
