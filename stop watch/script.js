function setClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = (seconds / 60) * 360; // Removed the +90 offset
  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30;

  document.querySelector(
    ".seconds"
  ).style.transform = `rotate(${secondsDegrees}deg)`;
  document.querySelector(
    ".minutes"
  ).style.transform = `rotate(${minutesDegrees}deg)`;
  document.querySelector(
    ".hour"
  ).style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setClock, 1000);
setClock(); 
