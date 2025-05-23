// AppState.js
// Clase estática que centraliza el estado de la aplicación y su persistencia usando localStorage.

export class AppState {
  // Propiedades estáticas que representan el estado
  static nombre = "";
  static email = "";

  // Método que restaura el estado desde localStorage, si hay datos guardados
  static restaurar() {
    const datos = localStorage.getItem("estadoApp");
    if (datos) {
      const obj = JSON.parse(datos);
      AppState.nombre = obj.nombre || "";
      AppState.email = obj.email || "";
      console.log("✅ Estado restaurado:", AppState);
    }
  }

  // Método que guarda el estado actual en localStorage
  static guardar() {
    const datos = {
      nombre: AppState.nombre,
      email: AppState.email
    };
    localStorage.setItem("estadoApp", JSON.stringify(datos));
    console.log("💾 Estado guardado:", datos);
  }

  // Método auxiliar para mostrar el estado por consola
  static mostrar() {
    console.log("📦 Estado actual:", {
      nombre: AppState.nombre,
      email: AppState.email
    });
  }
}
