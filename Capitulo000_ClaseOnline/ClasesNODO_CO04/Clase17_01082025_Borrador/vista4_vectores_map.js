const sueldos2025 = [1500, 1600, 8000, 1450, 1700, 2000, 1850];

window.addEventListener("load", () => {
  console.log("this application is loaded");
  let sueldos2026Con15 = sueldos2025.map((element) =>
    (element * 1.15).toFixed(2)
  );

  let sueldos2026Con17 = sueldos2025.map((element) =>
    (element * 1.17).toFixed(2)
  );

  console.log("sueldos 2025", sueldos2025);
  console.log("sueldos 2026", sueldos2026Con15);
  console.log("sueldos 2026 con 17%", sueldos2026Con17);
});
