const headers = document.querySelectorAll(".hed");

function animateLetter(index, element, isIncreasing) {
  const text = element.textContent;
  const letters = text.split("");
  let fontSize = isIncreasing ? 30 : 30;

  const newText = letters
    .map((char, i) => {
      if (i === index) {
        return `<span style="font-size:${fontSize}px; color:red">${char}</span>`;
      }
      return char;
    })
    .join("");

  element.innerHTML = newText;

  if (index === text.length - 1 && isIncreasing) {
    isIncreasing = false;
  } else if (index === 0 && !isIncreasing) {
    isIncreasing = true;
  } else {
    index += isIncreasing ? 1 : -1;
  }

  setTimeout(() => {
    animateLetter(index, element, isIncreasing);
  }, 500);
}

headers.forEach((element) => {
  animateLetter(0, element, true);
});

// -------------------------------------------------

setInterval(() => {
  const time = document.querySelector(".time");

  const date = new Date();

  time.innerText =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}, 1000);
