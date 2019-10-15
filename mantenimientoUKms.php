<?php 

require 'php/auth.php';

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Mantenimientos</title>
      <!-- Jquery-->
      <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <!-- Bootstrap -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/mantenimientos.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <!-- Google Fonts -->
    
    <script src='js/fullScreen.js'></script>
    <style>
        
        input, select{
            width:100%;
            
        }
        .dot{cursor: pointer;color:rgb(7, 105, 253);}

         /*End so far*/
         .btnn{
            height: 50px;
            
        }
        html,body{
            height:100%;
        }
        .col2{
            background-color: #ffffff;
            min-height: 100%;
        }
        .maini{
            
            height:100%;
        }
        #userVehiculos{
            display:none;
        }
        
    </style>
      <script>
            $(document).ready(function(){


                $('.g').height ($(document).height() - $('.navbar').outerHeight() );
                //$('.col2').height( ( $(document).height()+$('.navbar').outerHeight() )*2);

              

            });
    </script>
    
</head>
<body>
  

<nav class="navbar narvbar-expand">
                        <a href="#" class="navbar-brand dashi"><img class='menuHambur' src='css/img/hambur.png' width='24'></a>
                        <!--img src='img/backArrow.png' class='ml-4 poin' width="30"></img-->
                        
                        <ul class="navbar-nav ml-auto">
                            <form action="" class="form-inline my-lg-0 lookForm">
                               <!--  <input  autocomplete="off" type="date" id='lookIt' class='form-control in mr-5' placeholder="Buscar..."> -->
                              
                            </form>
                        </ul>
    </nav>

    <div class="container-fluid gig">

        <div class="row g">

            <div class='col-2 col2'>
                                       
                    <div class="row mt-4 relative">                       
                        <!--button id='vehiculo' class="btn-block btn-success btnn adminBtn" >Vehículos</button-->
                        <span id='mantenimientos' class='boton adminBtn'> Mantenimientos </span>
                        <img class='abso_icons' src='css/img/note.svg' id='note' width='24px' height="24px">
                       
                    </div>
                    <div class="row my-2 relative">
                        <!--button id='historial' class="btn-block btn-success btnn" >Historial de mantenimientos</button-->
                        <img class='abso_icons' src='css/img/time.svg' width='24px' height="24px"><span id='historial' class='boton  adminBtn'> Historial </span>
                    </div>
                   
                    <div class='row my-2 relative'>
                        <span id='logout' class='boton logOut'> Cerrar Sesión </span>
                        <img class='abso_icons logOut' src='css/img/logout.svg'  width='24px' height="24px">
                    </div>
                
            </div>


            <div class='col-10'>
                    <div class="row">

                        <div class="col-12"> 

                            <div class='conten mt-3'>       

                                

                                        <h5 class='mt-3'>Mantenimiento registrado para: &nbsp;&nbsp; <span id='equipo'></span> </h5>


                               
                        
                              

                              
                             <!--    <table class='table table-sm mt-4'>
                                    <thead class='tabledark'>
                                    

                                            <div class='col-10'>

                                                <tr>

                                                    


                                                    <td><b>Marca</b></td>
                                                    <td><b>Modelo</b></td>
                                                    <td><b>Serial</b></td>
                                                    <td><b>Arreglo</b></td>
                                                    <td><b>Nº Placa</b></td>


                                                        

                                                </tr>

                                            </div>


                                            



                                        
                                        
                                    </thead>
                                    
                              
                                    <tbody id='registros'>
                                        
                                    </tbody>
                                </table> -->

                             
                                <span>Horas restantes:</span>
                                <table class='table table-sm mt-1'>
                                    <thead class='tabledark'>
                                    

                                            <div class='col-10'>

                                                <tr>

                                                    


                                                    <td style='position:relative;'>
                                                        <b>Rutina 1</b>
                                                        <img title="<ul id='wrapper'>
                                                                <li>Revisión del nivel de aceite del eje trasero y delantero (TDM).</li>
                                                                <li>Revisión del nivel de aceite de mandos finales.</li>
                                                                <li>Inspeccionar y limpiar filtros de aire primario y válvula de descarga de polvo.</li>
                                                                <li>Revisar y limpiar filtro separador de agua de sistema combustible.</li>
                                                                <li>Revisión del nivel de electrolito y de los bornes de la batería.</li>
                                                                <li>Revisión de niveles de aceite del sistema hidráulico y transmisión.</li>
                                                                <li>Revisión del nivel de refrigerante. Estado del radiador y mangueras.</li>
                                                                <li>Revisión del estado de la(s) correa(s) del motor y comprobar tensión.</li>
                                                                <li>Cambio de aceite y del filtro del motor.</li>
                                                                <li>Lubricar puntos de pivote de cargadora, excavadora y estabilizadores.</li>
                                                                <li>Lubricar crucetas de cardanes.</li>
                                                                <li>Revisión del estado y presión de neumáticos. Chequeo del apriete de tuercas.</li>
                                                                <li>Chequear lineas hidráulicas por fugas, desgastes, soportes flojos, etc.</li>
                                                                <li>Chequeo del funcionamiento del sistema eléctrico y luces.</li>
                                                                <li>Limpieza general.</li>
                                                            </ul>" container="body"  class='absImg' src='css/img/information.png' width=16 data-toggle="tooltip" data-placement="right" data-html="true" >    
                                      
                                                        <img id='imprimible1' class='abs' src='css/img/printer.svg' width='20'> 
                                                        </td>
                                                    <td style='position:relative;'>
                                                        <b>Rutina 2</b>
                                                        <img title="<ul>
                                                                <li>Revisión de la manguera de admisión de aire.</li>
                                                                <li>Cambio del filtro de aceite del sistema hidráulico.</li>
                                                                <li>Revisión del par de apriete del pasador entre el aguijón y el brazo.</li>
                                                                <li>Revisar funcionamiento de frenos de servicio y estacionamiento.</li>
                                                                <li>Cambio del filtro del combustible y separador de agua.</li>
                                                                <li>Cambio del filtro de la transmisión.</li>
                                                            </ul>" data-toggle="tooltip" data-placement="left" data-html="true" container="body" class='absImg' src='css/img/information.png' width=16>    
                                                        
                                                        <img id='imprimible2'  class='abs' src='css/img/printer.svg' width='20'> 
                                                
                                                    </td>
                                                    <td style='position:relative;'>
                                                        <b>Rutina 3</b>
                                                        <img title="<ul>
                                                                <li>Cambio de aceite del eje delantero y trasero.</li>
                                                                <li>Revisón y ajuste del varillaje de control de velocidad del motor.</li>
                                                                <li>Cambios de aceite y filtros del sistema hidráulico.</li>
                                                                <li>Limpieza del tubo del respiradero del carter del motor.</li>
                                                                <li>Cambio del aceite y filtro de la transmisión y convertidor de par.</li>
                                                                <li>Cambio de aceite de mandos finales.</li>
                                                                <li>Sustitución de los elementos de filtro de aire.</li>
                                                            </ul>" container="body" data-toggle="tooltip" data-placement="left" data-html="true" class='absImg' src='css/img/information.png' width=16>   
                                                        
                                                        <img id='imprimible3'  class='abs' src='css/img/printer.svg' width='20'> 
                                                
                                                    </td>
                                                    <td style='position:relative;'>
                                                        <b>Rutina 4</b>
                                                        <img title="<ul>
                                                                <li>Revisión del nivel de aceite del eje trasero y delantero (TDM).</li>
                                                                <li>Revisión del nivel de aceite de mandos finales.</li>
                                                                <li>Inspeccionar y limpiar filtros de aire primario y válvula de descarga de polvo.</li>
                                                                <li>Revisar y limpiar filtro separador de agua de sistema combustible.</li>
                                                                <li>Revisión del nivel de electrolito y de los bornes de la batería.</li>
                                                                <li>Revisión de niveles de aceite del sistema hidráulico y transmisión.</li>
                                                                <li>Revisión del nivel de refrigerante. Estado del radiador y mangueras.</li>
                                                                <li>Revisión del estado de la(s) correa(s) del motor y comprobar tensión.</li>
                                                                <li>Cambio de aceite y del filtro del motor.</li>
                                                                <li>Lubricar puntos de pivote de cargadora, excavadora y estabilizadores.</li>
                                                                <li>Lubricar crucetas de cardanes.</li>
                                                                <li>Revisión del estado y presión de neumáticos. Chequeo del apriete de tuercas.</li>
                                                                <li>Chequear lineas hidráulicas por fugas, desgastes, soportes flojos, etc.</li>
                                                                <li>Chequeo del funcionamiento del sistema eléctrico y luces.</li>
                                                                <li>Limpieza general.</li>
                                                                <li>Revisión de la manguera de admisión de aire.</li>
                                                                <li>Cambio del filtro de aceite del sistema hidráulico.</li>
                                                                <li>Revisión del par de apriete del pasador entre el aguijón y el brazo.</li>
                                                                <li>Revisar funcionamiento de frenos de servicio y estacionamiento.</li>
                                                                <li>Cambio del filtro del combustible y separador de agua.</li>
                                                                <li>Cambio del filtro de la transmisión.</li>
                                                                <li>Cambio de aceite del eje delantero y trasero.</li>
                                                                <li>Revisón y ajuste del varillaje de control de velocidad del motor.</li>
                                                                <li>Cambios de aceite y filtros del sistema hidráulico.</li>
                                                                <li>Limpieza del tubo del respiradero del carter del motor.</li>
                                                                <li>Cambio del aceite y filtro de la transmisión y convertidor de par.</li>
                                                                <li>Cambio de aceite de mandos finales.</li>
                                                                <li>Sustitución de los elementos de filtro de aire.</li>
                                                                <li>Drenaje y reemplazo de refrigerante motor.</li>
                                                                <li>Ajuste del juego de válvulas del motor.</li>
                                                            </ul>" data-toggle="tooltip" data-placement="left" data-html="true" container="body" class='absImg' src='css/img/information.png' width=16>   
                                                        <img id='imprimible4'  class='abs' src='css/img/printer.svg' width='20'>
                                             
                                                    </td>
                                                  


                                                        

                                                </tr>

                                            </div>


                                            



                                        
                                        
                                    </thead>
                                    
                                    <!-- Id registros, time to shine
                                    -- In here we will load all of our data got from listingEquipos.php through app.js     -->
                                    <tbody id='registrosHoras'>
                                        
                                    </tbody>
                                </table>
                            
                            </div>    

                        </div>

                    </div>

                  
<!--  Acá solía ir el incoming mantenimiento
                    <div class="row">

                        <div class="col-11 mx-auto mt-2">
                            <div class="strike mt-2">
                                <span>Próximos mantenimientos</span>
                            </div>

                            <div class="row">
                                <div class="col-4 mx-auto mt-3" id='rutina'> 
                                   
                                </div>
                            </div>

                         
                            <div class="row">
                                <div class="col mt-2" id='actividadesCercanas'> 
                    
                                </div>
                            
                            </div>

                            <div class="strike mt-2">
                                <span>Mantenimientos realizados.</span>
                            </div>

                       </div>
                        
                    </div> -->



                    <div class="row">
                       
                        <div class="col-11 mx-auto mt-3" id='inHere'> 
                        
                            


                        </div>
                        
                    </div>


            </div>
            

        </div>

    </div>

    <script src='mantenimientoUKmsApp.js'></script>
</body>
</html>