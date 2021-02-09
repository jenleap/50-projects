const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
    const audio = document.createElement('audio');
    audio.src = `sounds/${sound}.mp3`;
    document.getElementById('audio-div').appendChild(audio);
    
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;
    btn.addEventListener('click', () => {
        silence();
        audio.play();
    });
    document.getElementById('buttons').appendChild(btn);
});

function silence() {
    const sounds = document.getElementsByTagName('audio');
    for (let sound of sounds) {
        sound.pause();
        sound.currentTime = 0;
    }
}
