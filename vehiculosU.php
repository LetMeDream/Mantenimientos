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
    <link rel='stylesheet' href='css/vehiculosU.css'>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <!-- Google Fonts -->
    
    <script src='js/fullScreen.js'></script>
    <style>
        
        input{
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
        .main{
          
            height:100%;
        }
        
        .poin{cursor:pointer;display:none;}
        .hid{
            display:none;
        }
        .colorFul{
            font-weight: 600;
        }
        #userVehiculos{
            display:none;
        }
  
        
    </style>
    <script>
        $(document).ready(function(){


            //$('.g,').height($(document).height());
            $('.col2,.col10').height($(document).height()*1.1);
          

            

        });
    </script>
    
</head>
<body>
  

    <nav class="navbar narvbar-expand"> 
                        <a href="#" class="navbar-brand dashi"><img class='menuHambur' src='css/img/hambur.png' width='24'></a>
                        <!--img src='img/backArrow.png' class='ml-4 poin' width="30"></img-->
                        
                        <ul class="navbar-nav ml-auto hid">
                            <form action="" class="form-inline my-lg-0 lookForm">
                                <input  autocomplete="off" type="search" id='lookIt' class='form-control in mr-5' placeholder="Buscar...">
                              
                            </form>
                        </ul>
    </nav>

    <div class="container-fluid main">
        <div class="row g">

            <div class='col-2 col2'>
                       
                        
                        <div class="row mt-4 relative">                       
                            <!--button id='vehiculo' class="btn-block btn-success btnn adminBtn" >Vehículos</button-->
                            <span id='vehiculox' class='boton adminBtn'> Vehículos </span>
                            <img class='abso_icons' src='css/img/vehiculo.svg' id='vehi_icon' width='24px' height="24px">
                        </div>
                        <div class='row my-2 relative'>
                            <span id='logout' class='boton logOut'> Cerrar Sesión </span>
                            <img class='abso_icons logOut' src='css/img/logout.svg'  width='24px' height="24px">
                        </div>
                       
                    
                       
                    
            </div>
         

            <div class='col-10 col10'>
                    <div class="row">

                        <div class="col-9"> 
                            <div class='container conten my-2'>

                                <h5 class='mt-1'>Vehículos registrados:</h5>
                                <table class='table table-sm mt-2'>
                                    <thead class='tablaNormal'>
                                        <tr>
                                        
                                            <td>Nombre</td>
                                            <td>Última actualización</td>
                                            <td>Teléfono</td>
                                            <td>Categoría</td>
                                        
                                        
                                        
                                        </tr>
                                
                                    </thead>
                                    
                                    <!-- Id registros, time to shine
                                    -- In here we will load all of our data got from listingEquipos.php through app.js     -->
                                    <tbody id='registros'>
                                        
                                    </tbody>
                                </table>


                            </div>
                          
                        </div>
                        <div class="col-3"></div>

                    </div>
                    <div class="row">
                       
                        <div class="col-12"> 

                            <div class='container conten mt-2'>

                                <h5>Posiciones*:</h5>
                                <p style='color:black;font-size:9px;'>*En última actualización.</p>
                                <table class='table table-sm mt-2'>
                                    <thead class='tablaNormal'>
                                        <tr>
                                            <td>Nombre</td>
                                            <td>Velocidad </td>
                                            <td>Horas Motor</td>
                                        
                                            <td>Distancia recorrida</td>
                                            <td>Actualización Nº</td>

                                        
                                        
                                        </tr>
                                
                                    </thead>
                                    
                                    <!-- Id registros, time to shine
                                    -- In here we will load all of our data got from listingEquipos.php through app.js     -->
                                    <tbody id='registros2'>
                                        
                                    </tbody>
                                </table>


                            </div>

                           

                        </div>
                        
                    </div>
                   
                   

            </div>
        </div>  

    </div>

    <script src='vehiculoUApp.js'></script>
</body>
</html>