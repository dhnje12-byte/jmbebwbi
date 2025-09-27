const correctPassword = "bebi";

const statements = [
  "ILOVEU",
  "MISSU",
  "BABYYYY",
  "BEBI",
  "IMISSYOUU",
  "KISS NA",
  "HEHWHEW",
  "AAAAAAAA",
  "MWAAAAA",
  "NGEKK"
];

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  if (input === correctPassword) {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("catScreen").style.display = "block";
  } else {
    alert("Wrong password, try again!");
  }
}

const catImage = document.getElementById("catImage");

catImage.addEventListener("click", () => {
  // Add pop effect
  catImage.classList.add("pop");
  setTimeout(() => catImage.classList.remove("pop"), 300);

  // Pick random statement
  const randomStatement = statements[Math.floor(Math.random() * statements.length)];

  // Create element
  const statementEl = document.createElement("div");
  statementEl.className = "statement";
  statementEl.innerText = randomStatement;

  // Random position
  const x = Math.random() * (window.innerWidth - 150);
  const y = Math.random() * (window.innerHeight - 50);
  statementEl.style.left = `${x}px`;
  statementEl.style.top = `${y}px`;

  // Add to body
  document.body.appendChild(statementEl);

  // Remove after animation (4s)
  setTimeout(() => {
    statementEl.remove();
  }, 4000);
});

