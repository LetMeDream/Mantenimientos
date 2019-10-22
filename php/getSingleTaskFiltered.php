<?php
    session_start();
    include('database.php');

    $id = $_POST['id'];

    $_SESSION['myId'] = $id;


    $sql = "SELECT * FROM mt_records WHERE id LIKE '$id' ";
    $res = mysqli_query($db, $sql);

    if(!$res){
        die('Query error:   '. mysqli_error($db));
    }


    /** Crearemos un arreglo para guardar el objeto JSON que será enviado al front end.
     *
     *  ******        CREACIÓN DEL JSON       ******
     *
    */
    $json = array();
    /** While there's a result */
    while($row = mysqli_fetch_array($res)){
        /** La variable json será llenada en cada recorrido del bucle */
        $json[] = array(
            'tipoEquipo' => $row['tipoDeEquipo'],
            'marca' => $row['marca'],
            'modelo' => $row['modelo'],
            'serial' => $row['serial'],
            'arreglo' => $row['arreglo'],
            'placa' => $row['numeroPlaca'],
            'tipoMantenimiento' => $row['tipoMantenimiento'],
            'fechaIngreso' => $row['fechaIngreso'],
            'kilometraje' => $row['kilometrajeEnFecha'],
            'horasUso' => $row['horasEnFecha'],
            'anoFabricacion' => $row['anoFabricacion'],
            'ubicacion' => $row['ubicacion'],
            'filtroAceiteMotor' => $row['filtroAceiteMotor'],
            'filtroAceiteHidraulico' => $row['filtroAceiteHidraulico'],
            'filtroAirePrimario' => $row['filtroAirePrimario'],
            'filtroAireSecundario' => $row['filtroAireSecundario'],
            'filtroTransmision' => $row['filtroTransmision'],
            'filtroTanqueHidraulico' => $row['filtroTanqueHidraulico'],
            'filtroCombustiblePrimario' => $row['filtroCombustiblePrimario'],
            'filtroCombustibleSecundario' => $row['filtroCombustibleSecundario'],
            'filtroTanqueGasoil' => $row['filtroTanqueGasoil'],
            'tipoAceiteHidraulico' => $row['tipoAceiteHidraulico'],
            'tipoAceiteMotor' => $row['tipoAceiteMotor'],
            'tipoAceiteTransmision' => $row['tipoAceiteTransmision'],
            'tipoAceiteCaja' => $row['tipoAceiteCaja'],
            'capacidadCarterMotor' => $row['capacidadCarterMotor'],
            'capacidadTanqueCaja' => $row['capacidadTanqueCaja'],
            'capacidadTanqueTransmision' => $row['capacidadTanqueTransmision'],
            'capacidadTanqueHidraulico' => $row['capacidadTanqueHidraulico'],
            'observaciones' => $row['observaciones']

        );
    }
    /** Lets try to actually create the JSON now then */
    $jsonString = json_encode($json); /**  But just our first element */

    /** Now let's return the actual string to the front-end somehow... */
    echo $jsonString;   /** Remember this is just the STRING form of a JSON representing an Array. */

?>