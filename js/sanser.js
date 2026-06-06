document.querySelector("#oje").addEventListener("click", infoOje);
document.querySelector("#nase").addEventListener("click", infoNase);
document.querySelector("#mund").addEventListener("click", infoMund);

function infoOje() {
  console.log("infoOje");
  document.querySelector(".info-text > h2").textContent = "SE";
  document.querySelector(".info-subheadline").textContent = "STOL PÅ DINE SANSER";
  document.querySelector("#efficiency").innerHTML = "<h3>Trin 1: SE</h3> <p>Ser maden okay ud? Er der mug på? Er emballagen ubeskadiget?</p>";
  document.querySelector("#requirement").innerHTML =
    "<h3>Vidste du?</h3><p>Du kan ofte vurdere, om mad stadig er god, ved at bruge dine sanser i en enkel rækkefølge: se, duft og smag.</p> <p>Se-reglen er første skridt. Kig på maden og vurder, om den ser frisk ud. Misfarvninger, mug eller ændret tekstur er ofte tegn på, at den ikke længere er god.</p>";
}

function infoNase() {
  console.log("infoNase");
  document.querySelector(".info-text > h2").textContent = "DUFT";
  document.querySelector(".info-subheadline").textContent = "STOL PÅ DINE SANSER";
  document.querySelector("#efficiency").innerHTML = "<h3>Trin 2: DUFT</h3> <p>Lugter maden, som den plejer? Ofte vil maden have en tydelig lugt, når den bliver dårlig.</p>";
  document.querySelector("#requirement").innerHTML =
    "<h3>Vidste du?</h3><p>Du kan ofte vurdere, om mad stadig er god, ved at bruge dine sanser i en enkel rækkefølge: se, duft og smag.</p> <p>Duft-reglen kommer derefter. Lugter maden anderledes end normalt, surt eller ubehageligt, er det som regel et klart signal om, at den bør kasseres.</p>";
}

function infoMund() {
  console.log("infoMund");
  document.querySelector(".info-text > h2").textContent = "SMAG";
  document.querySelector(".info-subheadline").textContent = "STOL PÅ DINE SANSER";
  document.querySelector("#efficiency").innerHTML = "<h3>Trin 3: SMAG</h3> <p>Smager maden, som den plejer (ikke surt eller andre smage, som du ikke havde forventet)?</p>";
  document.querySelector("#requirement").innerHTML =
    "<h3>Vidste du?</h3><p>Du kan ofte vurdere, om mad stadig er god, ved at bruge dine sanser i en enkel rækkefølge: se, duft og smag.</p> <p>Smag-reglen er det sidste tjek, hvis både syn og duft virker okay. Smag en lille smule for at bekræfte, at den stadig er frisk – men kun hvis du allerede vurderer den som sikker.</p>";
}

/* btn_oje.addEventListener("mouseover", () => {
  oje.classList.add("highlight");
});

btn_oje.addEventListener("mouseout", () => {
  oje.classList.remove("highlight");
});

btn_nase.addEventListener("mouseover", () => {
  nase.classList.add("highlight");
});

btn_nase.addEventListener("mouseout", () => {
  nase.classList.remove("highlight");
});

btn_mund.addEventListener("mouseover", () => {
  mund.classList.add("highlight");
});

btn_mund.addEventListener("mouseout", () => {
  mund.classList.remove("highlight");
});

let active_part;
oje.style.filter = "brightness(1.4) drop-shadow(1px 1px 3px black)";

function de_light() {
  if (active_part !== "oje") {
    oje.style.filter = "";
  }
  if (active_part !== "nase") {
    nase.style.filter = "";
  }
  if (active_part !== "mund") {
    mund.style.filter = "";
  }
} */

const btn_oje = document.querySelector("#btn_oje");
const btn_nase = document.querySelector("#btn_nase");
const btn_mund = document.querySelector("#btn_mund");

const oje = document.querySelector("#oje");
const nase = document.querySelector("#nase");
const mund = document.querySelector("#mund");

// OJE
btn_oje.addEventListener("mouseover", () => oje.classList.add("highlight"));
btn_oje.addEventListener("mouseout", () => oje.classList.remove("highlight"));

// NASE
btn_nase.addEventListener("mouseover", () => nase.classList.add("highlight"));
btn_nase.addEventListener("mouseout", () => nase.classList.remove("highlight"));

// MUND
btn_mund.addEventListener("mouseover", () => mund.classList.add("highlight"));
btn_mund.addEventListener("mouseout", () => mund.classList.remove("highlight"));
