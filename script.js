document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Запобігаємо стандартній відправці форми

            // Тут можна додати код для відправки даних форми на сервер

            // Показуємо повідомлення
            alert("Дякую за фідбек!");

            // Очищаємо поля форми
            form.reset();
        });
    }
});
