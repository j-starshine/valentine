const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const oopsText = document.getElementById("oopsText");

let yesScale = 1;

noBtn.addEventListener("click", () => {
    oopsText.classList.remove("hidden");

    yesScale += 0.2;
    yesBtn.style.transform = `scale(${yesScale})`;
});

yesBtn.addEventListener("click", () => {
    oopsText.classList.add("hidden");
    alert("now gimme kith 💋");
});