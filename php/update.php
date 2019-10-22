<?php
    session_start();
     //Let's set a flag to guide us
    $ok = true;   //flag
    $error = ''; //Error
    include('database.php');
    /** Recordemos que estamos recibiendo un objeto vía POST
     * con una propiedad 'tipoEquipo'
     */
    if(isset($_POST['tipoEquipo'])){


        /* Validating tipo */
        if (!isset($_POST['tipoEquipo']) || ($_POST['tipoEquipo'] === '')){
            $ok = false;
            $error = '1';
            //$tipoEquipoErr='Diga el tipo de dispositivo.**';
        } else {
            $tipoEquipo = $_POST['tipoEquipo'];
        }
        /** Validating marca */
        if (!isset($_POST['marca']) || ($_POST['marca'] === '')){
            $ok = false;
            $error = '2';
            //$marcaErr='¿Cual es la marca del equipo?**';
        } else {
            $marca = $_POST['marca'];
        }
         /** Validating modelo */
         if (!isset($_POST['modelo']) || ($_POST['modelo'] === '')){
            $ok = false;
            $error = '3';
            //$modeloErr='Ingrese modelo del dispositivo.**';
        } else {
            $modelo = $_POST['modelo'];
        }
        /** Validating serial */
        if (!isset($_POST['serial']) || ($_POST['serial'] === '')){
           $ok = false;
           $error = '4';
           //$serialErr='Indique el serial de su dispositivo.**';
        } else {
            $serial = $_POST['serial'];
        }
        /** Validating arreglo */
        if (!isset($_POST['arreglo']) || ($_POST['arreglo'] === '')){
            $ok = false;
            $error = '5';
            //$arregloErr='¿Cual es su arreglo?**';
        } else {
            $arreglo = $_POST['arreglo'];
        }
        /** Validating placa */
        if (!isset($_POST['placa']) || ($_POST['placa'] === '')){
            $ok = false;
            $error = '6';
            //$placaErr='Indique el número de placa.**';
        } else {
            $placa = $_POST['placa'];
        }

        /** Validating fecha de ingreso */
        if (!isset($_POST['fechaIngreso']) || ($_POST['fechaIngreso'] === '')){
            $ok = false;
            $error = '8';

        } else {
            $fechaIngreso = $_POST['fechaIngreso'];
        }
        /** Validating Kilometraje */
        if (!isset($_POST['kilometraje']) || ($_POST['kilometraje'] === '')){
            $ok = false;
            $error = '9';

        } else {
            $kilometraje = $_POST['kilometraje'];
        }
        /** Validating horas de Uso */
        if (!isset($_POST['horasUso']) || ($_POST['horasUso'] === '')){
            $ok = false;
            $error = '10';

        } else {
            $horasUso = $_POST['horasUso'];
        }
        /** Validating Año de Fabricación */
        if (!isset($_POST['anoFabricacion']) || ($_POST['anoFabricacion'] === '')){
            $ok = false;
            $error = '11';

        } else {
            $anoFabricacion = $_POST['anoFabricacion'];
        }
        /** Validating Ubicación */
        if (!isset($_POST['ubicacion']) || ($_POST['ubicacion'] === '')){
            $ok = false;
            $error = '12';

        } else {
            $ubicacion = $_POST['ubicacion'];
        }
        /** Filtro Aceite Motor */
        if (!isset($_POST['filtroAceiteMotor']) || ($_POST['filtroAceiteMotor'] === '')){
            $ok = false;
            $error = '13';

        } else {
            $filtroAceiteMotor = $_POST['filtroAceiteMotor'];
        }
        /** Filtro Aceite Hidraulico */
        if (!isset($_POST['filtroAceiteHidraulico']) || ($_POST['filtroAceiteHidraulico'] === '')){
            $ok = false;
            $error = '14';

        } else {
            $filtroAceiteHidraulico = $_POST['filtroAceiteHidraulico'];
        }
        /** Filtro Aire Primario */
        if (!isset($_POST['filtroAirePrimario']) || ($_POST['filtroAirePrimario'] === '')){
            $ok = false;
            $error = '15';

        } else {
            $filtroAirePrimario = $_POST['filtroAirePrimario'];
        }
        /** Filtro Aire Secundario */
        if (!isset($_POST['filtroAireSecundario']) || ($_POST['filtroAireSecundario'] === '')){
            $ok = false;
            $error = '16';

        } else {
            $filtroAireSecundario = $_POST['filtroAireSecundario'];
        }
        /** Filtro Transmisión */
        if (!isset($_POST['filtroTransmision']) || ($_POST['filtroTransmision'] === '')){
            $ok = false;
            $error = '17';

        } else {
            $filtroTransmision = $_POST['filtroTransmision'];
        }
        /** Filtro Tanque Hidráulico */
        if (!isset($_POST['filtroTanqueHidraulico']) || ($_POST['filtroTanqueHidraulico'] === '')){
            $ok = false;
            $error='18';

        } else {
            $filtroTanqueHidraulico = $_POST['filtroTanqueHidraulico'];
        }
        /** Filtro Combustible Primario */
        if (!isset($_POST['filtroCombustiblePrimario']) || ($_POST['filtroCombustiblePrimario'] === '')){
            $ok = false;
            $error='19';

        } else {
            $filtroCombustiblePrimario = $_POST['filtroCombustiblePrimario'];
        }
        /** Filtro Combustible Secundario */
        if (!isset($_POST['filtroCombustibleSecundario']) || ($_POST['filtroCombustibleSecundario'] === '')){
            $ok = false;
            $error='20';

        } else {
            $filtroCombustibleSecundario = $_POST['filtroCombustibleSecundario'];
        }
        /** Filtro Tanque Gasoil */
        if (!isset($_POST['filtroTanqueGasoil']) || ($_POST['filtroTanqueGasoil'] === '')){
            $ok = false;
            $error='21';

        } else {
            $filtroTanqueGasoil = $_POST['filtroTanqueGasoil'];
        }
        /** Tipo de aceite hidráulico */
        if (!isset($_POST['tipoAceiteHidraulico']) || ($_POST['tipoAceiteHidraulico'] === '')){
            $ok = false;
            $error='22';

        } else {
            $tipoAceiteHidraulico = $_POST['tipoAceiteHidraulico'];
        }
        /** Tipo de aceite motor */
        if (!isset($_POST['tipoAceiteMotor']) || ($_POST['tipoAceiteMotor'] === '')){
            $ok = false;
            $error='23';

        } else {
            $tipoAceiteMotor = $_POST['tipoAceiteMotor'];
        }
        /** Tipo de aceite motor */
        if (!isset($_POST['tipoAceiteTransmision']) || ($_POST['tipoAceiteTransmision'] === '')){
            $ok = false;
            $error = '24';

        } else {
            $tipoAceiteTransmision = $_POST['tipoAceiteTransmision'];
        }
        /** Tipo de aceite caja */
        if (!isset($_POST['tipoAceiteCaja']) || ($_POST['tipoAceiteCaja'] === '')){
            $ok = false;
            $error = '25';

        } else {
            $tipoAceiteCaja = $_POST['tipoAceiteCaja'];
        }
        /** Capacidad carter motor */
        if (!isset($_POST['capacidadCarterMotor']) || ($_POST['capacidadCarterMotor'] === '')){
            $ok = false;
            $error = '26';

        } else {
            $capacidadCarterMotor = $_POST['capacidadCarterMotor'];
        }
        /** Capacidad carter motor */
        if (!isset($_POST['capacidadTanqueCaja']) || ($_POST['capacidadTanqueCaja'] === '')){
            $ok = false;
            $error = '27';

        } else {
            $capacidadTanqueCaja = $_POST['capacidadTanqueCaja'];
        }
        /** Capacidad carter motor */
        if (!isset($_POST['capacidadTanqueTransmision']) || ($_POST['capacidadTanqueTransmision'] === '')){
            $ok = false;
            $error = '28';

        } else {
            $capacidadTanqueTransmision = $_POST['capacidadTanqueTransmision'];
        }
         /** Capacidad carter motor */
         if (!isset($_POST['capacidadTanqueHidraulico']) || ($_POST['capacidadTanqueHidraulico'] === '')){
            $ok = false;
            $error = '29';

        } else {
            $capacidadTanqueHidraulico = $_POST['capacidadTanqueHidraulico'];
        }
        /** Mandando valor al front End */
        echo json_encode(array(
                                "ok"=>$ok,
                                "error"=>$error));

        /** Actividades can't be free to access, tho. */
        $actividades = $_POST['actividades'];
        $comentariosActividades = $_POST['comentariosActividades'];
        /** Observaciones can't be free to access either */


        /** */

        if($ok){
            //SQL order that actually adds them
            /** Session variable captured from getSimpleTask. */
            //$id = $_SESSION['myId'];
            //$sql = sprintf ("UPDATE mt_records SET  comentarios_actividades = '%s' , marca='%s', actividades='%s' ,modelo='%s',serial='%s',arreglo='%s',numeroPlaca='%s',fechaIngreso='%s',kilometrajeEnFecha='%s',horasEnFecha='%s',anoFabricacion='%s',ubicacion='%s',filtroAceiteMotor='%s',filtroAceiteHidraulico='%s',filtroAirePrimario='%s',filtroAireSecundario='%s',filtroTransmision='%s',filtroTanqueHidraulico='%s',filtroCombustiblePrimario='%s',filtroCombustibleSecundario='%s'/**Up here*/,filtroTanqueGasoil='%s',tipoAceiteHidraulico='%s',tipoAceiteMotor='%s',tipoAceiteTransmision='%s'/**To here*/,tipoAceiteCaja='%s',capacidadCarterMotor='%s',capacidadTanqueCaja='%s',capacidadTanqueTransmision='%s',capacidadTanqueHidraulico='%s'  WHERE id='%s' ",
            //    mysqli_real_escape_string($db,$comentariosActividades),
            //    mysqli_real_escape_string($db, $marca),mysqli_real_escape_string($db,$actividades),
            //    mysqli_real_escape_string($db, $modelo),mysqli_real_escape_string($db, $serial),
            //    mysqli_real_escape_string($db, $arreglo),mysqli_real_escape_string($db, $placa),
            //    mysqli_real_escape_string($db, $fechaIngreso),
            //    mysqli_real_escape_string($db, $kilometraje),mysqli_real_escape_string($db,$horasUso),
            //    mysqli_real_escape_string($db, $anoFabricacion),mysqli_real_escape_string($db,$ubicacion),
            //    mysqli_real_escape_string($db, $filtroAceiteMotor),mysqli_real_escape_string($db,$filtroAceiteHidraulico),
            //    mysqli_real_escape_string($db, $filtroAirePrimario),mysqli_real_escape_string($db,$filtroAireSecundario),/** From here */
            //    mysqli_real_escape_string($db, $filtroTransmision),mysqli_real_escape_string($db,$filtroTanqueHidraulico),
            //    mysqli_real_escape_string($db, $filtroCombustiblePrimario),mysqli_real_escape_string($db,$filtroCombustibleSecundario),/** To here */
            //    mysqli_real_escape_string($db, $filtroTanqueGasoil),mysqli_real_escape_string($db,$tipoAceiteHidraulico),
            //    mysqli_real_escape_string($db, $tipoAceiteMotor),mysqli_real_escape_string($db,$tipoAceiteTransmision),/** 4 more to go */
            //    mysqli_real_escape_string($db, $tipoAceiteCaja),mysqli_real_escape_string($db,$capacidadCarterMotor),
            //    mysqli_real_escape_string($db, $capacidadTanqueCaja),mysqli_real_escape_string($db,$capacidadTanqueTransmision),
            //    mysqli_real_escape_string($db,$capacidadTanqueHidraulico),
            //    $id);
            //    /** They are all done now */


            //    mysqli_query($db, $sql);

            /** In between we are goin to get info back (marca,modelo,serial,arreglo) from previously registered users */
            /** So we will need to add it as well with the ON DUPLICATE KEY UPDATE mysql clause                       */
            $anID = $_SESSION['devId'];
            $newSql = sprintf("UPDATE registrado_antes SET actividades='%s' , marca='%s', modelo='%s', serial = '%s', arreglo='%s' , placa='%s', fecha='%s', anoFabricacion='%s', ubicacion = '%s', filtroAceiteMotor = '%s', filtroAceiteHidraulico = '%s', filtroAirePrimario = '%s', filtroAireSecundario = '%s',filtroTransmision='%s',filtroTanqueHidraulico='%s',filtroCombustiblePrimario='%s',filtroCombustibleSecundario='%s',/**From here*/filtroTanqueGasoil='%s',tipoAceiteHidraulico='%s',tipoAceiteMotor='%s',tipoAceiteTransmision='%s'/**to here*/,tipoAceiteCaja='%s',capacidadCarterMotor='%s',capacidadTanqueCaja='%s',capacidadTanqueTransmision='%s',capacidadTanqueHidraulico='%s'  WHERE deviceId='%s'  ",
                mysqli_real_escape_string($db,$actividades),mysqli_real_escape_string($db, $marca),
                mysqli_real_escape_string($db, $modelo),mysqli_real_escape_string($db, $serial),
                mysqli_real_escape_string($db, $arreglo),mysqli_real_escape_string($db, $placa),mysqli_real_escape_string($db, $fechaIngreso),
                mysqli_real_escape_string($db, $anoFabricacion),mysqli_real_escape_string($db,$ubicacion),
                mysqli_real_escape_string($db, $filtroAceiteMotor),mysqli_real_escape_string($db,$filtroAceiteHidraulico),
                mysqli_real_escape_string($db, $filtroAirePrimario),mysqli_real_escape_string($db,$filtroAireSecundario),
                /**4 More */
                mysqli_real_escape_string($db, $filtroTransmision),mysqli_real_escape_string($db,$filtroTanqueHidraulico),
                mysqli_real_escape_string($db, $filtroCombustiblePrimario),mysqli_real_escape_string($db,$filtroCombustibleSecundario),
                /**Another 4 */
                mysqli_real_escape_string($db, $filtroTanqueGasoil),mysqli_real_escape_string($db,$tipoAceiteHidraulico),
                mysqli_real_escape_string($db, $tipoAceiteMotor),mysqli_real_escape_string($db,$tipoAceiteTransmision),
                /** done 5 more */
                mysqli_real_escape_string($db, $tipoAceiteCaja),mysqli_real_escape_string($db,$capacidadCarterMotor),
                mysqli_real_escape_string($db, $capacidadTanqueCaja),mysqli_real_escape_string($db,$capacidadTanqueTransmision),
                mysqli_real_escape_string($db,$capacidadTanqueHidraulico),
                $anID);

            $newQuery = mysqli_query($db, $newSql);



                mysqli_close($db);


        }
    }


?>