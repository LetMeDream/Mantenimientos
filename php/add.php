<?php
    session_start();
     //Let's set a flag to guide us
    $ok = true;   //flag
    include('database.php');
    /** Recordemos que estamos recibiendo un objeto vía POST
     * con una propiedad 'tipoEquipo'
     */
    $deviceId = $_POST['deviceId'];


    if(isset($_POST['tipoEquipo'])){


        /* Validating tipo */
        if (!isset($_POST['tipoEquipo']) || ($_POST['tipoEquipo'] === '')){
            $ok = false;
            //$tipoEquipoErr='Diga el tipo de dispositivo.**';
        } else {
            $tipoEquipo = $_POST['tipoEquipo'];
        }
        /** Validating marca */
        if (!isset($_POST['marca']) || ($_POST['marca'] === '')){
            $ok = false;
            //$marcaErr='¿Cual es la marca del equipo?**';
        } else {
            $marca = $_POST['marca'];
        }
         /** Validating modelo */
         if (!isset($_POST['modelo']) || ($_POST['modelo'] === '')){
            $ok = false;
            //$modeloErr='Ingrese modelo del dispositivo.**';
        } else {
            $modelo = $_POST['modelo'];
        }
        /** Validating serial */
        if (!isset($_POST['serial']) || ($_POST['serial'] === '')){
           $ok = false;
           //$serialErr='Indique el serial de su dispositivo.**';
        } else {
            $serial = $_POST['serial'];
        }
        /** Validating arreglo */
        if (!isset($_POST['arreglo']) || ($_POST['arreglo'] === '')){
            $ok = false;
            //$arregloErr='¿Cual es su arreglo?**';
        } else {
            $arreglo = $_POST['arreglo'];
        }
        /** Validating placa */
        if (!isset($_POST['placa']) || ($_POST['placa'] === '')){
            $ok = false;
            //$placaErr='Indique el número de placa.**';
        } else {
            $placa = $_POST['placa'];
        }

        /** Validating fecha de ingreso */
        if (!isset($_POST['fechaIngreso']) || ($_POST['fechaIngreso'] === '')){
            $ok = false;

        } else {
            $fechaIngreso = $_POST['fechaIngreso'];
        }
        /** Validating Kilometraje */
        if (!isset($_POST['kilometraje']) || ($_POST['kilometraje'] === '')){
            $ok = false;

        } else {
            $kilometraje = $_POST['kilometraje'];
        }
        /** Validating horas de Uso */
        if (!isset($_POST['horasUso']) || ($_POST['horasUso'] === '')){
            $ok = false;

        } else {
            $horasUso = $_POST['horasUso'];
        }
        /** Validating Año de Fabricación */
        if (!isset($_POST['anoFabricacion']) || ($_POST['anoFabricacion'] === '')){
            $ok = false;

        } else {
            $anoFabricacion = $_POST['anoFabricacion'];
        }
        /** Validating Ubicación */
        if (!isset($_POST['ubicacion']) || ($_POST['ubicacion'] === '')){
            $ok = false;

        } else {
            $ubicacion = $_POST['ubicacion'];
        }
        /** Filtro Aceite Motor */
        if (!isset($_POST['filtroAceiteMotor']) || ($_POST['filtroAceiteMotor'] === '')){
            $ok = false;

        } else {
            $filtroAceiteMotor = $_POST['filtroAceiteMotor'];
        }
        /** Filtro Aceite Hidraulico */
        if (!isset($_POST['filtroAceiteHidraulico']) || ($_POST['filtroAceiteHidraulico'] === '')){
            $ok = false;

        } else {
            $filtroAceiteHidraulico = $_POST['filtroAceiteHidraulico'];
        }
        /** Filtro Aire Primario */
        if (!isset($_POST['filtroAirePrimario']) || ($_POST['filtroAirePrimario'] === '')){
            $ok = false;

        } else {
            $filtroAirePrimario = $_POST['filtroAirePrimario'];
        }
        /** Filtro Aire Secundario */
        if (!isset($_POST['filtroAireSecundario']) || ($_POST['filtroAireSecundario'] === '')){
            $ok = false;

        } else {
            $filtroAireSecundario = $_POST['filtroAireSecundario'];
        }
        /** Filtro Transmisión */
        if (!isset($_POST['filtroTransmision']) || ($_POST['filtroTransmision'] === '')){
            $ok = false;

        } else {
            $filtroTransmision = $_POST['filtroTransmision'];
        }
        /** Filtro Tanque Hidráulico */
        if (!isset($_POST['filtroTanqueHidraulico']) || ($_POST['filtroTanqueHidraulico'] === '')){
            $ok = false;

        } else {
            $filtroTanqueHidraulico = $_POST['filtroTanqueHidraulico'];
        }
        /** Filtro Combustible Primario */
        if (!isset($_POST['filtroCombustiblePrimario']) || ($_POST['filtroCombustiblePrimario'] === '')){
            $ok = false;

        } else {
            $filtroCombustiblePrimario = $_POST['filtroCombustiblePrimario'];
        }
        /** Filtro Combustible Secundario */
        if (!isset($_POST['filtroCombustibleSecundario']) || ($_POST['filtroCombustibleSecundario'] === '')){
            $ok = false;

        } else {
            $filtroCombustibleSecundario = $_POST['filtroCombustibleSecundario'];
        }
        /** Filtro Tanque Gasoil */
        if (!isset($_POST['filtroTanqueGasoil']) || ($_POST['filtroTanqueGasoil'] === '')){
            $ok = false;

        } else {
            $filtroTanqueGasoil = $_POST['filtroTanqueGasoil'];
        }
        /** Tipo de aceite hidráulico */
        if (!isset($_POST['tipoAceiteHidraulico']) || ($_POST['tipoAceiteHidraulico'] === '')){
            $ok = false;

        } else {
            $tipoAceiteHidraulico = $_POST['tipoAceiteHidraulico'];
        }
        /** Tipo de aceite motor */
        if (!isset($_POST['tipoAceiteMotor']) || ($_POST['tipoAceiteMotor'] === '')){
            $ok = false;

        } else {
            $tipoAceiteMotor = $_POST['tipoAceiteMotor'];
        }
        /** Tipo de aceite motor */
        if (!isset($_POST['tipoAceiteTransmision']) || ($_POST['tipoAceiteTransmision'] === '')){
            $ok = false;

        } else {
            $tipoAceiteTransmision = $_POST['tipoAceiteTransmision'];
        }
        /** Tipo de aceite caja */
        if (!isset($_POST['tipoAceiteCaja']) || ($_POST['tipoAceiteCaja'] === '')){
            $ok = false;

        } else {
            $tipoAceiteCaja = $_POST['tipoAceiteCaja'];
        }
        /** Capacidad carter motor */
        if (!isset($_POST['capacidadCarterMotor']) || ($_POST['capacidadCarterMotor'] === '')){
            $ok = false;

        } else {
            $capacidadCarterMotor = $_POST['capacidadCarterMotor'];
        }
        /** Capacidad carter motor */
        if (!isset($_POST['capacidadTanqueCaja']) || ($_POST['capacidadTanqueCaja'] === '')){
            $ok = false;

        } else {
            $capacidadTanqueCaja = $_POST['capacidadTanqueCaja'];
        }
        /** Capacidad carter motor */
        if (!isset($_POST['capacidadTanqueTransmision']) || ($_POST['capacidadTanqueTransmision'] === '')){
            $ok = false;

        } else {
            $capacidadTanqueTransmision = $_POST['capacidadTanqueTransmision'];
        }
         /** Capacidad carter motor */
         if (!isset($_POST['capacidadTanqueHidraulico']) || ($_POST['capacidadTanqueHidraulico'] === '')){
            $ok = false;

        } else {
            $capacidadTanqueHidraulico = $_POST['capacidadTanqueHidraulico'];
        }
        /** Actividades can't be free to access, tho. */
        $actividades = $_POST['actividades'];
        $comentariosActividades = $_POST['comentariosActividades'];

        /** Mandando valor al front End */
        echo json_encode(array("ok"=>$ok));

        if($ok){


            /** In between we are goin to get info back (marca,modelo,serial,arreglo) from previously registered users */
            /** So we will need to add it as well with the ON DUPLICATE KEY UPDATE mysql clause                       */
            $newSql = sprintf("INSERT INTO registrado_antes (nombre, kilometrajeEnFecha,horasEnFecha, marca, modelo, serial, arreglo, placa,deviceId,fecha,anoFabricacion,ubicacion,filtroAceiteMotor,filtroAceiteHidraulico,filtroAirePrimario,filtroAireSecundario,filtroTransmision,filtroTanqueHidraulico,filtroCombustiblePrimario,filtroCombustibleSecundario,filtroTanqueGasoil,tipoAceiteHidraulico,tipoAceiteMotor,tipoAceiteTransmision,tipoAceiteCaja,capacidadCarterMotor, capacidadTanqueCaja,capacidadTanqueTransmision,capacidadTanqueHidraulico) VALUES ('%s','%s','%s', '%s' ,'%s', '%s', '%s', '%s','%s','%s', '%s', '%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')
            ON DUPLICATE KEY UPDATE marca='%s',kilometrajeEnFecha='%s',horasEnFecha = '%s', modelo='%s', serial='%s', arreglo='%s', placa='%s', nombre='%s', fecha ='%s', anoFabricacion = '%s', ubicacion = '%s', filtroAceiteMotor ='%s', filtroAceiteHidraulico ='%s', filtroAirePrimario ='%s', filtroAireSecundario ='%s', filtroTransmision='%s',filtroTanqueHidraulico='%s',filtroCombustiblePrimario='%s',filtroCombustibleSecundario='%s',filtroTanqueGasoil='%s',tipoAceiteHidraulico='%s',tipoAceiteMotor='%s',tipoAceiteTransmision='%s',tipoAceiteCaja='%s',capacidadCarterMotor='%s',capacidadTanqueCaja='%s',capacidadTanqueTransmision='%s',capacidadTanqueHidraulico='%s'
            ", mysqli_real_escape_string($db, $tipoEquipo), mysqli_real_escape_string($db,$kilometraje)
                ,mysqli_real_escape_string($db, $horasUso),mysqli_real_escape_string($db, $marca),
                mysqli_real_escape_string($db, $modelo), mysqli_real_escape_string($db, $serial),
                mysqli_real_escape_string($db, $arreglo), mysqli_real_escape_string($db, $placa),$_POST['deviceId'],$fechaIngreso,
                mysqli_real_escape_string($db, $anoFabricacion), mysqli_real_escape_string($db, $ubicacion),
                mysqli_real_escape_string($db, $filtroAceiteMotor), mysqli_real_escape_string($db, $filtroAceiteHidraulico),
                mysqli_real_escape_string($db, $filtroAirePrimario),mysqli_real_escape_string($db, $filtroAireSecundario),
                mysqli_real_escape_string($db,$filtroTransmision),mysqli_real_escape_string($db,$filtroTanqueHidraulico),
                mysqli_real_escape_string($db,$filtroCombustiblePrimario),mysqli_real_escape_string($db,$filtroCombustibleSecundario),
                /** last 4 */
                mysqli_real_escape_string($db,$filtroTanqueGasoil),mysqli_real_escape_string($db,$tipoAceiteHidraulico),
                mysqli_real_escape_string($db,$tipoAceiteMotor), mysqli_real_escape_string($db,$tipoAceiteTransmision),
                /** Up to here */

                mysqli_real_escape_string($db,$tipoAceiteCaja),mysqli_real_escape_string($db,$capacidadCarterMotor),
                mysqli_real_escape_string($db,$capacidadTanqueCaja),mysqli_real_escape_string($db,$capacidadTanqueTransmision),
                mysqli_real_escape_string($db,$capacidadTanqueHidraulico),/** up to here */
                mysqli_real_escape_string($db, $marca),
                //Actividades on update
                mysqli_real_escape_string($db,$kilometraje),mysqli_real_escape_string($db, $horasUso)
                 ,mysqli_real_escape_string($db, $modelo),
                mysqli_real_escape_string($db, $serial), mysqli_real_escape_string($db, $arreglo),
                mysqli_real_escape_string($db, $placa),mysqli_real_escape_string($db, $tipoEquipo),$fechaIngreso,
                mysqli_real_escape_string($db, $anoFabricacion), mysqli_real_escape_string($db, $ubicacion),
                /**4 more */
                mysqli_real_escape_string($db, $filtroAceiteMotor), mysqli_real_escape_string($db, $filtroAceiteHidraulico),
                mysqli_real_escape_string($db, $filtroAirePrimario),mysqli_real_escape_string($db, $filtroAireSecundario),
                /**4 more */
                mysqli_real_escape_string($db,$filtroTransmision),mysqli_real_escape_string($db,$filtroTanqueHidraulico),
                mysqli_real_escape_string($db,$filtroCombustiblePrimario),mysqli_real_escape_string($db,$filtroCombustibleSecundario),
                /** last 4 */
                mysqli_real_escape_string($db,$filtroTanqueGasoil),mysqli_real_escape_string($db,$tipoAceiteHidraulico),
                mysqli_real_escape_string($db,$tipoAceiteMotor), mysqli_real_escape_string($db,$tipoAceiteTransmision),

                mysqli_real_escape_string($db,$tipoAceiteCaja),mysqli_real_escape_string($db,$capacidadCarterMotor),
                mysqli_real_escape_string($db,$capacidadTanqueCaja),mysqli_real_escape_string($db,$capacidadTanqueTransmision),
                mysqli_real_escape_string($db,$capacidadTanqueHidraulico)
                );

            $newQuery = mysqli_query($db, $newSql);





            mysqli_close($db);
        }
    }


?>
