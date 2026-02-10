onload = () =>{
        document.body.classList.remove("container");
};
window.addEventListener("load", () => {
  document.body.classList.remove("container");

  const gift = document.getElementById("valentineGift");
  const popup = document.getElementById("valentinePopup");
  const sadPopup = document.getElementById("sadPopup");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  if (!gift) {
    console.error("valentineGift tidak ditemukan");
    return;
  }

  // 🎁 kado muncul setelah 3 detik
  setTimeout(() => {
    gift.classList.add("show");
  }, 3000);

  // 🎁 klik kado → popup utama + kado hilang
  gift.addEventListener("click", () => {
    if (popup) popup.classList.remove("hidden");
    gift.style.display = "none";
  });

  // 💕 klik IYA → pindah halaman
  if (yesBtn) {
    yesBtn.addEventListener("click", () => {
      window.location.href = "iya.html";
    });
  }

  // 💔 klik TIDAK → popup sedih
  if (noBtn) {
    noBtn.addEventListener("click", () => {
      if (popup) popup.classList.add("hidden");
      if (sadPopup) sadPopup.classList.remove("hidden");
    });
  }
});

// ❌ tombol Tutup popup sedih → kado muncul lagi
function closePopup() {
  const sadPopup = document.getElementById("sadPopup");
  const gift = document.getElementById("valentineGift");

  if (sadPopup) sadPopup.classList.add("hidden");

  if (gift) {
    gift.style.display = "block";

    // reset animasi biar naik lagi
    gift.classList.remove("show");
    void gift.offsetWidth; // trigger reflow
    gift.classList.add("show");
  }
}
