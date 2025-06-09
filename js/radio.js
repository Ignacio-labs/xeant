/*!


document.addEventListener('DOMContentLoaded', function() {
    const playAudioLink = document.getElementById('playAudioLink');
    const audioPlayer = document.getElementById('audioPlayer');
    const playIcon = playAudioLink.querySelector('.fas'); // Asumiendo que usas Font Awesome

    let isPlaying = false; // Variable para saber si el audio está sonando

    if (playAudioLink && audioPlayer) { // Asegúrate de que los elementos existen
        playAudioLink.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el navegador siga el enlace #

            if (isPlaying) {
                audioPlayer.pause();
                isPlaying = false;
                // Opcional: Cambia el ícono a "reproducir"
                if (playIcon) {
                    playIcon.classList.remove('fa-pause-circle');
                    playIcon.classList.add('fa-play-circle');
                }
                console.log('Audio pausado.');
            } else {
                audioPlayer.play()
                    .then(() => {
                        isPlaying = true;
                        // Opcional: Cambia el ícono a "pausa"
                        if (playIcon) {
                            playIcon.classList.remove('fa-play-circle');
                            playIcon.classList.add('fa-pause-circle');
                        }
                        console.log('Audio reproduciéndose.');
                    })
                    .catch(error => {
                        console.error('Error al intentar reproducir el audio:', error);
                        alert('No se pudo iniciar la reproducción de audio. El navegador puede haber bloqueado la reproducción automática.');
                    });
            }
        });

        // Opcional: Escucha el evento 'ended' si la transmisión tiene un final
        audioPlayer.addEventListener('ended', () => {
            isPlaying = false;
            if (playIcon) {
                playIcon.classList.remove('fa-pause-circle');
                playIcon.classList.add('fa-play-circle');
            }
            console.log('La reproducción de audio ha finalizado.');
        });

        // Opcional: Escucha el evento 'error' para depuración
        audioPlayer.addEventListener('error', (e) => {
            console.error('Error en el reproductor de audio:', e);
            alert('Hubo un error al cargar o reproducir el audio.');
        });
    }
});

*/