const text = "Happy Birthday My Ayenie ❤️";
let i = 0;

function typeWriter(){
    if(i < text.length){
        document.getElementById("message").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter,80);
    }
}

typeWriter();
const music = document.getElementById("music");

document.body.addEventListener("click", function () {
    music.play();
}, { once: true });
