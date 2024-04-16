const aButton = document.getElementById("aButton");
const bButton = document.getElementById("bButton");
const cButton = document.getElementById("cButton");
const dButton = document.getElementById("dButton");

var countScore = sessionStorage.getItem('countScore');

aButton.addEventListener("click", function() {
    goNextPage();
});

bButton.addEventListener("click", function() {
    countScore++;
    goNextPage();
});

cButton.addEventListener("click", function() {
    goNextPage();
});

dButton.addEventListener("click", function() {
    goNextPage();
});

function goNextPage() {
    sessionStorage.setItem('countScore', countScore);
    window.location.href = "question_11.html";
}
