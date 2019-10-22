<?php

    session_start();
    $id = $_SESSION['userId'];
    include('database.php');
    $user = $_SESSION['user'];

    $query = "SELECT * FROM tc_user_device "; /** WHEE userid LIKE $id"; * Conexión a tabla que relaciona los usuarios a sus dispositivos
    * ---------------------------------------------------------------- (tc_user_device).
    * We will also clear OUR DATABASE so we can filter in a future */
    //$dangerquery =  "DELETE * FROM filtroPosicion";
    $del = mysqli_query($db, "TRUNCATE TABLE `filtroPosicion`");
    //$delete = mysqli_query($db, "TRUNCATE TABLE `equipos`");
    /* ----------------------------------------------------------------  */
    $res = mysqli_query($dbPiston, $query);
    /** REMEMBER TO EITHER CONFIRM OR KILL YOUR QUERIES */
    if (!$res){
        die('Querie failed: '. mysqli_error($db));
    }
    //$json = array();
    $devices = array();
    /** Iteramos por el querie recibido y guardamos cada uno de sus valores en un arreglo mediante array_push(); */
    while($row = mysqli_fetch_array($res)){
        array_push($devices,  $row['deviceid']);
    }
    /** Número de registro */
    $number = 0;
     /**y ese arreglo será llevado luego a JSON
      * Peeeeeeero, ahora viene lo nuevo.
     */
    $longitud = count($devices);

    for($i = 0;$i < $longitud;$i++){
                //getName
                $queryx = "SELECT * FROM tc_devices WHERE id LIKE $devices[$i]";
                $resultx = mysqli_query($dbPiston, $queryx);
                $myRowx = mysqli_fetch_array($resultx);
                //getName end

                //getRest
                $query2 = "SELECT    *
                FROM      tc_positions WHERE deviceid LIKE $devices[$i]
                ORDER BY  id DESC
                LIMIT     1";

                $result= mysqli_query($dbPiston,$query2);
                $myRow = mysqli_fetch_array($result);
                //getRest end

                /** I need now to access some data which is, imho, an
                 *  ************ OBJECT WITHIN ARRAY ****************
                 */

                // It wasn't an 'object' but a JSON (hurr)
                $a = json_decode($myRow['attributes']);
                $first = $a->totalDistance;
                $km = $first/1000;
                $distanciaT = $km . ' km.';


                // Comenzemos con el proceso de las horas Motor

                /** Finally, what i had been looking for
                 * a JSON holding value from tc_positions
                 */

                //condicional para devices con horas Motor
                if(isset($a->hours)){
                    $milisecs = $a->hours;
                    /**milisegundo a horas*/
                    /**but let's round it first. */
                    $roundedHoras = round($milisecs/3600000,3);

                    $horas = $roundedHoras;
                    //Conectando a filtroPosicion (Para filtrar)
                    $hardsql = sprintf("INSERT INTO filtroPosicion (nombre, velocidad, latitud, longitud, distanciaRecorrida,horasMotor, updateNumber,deviceId) VALUES ('%s', '%s', '%s','%s', '%s','%s', '%s','%s')
                    ",  mysqli_real_escape_string($db, $myRowx['name']),

                        mysqli_real_escape_string($db, $myRow['speed']),
                        mysqli_real_escape_string($db, $myRow['latitude']),
                        mysqli_real_escape_string($db, $myRow['longitude']),
                        mysqli_real_escape_string($db, $distanciaT),
                        mysqli_real_escape_string($db, $horas),
                        mysqli_real_escape_string($db, $myRow['id']),
                        mysqli_real_escape_string($db, $devices[$i]) );
                    //Conectando a 'equipos' para el calculo de horas, sólo en caso de existir horas
                    $equipoSql = sprintf("INSERT INTO equipos (equipo, hrsMotor,kilometraje,deviceId) VALUES ('%s', '%s','%s','%s')
                        ON DUPLICATE KEY UPDATE hrsMotor='%s', kilometraje='%s' ",
                    $myRowx['name'],
                    $horas, $km,
                    $myRow['deviceid'],
                    $horas, $km);

                        mysqli_query($db, $equipoSql);
                    // Si sí hay horas, crea un json con horasMotor
                    $number += 1;
                        $jsonPosition[] = array(
                            'number' => $number,
                            'numb' => $myRowx['name'],
                            'id' => $myRow['deviceid'],
                            'velocidad' => $myRow['speed'],

                            'horasMotor' => $horas,
                            'updateNumber' => $myRow['id'],
                            'distance' => $distanciaT
                        );

                } else {
                    //Conectando a filtroPosicion (Para filtrar)
                    $hardsql = sprintf("INSERT INTO filtroPosicion (nombre, velocidad, latitud, longitud, distanciaRecorrida, updateNumber,deviceId) VALUES ('%s', '%s', '%s','%s', '%s', '%s','%s')
                    ",  mysqli_real_escape_string($db, $myRowx['name']),

                    mysqli_real_escape_string($db, $myRow['speed']),
                    mysqli_real_escape_string($db, $myRow['latitude']),
                    mysqli_real_escape_string($db, $myRow['longitude']),
                    mysqli_real_escape_string($db, $distanciaT),

                    mysqli_real_escape_string($db, $myRow['id']),
                    mysqli_real_escape_string($db, $devices[$i]));

                    // Si no hay horas, crea json sin horasMotor
                    $number += 1;
                    $jsonPosition[] = array(
                        'number' => $number,
                        'numb' => $myRowx['name'],
                        'id' => $myRow['deviceid'],
                        'velocidad' => $myRow['speed'],

                        'horasMotor' => '',
                        'updateNumber' => $myRow['id'],
                        'distance' => $distanciaT
                    );
                }
                mysqli_query($db, $hardsql);


    }

    $long = count($jsonPosition);
    $jsonString = json_encode($jsonPosition);
    // jsonEncoded var
    echo $jsonString;

?>