const swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 10,
  loop: true,
  effect: 'slide',
  speed: 800,
  preloadImages: true,
});

const audio = document.getElementById('myAudio');
const playButton = document.getElementById('play-music');
const stopButton = document.getElementById('stop-music');

let isPlaying = false;
playButton.addEventListener('click', () => {
  audio.play();
  isPlaying = true;
  playButton.disabled = true;
  stopButton.disabled = false;
});

stopButton.addEventListener('click', () => {
  audio.pause();
  isPlaying = false;
  playButton.disabled = false;
  stopButton.disabled = true;
});

stopButton.disabled = true;


swiper.on('slideChange', function () {
  const currentSlide = this.slides[this.activeIndex];
  const img = currentSlide.querySelector('img');
  img.onload = function() {
    const placeholder = currentSlide.querySelector('.image-placeholder');
    if (placeholder) placeholder.style.display = 'none';
  };
  img.onerror = function() {
    console.error('Gagal memuat gambar:', img.src);
    const placeholder = currentSlide.querySelector('.image-placeholder');
    if (placeholder) placeholder.style.display = 'block';
    else {
      const errorDiv = document.createElement('div');
      errorDiv.className = 'image-error';
      errorDiv.textContent = 'Gagal memuat gambar';
      currentSlide.appendChild(errorDiv);
    }
  };
});

