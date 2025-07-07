//otočení karty služeb
document.querySelectorAll(".sbox").forEach((box) => {
  const inner = box.querySelector(".sbox-inner");

  box.addEventListener("click", () => {
    // aktivní (viditelný) obsah před otočením
    const visibleSide = box.classList.contains("flip")
      ? inner.querySelector(".sbox-back")
      : inner.querySelector(".sbox-front");

    const hiddenSide = box.classList.contains("flip")
      ? inner.querySelector(".sbox-front")
      : inner.querySelector(".sbox-back");

    // výška před přepnutím
    const currentHeight = visibleSide.offsetHeight;

    // nastavíme výšku natvrdo POUZE pro tuto kartu
    box.style.height = currentHeight + "px";

    // přepneme třídu (otočení)
    box.classList.toggle("flip");

    // až se DOM aktualizuje (otočení), zjistíme novou výšku
    requestAnimationFrame(() => {
      const newHeight = hiddenSide.offsetHeight;
      
      // přidáme transition třídu pouze pro tuto kartu
      box.classList.add("height-transition");
      box.style.height = newHeight + "px";
      
      // po skončení animace výšku a třídu smažeme
      box.addEventListener(
        "transitionend",
        (e) => {
          // ujisti se, že event patří k této kartě a je to height transition
          if (e.target === box && e.propertyName === "height") {
            box.style.height = "";
            box.classList.remove("height-transition");
          }
        },
        { once: true }
      );
    });
  });
});



//otočení karty služeb - zjednodušená verze
document.querySelectorAll(".sbox").forEach((box) => {
  box.addEventListener("click", () => {
    // pouze přepneme třídu pro otočení
    box.classList.toggle("flip");
  });
});