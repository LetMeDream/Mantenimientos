<?php 
    session_start();
    $id = $_POST['id'];
    include('database.php');
    $user = $_SESSION['user'];

    /** Acá es más complicado que en los otros archivos 'listing.php', Aunque no es un 'listing' en este caso.
     * 
     * Acá primero tenemos que obtener SÓLO el id de los devices del user Logueado, para ello usaremos la variable $id declarada arriba.
     * Luego habrá que conectar a otra tabla y obtener la información real de los devices.
    */
    
    $query = "SELECT * FROM tc_user_device  WHERE userid LIKE $id ";
    $res = mysqli_query($dbPiston, $query);
    /** REMEMBER TO EITHER CONFIRM OR KILL YOUR QUERIES */
    if (!$res){
        die('Querie failed: '. mysqli_error($db));
    }
    $devices = array();
    /**y ese arreglo luego a JSON */
    while($row = mysqli_fetch_array($res)){
        
        array_push($devices,  $row['deviceid']);
     
    }
    /**Codifiquemos el array obtenido a un string de json */   
    //print_r ($devices);
    $timeAlarm = array();
    $longitud = count($devices);
    for ($i = 0; $i < $longitud; $i++){

        $query2 = "SELECT * FROM tc_devices WHERE id LIKE $devices[$i]";
        $result = mysqli_query($dbPiston, $query2);
        $myRow = mysqli_fetch_array($result);
        //StringtotimePHPMANUAL
        $xs = strtotime($myRow['lastupdate']);
        $ss = date($xs);
        // get current time
        $now = time();
        //variable que controlará los colores
        // Since Ivy is testing, some error handling must be done.
        if( is_numeric($now) && is_numeric($ss) ){
            $timeElapsed = ($now-$ss-22350);//error; trust me
        }else{
            $timeElapsed = 172801;
        }



        if ( ($timeElapsed>=86400)&($timeElapsed<=172800) ){
            array_push($timeAlarm, $timeElapsed);
        }
        if ($timeElapsed<86400){
            array_push($timeAlarm, $timeElapsed);
        }
        if ($timeElapsed>172800){
            array_push($timeAlarm, $timeElapsed);
        }

    }
    $myJson= json_encode($timeAlarm);
    
    echo $myJson;

?>