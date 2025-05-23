// AppState.js
// Este archivo representa un 'servicio' en Angular. Es un singleton que mantiene el estado compartido entre componentes.

export class AppState {
  // Propiedades estáticas que simulan el estado de la aplicación
  static nombre = "";
  static email = "";

  // Restaura el estado desde localStorage, si existe
  static restaurar() {
    const data = localStorage.getItem("estadoApp");
    if (data) {
      const estado = JSON.parse(data);
      AppState.nombre = estado.nombre || "";
      AppState.email = estado.email || "";
      console.log("✅ Estado restaurado:", AppState);
    }
  }

  // Guarda el estado actual en localStorage
  static guardar() {
    const datos = {
      nombre: AppState.nombre,
      email: AppState.email
    };
    localStorage.setItem("estadoApp", JSON.stringify(datos));
    console.log("💾 Estado guardado:", datos);
  }

  // Muestra el estado por consola
  static mostrar() {
    console.log("📦 Estado actual:", {
      nombre: AppState.nombre,
      email: AppState.email
    });
  }
}
