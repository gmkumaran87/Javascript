function removeStyle(e) {
    e.target.classList.remove('playing');
}

function playSound(e) {
    console.log(e)


    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    document.addEventListener('transitionend', removeStyle);
}

function playClickSound(e) {

    console.log(e)
    if (e.target.className = 'key') {
       
        var audio = document.querySelector(`audio[data-key="${e.target.attributes[0].nodeValue}"]`);
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
    }
    else {
        return;
    }

}

document.addEventListener('keydown', playSound);

var container = Array.from(document.getElementsByClassName('key'));

container.forEach(element => {
    element.addEventListener('click', playClickSound);
});