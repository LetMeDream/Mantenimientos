
$(function () {
    /* Enabling tool tips*/
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })


    /** For navigation */
    $(document).on('click', '#historial', function(e){
        //e.preventDefault();
        window.location.href = 'historial.php';

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

    /** Navigating */
     $(document).on('click', '#mantenimientos', function(){
        document.location = 'vehiculos.php';
    })
    /** For navigation END*/
    $(document).on('click', '#imprimible1,#imprimible2,#imprimible3,#imprimible4', function(){
        /** Cinco */
        var w = window.open('css/img/formato_mp.pdf');
            w.print();
    });

    /** Trying to create a custom PDF  */
    $(document).on('click', '#imprimibleDetallado', function(){
        /**  */
        window.open('php/ultimoMantenimiento/pdfDetalladoKms.php', '_blank');


    });



    /** Esto se supone que hará lo mismo que MantenimientosApp. Sólo que únicamente listando el último mantenimiento
    *  y sin tener en cuenta los mantenimientos por venir.
    */
    function listando(){

        $.ajax({
            type: "GET",
            url: "php/ultimoMantenimiento/listaloKms.php",

            success: function (response) {
                console.log(response);

                let equipo = JSON.parse(response);
                let template = ''; let nombre = '';
                equipo.forEach(y => {
                    //back ticks magics
                    equipo = `
                                <a idHoras=${y.idHoras} href='#' class='gooHoras'>${y.nombre}</a>
                            `;

                    equipoSinLink = `
                        ${y.nombre}
                    `;


                    template += `

                    <div class='contenApp my-4'>
                    <div class=''>
                        ${y.fechaIngreso}
                    </div>









                        <table class='table table-bordered table-sm' style='margin-top:-0px'>
                            <thead class='tabledark' id='tableWeird'>
                                <tr>

                                    <td> Rutina de mantenimiento Nº: ${y.rutina}</td><img id='imprimibleDetallado' class='abs' src='css/img/printer.svg' width='20'>

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
                $('#equipo').html(nombre);
                //$('#registros').html(template);
                $('#inHere').html(template);
            }
        });

        $.ajax({
            type: "GET",
            url: "php/ultimoMantenimiento/getMainRowKms.php",

            success: function (response) {
                console.log(response);
                let mainRow = JSON.parse(response);
                let aTemplate = ''; let templating = ''; let nombre = '';
                mainRow.forEach(element => {
                    aTemplate +=
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
                                    <td class='rut1' hrs='${element.kmsReales1}' >${element.rutina1}</td>
                                    <td class='rut2' hrs='${element.kmsReales2}' >${element.rutina2}</td>
                                    <td class='rut3' hrs='${element.kmsReales3}' >${element.rutina3}</td>
                                    <td class='rut4' hrs='${element.kmsReales4}' >${element.rutina4}</td>
                                </tr>
                            `
                    nombre = element.nombre;
                });
                //$('#registros').html(aTemplate);
                $('#registrosHoras').html(templating);
                $('#equipo').html(nombre);

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
                       /* $('#rutina').html('Se aproximan las actividades para la <b>Rutina 1.</b>');
                       $('#actividadesCercanas').html(rutina1); */
                    }
                    if ($('.rut2').attr('hrs') == menor ){
                       alert('Rutina más cercana: 2.');
                       /* $('#rutina').html('Se aproximan las actividades para la <b>Rutina 2.</b>');
                       $('#actividadesCercanas').html(rutina2); */
                    }
                    if ($('.rut3').attr('hrs') == menor  ){
                       alert('Rutina más cercana: 3.');
                      /*  $('#rutina').html('Se aproximan las actividades para la <b>Rutina 3.</b>');
                       $('#actividadesCercanas').html(rutina3); */
                    }
                    if ($('.rut4').attr('hrs') == menor ){
                       alert('Rutina más cercana: 4.');
                       /* $('#rutina').html('Se aproximan las actividades para la <b>Rutina 4.</b>');
                       $('#actividadesCercanas').html(rutina4); */
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


            }

        });




    }
    listando();


});