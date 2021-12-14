const container = document.querySelector(".container");
const piglatinBtn = document.querySelector("#piglatinBtn");
const wordInput = document.querySelector("#word");

function getPL(word) {
    fetch(`http://localhost:3000/piglatin?word=${word}`)
        .then(res => res.text())
        .then(text => {
            render(text, container);
        })
}

function render(text, container) {
    container.innerHTML = "";
    container.insertAdjacentText("afterbegin", text)
}

piglatinBtn.addEventListener("click", (e) => {
    getPL(wordInput.value);
})