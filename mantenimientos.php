<?php 

require 'php/auth.php';

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vehículos</title>
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
                                <input  autocomplete="off" type="date" id='lookIt' class='form-control in mr-5' placeholder="Buscar...">
                              
                            </form>
                        </ul>
    </nav>

    <div class="container-fluid gig">

        <div class="row g">

            <div class='col-2 col2'>
                    <div class="row mt-4 relative">
                        <!--button id='historial' class="btn-block btn-success btnn" >Historial de mantenimientos</button-->
                        <img class='abso_icons' src='css/img/time.svg' width='24px' height="24px"><span id='historial' class='boton  adminBtn'> Historial </span>
                    </div>

                    
                    
                    <div class="row my-2 relative">                       
                        <!--button id='vehiculo' class="btn-block btn-success btnn adminBtn" >Vehículos</button-->
                        <span id='vehiculo' class='boton adminBtn'> Vehículos </span>
                        <img class='abso_icons' src='css/img/vehiculo.svg' id='vehi_icon' width='24px' height="24px">
                    </div>
                    <div class="row my-2 relative">
                        <!--button id='usuarios' class="btn-block btn-success btnn adminBtn">Usuarios</button-->
                        <span id='usuarios' class='boton adminBtn'> Usuarios </span>
                        <img class='abso_icons' src='css/img/users.svg' id='users' width='24px' height="24px">
                    </div>
                
                    <div class="row my-2 relative">
                        <!-- Register_app -->
                        <!--button id='register' class="btn-block btn-success btnn adminBtn">Registrar mantenimiento</button-->
                        <span id='register' class='boton adminBtn'> Registros </span>
                        <img class='abso_icons' src='css/img/note.svg' id='note' width='24px' height="24px">
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

                                <div class='col-10'>    
                                

                                        <h5 class='mt-3'>Mantenimientos registrados para: &nbsp;&nbsp; <span id='equipo'></span> </h5>


                               
                        
                                </div>   

                              
                                <table class='table table-sm mt-4'>
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
                                    
                                    <!-- Id registros, time to shine
                                    -- In here we will load all of our data got from listingEquipos.php through app.js     -->
                                    <tbody id='registros'>
                                        
                                    </tbody>
                                </table>
                            
                            </div>    

                        </div>

                    </div>






                    <div class="row">
                       
                        <div class="col-11 mx-auto mt-3" id='inHere'> 
                        
                            


                        </div>
                        
                    </div>


            </div>
            

        </div>

    </div>

    <script src='mantenimientosApp.js'></script>
</body>
</html>