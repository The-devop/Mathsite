let correctAnswer = null;

async function loadQuestion() {
    const res = await fetch("/question");
    const data = await res.json();

    document.getElementById("question").innerText = data.question;
    document.getElementById("result").innerText = "";
    const input = document.getElementById("input");
    input.value = "";
    input.focus();

    correctAnswer = data.answer;
}

function check() {
    const input = document.getElementById("input");
    const user = Number(input.value);
    const result = document.getElementById("result");

    if (user === 67) {
        window.location.href = "/67-easter-egg-1";
        return;
    }

    if (user === correctAnswer) {
        result.innerText = "✅ Correct. Brain upgraded.";
        result.style.color = "#22c55e";
    } else {
        result.innerText = "❌ Wrong. Try again.";
        result.style.color = "#ef4444";
    }

    setTimeout(loadQuestion, 1200);
}

document.getElementById("input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") check();
});

loadQuestion();
