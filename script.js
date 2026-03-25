const text = "Lennon Coelho Chaves";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("title").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 80);
    }
}

typing();