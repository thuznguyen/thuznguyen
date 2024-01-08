function guessNumber() {
    var random_number = Math.floor(Math.random() * 10) + 1;

    while (true) {
        var x = parseInt(prompt("Hãy đoán số từ 1 đến 10:"));

        if (x === random_number) {
            alert("Chúc mừng hehe :))) Bn là thiên tài! Bạn đã đoán đúng số "  + random_number );
            break;
        } else {
            alert("Số bạn đoán không đúng. Hãy thử lại!");
        }
    }
}