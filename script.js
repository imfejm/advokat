const tlacitko = document.querySelector("#ham");

tlacitko.addEventListener("click", () => {
  const rozbal = document.querySelector("#menu");
  rozbal.classList.toggle("hidden");
});

//otočení karty služeb - zjednodušená verze
document.querySelectorAll(".sbox").forEach((box) => {
  box.addEventListener("click", () => {
    // pouze přepneme třídu pro otočení
    box.classList.toggle("flip");
  });
});