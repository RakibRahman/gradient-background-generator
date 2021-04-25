const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const btn1 = document.querySelector("#btn1");
const colorDirection = document.querySelector("#direction");
const output = document.querySelector("#output");

const linearGradient = () => {
  const dirValue = colorDirection.options[colorDirection.selectedIndex].value; //get value from select
  document.body.style.background = `linear-gradient(${dirValue}, ${color1.value}, ${color2.value}`;
  output.textContent = `background: linear-gradient(${dirValue}, ${color1.value}, ${color2.value});`;
};

btn1.addEventListener("click", linearGradient);

output.addEventListener("click", () => {
  let copyValue = output.innerText;
  let elem = document.createElement("textarea");
  document.body.appendChild(elem);
  elem.value = copyValue;
  elem.select();
  elem.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.body.removeChild(elem);
  alert("Copied the text: " + elem.value);
});
