const countdownDate = new Date('March 23, 2025 00:00:00').getTime();

const time = setInterval(() => {
  const now = new Date().getTime();
  // console.log(now);
  const distance = countdownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  let offer =document.getElementById('offer');
  offer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(time);
    offer.innerHTML = 'Our Sumer event is over';
  }
}, 1000);
