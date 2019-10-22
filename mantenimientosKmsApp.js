$(function () {

    /** For navigation */
    $(document).on('click', '#historial', function(e){
        //e.preventDefault();
        window.location.href = 'historial.php';

    });

    /** Navigating */
    $(document).on('click', '#mantenimientos', function(){
        document.location = 'vehiculos.php';
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

    /** Ir a horas */
    $(document).on('click', '#btnHrs', function(x){
        window.location.href = 'mantenimientos.php';
    });

    /* Enabling tool tips*/
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })


    /** Listing */
    function listThem(){


        $.ajax({
            type: "GET",
            url: "php/mantenimientos/getNombreInexistente.php",
            data: "data",

            success: function (response) {
                let data = JSON.parse(response);
                console.log(data.nombre);
                let nombre = data.nombre;

                /** Listing */
                $.ajax({
                    url: 'php/mantenimientosKms/listalos.php',
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
                                url: "php/mantenimientosKms/getMainRow.php", // Note como getMainRow ahora también calcula y actualiza el cálculo de kms
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
                                                        <td class='rut1' kms='${element.kmsReales1}' >${element.rutina1}</td>
                                                        <td class='rut2' kms='${element.kmsReales2}' >${element.rutina2}</td>
                                                        <td class='rut3' kms='${element.kmsReales3}' >${element.rutina3}</td>
                                                        <td class='rut4' kms='${element.kmsReales4}' >${element.rutina4}</td>
                                                    </tr>
                                                `
                                    });
                                    $('#registros').html(template);
                                    $('#registrosKms').html(templating);

                                    /**  */
                                    let rutina1 = `
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act1'>1)Revisar del estado de la(s) correa(s) del motor y comprobar tensión.</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act2'>2)Inspeccionar y limpiar filtro de aire.</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act3'>3)Revisar nivel de electrólito y de los bornes de la batería.</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act4'>4)Chequear niveles de aceite de la caja velocidades automatica  (Si aplica)</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act5'>5)Revisar nivel de refrigerante. Estado del radiador y mangueras</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act6'>6)Revisar estado y presion de inflado de cauchos. Chequeo del apriete de tuercas.</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act7'>7)Cambiar de aceite y del filtro del motor.</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act8'>8)Chequear funcionamiento del sistema electrico, luces e instrumentos</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act9'>9)Chequear frenos de servicio y estacionamiento. </label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act10'>10)Chequear fugas de agua, aceite y combustible</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act11'>11)Limpieza General, lavado y engrase.</label></div>

                                                    </div>

                                                    `;
                                    let rutina2 = `
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act12'> 12)Chequear graduación de embrague (Si Aplica)</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act13'> 13)Cambiar filtros de combustible</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act14'> 14)Realizar alineacion y balanceo de cauchos</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act15'> 15)Chequear sistema de dirección, falta de ajuste, estado de articulaciones, rotulas, protectores, etc  </label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act16'> 16)Chequear sistema de suspensión, condicion de amortiguadores, falta de ajuste en conexiones, etc</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act17'> 17)Limpiar filtro aire de cabina o antipolen del sistema de A/A.</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act18'> 18)Chequear nivel de aceite de caja de velocidades mecanica (Si Aplica)</label></div>

                                                    </div>
                                                    `
                                    let rutina3 = `
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act19'> 19)Reemplazar filtro de aire</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act20'> 20)Chequear condicion y funcionamiento de alternador y arranque</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act21'> 21)Reemplazar filtro y aceite de caja de velocidades automatica (Si Aplica)</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act22'> 22)Rotar cauchos </label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act23'> 23)Realizar limpieza y mantenimiento del sistema de frenos. Chequear desgaste de pastillas y bandas.</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act24'> 24)Verificar funciomiento de sistema A/A. Presion de Gas Refrigerante. Reemplazar filtro de aire cabina.</label></div>

                                                    </div>

                                                `;
                                    let rutina4 = `

                                                <div class='row'>
                                                    <div class='col-12'><label for='act25'> 25)Drenaje y reemplazo de refrigerante motor.</label></div>

                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act26'> 26)Ajuste del juego de válvulas del motor. Chequear compresion de motor.</label></div>

                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act27'> 27)Cambiar correa(s) del motor.</label></div>

                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act28'> 28)Reemplazar Bujias. Verificar estado de cables.</label></div>

                                                </div>

                                                <div class='row'>
                                                    <div class='col-12'><label for='act29'> 29)Chequear sistema de inyección (Si aplica).</label></div>

                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act30'> 30)Reemplazar aceite de caja de velocidades mecanicas y gomas protectoras.</label></div>

                                                </div>
                                                `;
                                    function detectarRutinaCercana(){
                                                    /** Comenzamos por guardar todos los números mayores a cero en un arreglo. */
                                                    var hrsParaRutina = [];
                                                    if ($('.rut1').text() > 0 ){
                                                        hrsParaRutina.push( $('.rut1').attr('kms') );
                                                    } else{
                                                    hrsParaRutina.push( $('.rut1').attr('kms') );
                                                    }
                                                    if ($('.rut2').text() > 0 ){
                                                        hrsParaRutina.push( $('.rut2').attr('kms') );
                                                    }
                                                    else{
                                                    hrsParaRutina.push( $('.rut2').attr('kms') );
                                                    }
                                                    if ($('.rut3').text() > 0 ){

                                                    hrsParaRutina.push( $('.rut3').attr('kms') );
                                                    }
                                                    else{
                                                    hrsParaRutina.push( $('.rut3').attr('kms') );
                                                    }
                                                    if ($('.rut4').text() > 0 ){
                                                        hrsParaRutina.push( $('.rut4').attr('kms') );
                                                    }
                                                    else{
                                                    hrsParaRutina.push( $('.rut4').attr('kms') );
                                                    }
                                                    console.log(hrsParaRutina);
                                                /** Luego hallamos el menor de los números de dicho arreglo. */
                                                    let menor = Math.min.apply(Math, hrsParaRutina);
                                                    console.log(menor);
                                                /** Luego comparamos para hallar a qué rutina corresponde ese número */
                                                    if  ($('.rut1').attr('kms') == menor ) {
                                                    alert('Rutina más cercana: 1.');
                                                    $('#rutina').html('Se aproximan las actividades para la <b>Rutina 1.</b>');
                                                    $('#actividadesCercanas').html(rutina1);
                                                    }
                                                    if ($('.rut2').attr('kms') == menor ){
                                                    alert('Rutina más cercana: 2.');
                                                    $('#rutina').html('Se aproximan las actividades para la <b>Rutina 2.</b>');
                                                    $('#actividadesCercanas').html(rutina2);
                                                    }
                                                    if ($('.rut3').attr('kms') == menor  ){
                                                    alert('Rutina más cercana: 3.');
                                                    $('#rutina').html('Se aproximan las actividades para la <b>Rutina 3.</b>');
                                                    $('#actividadesCercanas').html(rutina3);
                                                    }
                                                    if ($('.rut4').attr('kms') == menor ){
                                                    alert('Rutina más cercana: 4.');
                                                    $('#rutina').html('Se aproximan las actividades para la <b>Rutina 4.</b>');
                                                    $('#actividadesCercanas').html(rutina4);
                                                    }
                                        }

                                    function colorear() {
                                        //console.log(response);
                                        /** Coloring */
                                        // ------------ Rutina 1 -----------------------------------------------------//
                                            if ( $('.rut1').text() >= 1500 ){
                                                $('.rut1').css('background-color', '#DDF0EC');
                                            } else if ( $('.rut1').text() < 1500 && $('.rut1').text() >= 500 ) {
                                                $('.rut1').css('background-color', 'rgba(230,79,19, 0.6)');
                                            }
                                            else {
                                                $('.rut1').css('background-color', 'rgba(213,11,14,0.6)');
                                            }
                                        // ------------ Rutina 2 -----------------------------------------------------//
                                            if ( $('.rut2').text() >= 3000 ){
                                                $('.rut2').css('background-color', '#DDF0EC');
                                            } else if ( $('.rut2').text() < 3000 && $('.rut2').text() >= 1000 ) {
                                                $('.rut2').css('background-color', 'rgba(230,79,19, 0.6)');
                                            }
                                            else {
                                                $('.rut2').css('background-color', 'rgba(213,11,14,0.6)');
                                            }
                                        // ------------ Rutina 3 -----------------------------------------------------//
                                            if ( $('.rut3').text() >= 6000 ){
                                                $('.rut3').css('background-color', '#DDF0EC');
                                            } else if ( $('.rut3').text() < 6000 && $('.rut3').text() >= 2000 ) {
                                                $('.rut3').css('background-color', 'rgba(230,79,19, 0.6)');
                                            }
                                            else {
                                                $('.rut3').css('background-color', 'rgba(213,11,14,0.6)');
                                            }
                                        // ------------ Rutina 4 -----------------------------------------------------//
                                            if ( $('.rut4').text() >= 12000 ){
                                                $('.rut4').css('background-color', '#DDF0EC');
                                            } else if ( $('.rut4').text() < 12000 && $('.rut4').text() >= 4000 ) {
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
                            let equipo = '';



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
                        }
                        else{
                            /** Lets create another AJAX call, so we can solve the FIRST problem */
                            $.ajax({
                                type: "GET",
                                url: "php/mantenimientosKms/getMainRow.php", // Note como getMainRow ahora también calcula y actualiza el cálculo de kms
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
                                                        <td class='rut1' kms='${element.kmsReales1}' >${element.rutina1}</td>
                                                        <td class='rut2' kms='${element.kmsReales2}' >${element.rutina2}</td>
                                                        <td class='rut3' kms='${element.kmsReales3}' >${element.rutina3}</td>
                                                        <td class='rut4' kms='${element.kmsReales4}' >${element.rutina4}</td>
                                                    </tr>
                                                `
                                    });
                                    $('#registros').html(template);
                                    $('#registrosKms').html(templating);

                                    /**  */
                                    let rutina1 = `
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act1'>1)Revisar del estado de la(s) correa(s) del motor y comprobar tensión.</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act2'>2)Inspeccionar y limpiar filtro de aire.</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act3'>3)Revisar nivel de electrólito y de los bornes de la batería.</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act4'>4)Chequear niveles de aceite de la caja velocidades automatica  (Si aplica)</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act5'>5)Revisar nivel de refrigerante. Estado del radiador y mangueras</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act6'>6)Revisar estado y presion de inflado de cauchos. Chequeo del apriete de tuercas.</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act7'>7)Cambiar de aceite y del filtro del motor.</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act8'>8)Chequear funcionamiento del sistema electrico, luces e instrumentos</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act9'>9)Chequear frenos de servicio y estacionamiento. </label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act10'>10)Chequear fugas de agua, aceite y combustible</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act11'>11)Limpieza General, lavado y engrase.</label></div>

                                                    </div>

                                                    `;
                                    let rutina2 = `
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act12'> 12)Chequear graduación de embrague (Si Aplica)</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act13'> 13)Cambiar filtros de combustible</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act14'> 14)Realizar alineacion y balanceo de cauchos</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act15'> 15)Chequear sistema de dirección, falta de ajuste, estado de articulaciones, rotulas, protectores, etc  </label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act16'> 16)Chequear sistema de suspensión, condicion de amortiguadores, falta de ajuste en conexiones, etc</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act17'> 17)Limpiar filtro aire de cabina o antipolen del sistema de A/A.</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act18'> 18)Chequear nivel de aceite de caja de velocidades mecanica (Si Aplica)</label></div>

                                                    </div>
                                                    `
                                    let rutina3 = `
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act19'> 19)Reemplazar filtro de aire</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act20'> 20)Chequear condicion y funcionamiento de alternador y arranque</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act21'> 21)Reemplazar filtro y aceite de caja de velocidades automatica (Si Aplica)</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act22'> 22)Rotar cauchos </label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act23'> 23)Realizar limpieza y mantenimiento del sistema de frenos. Chequear desgaste de pastillas y bandas.</label></div>

                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-12'><label for='act24'> 24)Verificar funciomiento de sistema A/A. Presion de Gas Refrigerante. Reemplazar filtro de aire cabina.</label></div>

                                                    </div>

                                                `;
                                    let rutina4 = `

                                                <div class='row'>
                                                    <div class='col-12'><label for='act25'> 25)Drenaje y reemplazo de refrigerante motor.</label></div>

                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act26'> 26)Ajuste del juego de válvulas del motor. Chequear compresion de motor.</label></div>

                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act27'> 27)Cambiar correa(s) del motor.</label></div>

                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act28'> 28)Reemplazar Bujias. Verificar estado de cables.</label></div>

                                                </div>

                                                <div class='row'>
                                                    <div class='col-12'><label for='act29'> 29)Chequear sistema de inyección (Si aplica).</label></div>

                                                </div>
                                                <div class='row'>
                                                    <div class='col-12'><label for='act30'> 30)Reemplazar aceite de caja de velocidades mecanicas y gomas protectoras.</label></div>

                                                </div>
                                                `;
                                    function detectarRutinaCercana(){
                                                    /** Comenzamos por guardar todos los números mayores a cero en un arreglo. */
                                                    var hrsParaRutina = [];
                                                    if ($('.rut1').text() > 0 ){
                                                        hrsParaRutina.push( $('.rut1').attr('kms') );
                                                    } else{
                                                    hrsParaRutina.push( $('.rut1').attr('kms') );
                                                    }
                                                    if ($('.rut2').text() > 0 ){
                                                        hrsParaRutina.push( $('.rut2').attr('kms') );
                                                    }
                                                    else{
                                                    hrsParaRutina.push( $('.rut2').attr('kms') );
                                                    }
                                                    if ($('.rut3').text() > 0 ){

                                                    hrsParaRutina.push( $('.rut3').attr('kms') );
                                                    }
                                                    else{
                                                    hrsParaRutina.push( $('.rut3').attr('kms') );
                                                    }
                                                    if ($('.rut4').text() > 0 ){
                                                        hrsParaRutina.push( $('.rut4').attr('kms') );
                                                    }
                                                    else{
                                                    hrsParaRutina.push( $('.rut4').attr('kms') );
                                                    }
                                                    console.log(hrsParaRutina);
                                                /** Luego hallamos el menor de los números de dicho arreglo. */
                                                    let menor = Math.min.apply(Math, hrsParaRutina);
                                                    console.log(menor);
                                                /** Luego comparamos para hallar a qué rutina corresponde ese número */
                                                    if  ($('.rut1').attr('kms') == menor ) {
                                                    alert('Rutina más cercana: 1.');
                                                    $('#rutina').html('Se aproximan las actividades para la <b>Rutina 1.</b>');
                                                    $('#actividadesCercanas').html(rutina1);
                                                    }
                                                    if ($('.rut2').attr('kms') == menor ){
                                                    alert('Rutina más cercana: 2.');
                                                    $('#rutina').html('Se aproximan las actividades para la <b>Rutina 2.</b>');
                                                    $('#actividadesCercanas').html(rutina2);
                                                    }
                                                    if ($('.rut3').attr('kms') == menor  ){
                                                    alert('Rutina más cercana: 3.');
                                                    $('#rutina').html('Se aproximan las actividades para la <b>Rutina 3.</b>');
                                                    $('#actividadesCercanas').html(rutina3);
                                                    }
                                                    if ($('.rut4').attr('kms') == menor ){
                                                    alert('Rutina más cercana: 4.');
                                                    $('#rutina').html('Se aproximan las actividades para la <b>Rutina 4.</b>');
                                                    $('#actividadesCercanas').html(rutina4);
                                                    }
                                        }

                                    function colorear() {
                                        //console.log(response);
                                        /** Coloring */
                                        // ------------ Rutina 1 -----------------------------------------------------//
                                            if ( $('.rut1').text() >= 1500 ){
                                                $('.rut1').css('background-color', '#DDF0EC');
                                            } else if ( $('.rut1').text() < 1500 && $('.rut1').text() >= 500 ) {
                                                $('.rut1').css('background-color', 'rgba(230,79,19, 0.6)');
                                            }
                                            else {
                                                $('.rut1').css('background-color', 'rgba(213,11,14,0.6)');
                                            }
                                        // ------------ Rutina 2 -----------------------------------------------------//
                                            if ( $('.rut2').text() >= 3000 ){
                                                $('.rut2').css('background-color', '#DDF0EC');
                                            } else if ( $('.rut2').text() < 3000 && $('.rut2').text() >= 1000 ) {
                                                $('.rut2').css('background-color', 'rgba(230,79,19, 0.6)');
                                            }
                                            else {
                                                $('.rut2').css('background-color', 'rgba(213,11,14,0.6)');
                                            }
                                        // ------------ Rutina 3 -----------------------------------------------------//
                                            if ( $('.rut3').text() >= 6000 ){
                                                $('.rut3').css('background-color', '#DDF0EC');
                                            } else if ( $('.rut3').text() < 6000 && $('.rut3').text() >= 2000 ) {
                                                $('.rut3').css('background-color', 'rgba(230,79,19, 0.6)');
                                            }
                                            else {
                                                $('.rut3').css('background-color', 'rgba(213,11,14,0.6)');
                                            }
                                        // ------------ Rutina 4 -----------------------------------------------------//
                                            if ( $('.rut4').text() >= 12000 ){
                                                $('.rut4').css('background-color', '#DDF0EC');
                                            } else if ( $('.rut4').text() < 12000 && $('.rut4').text() >= 4000 ) {
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
                            let equipo = '';



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
                            $('.col2,.g').height( ($(document).height() ) );


                        }

                    }
                });

            }
        });
    }
    listThem();

    /** Filtering */
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
                url: "php/mantenimientosKms/filter.php",
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

});