const imgBall = document.querySelector("img");
const qestionInput = document.querySelector("input");
const answerParagraf = document.querySelector(".answer");
const errorParagraf = document.querySelector(".error");

const answersArr = [
  "Tak!",
  "Nie.",
  "Możliwe",
  "Nie jest pewne...",
  "Nie chcesz znać odpowiedzi",
  "To zależy teraz nie od Ciebie",
  " Masz 50% że tak",
  "Nigdy się nie dowiesz;p",
];

const ballAnimation = () => {
    imgBall.classList.add("shake-animation");
    setTimeout(checkInput,1600)
};
const checkInput = () => {
  if (qestionInput.value !== " " && qestionInput.value.slice(-1) === "?") {
    answerrFunction();
    errorParagraf.textContent = "";
    imgBall.classList.remove("shake-animation");
  } else if (
    qestionInput.value !== "" &&
    qestionInput.value.slice(-1) !== "?"
  ) {
    errorParagraf.textContent =
      "Pytanie zostało zadane bez znaku '?'. dodaj znak!";
    answerParagraf.textContent = "";
    imgBall.classList.remove("shake-animation");
  } else if (qestionInput.value === "") {
    errorParagraf.textContent = "Zadaj pytanie";
    answerParagraf.textContent = "";
    imgBall.classList.remove("shake-animation");
  }
};

const answerrFunction = () => {
  const number = Math.floor(Math.random() * 8);
  answerParagraf.innerHTML = `<span> Odpowieź:</span> ${answersArr[number]}`;
};

imgBall.addEventListener("click", ballAnimation);
