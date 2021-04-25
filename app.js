const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const colorDirection = document.querySelector("#direction");
const output = document.querySelector("#output");

const linearGradient = () => {
  const dirValue = colorDirection.options[colorDirection.selectedIndex].value; //get value from select
  document.body.style.background = `linear-gradient(${dirValue}, ${color1.value}, ${color2.value}`;
  output.textContent = `background: linear-gradient(${dirValue}, ${color1.value}, ${color2.value});`;
};

btn1.addEventListener("click", linearGradient);

const arrays = [
  "linear-gradient(to right, rgb(198, 255, 221), rgb(251, 215, 134), rgb(247, 121, 125))",
  "linear-gradient(to right, rgb(18, 194, 233), rgb(196, 113, 237), rgb(246, 79, 89))",
  "linear-gradient(to right, rgb(241, 39, 17), rgb(245, 175, 25))",
  "linear-gradient(to right, rgb(0, 159, 255), rgb(236, 47, 75))",
  "linear-gradient(to right, rgb(101, 78, 163), rgb(234, 175, 200))",
  "linear-gradient(to right, rgb(168, 255, 120), rgb(120, 255, 214))",
  "linear-gradient(to right, rgb(255, 239, 186), rgb(255, 255, 255))",
  "linear-gradient(to right, rgb(30, 150, 0), rgb(255, 242, 0), rgb(255, 0, 0))",
  "linear-gradient(to right, rgb(168, 192, 255), rgb(63, 43, 150))",
  "linear-gradient(to right, rgb(64, 224, 208), rgb(255, 140, 0), rgb(255, 0, 128))",
  "linear-gradient(to right, rgb(0, 242, 96), rgb(5, 117, 230))",
  "linear-gradient(to right, rgb(178, 254, 250), rgb(14, 210, 247))",
  "linear-gradient(to right, rgb(239, 59, 54), rgb(255, 255, 255))",
  "linear-gradient(to right, rgb(5, 117, 230), rgb(2, 27, 121))",
  "linear-gradient(to right, rgb(247, 151, 30), rgb(255, 210, 0))",
];

btn2.addEventListener("click", () => {
  arrays.sort((a, b) => 0.5 - Math.random());
  arrays.forEach((item) => {
    output.innerText = `${item};`;
    document.body.style.background = item;
  });
});

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
