$(function(){
    hide();
     /** Hiding BUTTONS if admin */
    function hide(){
        $.ajax({
            type: "GET",
            url: "php/isAdmin.php",


            success: function (response) {
                if(response==1){
                    $('#userVehiculos').hide();
                }
                if(response == 0) {
                    $('#userVehiculos').show();
                }
            }
        });
    }

    
    /** Mostrando seguraHilera al haberse elegido un vehículo */
    $('#equipos').change(function(){
        let id = $(this).val();

        console.log(id);
        $.ajax({
            type: "POST",
            url: "php/vehiculos/obtenHorasyKilometros.php",
            data: {id:id},
            
           
            success: function (response) {
                let vehiculos = JSON.parse(response);
                
                vehiculos.forEach(
                    vehiculo => {
                        //console.log(vehiculo.hs, vehiculo.km);
                        $('#sendMe').attr('hs', vehiculo.hs);
                        $('#sendMe').attr('km', vehiculo.km);
                    }
                );
            }
        });



        if ($('#equipos').val()  != ''){
            $('.segundaHilera').fadeIn();
        } else {
            $('.segundaHilera').fadeOut();
        }



        /** Disabling rutinas y botón de enviar */
        $('#rutina').attr('disabled', true);
        $('#sendMe').attr('disabled', true);
        $('#sendMe').removeClass('letMeSend');
        $('#sendMe').addClass('disabled');

        $('#fecha').change(function(){
            $('#rutina').attr('disabled', false);
        });
        

    });

    $(document).on('click', '#sendMe', function(){
       
        /** let actividades */
        let actividades = '';
        /** Y comentarios de estas */
        let comentariosActividades = ''; 

        
        /** Hold on for the 30 activities down here */
        /** First 5 */
        if ($('#a_1').is(":checked")){
            actividades += ' 1)Revisión del nivel de aceite del eje trasero y delantero.<br>';
            if ( $('#act1').val() != '' ){
                comentariosActividades += '1) ' + $('#act1').val() + '<br>  ';
            } else {
                comentariosActividades += '1) Actividad sin observación.<br>';
            }
        }
        if ($('#a_2').is(":checked")){
            actividades += ' 2)Revisión del nivel de aceite de mandos finales.<br>';
            if ( $('#act2').val() != '' ){
                comentariosActividades += '2)' + $('#act2').val() + ' <br> ';
            } else {
                comentariosActividades += '2) Actividad sin observación.<br> ';
            }  
        }
        if ($('#a_3').is(":checked")){
            actividades += ' 3)Inspeccionar y limpiar filtro de aire primario y válvula de descarga de polvo.<br>';
            if ( $('#act3').val() != '' ){
                comentariosActividades += '3)' + $('#act3').val() + '<br>  ';
            } else {
                comentariosActividades += '3) Actividad sin observación.<br>';
            }  
            
        }
        if ($('#a_4').is(":checked")){
            actividades += ' 4)Revisar y limpiar filtro separador de agua de sistemas combustible.<br>';
            if ( $('#act4').val() != '' ){
                comentariosActividades += '4)' + $('#act4').val() + '<br>';
            } else {
                comentariosActividades += '4) Actividad sin observación.<br>';
            }  
           
        }
        if ($('#a_5').is(":checked")){
            actividades += ' 5)Revisión del nivel de electrolito y de los bornes de la batería.<br>';
            if ( $('#act5').val() != '' ){
                comentariosActividades += '5)' + $('#act5').val() + '<br>';
            } else {
                comentariosActividades += '5) Actividad sin observación.<br>';
            }  
        }
        /** Five more (5-10) */
        if ($('#a_6').is(":checked")){
            actividades += ' 6)Revisión de niveles de aceite del sistemas hidráulico y transmisión.<br>';
            if ( $('#act6').val() != '' ){
                comentariosActividades += '6)' + $('#act6').val() + '<br>';
            } else {
                comentariosActividades += '6) Actividad sin observación.<br>';
            }  
        }
        if ($('#a_7').is(":checked")){
            actividades += ' 7)Revisión del nivel de refrigerante. Estado del radiador y mangueras.<br>';
            if ( $('#act7').val() != '' ){
                comentariosActividades += '7)' + $('#act7').val() + '<br>';
            } else {
                comentariosActividades += '7) Actividad sin observación. <br>';
            }     
        }
        if ($('#a_8').is(":checked")){
            actividades += ' 8)Revisión del estado de la(s) correa(s) del motor y comprobar tensión.<br>';
            if ( $('#act8').val() != '' ){
                comentariosActividades += '8)' + $('#act8').val() + '<br>';
            } else {
                comentariosActividades += '8) Actividad sin observación. <br> ';
            }    
        }
        if ($('#a_9').is(":checked")){
            actividades += ' 9)Cambio de aceite y del filtro del motor.<br>';
            if ( $('#act9').val() != '' ){
                comentariosActividades += '9)' + $('#act9').val() + '<br>';
            } else {
                comentariosActividades += '9) Actividad sin observación. <br> ';
            }    
        }
        if ($('#a_10').is(":checked")){
            actividades += ' 10)Lubricar puntos de pivote de cargadora, excavadora y estabilizadores.<br>';
            if ( $('#act10').val() != '' ){
                comentariosActividades += '10)' + $('#act10').val() + '<br>';
            } else {
                comentariosActividades += '10) Actividad sin observación. <br>';
            }  
        }
        /** Five more (10-15)*/
        if ($('#a_11').is(":checked")){
            actividades += ' 11)Lubricar crucetas de cardanes.<br>';
            if ( $('#act11').val() != '' ){
                comentariosActividades += '11)' + $('#act11').val() + '<br>';
            } else {
                comentariosActividades += '11) Actividad sin observación.<br>';
            } 
            
        }
        if ($('#a_12').is(":checked")){
            actividades += ' 12)Revisión del estado y presión de neumáticos. Chequeo del apriete de tuercas.<br>';
            if ( $('#act12').val() != '' ){
                comentariosActividades += '12)' + $('#act12').val() + '<br>';
            } else {
                comentariosActividades += '12) Actividad sin observación. <br>';
            }   
        }
        if ($('#a_13').is(":checked")){
            actividades += ' 13)Chequeo de lineas hidráulicas por fugas, desgastes, etc.<br>';
            if ( $('#act13').val() != '' ){
                comentariosActividades += '13)' + $('#act13').val() + '<br>';
            } else {
                comentariosActividades += '13) Actividad sin observación. <br> ';
            } 
        }
        if ($('#a_14').is(":checked")){
            actividades += ' 14)Chequeo del sistema eléctrico y luces.<br>';
            if ( $('#act14').val() != '' ){
                comentariosActividades += '14)' + $('#act14').val() + '<br>';
            } else {
                comentariosActividades += '14) Actividad sin observación. <br> ';
            }           
        }
        if ($('#a_15').is(":checked")){
            actividades += ' 15)Limpieza general.<br>';
            if ( $('#act15').val() != '' ){
                comentariosActividades += '15)' + $('#act15').val() + '<br>';
            } else {
                comentariosActividades += '15) Actividad sin observación. <br> ';
            }  
        }
        /** Five more (15-20)*/
        if ($('#a_16').is(":checked")){
            actividades += ' 16)Revisión de la manguera de admisión de aire.<br>';
            if ( $('#act16').val() != '' ){
                comentariosActividades += '16)' + $('#act16').val() + '<br>';
            } else {
                comentariosActividades += '16) Actividad sin observación. <br> ';
            }   
        }
        if ($('#a_17').is(":checked")){
            actividades += ' 17)Cambio del filtro de aceite del sistema hidráulico.<br>';
            if ( $('#act17').val() != '' ){
                comentariosActividades += '17)' + $('#act17').val() + '<br>';
            } else {
                comentariosActividades += '17) Actividad sin observación.<br>';
            }  
        }
        if ($('#a_18').is(":checked")){
            actividades += ' 18)Revisión del par de apriete del pasador entre el aguijón y el brazo.<br>';
            if ( $('#act18').val() != '' ){
                comentariosActividades += '18)' + $('#act18').val() + '<br>';
            } else {
                comentariosActividades += '18) Actividad sin observación.<br>';
            }       
        }
        if ($('#a_19').is(":checked")){
            actividades += ' 19)Revisar funcionamiento de frenos de servicio y estacionamiento.<br>';
            if ( $('#act19').val() != '' ){
                comentariosActividades += '19)' + $('#act19').val() + '<br>';
            } else {
                comentariosActividades += '19) Actividad sin observación.<br>';
            }   
        }
        if ($('#a_20').is(":checked")){
            actividades += ' 20)Cambio del filtro del combustible y separador de agua.<br>';
            if ( $('#act20').val() != '' ){
                comentariosActividades += '20)' + $('#act20').val() + '<br>';
            } else {
                comentariosActividades += '20) Actividad sin observación.<br>';
            }   
        }
        /** Five more (20-25) */
        if ($('#a_21').is(":checked")){
            actividades += ' 21)Cambio del filtro de transmisión.<br>';
            if ( $('#act21').val() != '' ){
                comentariosActividades += '21)' + $('#act21').val() + '<br>';
            } else {
                comentariosActividades += '21) Actividad sin observación.<br>';
            }   
            
        }
        if ($('#a_22').is(":checked")){
            actividades += ' 22)Cambio de aceite del eje delantero y trasero.<br>';
            if ( $('#act22').val() != '' ){
                comentariosActividades += '22)' + $('#act22').val() + '<br>';
            } else {
                comentariosActividades += '22) Actividad sin observación. <br> ';
            }  
            
        }
        if ($('#a_23').is(":checked")){
            actividades += ' 23)Revisión y ajuste del varillaje de control de velocidad del motor.<br>';
            if ( $('#act23').val() != '' ){
                comentariosActividades += '23)' + $('#act23').val() + '<br>';
            } else {
                comentariosActividades += '23) Actividad sin observación. <br> ';
            } 
            
        }
        if ($('#a_24').is(":checked")){
            actividades += ' 24)Cambio de aceite y filtro del sistema hidráulico.<br>';
            if ( $('#act24').val() != '' ){
                comentariosActividades += '24)' + $('#act24').val() + '<br>';
            } else {
                comentariosActividades += '24) Actividad sin observación. <br> ';
            } 
           
        }
        if ($('#a_25').is(":checked")){
            actividades += ' 25)Limpieza del tubo del respiradero del carter del motor.<br>';
            if ( $('#act25').val() != '' ){
                comentariosActividades += '25)' + $('#act25').val() + '<br>';
            } else {
                comentariosActividades += '25) Actividad sin observación. <br> ';
            } 
            
        }
        /** Last five up to 30 */
        if ($('#a_26').is(":checked")){
            actividades += ' 26)Cambio de aceite y filtro de la transmisión y convertidor de par.<br>';
            if ( $('#act26').val() != '' ){
                comentariosActividades += '26)' + $('#act26').val() + '<br>';
            } else {
                comentariosActividades += '26) Actividad sin observación. <br> ';
            }    
        }
        if ($('#a_27').is(":checked")){
            actividades += ' 27)Cambio de aceite de mandos finales.<br>';
            if ( $('#act27').val() != '' ){
                comentariosActividades += '27)' + $('#act27').val() + '<br>';
            } else {
                comentariosActividades += '27) Actividad sin observación.  <br>';
            }   
        }
        if ($('#a_28').is(":checked")){
            actividades += '28)Sustitución de los elementos del filtro del aire.<br>';
            if ( $('#act28').val() != '' ){
                comentariosActividades += '28)' + $('#act28').val() + '<br>';
            } else {
                comentariosActividades += '28) Actividad sin observación. <br> ';
            }  
            
        }
        if ($('#a_29').is(":checked")){
            actividades += ' 29)Drenaje y reemplazo de refrigerante motor.<br>';
            if ( $('#act29').val() != '' ){
                comentariosActividades += '29)' + $('#act29').val() + '<br>';
            } else {
                comentariosActividades += '29) Actividad sin observación. <br> ';
            }  
        }
        if ($('#a_30').is(":checked")){
            actividades += ' 30)Ajuste del juego de válvulas del motor.<br>';
            if ( $('#act30').val() != '' ){
                comentariosActividades += '30)' + $('#act30').val() + '<br>';
            } else {
                comentariosActividades += '30) Actividad sin observación. <br> ';
            } 
            
        }

        /** Crearemos un objeto que enviaremos al back */
        const pack = {
            //Getting selected OPTION, not value.
            equipo: $('#equipos option:selected').html(),
            //We will still need it's value, tho.
            deviceId: $('#equipos').val(),
            hs:$('#sendMe').attr('hs'),
            km:$('#sendMe').attr('km'),
            fecha:$('#fecha').val(),
            rutina: $('#rutina').val(),
            
            actividades : actividades,
            comentariosActividades :comentariosActividades
        }
        console.log(pack);
        /** Here we would decide wether it's adding or editing 
        /* let url = edit === false ? 'php/add.php' : 'php/update.php'; */

        $.post('php/vehiculos/add.php', pack, function(response){
            
            
            var answer = JSON.parse(response);
            console.log(answer.ok);
            console.log(answer.error)
            if (answer.ok){
                $('#equipos').val('');
               

                $('#rutina').val('');
                $('.terceraHilera').fadeOut();

                $("#fecha[name=fecha]").val('');

              
                $('.segundaHilera').fadeOut();
                $('html, body').animate({scrollTop: '0px'}, 420);

                alert('Mantenimiento registrado');
                window.location.href = 'mantenimiento.php';

            } 
       
        });

       
    });



    /** For navigation */
    $(document).on('click', '#historial', function(e){
        //e.preventDefault();
        window.location.href = 'historial.php';

    });


    /** For navigation */
    $(document).on('click', '#vehiculos', function(e){

        //e.preventDefault();

        window.location.href = 'register_app.php';

    });

    /** For navigation */
    $(document).on('click', '#usuarios', function(e){

        //e.preventDefault();
        window.location.href = 'usuarios.php';

    });

    $(document).on('click', '#registrarVehiculo', function(){
        document.location = 'datosDeIngreso.php';
    });

   
     /** Navigating */
     $(document).on('click', '#vehiculo', function(){
        document.location = 'vehiculos.php';
    })

     /** Back to Dashboard */
     $(document).on('click', '.poin', function(){
        window.location.href='dashboard.php';
    })

      /** Back to Dashboard */
    $(document).on('click', '.dashi', function(){
       // window.location.href='dashboard.php';
       console.log("Trust me. You don't want to go there.");
    })
    /** For navigation END*/


    /** Just stoping search input silly refresh */
    $('.lookForm').submit(function (e) {
        e.preventDefault();

            $.ajax({
                /** Get cause we gonna send that son some info. */
                type: "GET",
                url: "php/consoleArray.php",

                data: {},
                success: function (response) {

                    console.log(response);


                }
            });

          /** Ajax posting it */


    });

    /** Listing process, at least the FIRST PART
     * This mtrfckr was way harder than other normal Listings; pay attention to the source (php) code.
     */
    function listThem(){
        let color = '';

        $.ajax({
            url: 'php/vehiculos/listing.php',
            type: 'GET',
            success: function(response){
               /** Lets convert the string-like response into an usable object */
               let trueList = JSON.parse(response);
               // Some console checking
               console.log(trueList);
               /**Template that will be send to the HTML */
               let template = '';
               trueList.forEach(vehiculo => {
                   /** Some back-ticks magics */
                   template+=`
                   <tr class='colorFul' taskId=${vehiculo.posId} > <!-- PAY ATENTION HERE-->
                       <td>${vehiculo.number}</td>
                       <td class=''>
                           <a>${vehiculo.name}</a>
                       </td>
                       <td >
                           ${vehiculo.ultimaUpdate}
                       </td>
                       <td>${vehiculo.phone}</td>
                       <td>${vehiculo.category}</td>


                   </tr>
               `
               $('#registros').html(template);

               });

            }
        })

    }
    //listThem(); We will just not be called again.
    /** Now we try to add alert colors */
    function colorIt(){
        let color = '';

        $.ajax({
            type: "GET",
            url: "php/vehiculos/colorful.php",
            data: "data",

            success: function (response) {

                let dinamica = JSON.parse(response);
                console.log(dinamica);
                // I don't really know how, but i did it
                $(".colorFul").each(function(i, elem){

                            if (dinamica[i] <= 86400) {
                                //console.log(elem); Nicely green
                                color = 'rgba(40, 255, 140, 0.880)';
                                $(this).css("background-color",color);
                            }
                            else if ((dinamica[i] > 86400) && (dinamica[i] < 172800)) {
                                //console.log(elem); Yellow
                                color = 'rgba(242, 255, 3, 0.686)';
                                $(this).css("background-color",color);
                            }
                            else if (dinamica[i] >= 172800) {
                                //console.log(elem); Rojo
                                color = '#ff4d4d';
                                $(this).css("background-color",color);
                            }

                });

            }

        })


    }
    //colorIt(); We will just not be called again.

    /** We list again */
    function listing2(){
        $.ajax({
            type: "GET",
            url: "php/vehiculos/listing2.php",
            data: "data",

            success: function (response) {
                // Gettin usable object
                let positionsLits = JSON.parse(response);
                // Console checking
                console.log(positionsLits);
                /**Template that will be send to the HTML */
                let template = '';
                //
                positionsLits.forEach(
                    datoPosicion => {
                /** Some back-ticks magics */
                template+=`
                   <tr class='hover' taskId=${datoPosicion.id} > <!-- NO NEED TO PAY ATENTION HERE-->
                       <td>${datoPosicion.number}</td>
                       <td>${datoPosicion.numb}</td>

                       <td>${datoPosicion.velocidad}</td>

                       <td class="horasM">

                            <a href='#'>
                                ${datoPosicion.horasMotor}
                            </a>

                       </td>



                       <td>${datoPosicion.distance}</td>

                       <td>${datoPosicion.updateNumber}</td>

                   </tr>
               `
               //$('#registros2').html(template);
               });
            }
        });
    }
    listing2(); /** Listing2, tho, MUST be still called, although won't print anything. */
    // HORAS
    $(document).on('click', '.horasM', function(){
            /** The whole 'getting id' process is sortof important
            *  you might want to take a good look at it.
            */

            let element = $(this)[0].parentElement;
            let id = $(element).attr('taskId');
            //console.log(id);

            $.ajax({
                type: "POST",
                url: "php/vehiculos/goHours.php",
                data: {id:id},

                success: function (response) {
                   console.log(response);
                   document.location = 'horasRestantes.php';
                }
            });

    });



    /** Una vez elegido el vehículo, mostraremos el formulario que conectará a la bd mantenimientos (tarjetaEquipo) */
    $('#rutina').change(function(){
        let rutina1 = `
                
                        <!-- From here, rutina 1
                        Primeros 15 -->
                    <div class='rut1 rut4'>
                        <div class='row'>
                            <div class='col-7'>
                                <label for='a_1'><span class='actividadesClass'>1)Revisión de aceite de eje trasero y delantero(TDM)</span></label>
                            </div>
                            <div class='col-2'> 
                                <input class='checki' id='a_1' type='checkbox'>
                            </div>

                            <div class='col-3' >
                            
                                    <textarea id='act1' type='text' class='ocultar inputAct' ></textarea>
                            
                            </div>
                        
                    
                        </div>
                    </div>
                    <div class='rut1 rut4'>
                        <div class="row">
                            <div class='col-7'>
                                <label for='a_2'><span class='actividadesClass'>2)Revisión del nivel de aceite de mandos finales</span></label>
                            </div>
                            <div class='col-2'>  <input class='checki' id='a_2' type='checkbox'></div>
                            <div class='col-3'>

                                <textarea id='act2' type='text' class='ocultar inputAct' ></textarea>

                            </div>
                        
                        </div>
                        
                    </div>
                    <div class='rut1 rut4'>
                        <div class="row">
                            <div class='col-7'>
                                <label for='a_3'><span class='actividadesClass'>3)Inspeccionar y limpiar filtro de aire primario y válvula de descarga de polvo.</span></label>
                            </div>
                            <div class='col-2'>  <input class='checki' id='a_3' type='checkbox'></div>
                            <div class='col-3'>
                                <textarea id='act3' type='text' class='ocultar inputAct' ></textarea>
                            </div>
                            
                        </div>
                    </div>
                    <div class='rut1 rut4'>
                        <div class="row">
                            <div class='col-7'>
                                <label for='a_4'><span class='actividadesClass'>4)Revisar y limpiar filtro separador de agua del sistema combustible.</span></label>
                            </div>
                            <div class='col-2'>  <input class='checki' id='a_4' type='checkbox'></div>
                            <div class='col-3'>
                            <textarea id='act4' type='text' class='ocultar inputAct' ></textarea>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div class='rut1 rut4'>
                        <div class="row">

                            <div class='col-7'>
                                <label for='a_5'><span class='actividadesClass'>5)Revisión de niveles de electrolito y bornes de batería.</span></label>
                            </div>
                            <div class='col-2'>  <input class='checki' id='a_5' type='checkbox'></div>
                            <div class='col-3'>
                                <textarea id='act5' type='text' class='ocultar inputAct' ></textarea>
                            </div>
                            

                        </div>
                    
                    </div>
                    <div class='rut1 rut4'>
                        <div class="row">
                            <div class='col-7'>
                                <label for='a_6'><span class='actividadesClass'>6)Revisión de niveles de aceite del sistema hidráulico y transmisión</span></label>
                            </div>
                            <div class='col-2'>  <input class='checki' id='a_6' type='checkbox'></div>
                            <div class='col-3'>
                                <textarea id='act6' type='text' class='ocultar inputAct' ></textarea>
                            </div>
                            
                        </div>

                    </div>
                    <div class='rut1 rut4'>
                        <div class="row">
                            <div class='col-7'>
                                <label for='a_7'><span class='actividadesClass'>7)Revisión del nivel de refrigerante. Estado del radiador y mangueras.</span></label>
                            </div>
                            <div class='col-2'>  <input class='checki' id='a_7' type='checkbox'></div>
                            <div class='col-3'>
                                <textarea id='act7' type='text' class='ocultar inputAct' ></textarea>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div class='rut1 rut4'>
                        <div class="row">
                            <div class='col-7'>
                                <label for='a_8'><span class='actividadesClass'>8)Revisión del estado de la correa de motor y comprobar tensión.</span></label>
                            </div>
                            <div class='col-2'>  <input class='checki' id='a_8' type='checkbox'></div>
                            <div class='col-3'>
                            <textarea id='act8' type='text' class='ocultar inputAct' ></textarea>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div class='rut1 rut4'>
                        <div class="row">

                            <div class='col-7'>
                                <label for='a_9'><span class='actividadesClass'>9)Cambio de aceite y filtro del motor.</span></label>
                            </div>
                            <div class='col-2'>  <input class='checki' id='a_9' type='checkbox'></div>
                            <div class='col-3'>
                            <textarea id='act9' type='text' class='ocultar inputAct' ></textarea>
                            </div>
                            

                        </div>
                        
                    </div>
                    <div class='rut1 rut4'>
                        <div class="row">
                            <div class='col-7'>
                                <label for='a_10'><span class='actividadesClass'>10)Lubricar puntos de pivote de cargadora, excavadora y estabilizadores</span></label>
                            </div>
                            <div class='col-2'>  <input class='checki' id='a_10' type='checkbox'></div>
                            <div class='col-3'>
                        <textarea id='act10' type='text' class='ocultar inputAct' ></textarea>
                            </div>
                            
                        </div>

                    </div>
                    <div class='rut1 rut4'>
                        <div class="row">
                            <div class='col-7'>
                                <label for='a_11'><span class='actividadesClass'>11)Lubricar crucetes de cardanes</span></label>
                            </div>
                            <div class='col-2'>  <input class='checki' id='a_11' type='checkbox'></div>
                            <div class='col-3'>
                            <textarea id='act11' type='text' class='ocultar inputAct' ></textarea>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div class='rut1 rut4'>
                        <div class="row">
                            <div class='col-7'>
                                <label for='a_12'><span class='actividadesClass'>12)Revisión de estado y presión de neumáticos. Chequeo del apriete de tuercas.</span></label>
                            </div>
                            <div class='col-2'>  <input class='checki' id='a_12' type='checkbox'></div>
                            <div class='col-3'>
                            <textarea id='act12' type='text' class='ocultar inputAct' ></textarea>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div class='rut1 rut4'>
                        <div class="row">

                            <div class='col-7'>
                                <label for='a_13'><span class='actividadesClass'>13)Chequear lineas hidráulicas por fugas.</span></label>
                            </div>
                            <div class='col-2'>  <input class='checki' id='a_13' type='checkbox'></div>
                            <div class='col-3'>
                                <textarea id='act13' type='text' class='ocultar inputAct' ></textarea>
                            </div>
                            

                        </div>
                        
                    </div>
                    <div class='rut1 rut4'>
                        <div class="row">
                            <div class='col-7'>
                                <label for='a_14'><span class='actividadesClass'>14)Chequeo del funcionamiento del sistema eléctrico y luces.</span></label>
                            </div>
                            <div class='col-2'>  <input class='checki' id='a_14' type='checkbox'></div>
                            <div class='col-3'>
                            <textarea id='act14' type='text' class='ocultar inputAct' ></textarea>
                            </div>
                            
                        </div>
                    
                    </div>
                    <div class='rut1 rut4'>
                        <div class="row">
                            <div class='col-7'>
                                <label for='a_15'><span class='actividadesClass'>15)Limpieza general.</span></label>
                            </div>
                            <div class='col-2'>  <input class='checki' id='a_15' type='checkbox'></div>
                            <div class='col-3'>
                            <textarea id='act15' type='text' class='ocultar inputAct' ></textarea>
                            </div>
                            
                        </div>
                    
                    </div>
                
                `;
        let rutina2 = `
                <div class='rut2 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_16'><span class='actividadesClass'>16)Revisión de la manguera de admisión de aire.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_16' type='checkbox'></div>
                                <div class='col-3'>
                                    <textarea id='act16' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                            
                    </div>
                        <div class='rut2 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_17'><span class='actividadesClass'>17)Cambios del filtro de aceite del sistema hidráulico.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_17' type='checkbox'></div>
                                <div class='col-3'>
                                    <textarea id='act17' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                        
                        </div>
                        <div class='rut2 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                <label for='a_18'><span class='actividadesClass'>18)Revisión del par de apriete del pasador entre el aguilón y el brazo.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_18' type='checkbox'></div>
                                <div class='col-3'>
                                    <textarea id='act18' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div class='rut2 rut4'>
                            <div class="row">

                                <div class='col-7'>
                                    <label for='a_19'><span class='actividadesClass'>19)Revisar funcionamiento de frenos de servicio y estacionamiento.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_19' type='checkbox'></div>
                                <div class='col-3'>
                                <textarea id='act19' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                

                            </div>
                            
                        </div>
                        <div class='rut2 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_20'><span class='actividadesClass'>20)Cambios del filtro del combustible y separador de agua.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_20' type='checkbox'></div>
                                <div class='col-3'>
                                <textarea id='act20' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div class='rut2 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_21'><span class='actividadesClass'>21)Cambios del filtro de la transmisión.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_21' type='checkbox'></div>
                                <div class='col-3'>
                            <textarea id='act21' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                            
                </div>
                        `
        let rutina3 = `
                        <!-- From now on, rutine 3-->
                        <div class='rut3 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_22'><span class='actividadesClass'>22)Cambio de aceite de eje delantero y trasero.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_22' type='checkbox'></div>
                                <div class='col-3'>
                                <textarea id='act22' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div class='rut3 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_23'><span class='actividadesClass'>23)Revisión y ajuste del vanillaje de control de velocidad del motor.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_23' type='checkbox'></div>
                                <div class='col-3'>
                            <textarea id='act23' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div class='rut3 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_24'><span class='actividadesClass'>24)Cambios de aceite y filtro del sistema hidráulico.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_24' type='checkbox'></div>
                                <div class='col-3'>
                                    <textarea id='act24' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div class='rut3 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_25'><span class='actividadesClass'>25)Limpieza de tubo del respiradero de carter del motor.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_25' type='checkbox'></div>
                                <div class='col-3'>
                                <textarea id='act25' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div class='rut3 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_26'><span class='actividadesClass'>26)Cambio de aceite y filtro de la transmisión y convertidor en par</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_26' type='checkbox'></div>
                                <div class='col-3'>
                                <textarea id='act26' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div class='rut3 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_27'><span class='actividadesClass'>27)Cambio de aceite de mandos finales</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_27' type='checkbox'></div>
                                <div class='col-3'>
                            <textarea id='act27' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div class='rut3 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_28'><span class='actividadesClass'>28)Sustitución de los elementos de filtro de aire</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_28' type='checkbox'></div>
                                <div class='col-3'>
                                <textarea id='act28' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                            
                        </div>
                        <!-- Up to here, rutina 3 -->

            `;
        let rutina4 = `
                            <!-- From here, rutina 1
                            Primeros 15 -->
                        <div class='rut1 rut4'>
                            <div class='row'>
                                <div class='col-7'>
                                    <label for='a_1'><span class='actividadesClass'>1)Revisión de aceite de eje trasero y delantero(TDM)</span></label>
                                </div>
                                <div class='col-2'> 
                                    <input class='checki' id='a_1' type='checkbox'>
                                </div>

                                <div class='col-3' >
                                
                                        <textarea id='act1' type='text' class='ocultar inputAct' ></textarea>
                                
                                </div>
                            
                        
                            </div>
                        </div>
                        <div class='rut1 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_2'><span class='actividadesClass'>2)Revisión del nivel de aceite de mandos finales</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_2' type='checkbox'></div>
                                <div class='col-3'>

                                    <textarea id='act2' type='text' class='ocultar inputAct' ></textarea>

                                </div>
                            
                            </div>
                            
                        </div>
                        <div class='rut1 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_3'><span class='actividadesClass'>3)Inspeccionar y limpiar filtro de aire primario y válvula de descarga de polvo.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_3' type='checkbox'></div>
                                <div class='col-3'>
                                    <textarea id='act3' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                        </div>
                        <div class='rut1 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_4'><span class='actividadesClass'>4)Revisar y limpiar filtro separador de agua del sistema combustible.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_4' type='checkbox'></div>
                                <div class='col-3'>
                                <textarea id='act4' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div class='rut1 rut4'>
                            <div class="row">

                                <div class='col-7'>
                                    <label for='a_5'><span class='actividadesClass'>5)Revisión de niveles de electrolito y bornes de batería.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_5' type='checkbox'></div>
                                <div class='col-3'>
                                    <textarea id='act5' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                

                            </div>
                        
                        </div>
                        <div class='rut1 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_6'><span class='actividadesClass'>6)Revisión de niveles de aceite del sistema hidráulico y transmisión</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_6' type='checkbox'></div>
                                <div class='col-3'>
                                    <textarea id='act6' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>

                        </div>
                        <div class='rut1 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_7'><span class='actividadesClass'>7)Revisión del nivel de refrigerante. Estado del radiador y mangueras.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_7' type='checkbox'></div>
                                <div class='col-3'>
                                    <textarea id='act7' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div class='rut1 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_8'><span class='actividadesClass'>8)Revisión del estado de la correa de motor y comprobar tensión.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_8' type='checkbox'></div>
                                <div class='col-3'>
                                <textarea id='act8' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div class='rut1 rut4'>
                            <div class="row">

                                <div class='col-7'>
                                    <label for='a_9'><span class='actividadesClass'>9)Cambio de aceite y filtro del motor.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_9' type='checkbox'></div>
                                <div class='col-3'>
                                <textarea id='act9' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                

                            </div>
                            
                        </div>
                        <div class='rut1 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_10'><span class='actividadesClass'>10)Lubricar puntos de pivote de cargadora, excavadora y estabilizadores</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_10' type='checkbox'></div>
                                <div class='col-3'>
                            <textarea id='act10' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>

                        </div>
                        <div class='rut1 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_11'><span class='actividadesClass'>11)Lubricar crucetes de cardanes</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_11' type='checkbox'></div>
                                <div class='col-3'>
                                <textarea id='act11' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div class='rut1 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_12'><span class='actividadesClass'>12)Revisión de estado y presión de neumáticos. Chequeo del apriete de tuercas.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_12' type='checkbox'></div>
                                <div class='col-3'>
                                <textarea id='act12' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div class='rut1 rut4'>
                            <div class="row">

                                <div class='col-7'>
                                    <label for='a_13'><span class='actividadesClass'>13)Chequear lineas hidráulicas por fugas.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_13' type='checkbox'></div>
                                <div class='col-3'>
                                    <textarea id='act13' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                

                            </div>
                            
                        </div>
                        <div class='rut1 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_14'><span class='actividadesClass'>14)Chequeo del funcionamiento del sistema eléctrico y luces.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_14' type='checkbox'></div>
                                <div class='col-3'>
                                <textarea id='act14' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                        
                        </div>
                        <div class='rut1 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_15'><span class='actividadesClass'>15)Limpieza general.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_15' type='checkbox'></div>
                                <div class='col-3'>
                                <textarea id='act15' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                        
                        </div>
                        
                        <!-- Up to here, rutina 1 -->
                        <!-- From now on, rutina 2 -->
                        <div class='rut2 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_16'><span class='actividadesClass'>16)Revisión de la manguera de admisión de aire.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_16' type='checkbox'></div>
                                <div class='col-3'>
                                    <textarea id='act16' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div class='rut2 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_17'><span class='actividadesClass'>17)Cambios del filtro de aceite del sistema hidráulico.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_17' type='checkbox'></div>
                                <div class='col-3'>
                                    <textarea id='act17' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                        
                        </div>
                        <div class='rut2 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                <label for='a_18'><span class='actividadesClass'>18)Revisión del par de apriete del pasador entre el aguilón y el brazo.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_18' type='checkbox'></div>
                                <div class='col-3'>
                                    <textarea id='act18' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div class='rut2 rut4'>
                            <div class="row">

                                <div class='col-7'>
                                    <label for='a_19'><span class='actividadesClass'>19)Revisar funcionamiento de frenos de servicio y estacionamiento.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_19' type='checkbox'></div>
                                <div class='col-3'>
                                <textarea id='act19' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                

                            </div>
                            
                        </div>
                        <div class='rut2 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_20'><span class='actividadesClass'>20)Cambios del filtro del combustible y separador de agua.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_20' type='checkbox'></div>
                                <div class='col-3'>
                                <textarea id='act20' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div class='rut2 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_21'><span class='actividadesClass'>21)Cambios del filtro de la transmisión.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_21' type='checkbox'></div>
                                <div class='col-3'>
                            <textarea id='act21' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                            
                        </div>
                        <!-- From now on, rutine 3-->
                        <div class='rut3 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_22'><span class='actividadesClass'>22)Cambio de aceite de eje delantero y trasero.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_22' type='checkbox'></div>
                                <div class='col-3'>
                                <textarea id='act22' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div class='rut3 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_23'><span class='actividadesClass'>23)Revisión y ajuste del vanillaje de control de velocidad del motor.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_23' type='checkbox'></div>
                                <div class='col-3'>
                            <textarea id='act23' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div class='rut3 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_24'><span class='actividadesClass'>24)Cambios de aceite y filtro del sistema hidráulico.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_24' type='checkbox'></div>
                                <div class='col-3'>
                                    <textarea id='act24' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div class='rut3 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_25'><span class='actividadesClass'>25)Limpieza de tubo del respiradero de carter del motor.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_25' type='checkbox'></div>
                                <div class='col-3'>
                                <textarea id='act25' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div class='rut3 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_26'><span class='actividadesClass'>26)Cambio de aceite y filtro de la transmisión y convertidor en par</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_26' type='checkbox'></div>
                                <div class='col-3'>
                                <textarea id='act26' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div class='rut3 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_27'><span class='actividadesClass'>27)Cambio de aceite de mandos finales</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_27' type='checkbox'></div>
                                <div class='col-3'>
                            <textarea id='act27' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div class='rut3 rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_28'><span class='actividadesClass'>28)Sustitución de los elementos de filtro de aire</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_28' type='checkbox'></div>
                                <div class='col-3'>
                                <textarea id='act28' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                            
                        </div>
                        <!-- Up to here, rutina 3 -->
                        <!-- From now on, rutine 4-->
                        <div class='rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_29'><span class='actividadesClass'>29)Drenaje y reemplazo de refrigerador motor</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_29' type='checkbox'></div>
                                <div class='col-3'>
                                <textarea id='act29' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                            
                            </div>
                            
                        </div>
                        <div class='rut4'>
                            <div class="row">
                                <div class='col-7'>
                                    <label for='a_30'><span class='actividadesClass'>30)Ajuste de juego de válvulas del motor.</span></label>
                                </div>
                                <div class='col-2'>  <input class='checki' id='a_30' type='checkbox'></div>
                                <div class='col-3'>
                                    <textarea id='act30' type='text' class='ocultar inputAct' ></textarea>
                                </div>
                                
                            </div>
                            
                        </div>
            `;
            
            if($('#rutina').val() == '1'){
                $('.terceraHilera').fadeIn();
                $('#actividades').html(rutina1);
                //Trying to keep height
                $('.g').height($(document).height() + $('.navbar').outerHeight() );
               
            }
            if($('#rutina').val() == '2'){
                $('.terceraHilera').fadeIn();
                $('#actividades').html(rutina2);
                //Trying to keep height
                $('.g').height($(document).height() + $('.navbar').outerHeight() );
               
            }
            if($('#rutina').val() == '3'){
                $('.terceraHilera').fadeIn();
                $('#actividades').html(rutina3);
                //Trying to keep height
                $('.g').height($(document).height() + $('.navbar').outerHeight() );
               
            }
            if($('#rutina').val() == '4'){
                $('.terceraHilera').fadeIn();
                $('#actividades').html(rutina4);
                //Trying to keep height
                $('.g').height($(document).height() + $('.navbar').outerHeight() );
               
            }
            if($('#rutina').val() == ''){
                $('.terceraHilera').fadeOut();

                $("#fecha[name=fecha]").val('');

                $('#sendMe').attr('disabled', true);
                $('#sendMe').removeClass('letMeSend');
                $('#sendMe').addClass('disabled');
                
                //Trying to keep height
                $('.g').height($(document).height() + $('.navbar').outerHeight() );
               
            }
            /** Trying to enable the button ;-; */
            $('.checki').change(function(){
                console.log('pls ;-;');
                let post = $('.checki:checked').length;
                if (post > 0){
                    
                    $('#sendMe').attr('disabled', false);
                    $('#sendMe').removeClass('disabled');
                    $('#sendMe').addClass('letMeSend');
                    console.log(post);
                } else {
                    $('#sendMe').attr('disabled', true);
                    $('#sendMe').removeClass('letMeSend');
                    $('#sendMe').addClass('disabled');
                }
                
            });
            
            /** From doen this point I'll try to make some commentary logic */
            // Let me begin by detecting checkboxes changes
            /** Actividad 1 */
            $('#a_1').change(function(){
                if($(this).is(':checked')){
                    $("#act1").fadeIn();
                    
                }else{
                    $("#act1").fadeOut();
                }
            });
            /** Actividad 2 */
            $('#a_2').change(function(){
                if($(this).is(':checked')){
                    $("#act2").fadeIn();
                }else{
                    $("#act2").fadeOut();
                }
            });
            /** Actividad 3 */
            $('#a_3').change(function(){
                if($(this).is(':checked')){
                    $("#act3").fadeIn();
                }else{
                    $("#act3").fadeOut();
                }
            });
            
            /** Actividad 4 */
            $('#a_4').change(function(){
                if($(this).is(':checked')){
                    $("#act4").fadeIn();
                }else{
                    $("#act4").fadeOut();
                }
            });
            /** Actividad 5 */
            $('#a_5').change(function(){
                if($(this).is(':checked')){
                    $("#act5").fadeIn();
                }else{
                    $("#act5").fadeOut();
                }
            });
            /** Actividad 6 */
            $('#a_6').change(function(){
                if($(this).is(':checked')){
                    $("#act6").fadeIn();
                }else{
                    $("#act6").fadeOut();
                }
            });
            /** Actividad 7 */
            $('#a_7').change(function(){
                if($(this).is(':checked')){
                    $("#act7").fadeIn();
                }else{
                    $("#act7").fadeOut();
                }
            });            
            /** Actividad 8 */
            $('#a_8').change(function(){
                if($(this).is(':checked')){
                    $("#act8").fadeIn();
                }else{
                    $("#act8").fadeOut();
                }
            });
            /** Actividad 9 */
            $('#a_9').change(function(){
                if($(this).is(':checked')){
                    $("#act9").fadeIn();
                }else{
                    $("#act9").fadeOut();
                }
            });
            /** Actividad 10 */
            $('#a_10').change(function(){
                if($(this).is(':checked')){
                    $("#act10").fadeIn();
                }else{
                    $("#act10").fadeOut();
                }
            });
            /** Actividad 11 */
            $('#a_11').change(function(){
                if($(this).is(':checked')){
                    $("#act11").fadeIn();
                }else{
                    $("#act11").fadeOut();
                }
            });
            /** Actividad 12 */
            $('#a_12').change(function(){
                if($(this).is(':checked')){
                    $("#act12").fadeIn();
                }else{
                    $("#act12").fadeOut();
                }
            });
            /** Actividad 13 */
            $('#a_13').change(function(){
                if($(this).is(':checked')){
                    $("#act13").fadeIn();
                }else{
                    $("#act13").fadeOut();
                }
            });
            /** Actividad 14 */
            $('#a_14').change(function(){
                if($(this).is(':checked')){
                    $("#act14").fadeIn();
                }else{
                    $("#act14").fadeOut();
                }
            });
            /** Actividad 15 */
            $('#a_15').change(function(){
                if($(this).is(':checked')){
                    $("#act15").fadeIn();
                }else{
                    $("#act15").fadeOut();
                }
            });
            /** Actividad 16 */
            $('#a_16').change(function(){
                if($(this).is(':checked')){
                    $("#act16").fadeIn();
                }else{
                    $("#act16").fadeOut();
                }
            });
            /** Actividad 17 */
            $('#a_17').change(function(){
                if($(this).is(':checked')){
                    $("#act17").fadeIn();
                }else{
                    $("#act17").fadeOut();
                }
            });
            /** Actividad 18 */
            $('#a_18').change(function(){
                if($(this).is(':checked')){
                    $("#act18").fadeIn();
                }else{
                    $("#act18").fadeOut();
                }
            });
            /** Actividad 19 */
            $('#a_19').change(function(){
                if($(this).is(':checked')){
                    $("#act19").fadeIn();
                }else{
                    $("#act19").fadeOut();
                }
            });
            /** Actividad 20 */
            $('#a_20').change(function(){
                if($(this).is(':checked')){
                    $("#act20").fadeIn();
                }else{
                    $("#act20").fadeOut();
                }
            });
            /** Actividad 21 */
            $('#a_21').change(function(){
                if($(this).is(':checked')){
                    $("#act21").fadeIn();
                }else{
                    $("#act21").fadeOut();
                }
            });
            /** Actividad 22 */
            $('#a_22').change(function(){
                if($(this).is(':checked')){
                    $("#act22").fadeIn();
                }else{
                    $("#act22").fadeOut();
                }
            });
            /** Actividad 23 */
            $('#a_23').change(function(){
                if($(this).is(':checked')){
                    $("#act23").fadeIn();
                }else{
                    $("#act23").fadeOut();
                }
            });
            /** Actividad 21 */
            $('#a_24').change(function(){
                if($(this).is(':checked')){
                    $("#act24").fadeIn();
                }else{
                    $("#act24").fadeOut();
                }
            });
            /** Actividad 25 */
            $('#a_25').change(function(){
                if($(this).is(':checked')){
                    $("#act25").fadeIn();
                }else{
                    $("#act25").fadeOut();
                }
            });
            /** Actividad 26 */
            $('#a_26').change(function(){
                if($(this).is(':checked')){
                    $("#act26").fadeIn();
                }else{
                    $("#act26").fadeOut();
                }
            });
            /** Actividad 27 */
            $('#a_27').change(function(){
                if($(this).is(':checked')){
                    $("#act27").fadeIn();
                }else{
                    $("#act27").fadeOut();
                }
            });
            /** Actividad 28 */
            $('#a_28').change(function(){
                if($(this).is(':checked')){
                    $("#act28").fadeIn();
                }else{
                    $("#act28").fadeOut();
                }
            });
            /** Actividad 29 */
            $('#a_29').change(function(){
                if($(this).is(':checked')){
                    $("#act29").fadeIn();
                }else{
                    $("#act29").fadeOut();
                }
            });
            /** Actividad 30 */
            $('#a_30').change(function(){
                if($(this).is(':checked')){
                    $("#act30").fadeIn();
                }else{
                    $("#act30").fadeOut();
                }
            });

    });


    /** Logic for the filtering process */
    $('#lookIt').keyup(function () {

        /** If there's a valua on the search (#lookIT) then proceed */
        if( $('#lookIt').val()){
            /** Variable que será enviada por AJAX. */
            let search = $('#lookIt').val();
            /** Hacemos una petición al servidor con AJAX desde Jquery */
            $.ajax({
                /** POST cause we gonna send that son some info. */
                type: "POST",
                url: "php/vehiculos/deviceSearch.php",

                data: {search: search},
                success: function (response) {

                    /** Tomaremos el string de json y lo llevaremos de verdad a JSON. */
                    let posiciones = JSON.parse(response);
                    console.log(posiciones);

                    /** Let's create a template in order to modify the HTML */
                    let template = '';
                    posiciones.forEach(x => {
                        template += `
                        <tr class='hover' letId='${x.id}'>
                            <td>${x.number}</td>
                            <td class=''>
                                <a>${x.nombre}</a>
                            </td>
                            <td>${x.velocidad}</td>
                            <td>${x.horas}</td>

                            <td>${x.distancia}</td>
                            <td>${x.updateN}</td>

                        </tr>
                        `
                    });
                    /** and use them (templates) */
                    // $('#show').show();
                    $('#registros2').html(template);

                }
            });
        } else{
            listing2();
        }


    });


    /** now loggin out */
    $(document).on('click', '.logOut', function(){
        $.ajax({
            type: "GET",
            url: "php/vehiculos/logOut.php",

            success: function (response) {
                window.location.href='index.php';
            }
        });
    });

     /** To show if not in dashboard */
     $(document).ready(function(){

        $('.poin').show();

    })


      /** show search */
    $(document).ready(function(){

        $('.hid').show();

    })

});

