
export const unirCohortes = (...cohortes) => {
  return [...cohortes.flat()];
};


export const listarAlumnos = (alumnos) => {
  alumnos.forEach(({ apellido, nombre }) => {
    console.log(`${apellido}, ${nombre}`);
  });
};

