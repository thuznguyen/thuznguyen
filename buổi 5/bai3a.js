function guessNumber() {
    var random_number = Math.floor(Math.random() * 2);

    while (true) {
        var user_guess = parseInt(prompt("Hãy đoán số từ 1 đến 0:"));

        if (user_guess === random_number) {
            alert("Chúc mừng hehe :))) Bn là thiên tài! Bạn đã đoán đúng số "  + random_number );
            break;
        } else {
            alert("Số bạn đoán không đúng. Hãy thử lại!");
        }
    }
}