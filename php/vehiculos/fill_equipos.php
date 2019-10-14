<?php 

    session_start();
    $id = $_SESSION['userId'];
    include('database.php');
    $user = $_SESSION['user'];  

    $query2 = "SELECT * FROM equipos";// WHERE userid LIKE '$id'";
    $res2 = mysqli_query($db, $query2);
    /** REMEMBER TO EITHER CONFIRM OR KILL YOUR QUERIES */
    if (!$res2){
        die('Querie failed: '. mysqli_error($dbPiston));
    }

    /** Transformemos el querie recibido a arreglo */


    $devices = array();
    /**y ese arreglo luego a JSON */
    while($row2 = mysqli_fetch_array($res2)){
        array_push($devices,  $row2['deviceId']);
    
    }

    $longitud = count($devices);
    $array = array();

    for ($i = 0; $i < $longitud; $i++){

            
        $query = "SELECT * FROM equipos WHERE deviceId like $devices[$i]";
        $res = mysqli_query($db, $query);
        /** REMEMBER TO EITHER CONFIRM OR KILL YOUR QUERIES */
        if (!$res){
            die('Querie failed: '. mysqli_error($db));
        }
        $row = mysqli_fetch_array($res);
        
        if($row!=null){
            $array[] = array(
                'equipo' => $row['equipo'],
                'deviceId' => $row['deviceId']
            );
        }

        
        
        

    }
    $json = json_encode($array);
    echo $json;

?>