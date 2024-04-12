const inputAnswer = document.querySelector(".inputAnswer");
const sendButton = document.querySelector(".sendButton");
const hintButton = document.querySelector(".hintButton");
const errorMessage = document.getElementById("error");

sendButton.addEventListener("click", function() {
    if (inputAnswer.value != "" & inputAnswer.value == "да")
        window.location.href = "question_2.html";
    else {
        errorMessage.style.display = "block";
        setTimeout(function() {
            errorMessage.style.display = "none";
        }, 3000);
    }
});

hintButton.addEventListener("click", function() {
    window.alert("Текст подсказки");
});