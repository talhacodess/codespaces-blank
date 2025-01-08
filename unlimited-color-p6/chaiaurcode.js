const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 15)];
    }
    return color;
  };
  
  let intervalId;
  const startChangingColor = () => {
    if (!intervalId) {
      intervalId = setInterval(changeBgColor, 1000);
    }
  };
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
  const stopChangingColor = () => {
    clearInterval(intervalId);
  };
  let start = document.getElementById('start');
  let stop = document.getElementById('stop');
  
  start.addEventListener('click', startChangingColor);
  stop.addEventListener('click', stopChangingColor);
  