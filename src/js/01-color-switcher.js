const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let onClick = null;
let onDisabled = null;

buttonStart.addEventListener('click', () => {
  onClick = setInterval(() => {
    onChangeColorBody()
  }, 1000);
});
function onChangeColorBody() {
    let colorFunction = getRandomHexColor();
     document.body.style.backgroundColor = colorFunction;
}
buttonStart.addEventListener('click', () => {
  onDisabled = setTimeout(() => {
    buttonStart.setAttribute("disabled", "disabled")
  }, 1000);
});
buttonStop.addEventListener('click', () => {
    clearInterval(onClick);
     buttonStart.removeAttribute("disabled", "disabled")
  console.log("Цвет не меняется и кнопка снова включается");  
});

