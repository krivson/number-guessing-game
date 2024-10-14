document.addEventListener("DOMContentLoaded", function () {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);

  let number = document.getElementById("number");
  let guess = document.getElementById("guess");
  let message = document.getElementById("message");

  guess.addEventListener("click", function () {
    if (number.textContent == randomNumber) {
      message.innerHTML = "You guessed it!";
      message.className = "text-green-500 visible";
    } else {
      message.innerHTML = "Try again!";
      message.className = "text-green-500 visible";
    }
  });
});
