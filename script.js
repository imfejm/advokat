const tlacitko = document.querySelector("#ham");

tlacitko.addEventListener("click", () => {
  const rozbal = document.querySelector("#menu");
  rozbal.classList.toggle("hidden");
});




//otočení karty služeb
 

  document.querySelectorAll(".sbox").forEach((box) => {
    const inner = box.querySelector(".sbox-inner");

    box.addEventListener("click", () => {
      const isFlipped = box.classList.contains("flip");

      // reset výšky
      box.style.height = box.offsetHeight + "px";

      // přepnutí třídy
      box.classList.toggle("flip");

      // po přepnutí spočítáme novou výšku
      requestAnimationFrame(() => {
        const newHeight = inner.scrollHeight;
        box.style.height = newHeight + "px";
      });
    });
  });