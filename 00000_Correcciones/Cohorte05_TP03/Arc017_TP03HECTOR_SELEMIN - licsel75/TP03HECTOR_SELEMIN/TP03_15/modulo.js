


export const evaluarNota = (notaAlumno)=>{

      

        let calificacion ="";


       if ((notaAlumno>=0)&&(notaAlumno<=4))
        {
            

            calificacion = "Desaprobado";

        }
        else
            {
                if ((notaAlumno>4)&&(notaAlumno<=7))
                {
                
                calificacion = "Aprobado";

                }
                else
                {
                    if ((notaAlumno>7)&&(notaAlumno<10))
                    {
                        
                        calificacion = "Muy Bueno";

                    }
                    else
                    {
                        if ((notaAlumno===10))
                        {
                           
                            calificacion = "Excelente";

                        }
                        else
                        {
                                
                            calificacion = "Nota equivocada";
                            

                        }

                    }              


                }



                
            }
            return calificacion;













     

    }

     





