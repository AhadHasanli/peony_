"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const titleElement = document.querySelector(".title");
  const buttonsContainer = document.querySelector(".buttons");
  const yesButton = document.querySelector(".btn--yes");
  const noButton = document.querySelector(".btn--no");
  const catImg = document.querySelector(".cat-img");

  const MAX_IMAGES = 5;

  let play = true;
  let noCount = 0;

  yesButton.addEventListener("click", handleYesClick);

  noButton.addEventListener("click", function () {
    if (play) {
      noCount++;
      const imageIndex = Math.min(noCount, MAX_IMAGES);
      changeImage(imageIndex);
      resizeYesButton();
      updateNoButtonText();
      if (noCount === MAX_IMAGES) {
        play = false;
      }
    }
  });

  function handleYesClick() {
    titleElement.innerHTML = "Yayyy!! :3";
    buttonsContainer.classList.add("hidden");
    changeImage("yes");
  }

  function resizeYesButton() {
    const computedStyle = window.getComputedStyle(yesButton);
    const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
    const newFontSize = fontSize * 1.6;

    yesButton.style.fontSize = `${newFontSize}px`;
  }

  function generateMessage(noCount) {
    const messages = [
      "No",
      "Are you sure?",
      "Pookie please",
      "Don't do this to me :(",
      "You're breaking my heart",
      "U can't imagine how much I love uuu",
    ];

    const messageIndex = Math.min(noCount, messages.length - 1);
    return messages[messageIndex];
  }

  function changeImage(image) {
    if (typeof image === "string") {
      if (image === "yes") {
        catImg.src = `img/cat-yes.jpg`;
      } else {
        console.warn("Invalid image string provided.");
      }
    } else if (typeof image === "number" && image >= 0 && image < MAX_IMAGES) {
      catImg.src = `img/cat-${image}.jpg`;
    } else {
      console.warn("Invalid image index or string provided.");
    }
  }

  function updateNoButtonText() {
    noButton.innerHTML = generateMessage(noCount);
  }
});