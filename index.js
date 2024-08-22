const correctAnswers = {
    q1: 'Angular JS',
    q2: '?',
    q3: 'Rasmus Lerdorf',
    q4: 'concat',
    q5: '<>'
};

function submitQuiz() {
    let score = 0;
    const form = document.getElementById('quizForm');

    Object.keys(correctAnswers).forEach((question) => {
        const selectedAnswer = form.querySelector(`input[name=${question}]:checked`);
        if (selectedAnswer && selectedAnswer.value === correctAnswers[question]) {
            score++;
        }
    });

    const resultDiv = document.getElementById('result');
    const scorePara = document.getElementById('score');

    scorePara.textContent = `You got ${score} out of 5 correct.`;
    resultDiv.classList.remove('hidden');
}
