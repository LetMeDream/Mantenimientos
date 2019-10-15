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
    <link rel='stylesheet' href='css/vehiculos.css'>
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


            $('.col2,.col10').height($(document).height()*1.1);
          

            

        });
    </script>
    
</head>
<body>
  

    <nav class="navbar narvbar-expand"> 
                        <a href="#" class="navbar-brand dashi"><img class='menuHambur' src='css/img/hambur.png' width='24'></a>
                        <!--img src='img/backArrow.png' class='ml-4 poin' width="30"></img-->
                        
    </nav>

    <div class="container-fluid main">
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
         

            <div class='col-10 col10'>
                    <div class="row">

                        <div class="col-3"> 
                            <div class='container conten my-2'>

                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="card">
                                            <form id='eligiendoEquipo'>
                                            <select style='width:100%;'  name='equipos' id='equipos'>  
                                                    <option value=''>Equipo:</option> 
                                                   
                                                    
                                                </select> 
                                            </form>
                                        </div>
                                    </div>
                                    
                                  



                                    

                                </div>
                          
                            </div>
                        </div>

                        <div class="col-3 enFuncionDe">
                            <div class='container conten my-2'>

                                <div class="row">

                                    <div class="col-sm-12">
                                        <div class="card">
                                            <form id='enFuncionDe'>
                                                <select style='width:100%;'  name='horasoKilometros' id='horasoKilometros'>  
                                                    <option value=''>En función de:</option> 
                                                    <option value='hrs'>Horas</option> 
                                                    <option value='kms'>Kilómetros</option> 
                                                </select> 
                                            </form>
                                        </div>
                                    </div>
                                    
                            

                                </div>

                            </div>
                        </div>

                        <div class="col-6">
                        </div>

                    </div>
                    <!-- Segunda hilera para horas -->
                    <div class="row segundaHilera mb-2 relative">
                       
                        <div class="col-6"> 
                            
                            <div class="row">
                                <div class="col-10">
                                        <div class='conten'>

                                            <form id='eligiendoRutina'>
                                                <div class='form-group formgroup'>

                                                    <div class="row">
                                                        <div class="col-6"><input class='inputs' autocomplete='off' type="date" name='fecha' id='fecha' ></div>

                                                        <div class="col-6">

                                                            <select style='width:100%;' name='rutina' id='rutina'> 
                                                                <option value=''>Elegir rutina:</option>
                                                                <option value='1'>1</option>
                                                                <option value='2'>2</option>
                                                                <option value='3'>3</option>
                                                                <option value='4'>4</option>
                                                            </select>

                                                        </div>

                                                    
                                                    </div>

                                                

                                                </div>
                                                
                                            </form>

                                        </div>
                                    
                                </div>

                                <div class="col-2 ">
                                    <button class='letMeSend mx-auto' id='sendMe' type='button'>Registrar</button>
                                </div>

                           </div>

                        </div>

                      

                        

                        
                        
                    </div>

                    <!-- Segunda hilera para kilómetros -->
                    <div class="row segundaHileraKms mb-2 relative">
                       
                        <div class="col-6"> 
                            
                            <div class="row">
                                <div class="col-10">
                                        <div class='conten'>

                                            <form id='eligiendoRutinaKms'>
                                                <div class='form-group formgroup'>

                                                    <div class="row">
                                                        <div class="col-6"><input class='inputs' autocomplete='off' type="date" name='fecha' id='fechaKms' ></div>

                                                        <div class="col-6">

                                                            <select style='width:100%;' name='rutinaKms' id='rutinaKms'> 
                                                                <option value=''>Elegir rutina:</option>
                                                                <option value='1'>1</option>
                                                                <option value='2'>2</option>
                                                                <option value='3'>3</option>
                                                                <option value='4'>4</option>
                                                            </select>

                                                        </div>

                                                    
                                                    </div>

                                                

                                                </div>
                                                
                                            </form>

                                        </div>
                                    
                                </div>

                                <div class="col-2 ">
                                    <button class='letMeSend mx-auto' id='sendMeKms' type='button'>Registrar</button>
                                </div>

                            </div>

                        </div>

                      

                        

                        
                        
                    </div>
                    
                    <!-- Tercera hilera para horas -->
                    <div class="row terceraHilera mt-2">
                       
                        <div class="col-12"> 

                            <div class='container conten'>

                                <form name='eligiendoActividades' id='eligiendoActividades'>
                                    <div class='form-group formgroup'>

                                        <div class="row">
                                            <div class='col-12' id='actividades'>

                                            </div>
                                        </div>

                                       

                                    </div>
                                    
                                </form>

                            </div>

                           

                        </div>
                        
                    </div>

                    <!-- Tercera hilera para kilómetros -->
                    <div class="row terceraHileraKms mt-2">
                       
                        <div class="col-12"> 

                            <div class='container conten'>

                                <form name='eligiendoActividades' id='eligiendoActividades'>
                                    <div class='form-group formgroup'>

                                        <div class="row">
                                            <div class='col-12' id='actividadesKms'>

                                            </div>
                                        </div>

                                       

                                    </div>
                                    
                                </form>

                            </div>

                           

                        </div>
                        
                    </div>
                   
                   

            </div>
        </div>  

    </div>

    <script src='vehiculosUApp.js'></script>
</body>
</html>