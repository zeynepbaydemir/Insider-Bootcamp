let zaman;
let interval;

const sureInput = document.getElementById("sure");
const gerisayim = document.getElementById("gerisayim");
const baslatBtn = document.getElementById("baslatBtn");
const sifirlaBtn = document.getElementById("sifirlaBtn");

baslatBtn.addEventListener("click", () => {
  if (interval) clearInterval(interval);

  zaman = parseInt(sureInput.value);

  if (isNaN(zaman) || zaman <= 0) {
    gerisayim.textContent = "Lütfen geçerli bir süre girin!";
    return;
  }

  gerisayim.textContent = `${zaman} saniye kaldı`;

  interval = setInterval(() => {
    zaman--;
    if (zaman > 0) {
      gerisayim.textContent = `${zaman} saniye kaldı`;
    } else {
      clearInterval(interval);
      gerisayim.textContent = "Süre doldu! ⏰";
    }
  }, 1000);
});

sifirlaBtn.addEventListener("click", () => {
  clearInterval(interval);
  sureInput.value = "";
  gerisayim.textContent = "Hazır";
});
