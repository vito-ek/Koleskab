document.querySelector("#hvidløg").addEventListener("click", infoHead);
document.querySelector("#ingefær").addEventListener("click", infoIngefær);
document.querySelector("#agurk").addEventListener("click", infoAgurk);
document.querySelector("#tomat").addEventListener("click", infoTomat);
document.querySelector("#kartoffel").addEventListener("click", infoKartoffel);
document.querySelector("#gulerod").addEventListener("click", infoGulerod);

function infoHead() {
  console.log("infoHead");
  document.querySelector(".info-text > h2").textContent = "Hvidløg";
  document.querySelector(".info-subheadline").textContent = "Sådan opbevarer du hvidløg korrekt, så det holder længere";
  document.querySelector("#efficiency").innerHTML =
    "<p>Hvidløg opbevares bedst et mørkt sted ved stuetemperatur. På den måde holder det sig friskt i længere tid og mindsker samtidig risikoen for, at det begynder at spire.</p> <p>Under de rette forhold kan det holde sig i op til seks måneder.</p>";
  document.querySelector("#requirement").innerHTML = "<p>Når hvidløg opbevares i køleskabet, kan det blive gummiagtigt, miste noget af sin aroma og lettere begynde at spire.</p>";
}

function infoIngefær() {
  console.log("infoIngefær");
  document.querySelector(".info-text > h2").textContent = "Ingefær";
  document.querySelector(".info-subheadline").textContent = "Sådan opbevarer du ingefær korrekt, så det holder længere";
  document.querySelector("#efficiency").innerHTML =
    "<p>Ingefær holder sig bedst ved stuetemperatur, gerne i en lufttæt beholder, hvor den er beskyttet mod fugt.</p> <p>Opbevarer du den korrekt, kan den holde sig frisk i omkring 2–3 uger og bevare både smag og konsistens.</p>";
  document.querySelector("#requirement").innerHTML = "<p>Hvis ingefær derimod lægges i køleskabet, har den en tendens til at blive svampet i konsistensen, miste noget af sin karakteristiske aroma og hurtigere udvikle mug.</p>";
}

function infoAgurk() {
  console.log("infoAgurk");
  document.querySelector(".info-text > h2").textContent = "Agurk";
  document.querySelector(".info-subheadline").textContent = "Sådan opbevarer du agurk korrekt, så det holder længere";
  document.querySelector("#efficiency").innerHTML =
    "<p>Agurker har det bedst ved stuetemperatur, hvor de kan bevare deres sprødhed og friske konsistens i længere tid.</p> <p>Opbevarer du dem uden for køleskabet, undgår du også, at overfladen tager skade, og de holder sig generelt pænere.</p>";
  document.querySelector("#requirement").innerHTML = "<p>Lægger du derimod agurker i køleskabet, kan kulden skade skrællen og gøre overfladen blød og mindre indbydende.</p> <p>Det betyder, at de hurtigere mister deres sprødhed og friskhed.</p>";
}

function infoTomat() {
  console.log("infoTomat");
  document.querySelector(".info-text > h2").textContent = "Tomat";
  document.querySelector(".info-subheadline").textContent = "Sådan opbevarer du tomat korrekt, så det holder længere";
  document.querySelector("#efficiency").innerHTML =
    "<p>Tomater trives bedst ved stuetemperatur, gerne omkring 18–22°C, hvor de kan ligge i en skål med god ventilation.</p> <p>Her bevarer de både deres saftighed, aroma og naturlige smag, og under de rette forhold kan de holde sig friske i omkring 5–7 dage.</p>";
  document.querySelector("#requirement").innerHTML = "<p>Hvis tomater derimod opbevares i køleskabet, kan kulden ødelægge deres struktur.</p> <p>Det giver en mere melet konsistens, dæmper den naturlige umami-smag og gør aromaen mindre intens.</p>";
}

function infoKartoffel() {
  console.log("infoKartoffel");
  document.querySelector(".info-text > h2").textContent = "Kartoffel";
  document.querySelector(".info-subheadline").textContent = "Sådan opbevarer du kartofler korrekt, så det holder længere";
  document.querySelector("#efficiency").innerHTML =
    "<p>Kartofler har det bedst, når de opbevares mørkt, tørt og ved en temperatur omkring 8–12°C.</p> <p>Under de rette forhold kan de holde sig i op til to måneder og bevarer både smag og konsistens bedst muligt.</p>";
  document.querySelector("#requirement").innerHTML =
    "<p>Hvis kartofler derimod lægges i køleskabet, omdannes noget af stivelsen til sukker.</p> <p>Det kan give en uønsket sød smag, føre til misfarvning under tilberedning og øge risikoen for dannelse af akrylamid, når de steges.</p>";
}

function infoGulerod() {
  console.log("infoGulerod");
  document.querySelector(".info-text > h2").textContent = "Gulerod";
  document.querySelector(".info-subheadline").textContent = "Sådan opbevarer du gulerødder korrekt, så det holder længere";
  document.querySelector("#efficiency").innerHTML = "<p>Gulerødder holder sig bedst ved stuetemperatur, så længe de opbevares væk fra direkte sollys.</p> <p>På den måde bevarer de deres faste og sprøde konsistens i længere tid.</p>";
  document.querySelector("#requirement").innerHTML = "<p>Hvis gulerødder derimod kommer i køleskabet, kan de hurtigt blive slatne og vandfyldte i strukturen og samtidig begynde at forringes hurtigere.</p>";
}
