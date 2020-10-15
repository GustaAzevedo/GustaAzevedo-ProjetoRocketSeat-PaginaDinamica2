const modalOverlay = document.querySelector('.modall-overlay');
const kards = document.querySelectorAll('.kard');

for (let kard of kards) {
    kard.addEventListener("click", function () {
        const videoId = kard.getAttribute("id");
        modalOverlay.classList.add('activo');
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`;
    })
}

document.querySelector('.material-icons').addEventListener("click", function () {
    modalOverlay.classList.remove('activo');
    modalOverlay.querySelector("iframe").src = "";
})