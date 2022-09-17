const input = document.querySelector("input");
const button = document.querySelector("button");
const p = document.querySelector("p");
const textDisplayer = () => {
  const value = input.value;
  const vowels = value
    .split("")
    .filter(
      (vowel) =>
        vowel.toLowerCase() === "a" ||
        vowel.toLowerCase() === "e" ||
        vowel.toLowerCase() === "i" ||
        vowel.toLowerCase() === "o" ||
        vowel.toLowerCase() === "u"
    ).length;
  p.innerHTML = `There are ${vowels} vowels in <span>${value}</span>`;
  input.value = "";
};
button.addEventListener("click", textDisplayer);
input.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    button.click();
  }
});
