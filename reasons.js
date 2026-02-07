const clickBtn = document.getElementById("clickBtn");
const container = document.getElementById("container");
const nextBtn = document.getElementById("nextBtn");

const reasons = [
    "you make me feel safe and seen",
    "you have the most gentle way of treating me",
    "you stand on your morals and principles",
    "you're an awesome friend to everyone around you",
    "you have an extremely respectable work ethic",
    "i could talk to you for hours about anything",
    "you read me like no one else",
    "you seek to understand - you're a curious soul like me",
    "everything about your style is art (fits be hard as fuck ngl)",
    "you make the mundane moments shine (i could do anything with you)",
    "bro can make me laugh the hardest out of anyone on earth",
    "everyday with you just gets better and better"
];

const title = document.getElementById("title");
const maxX = window.innerWidth - clickBtn.offsetWidth;
const maxY = window.innerHeight - clickBtn.offsetHeight;

let reasonIndex = 0;
let buttonX = Math.random() * maxX;
let buttonY = Math.random() * maxY;

function getTitleBottom() {
    const rect = title.getBoundingClientRect();
    return rect.bottom + 10; // small buffer
}

function moveButton() {

    const titleBottom = getTitleBottom();

    buttonX = Math.random() * maxX;
    buttonY = titleBottom + Math.random() * (maxY - titleBottom);

    clickBtn.style.left = `${buttonX}px`;
    clickBtn.style.top = `${buttonY}px`;
}

function showReason() {
    if (reasonIndex >= reasons.length) {
        finishReasons();
        return;
    }

    const reason = document.createElement("div");
    reason.className = "reason";
    reason.textContent = reasons[reasonIndex];

    reason.style.left = `${buttonX}px`;
    reason.style.top = `${buttonY}px`;

    container.appendChild(reason);
    reasonIndex++;

    if (reasonIndex === reasons.length) finishReasons();
}

function finishReasons() {
    clickBtn.classList.add("hidden");
    nextBtn.classList.remove("hidden");
}

clickBtn.addEventListener("click", () => {
    showReason();
    moveButton();
});

nextBtn.addEventListener("click", () => {
    window.location.href = "valentine.html";
});

// initial position
moveButton();