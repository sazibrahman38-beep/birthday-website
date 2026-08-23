let currentPage = 0;

const pages = document.querySelectorAll(".page");

function nextPage() {

    if (currentPage >= pages.length - 1) {
        return;
    }

    pages[currentPage].classList.add("turn");

    currentPage++;

    pages[currentPage].classList.add("active");
}

const music = document.getElementById("bgMusic");

function startGift() {
    music.play();
    nextPage();
}
