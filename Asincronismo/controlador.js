

  const fnMostrarFecha = ()=>{

    const ahora = new Date();

    // ── FECHA Y HORA COMPLETA ──────────────────────────────
    console.log("1 - Fecha y hora completa | toLocaleString()");
    console.log(ahora.toLocaleString());                    // 29/5/2026, 14:35:07

    console.log("2 - Solo fecha | toLocaleDateString()");
    console.log(ahora.toLocaleDateString());                // 29/5/2026

    console.log("3 - Solo hora | toLocaleTimeString()");
    console.log(ahora.toLocaleTimeString());                // 14:35:07

    console.log("4 - Formato ISO UTC | toISOString()");
    console.log(ahora.toISOString());                       // 2026-05-29T17:35:07.423Z

    console.log("5 - Texto completo | toString()");
    console.log(ahora.toString());                          // Fri May 29 2026 14:35:07 GMT-0300

    // ── PARTES DE LA FECHA ────────────────────────────────
    console.log("6 - Año | getFullYear()");
    console.log(ahora.getFullYear());                       // 2026

    console.log("7 - Mes (enero=0, diciembre=11) | getMonth()");
    console.log(ahora.getMonth());                          // 4

    console.log("8 - Mes real sumando 1 | getMonth() + 1");
    console.log(ahora.getMonth() + 1);                      // 5

    console.log("9 - Día del mes | getDate()");
    console.log(ahora.getDate());                           // 29

    console.log("10 - Día de la semana (domingo=0) | getDay()");
    console.log(ahora.getDay());                            // 5

    // ── PARTES DE LA HORA ─────────────────────────────────
    console.log("11 - Horas | getHours()");
    console.log(ahora.getHours());                          // 14

    console.log("12 - Minutos | getMinutes()");
    console.log(ahora.getMinutes());                        // 35

    console.log("13 - Segundos | getSeconds()");
    console.log(ahora.getSeconds());                        // 7

    console.log("14 - Milisegundos | getMilliseconds()");
    console.log(ahora.getMilliseconds());                   // 423

    // ── TIMESTAMP ─────────────────────────────────────────
    console.log("15 - Unix timestamp en ms | getTime()");
    console.log(ahora.getTime());                           // 1748530507423

    console.log("16 - Timestamp sin instanciar objeto | Date.now()");
    console.log(Date.now());                                // 1748530507423

    // ── FORMATO PERSONALIZADO ─────────────────────────────
    console.log("17 - Fecha larga en español | toLocaleString('es-AR', opciones)");
    console.log(ahora.toLocaleString("es-AR", {
      weekday: "long",
      year:    "numeric",
      month:   "long",
      day:     "numeric"
    }));                                                    // viernes, 29 de mayo de 2026

    console.log("18 - Hora 24hs con opciones | toLocaleTimeString('es-AR', opciones)");
    console.log(ahora.toLocaleTimeString("es-AR", {
      hour:   "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    }));                                                    // 14:35:07

    // ── ARMADO MANUAL ─────────────────────────────────────
    console.log("19 - Fecha armada manualmente | getDate() getMonth() getFullYear()");
    const dia  = ahora.getDate();
    const mes  = ahora.getMonth() + 1;
    const anio = ahora.getFullYear();
    console.log(`${dia}/${mes}/${anio}`);                   // 29/5/2026

    console.log("20 - Hora armada manualmente con padStart | getHours() getMinutes() getSeconds()");
    const hs  = ahora.getHours();
    const min = String(ahora.getMinutes()).padStart(2, "0");
    const seg = String(ahora.getSeconds()).padStart(2, "0");
    console.log(`${hs}:${min}:${seg}`);                     // 14:35:07

  };


  const fnProceso1 = ()=>{

    return setInterval(()=>{

      console.log("este mensaje saldrá repetido cada 2 segundos");

    },2000);
  };

  const fnProceso2 = ()=>{

    return setInterval(()=>{

      console.log("este mensaje saldrá repetido cada 1.5 segundos");

    },1500);

  };

  const fnLanzarReloj = (idReloj)=>{

    return setInterval(()=>{

      const ahora = new Date();

      console.log(ahora);

      idReloj.textContent = ahora.toLocaleString();


  },1000);   
};


window.onload = ()=>{

  const idFechaYHora = document.querySelector("#idFechaYHora");
  const idBtnSetInterval = document.querySelector("#idBtnSetInterval");

  fnLanzarReloj(idFechaYHora);

  fnMostrarFecha();

  idBtnSetInterval.onclick = ()=>{
    
    clearInterval(proceso1);
    clearInterval(proceso2);

  };
};