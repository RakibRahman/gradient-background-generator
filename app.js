const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const btn1 = document.querySelector("#btn1");

const linearGradient = () => {
  document.body.style.background = `linear-gradient(to bottom, ${color1.value}, ${color2.value}`;
};
btn1.onclick = linearGradient;
