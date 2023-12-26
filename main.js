const span = document.querySelector("span");

const myInterval = setInterval(() => {
  const timeout = new Date().toString();
  const getTime = timeout.substring(15, 28);
  span.innerHTML = getTime;
}, 1000);
