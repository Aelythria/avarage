function calculate() {
  const input = document.getElementById("inputNumbers").value;
  const resultEl = document.getElementById("result");
  const errorEl = document.getElementById("error");

  resultEl.innerHTML = "";
  errorEl.innerHTML = "";

  if (!input || input.trim() === "") {
    errorEl.innerText = "Empty Input";
    return;
  }

  // cek ada huruf
  if (/[a-zA-Z]/.test(input)) {
    errorEl.innerText = "Only Numbers, No Letters";
    return;
  }

  const numbers = input
    .trim()
    .split(/[\s,]+/)
    .map(Number)
    .filter(n => !isNaN(n));

  if (numbers.length === 0) {
    errorEl.innerText = "Invalid Data";
    return;
  }

  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  const formula = `(${numbers.join(" + ")}) / ${numbers.length}`;
  const average = total / numbers.length;

  resultEl.innerHTML = `
    <div>Formula: ${formula}</div>
    <div>Result: ${average}</div> 
  `;
}

// ================================
// PARTIKEL REAL-TIME SAAT MENGETIK
// ================================
const inputField = document.getElementById("inputNumbers");
const box = document.querySelector(".box");

inputField.addEventListener("input", function(e) {
  const rect = box.getBoundingClientRect();

  // buat 3 partikel tiap input
  for (let i = 0; i < 3; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // random posisi di sekitar kursor input
    particle.style.left = `${Math.random() * rect.width}px`;
    particle.style.top = `${Math.random() * rect.height}px`;
    particle.style.background = `rgba(255,255,255,${Math.random() * 0.8 + 0.2})`;
    particle.style.width = `${Math.random() * 6 + 4}px`;
    particle.style.height = particle.style.width;

    box.appendChild(particle);

    // hapus element setelah animasi selesai (1s)
    setTimeout(() => {
      particle.remove();
    }, 1000);
  }
});
