const heart = document.getElementById("Heart");
const promptText = document.getElementById("prompt");
const question = document.getElementById("question");
const result = document.getElementById("result");
const title = document.getElementById("title");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Click heart
heart.addEventListener("click", () => {
  heart.classList.add("dissolve");

  setTimeout(() => {
    heart.style.display = "none";
    promptText.style.display = "none";
    title.style.display = "none";
    question.style.display = "block";
  }, 600);
});

// YES


// NO
noBtn.addEventListener("click", () => {
  question.style.display = "none";
  result.innerHTML = `
    <h1>😢</h1>
    <p>That made me sad...</p>
  `;
});
const hoorayText = document.getElementById("hoorayText");
const fireworks = document.getElementById("fireworks");
const yaySound = document.getElementById("yaySound");

yesBtn.addEventListener("click", () => {
  question.style.display = "none";

  hoorayText.style.display = "block";
  fireworks.style.display = "block";
  
  yaySound.currentTime = 0;
  yaySound.play();
});



