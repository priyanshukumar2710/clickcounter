let count = 0;
const countElement = document.getElementById('count');

function increment() {
  count++;
  countElement.innerText = count;
}
