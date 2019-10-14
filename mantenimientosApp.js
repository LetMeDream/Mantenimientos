$(function(){
    hide();
     /** Hiding BUTTONS if admin
      * Actually, SHOWING them if NOT admin
      */
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
    
    /** For navigation */
    $(document).on('click', '#historial', function(e){
        //e.preventDefault();
        window.location.href = 'historial.php';

    });

    $(document).on('click', '#btnKms', function(e){
        window.location.href= 'mantenimientosKms.php';
    });

    /** For navigation */
    $(document).on('click', '#register', function(e){

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
    })

     /** Navigating */
    $(document).on('click', '#mantenimientos', function(){
        document.location = 'vehiculos.php';
    })
    /** For navigation END*/

     /** Back to Dashboard */
     $(document).on('click', '.poin', function(){
        history.back();
    })

    /** PDFs */
    $(document).on('click', '#imprimible1,#imprimible2,#imprimible3,#imprimible4', function(){
       /** Cinco */
       var w = window.open('css/img/formato_mp.pdf');
        w.print();
    })
   
   

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
        
       
        $.ajax({
            type: "GET",
            url: "php/mantenimientos/getNombreInexistente.php",
            data: "data",
            
            success: function (response) {
                let data = JSON.parse(response);
                console.log(data.nombre);
                let nombre = data.nombre;

                $.ajax({
                    url: 'php/mantenimientos/listalos.php',
                    type: 'GET',
                    success: function(response){
                        /** Lets convert the string-like response into an usable object */
                        let x = JSON.parse(response);
                        // Are we currently receiving something?
                        
                        /** X = equipos */
                        if (x.length == 0) {
                            console.log('We are not receiving anything.');
                            alert('No existen mantenimientos registrados para ' + nombre);
                            /* window.history.back(); */
                            $('#equipo').html(nombre);
                            /** Lets create another AJAX call, so we can solve the FIRST problem */
                            $.ajax({
                                type: "GET",
                                url: "php/mantenimientos/getMainRow.php", // Note como getMainRow ahora también calcula y actualiza el cálculo de horas
                                data: "data",
                                success: function (response) {

                                    console.log(response);
                                    let mainRow = JSON.parse(response);

                                    if (mainRow.length == 0){
                                        alert('El vehículo ' + nombre + ' no ha sido registrado.');
                                        window.history.back();

                                    } else{

                                        let template = ''; let templating = '';
                                        mainRow.forEach(element => {
                                        template += 
                                                `
                                                    <tr>
                                                        <td>${element.marca}</td>
                                                        <td>${element.modelo}</td>
                                                        <td>${element.serial}</td>
                                                        <td>${element.arreglo}</td>
                                                        <td>${element.placa}</td>
                                                    </tr>                        
                                                `;

                                        templating += 
                                                `
                                                    <tr>
                                                        <td class='rut1' hrs='${element.hrsReales1}' >${element.rutina1}</td>
                                                        <td class='rut2' hrs='${element.hrsReales2}' >${element.rutina2}</td>
                                                        <td class='rut3' hrs='${element.hrsReales3}' >${element.rutina3}</td>
                                                        <td class='rut4' hrs='${element.hrsReales4}' >${element.rutina4}</td>
                                                    </tr>
                                                `
                                        });
                                        $('#registros').html(template);
                                        $('#registrosHoras').html(templating);
                                    
                                        /**  */
                                        let rutina1 = `
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act1'>1)Revisión del nivel de aceite del eje trasero y delantero.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act2'>2)Revisión del nivel de aceite de mandos finales.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act3'>3)Inspeccionar y limpiar filtro de aire primario y válvula de descarga de polvo.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act4'>4)Revisar y limpiar filtro separador de agua de sistemas combustible.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act5'>5)Revisión del nivel de electrolito y de los bornes de la batería.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act6'>6)Revisión de niveles de aceite del sistemas hidráulico y transmisión.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act7'>7)Revisión del nivel de refrigerante. Estado del radiador y mangueras.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act8'>8)Revisión del estado de la(s) correa(s) del motor y comprobar tensión.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act9'>9)Cambio de aceite y del filtro del motor.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act10'>10)Lubricar puntos de pivote de cargadora, excavadora y estabilizadores.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act11'>11)Lubricar crucetas de cardanes.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act12'>12)Revisión del estado y presión de neumáticos. Chequeo del apriete de tuercas.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act13'>13)Chequeo de lineas hidráulicas por fugas, desgastes, etc.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act14'>14)Chequeo del sistema eléctrico y luces.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act15'>15)Limpieza general.</label></div>
                                                       
                                                    </div>
                                                    
                                                    `;
                                        let rutina2 = `
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act16'> 16)Revisión de la manguera de admisión de aire.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act17'> 17)Cambios del filtro de aceite del sistema hidráulico.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act18'> 18)Revisión del par de apriete del pasador entre el aguilón y el brazo.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act19'> 19)Revisar funcionamiento de frenos de servicio y estacionamiento.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act20'> 20)Cambios del filtro del combustible y separador de agua.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act21'> 21)Cambios del filtro de la transmisión.</label></div>
                                                        
                                                    </div>
                                                    `
                                        let rutina3 = `
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act22'> 22)Cambio de aceite de eje delantero y trasero.</label></div>
                                                        
                                                    </div> 
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act23'> 23)Revisión y ajuste del vanillaje de control de velocidad del motor.</label></div>
                                                        
                                                    </div> 
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act24'> 24)Cambios de aceite y filtro del sistema hidráulico.</label></div>
                                                        
                                                    </div> 
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act25'> 25)Limpieza de tubo del respiradero de carter del motor.</label></div>
                                                        
                                                    </div> 
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act26'> 26)Cambio de aceite y filtro de la transmisión y convertidor en par.</label></div>
                                                        
                                                    </div> 
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act27'> 27)Cambio de aceite de mandos finales</label></div>
                                                        
                                                    </div> 
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act28'> 28)Sustitución de los elementos de filtro de aire</label></div>
                                                        
                                                    </div> 

                                                `;
                                        let rutina4 = `
                                                <!-- Rutina 1 -->
                                                <div class='row'>
                                                    <div class='col-12'><label for='act1'>1)Revisión del nivel de aceite del eje trasero y delantero.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act2'>2)Revisión del nivel de aceite de mandos finales.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act3'>3)Inspeccionar y limpiar filtro de aire primario y válvula de descarga de polvo.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act4'>4)Revisar y limpiar filtro separador de agua de sistemas combustible.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act5'>5)Revisión del nivel de electrolito y de los bornes de la batería.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act6'>6)Revisión de niveles de aceite del sistemas hidráulico y transmisión.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act7'>7)Revisión del nivel de refrigerante. Estado del radiador y mangueras.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act8'>8)Revisión del estado de la(s) correa(s) del motor y comprobar tensión.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act9'>9)Cambio de aceite y del filtro del motor.</label></div>
                                                
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act10'>10)Lubricar puntos de pivote de cargadora, excavadora y estabilizadores.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act11'>11)Lubricar crucetas de cardanes.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act12'>12)Revisión del estado y presión de neumáticos. Chequeo del apriete de tuercas.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act13'>13)Chequeo de lineas hidráulicas por fugas, desgastes, etc.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act14'>14)Chequeo del sistema eléctrico y luces.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act15'>15)Limpieza general.</label></div>
                                                    
                                                </div>
                                                <!-- Rutina 2 -->
                                                <div class='row'>
                                                    <div class='col-12'><label for='act16'> 16)Revisión de la manguera de admisión de aire.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act17'> 17)Cambios del filtro de aceite del sistema hidráulico.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act18'> 18)Revisión del par de apriete del pasador entre el aguilón y el brazo.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act19'> 19)Revisar funcionamiento de frenos de servicio y estacionamiento.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act20'> 20)Cambios del filtro del combustible y separador de agua.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act21'> 21)Cambios del filtro de la transmisión.</label></div>
                                                    
                                                </div>
                                                <!-- Rutina 3 -->
                                                <div class='row'>
                                                    <div class='col-12'><label for='act22'> 22)Cambio de aceite de eje delantero y trasero.</label></div>
                                                    
                                                </div> 
                                                <div class='row'>
                                                    <div class='col-12'><label for='act23'> 23)Revisión y ajuste del vanillaje de control de velocidad del motor.</label></div>
                                                    
                                                </div> 
                                                <div class='row'>
                                                    <div class='col-12'><label for='act24'> 24)Cambios de aceite y filtro del sistema hidráulico.</label></div>
                                                    
                                                </div> 
                                                <div class='row'>
                                                    <div class='col-12'><label for='act25'> 25)Limpieza de tubo del respiradero de carter del motor.</label></div>
                                                    
                                                </div> 
                                                <div class='row'>
                                                    <div class='col-12'><label for='act26'> 26)Cambio de aceite y filtro de la transmisión y convertidor en par.</label></div>
                                                    
                                                </div> 
                                                <div class='row'>
                                                    <div class='col-12'><label for='act27'> 27)Cambio de aceite de mandos finales</label></div>
                                                    
                                                </div> 
                                                <div class='row'>
                                                    <div class='col-12'><label for='act28'> 28)Sustitución de los elementos de filtro de aire</label></div>
                                                    
                                                </div> 
                                                <!-- Rutina 4 -->
                                                <div class='row'>
                                                    <div class='col-12'><label for='act29'> 29)Drenaje y reemplazo de refrigerante motor.</label></div>
                                                    
                                                </div> 
                                                <div class='row'>
                                                    <div class='col-12'><label for='act30'> 30)Ajuste del juego de válvulas del motor.</label></div>
                                                    
                                                </div> 
                                                `;
                                        function detectarRutinaCercana(){
                                                        /** Comenzamos por guardar todos los números mayores a cero en un arreglo. */
                                                        var hrsParaRutina = [];
                                                        if ($('.rut1').text() > 0 ){
                                                        hrsParaRutina.push( $('.rut1').text() );
                                                        } else{
                                                        hrsParaRutina.push( $('.rut1').attr('hrs') );
                                                        }
                                                        if ($('.rut2').text() > 0 ){
                                                            hrsParaRutina.push( $('.rut2').text() );
                                                        }
                                                        else{
                                                        hrsParaRutina.push( $('.rut2').attr('hrs') );
                                                        }
                                                        if ($('.rut3').text() > 0 ){
                                                            hrsParaRutina.push( $('.rut3').text() );
                                                        }
                                                        else{
                                                        hrsParaRutina.push( $('.rut3').attr('hrs') );
                                                        }
                                                        if ($('.rut4').text() > 0 ){
                                                            hrsParaRutina.push( $('.rut4').text() );
                                                        }
                                                        else{
                                                        hrsParaRutina.push( $('.rut4').attr('hrs') );
                                                        }
                                                        console.log(hrsParaRutina);
                                                    /** Luego hallamos el menor de los números de dicho arreglo. */
                                                        let menor = Math.min.apply(Math, hrsParaRutina);
                                                        console.log(menor);
                                                    /** Luego comparamos para hallar a qué rutina corresponde ese número */
                                                        if  ($('.rut1').attr('hrs') == menor ) {
                                                        alert('Rutina más cercana: 1.');
                                                        $('#rutina').html('Se aproximan las actividades para la <b>Rutina 1.</b>');
                                                        $('#actividadesCercanas').html(rutina1);
                                                        }
                                                        if ($('.rut2').attr('hrs') == menor ){
                                                        alert('Rutina más cercana: 2.');
                                                        $('#rutina').html('Se aproximan las actividades para la <b>Rutina 2.</b>');
                                                        $('#actividadesCercanas').html(rutina2);
                                                        }
                                                        if ($('.rut3').attr('hrs') == menor  ){
                                                        alert('Rutina más cercana: 3.');
                                                        $('#rutina').html('Se aproximan las actividades para la <b>Rutina 3.</b>');
                                                        $('#actividadesCercanas').html(rutina3);
                                                        }
                                                        if ($('.rut4').attr('hrs') == menor ){
                                                        alert('Rutina más cercana: 4.');
                                                        $('#rutina').html('Se aproximan las actividades para la <b>Rutina 4.</b>');
                                                        $('#actividadesCercanas').html(rutina4);
                                                        }
                                            }

                                        function colorear() {
                                            //console.log(response);
                                            /** Coloring */
                                            // ------------ Rutina 1 -----------------------------------------------------//
                                                if ( $('.rut1').text() >= 75 ){
                                                    $('.rut1').css('background-color', '#DDF0EC');
                                                } else if ( $('.rut1').text() < 75 && $('.rut1').text() >= 25 ) {
                                                    $('.rut1').css('background-color', 'rgba(230,79,19, 0.6)');
                                                }
                                                else {
                                                    $('.rut1').css('background-color', 'rgba(213,11,14,0.6)');
                                                }
                                            // ------------ Rutina 2 -----------------------------------------------------//
                                                if ( $('.rut2').text() >= 150 ){
                                                    $('.rut2').css('background-color', '#DDF0EC');
                                                } else if ( $('.rut2').text() < 150 && $('.rut2').text() >= 50 ) {
                                                    $('.rut2').css('background-color', 'rgba(230,79,19, 0.6)');
                                                }
                                                else {
                                                    $('.rut2').css('background-color', 'rgba(213,11,14,0.6)');
                                                }
                                            // ------------ Rutina 3 -----------------------------------------------------//
                                                if ( $('.rut3').text() >= 300 ){
                                                    $('.rut3').css('background-color', '#DDF0EC');
                                                } else if ( $('.rut3').text() < 300 && $('.rut3').text() >= 100 ) {
                                                    $('.rut3').css('background-color', 'rgba(230,79,19, 0.6)');
                                                }
                                                else {
                                                    $('.rut3').css('background-color', 'rgba(213,11,14,0.6)');
                                                }
                                            // ------------ Rutina 4 -----------------------------------------------------//
                                                if ( $('.rut4').text() >= 600 ){
                                                    $('.rut4').css('background-color', '#DDF0EC');
                                                } else if ( $('.rut4').text() < 600 && $('.rut4').text() >= 200 ) {
                                                    $('.rut4').css('background-color', 'rgba(230,79,19, 0.6)');
                                                }
                                                else {
                                                    $('.rut4').css('background-color', 'rgba(213,11,14,0.6)');
                                                }
                                                detectarRutinaCercana();
                                            /** Hasta arriba coloreábamos, ahora queremos mostrar una lista de las actividades por venir. */
                                            }
                                    
                                        colorear();
                                        /** Yo matándome and it was so easy */
                                        $('.col2,.g').height( ($(document).height()  ));
                                        }

                                    
                        
                                    
                                }
                            });
                        }
                        else{
                            $.ajax({
                                type: "GET",
                                url: "php/mantenimientos/getMainRow.php", // Note como getMainRow ahora también calcula y actualiza el cálculo de horas
                                data: "data",
                                success: function (response) {

                                    console.log(response);
                                    let mainRow = JSON.parse(response);

                                    if (mainRow.length == 0){
                                        alert('El vehículo ' + nombre + ' no ha sido registrado.');
                                        window.history.back();

                                    }

                                }
                            });    
                            /** Lets create another AJAX call, so we can solve the FIRST problem */
                            $.ajax({
                                type: "GET",
                                url: "php/mantenimientos/getMainRow.php", // Note como getMainRow ahora también calcula y actualiza el cálculo de horas
                                data: "data",
                                success: function (response) {
                                    console.log(response);
                                    let mainRow = JSON.parse(response);
                                    let template = ''; let templating = '';
                                    mainRow.forEach(element => {
                                        template += 
                                                `
                                                    <tr>
                                                        <td>${element.marca}</td>
                                                        <td>${element.modelo}</td>
                                                        <td>${element.serial}</td>
                                                        <td>${element.arreglo}</td>
                                                        <td>${element.placa}</td>
                                                    </tr>                        
                                                `;

                                        templating += 
                                                `
                                                    <tr>
                                                        <td class='rut1' hrs='${element.hrsReales1}' >${element.rutina1}</td>
                                                        <td class='rut2' hrs='${element.hrsReales2}' >${element.rutina2}</td>
                                                        <td class='rut3' hrs='${element.hrsReales3}' >${element.rutina3}</td>
                                                        <td class='rut4' hrs='${element.hrsReales4}' >${element.rutina4}</td>
                                                    </tr>
                                                `
                                    });
                                    $('#registros').html(template);
                                    $('#registrosHoras').html(templating);
                                    
                                    /**  */
                                    let rutina1 = `
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act1'>1)Revisión del nivel de aceite del eje trasero y delantero.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act2'>2)Revisión del nivel de aceite de mandos finales.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act3'>3)Inspeccionar y limpiar filtro de aire primario y válvula de descarga de polvo.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act4'>4)Revisar y limpiar filtro separador de agua de sistemas combustible.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act5'>5)Revisión del nivel de electrolito y de los bornes de la batería.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act6'>6)Revisión de niveles de aceite del sistemas hidráulico y transmisión.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act7'>7)Revisión del nivel de refrigerante. Estado del radiador y mangueras.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act8'>8)Revisión del estado de la(s) correa(s) del motor y comprobar tensión.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act9'>9)Cambio de aceite y del filtro del motor.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act10'>10)Lubricar puntos de pivote de cargadora, excavadora y estabilizadores.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act11'>11)Lubricar crucetas de cardanes.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act12'>12)Revisión del estado y presión de neumáticos. Chequeo del apriete de tuercas.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act13'>13)Chequeo de lineas hidráulicas por fugas, desgastes, etc.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act14'>14)Chequeo del sistema eléctrico y luces.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act15'>15)Limpieza general.</label></div>
                                                       
                                                    </div>
                                                    
                                                    `;
                                    let rutina2 = `
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act16'> 16)Revisión de la manguera de admisión de aire.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act17'> 17)Cambios del filtro de aceite del sistema hidráulico.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act18'> 18)Revisión del par de apriete del pasador entre el aguilón y el brazo.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act19'> 19)Revisar funcionamiento de frenos de servicio y estacionamiento.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act20'> 20)Cambios del filtro del combustible y separador de agua.</label></div>
                                                        
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act21'> 21)Cambios del filtro de la transmisión.</label></div>
                                                        
                                                    </div>
                                                    `
                                    let rutina3 = `
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act22'> 22)Cambio de aceite de eje delantero y trasero.</label></div>
                                                        
                                                    </div> 
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act23'> 23)Revisión y ajuste del vanillaje de control de velocidad del motor.</label></div>
                                                        
                                                    </div> 
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act24'> 24)Cambios de aceite y filtro del sistema hidráulico.</label></div>
                                                        
                                                    </div> 
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act25'> 25)Limpieza de tubo del respiradero de carter del motor.</label></div>
                                                        
                                                    </div> 
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act26'> 26)Cambio de aceite y filtro de la transmisión y convertidor en par.</label></div>
                                                        
                                                    </div> 
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act27'> 27)Cambio de aceite de mandos finales</label></div>
                                                        
                                                    </div> 
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act28'> 28)Sustitución de los elementos de filtro de aire</label></div>
                                                        
                                                    </div> 

                                                `;
                                    let rutina4 = `
                                                <!-- Rutina 1 -->
                                                <div class='row'>
                                                    <div class='col-12'><label for='act1'>1)Revisión del nivel de aceite del eje trasero y delantero.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act2'>2)Revisión del nivel de aceite de mandos finales.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act3'>3)Inspeccionar y limpiar filtro de aire primario y válvula de descarga de polvo.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act4'>4)Revisar y limpiar filtro separador de agua de sistemas combustible.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act5'>5)Revisión del nivel de electrolito y de los bornes de la batería.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act6'>6)Revisión de niveles de aceite del sistemas hidráulico y transmisión.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act7'>7)Revisión del nivel de refrigerante. Estado del radiador y mangueras.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act8'>8)Revisión del estado de la(s) correa(s) del motor y comprobar tensión.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act9'>9)Cambio de aceite y del filtro del motor.</label></div>
                                                
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act10'>10)Lubricar puntos de pivote de cargadora, excavadora y estabilizadores.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act11'>11)Lubricar crucetas de cardanes.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act12'>12)Revisión del estado y presión de neumáticos. Chequeo del apriete de tuercas.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act13'>13)Chequeo de lineas hidráulicas por fugas, desgastes, etc.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act14'>14)Chequeo del sistema eléctrico y luces.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act15'>15)Limpieza general.</label></div>
                                                    
                                                </div>
                                                <!-- Rutina 2 -->
                                                <div class='row'>
                                                    <div class='col-12'><label for='act16'> 16)Revisión de la manguera de admisión de aire.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act17'> 17)Cambios del filtro de aceite del sistema hidráulico.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act18'> 18)Revisión del par de apriete del pasador entre el aguilón y el brazo.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act19'> 19)Revisar funcionamiento de frenos de servicio y estacionamiento.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act20'> 20)Cambios del filtro del combustible y separador de agua.</label></div>
                                                    
                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act21'> 21)Cambios del filtro de la transmisión.</label></div>
                                                    
                                                </div>
                                                <!-- Rutina 3 -->
                                                <div class='row'>
                                                    <div class='col-12'><label for='act22'> 22)Cambio de aceite de eje delantero y trasero.</label></div>
                                                    
                                                </div> 
                                                <div class='row'>
                                                    <div class='col-12'><label for='act23'> 23)Revisión y ajuste del vanillaje de control de velocidad del motor.</label></div>
                                                    
                                                </div> 
                                                <div class='row'>
                                                    <div class='col-12'><label for='act24'> 24)Cambios de aceite y filtro del sistema hidráulico.</label></div>
                                                    
                                                </div> 
                                                <div class='row'>
                                                    <div class='col-12'><label for='act25'> 25)Limpieza de tubo del respiradero de carter del motor.</label></div>
                                                    
                                                </div> 
                                                <div class='row'>
                                                    <div class='col-12'><label for='act26'> 26)Cambio de aceite y filtro de la transmisión y convertidor en par.</label></div>
                                                    
                                                </div> 
                                                <div class='row'>
                                                    <div class='col-12'><label for='act27'> 27)Cambio de aceite de mandos finales</label></div>
                                                    
                                                </div> 
                                                <div class='row'>
                                                    <div class='col-12'><label for='act28'> 28)Sustitución de los elementos de filtro de aire</label></div>
                                                    
                                                </div> 
                                                <!-- Rutina 4 -->
                                                <div class='row'>
                                                    <div class='col-12'><label for='act29'> 29)Drenaje y reemplazo de refrigerante motor.</label></div>
                                                    
                                                </div> 
                                                <div class='row'>
                                                    <div class='col-12'><label for='act30'> 30)Ajuste del juego de válvulas del motor.</label></div>
                                                    
                                                </div> 
                                                `;
                                    function detectarRutinaCercana(){
                                                    /** Comenzamos por guardar todos los números mayores a cero en un arreglo. */
                                                    var hrsParaRutina = [];
                                                    if ($('.rut1').text() > 0 ){
                                                       hrsParaRutina.push( $('.rut1').text() );
                                                    } else{
                                                       hrsParaRutina.push( $('.rut1').attr('hrs') );
                                                    }
                                                    if ($('.rut2').text() > 0 ){
                                                        hrsParaRutina.push( $('.rut2').text() );
                                                    }
                                                    else{
                                                       hrsParaRutina.push( $('.rut2').attr('hrs') );
                                                    }
                                                    if ($('.rut3').text() > 0 ){
                                                        hrsParaRutina.push( $('.rut3').text() );
                                                    }
                                                    else{
                                                       hrsParaRutina.push( $('.rut3').attr('hrs') );
                                                    }
                                                    if ($('.rut4').text() > 0 ){
                                                        hrsParaRutina.push( $('.rut4').text() );
                                                    }
                                                    else{
                                                       hrsParaRutina.push( $('.rut4').attr('hrs') );
                                                    }
                                                    console.log(hrsParaRutina);
                                                /** Luego hallamos el menor de los números de dicho arreglo. */
                                                    let menor = Math.min.apply(Math, hrsParaRutina);
                                                    console.log(menor);
                                                /** Luego comparamos para hallar a qué rutina corresponde ese número */
                                                    if  ($('.rut1').attr('hrs') == menor ) {
                                                       alert('Rutina más cercana: 1.');
                                                       $('#rutina').html('Se aproximan las actividades para la <b>Rutina 1.</b>');
                                                       $('#actividadesCercanas').html(rutina1);
                                                    }
                                                    if ($('.rut2').attr('hrs') == menor ){
                                                       alert('Rutina más cercana: 2.');
                                                       $('#rutina').html('Se aproximan las actividades para la <b>Rutina 2.</b>');
                                                       $('#actividadesCercanas').html(rutina2);
                                                    }
                                                    if ($('.rut3').attr('hrs') == menor  ){
                                                       alert('Rutina más cercana: 3.');
                                                       $('#rutina').html('Se aproximan las actividades para la <b>Rutina 3.</b>');
                                                       $('#actividadesCercanas').html(rutina3);
                                                    }
                                                    if ($('.rut4').attr('hrs') == menor ){
                                                       alert('Rutina más cercana: 4.');
                                                       $('#rutina').html('Se aproximan las actividades para la <b>Rutina 4.</b>');
                                                       $('#actividadesCercanas').html(rutina4);
                                                    }
                                        }

                                    function colorear() {
                                        //console.log(response);
                                        /** Coloring */
                                        // ------------ Rutina 1 -----------------------------------------------------//
                                            if ( $('.rut1').text() >= 75 ){
                                                $('.rut1').css('background-color', '#DDF0EC');
                                            } else if ( $('.rut1').text() < 75 && $('.rut1').text() >= 25 ) {
                                                $('.rut1').css('background-color', 'rgba(230,79,19, 0.6)');
                                            }
                                            else {
                                                $('.rut1').css('background-color', 'rgba(213,11,14,0.6)');
                                            }
                                        // ------------ Rutina 2 -----------------------------------------------------//
                                            if ( $('.rut2').text() >= 150 ){
                                                $('.rut2').css('background-color', '#DDF0EC');
                                            } else if ( $('.rut2').text() < 150 && $('.rut2').text() >= 50 ) {
                                                $('.rut2').css('background-color', 'rgba(230,79,19, 0.6)');
                                            }
                                            else {
                                                $('.rut2').css('background-color', 'rgba(213,11,14,0.6)');
                                            }
                                        // ------------ Rutina 3 -----------------------------------------------------//
                                            if ( $('.rut3').text() >= 300 ){
                                                $('.rut3').css('background-color', '#DDF0EC');
                                            } else if ( $('.rut3').text() < 300 && $('.rut3').text() >= 100 ) {
                                                $('.rut3').css('background-color', 'rgba(230,79,19, 0.6)');
                                            }
                                            else {
                                                $('.rut3').css('background-color', 'rgba(213,11,14,0.6)');
                                            }
                                        // ------------ Rutina 4 -----------------------------------------------------//
                                            if ( $('.rut4').text() >= 600 ){
                                                $('.rut4').css('background-color', '#DDF0EC');
                                            } else if ( $('.rut4').text() < 600 && $('.rut4').text() >= 200 ) {
                                                $('.rut4').css('background-color', 'rgba(230,79,19, 0.6)');
                                            }
                                            else {
                                                $('.rut4').css('background-color', 'rgba(213,11,14,0.6)');
                                            }
                                            detectarRutinaCercana();
                                        /** Hasta arriba coloreábamos, ahora queremos mostrar una lista de las actividades por venir. */
                                        }
                                   
                                    colorear();
                                    /** Yo matándome and it was so easy */
                                    $('.col2,.g').height( ($(document).height()  ));
                        
                                    
                                }
                            });
                            // Some console checking
                            //console.log(x);
                            /** Dont get behind, kiddo (class='col-2') */
                            
                            /**Template that will be send to the HTML */
                            let template2 = '';  
                            
                          

                            /** Acá listamos los mantenimientos; desde el primer Ajax request (Listalos.php) */
                            x.forEach(y => {
                                //back ticks magics
                                equipo = `
                                            <a idHoras=${y.idHoras} href='#' class='gooHoras'>${y.nombre}</a>
                                        `;

                                equipoSinLink = `
                                    ${y.nombre}
                                `;
                                

                                template2 += `

                            <div class='contenApp my-4'>
                                <div class=''>
                                    ${y.fechaIngreso}
                                </div>
                                                                    
                                    <table class='table table-bordered table-sm' style='margin-top:-0px'>
                                        <thead class='tabledark' id='tableWeird'>
                                            <tr>
                                                                
                                                <td> Rutina de mantenimiento Nº: ${y.rutina}</td>    
                                    
                                            </tr>
                                
                                        </thead>
                                        
                                        <!-- Id registros, time to shine
                                        -- In here we will load all of our data got from listingEquipos.php through app.js     -->
                                        <tbody id='registros2'>
                                            
                                            <tr>

                                            <td>

                                                <div class='row'>
        
                                                    <div class='col'> <b>Actividades:</b><br> ${y.actividades}</div>
                                                    <div class='col'> <b>Observaciones:</b><br> ${y.comentariosActividades}</div>
                                                
                                                
                                                
        
                                                </div>
                                                <hr>
                                                <br>
                                       
                                            </td>
                                        
                                            </tr>
                                                
                                            

                                        </tbody>
                                    </table>
                                </div>        

                                            `;
                           
                            });   
                            $('#equipo').html(equipoSinLink);
                            //$('#registros').html(template);
                            $('#inHere').html(template2);

                            /** Yo matándome and it was so easy */
                            $('.col2,.g').height( ($(document).height()  ));
                        
        
                        }
                        
                    }
                });
               
            }
        });
    }
    listThem();
   
    /** Now we want to go to horasMantenimientos, pero de modo más intuitivo. */
    $(document).on('click', '.gooHoras', function(){

        let elementoClickeado = $(this)[0];
        let idClickeado = $(elementoClickeado).attr('idHoras');
        /** Console check by sending the clicked ID to the console. */
        console.log(idClickeado);
        $.ajax({
            type: "POST",
            url: "php/mantenimientos/goHours.php",
            data: {id:idClickeado},
            
            success: function (response) {
                console.log(response);
                document.location = 'horasRestantes.php';
            }
        });

    })

    /** Logic for the filtering process */
     $('#lookIt').change(function () { 
        
        /** If there's a valua on the search (#lookIT) then proceed */
        if( $('#lookIt').val()){
            /** Variable que será enviada por AJAX. */ 
            let search = $('#lookIt').val();
            /** Hacemos una petición al servidor con AJAX desde Jquery */
            //console.log(search);

            /** AJAX HTTP VERB */
            $.ajax({
                type: "POST",
                url: "php/mantenimientos/filter.php",
                data: {date: search},
                
                success: function (response) {
                    let filtrados = JSON.parse(response);
                    console.log(filtrados);
                    let templateX = '';
                    // Now we create a template
                    filtrados.forEach(y =>{
                        templateX += `

                       <div class='contenApp my-4'>
                                <div class=''>
                                    ${y.fechaIngreso}
                                </div>
                                                                    
                                    <table class='table table-bordered table-sm' style='margin-top:-0px'>
                                        <thead class='tabledark' id='tableWeird'>
                                            <tr>
                                                                
                                                <td> Rutina de mantenimiento Nº: ${y.rutina}</td>    
                                    
                                            </tr>
                                
                                        </thead>
                                        
                                        <!-- Id registros, time to shine
                                        -- In here we will load all of our data got from listingEquipos.php through app.js     -->
                                        <tbody id='registros2'>
                                            
                                            <tr>

                                            <td>
                                            
                                                <div class='row'>
        
                                                    <div class='col'> <b>Actividades:</b><br> ${y.actividades}</div>
                                                    <div class='col'> <b>Observaciones:</b><br> ${y.comentariosActividades}</div>
                                                
                                                
                                                
        
                                                </div>
                                                <hr>
                                                <br>
                                       
                                            </td>
                                        
                                            </tr>
                                                
                                            

                                        </tbody>
                                    </table>
                                </div>        

                                        `;
                        
                    })
                    $('#inHere').html(templateX);
                   
                    $('#col_10').height( ($(document).height() ) );



                }
            });
           
        
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

    });


      /** hide search */
    $(document).ready(function(){
        
        $('.hid').hide();

    });

    /* Enabling tool tips*/ 
      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
 

});