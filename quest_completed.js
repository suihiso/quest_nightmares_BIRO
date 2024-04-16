var countScore = sessionStorage.getItem('countScore');

document.getElementById("yourScore").innerHTML = "Ваш счет: " + countScore;


const buttonAnswers = document.querySelector(".sendButton");
buttonAnswers.addEventListener("click", function() {
    window.location.href = "right_answers.html";
})