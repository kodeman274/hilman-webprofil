// Author: hilman hidayat
// Date: 25/06/2022
const hamburger = document.querySelector('.hamburger-btn');
const pencet = document.querySelector('.x');
const iconx = document.querySelector('.ham');
pencet.addEventListener('click', function () {
  iconx.style.display = 'none';
  pencet.style.display = 'none';
});

const animate = document.querySelector('.animate');
const huruf = [...animate.textContent].map((h) => `<span>${h}</span>`).join('');

animate.innerHTML = huruf;

const animasi = document.querySelector('.animasi');
const huruf1 = [...animasi.textContent]
  .map((h) => `<span>${h}</span>`)
  .join('');

animasi.innerHTML = huruf1;

document.addEventListener('DOMContentLoaded', function () {
  const showMoreBtn = document.getElementById('showMoreBtn');
  const hiddenRow = document.querySelector('.row.hidden');

  showMoreBtn.addEventListener('click', function () {
    hiddenRow.classList.toggle('hidden');
    showMoreBtn.textContent = hiddenRow.classList.contains('hidden')
      ? 'Tampilkan Semua'
      : 'Tampilkan Sedikit';
  });
});

// Ambil elemen navbar
const navbar = document.getElementById('navbar');

// Tambahkan event listener untuk mendeteksi scroll
window.addEventListener('scroll', () => {
  // Tentukan aturan kapan navbar harus menjadi blur
  if (window.scrollY > 50) {
    navbar.classList.add('burem');
  } else {
    navbar.classList.remove('burem');
  }
});
