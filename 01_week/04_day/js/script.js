document.addEventListener("DOMContentLoaded", () => {
  const favButtons = document.querySelectorAll(".fav-btn");

  favButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("clicked");
      if (btn.classList.contains("clicked")) {
        btn.textContent = "✓ Eklendi!";
      } else {
        btn.textContent = "★ Favorilere Ekle";
      }
    });
  });
});
