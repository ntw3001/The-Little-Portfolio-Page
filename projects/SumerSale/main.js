const saleEndYearBC = 1800;
const saleEndMonth = 0;
const saleEndDay = 1;

function updateTimeSinceSale() {
  const now = new Date();
  const currentYearAD = now.getFullYear();
  const currentMonth = now.getMonth();
  const currentDay = now.getDate();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentSecond = now.getSeconds();

  const totalYears = currentYearAD + saleEndYearBC;

  let months = currentMonth - saleEndMonth;
  let days = currentDay - saleEndDay;
  let hours = currentHour;
  let minutes = currentMinute;
  let seconds = currentSecond;

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    let prevMonthDays = new Date(currentYearAD, currentMonth, 0).getDate();
    days += prevMonthDays;
    months--;
  }
  if (months < 0) {
    months += 12;
  }

  document.getElementById('offer').innerHTML =
    `Too bad! You missed our Sumertime event by ${totalYears}y ${months}mo ${days}d ${hours}h ${minutes}m ${seconds}s!`;
}

setInterval(updateTimeSinceSale, 1000);
updateTimeSinceSale();
