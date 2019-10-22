<?php

    session_start();
    include('database.php');
    $id = $_POST['id'];
    /** We will also want to pass id to POST[hoursId] so we can redirect after doing a maintenance*/
    $_SESSION['hoursId'] = $id;


    // First db connection
    $sql = "SELECT * FROM filtroPosicion WHERE deviceId LIKE '$id' ";
    $res = mysqli_query($db, $sql);
    if (!$res){
        die('Querie failed: '. mysqli_error($db));
    }

    //Create empty array
    $array = array();
    while($row = mysqli_fetch_array($res)){
        $array[] = array(
            'km' => $row['distanciaRecorrida'],
            'hs' => $row['horasMotor'],

            /** So far so good as well */

            /** where are we going wrong? */

            /** where does Society start to crumble?*/


             /** (omg) */
        );
    }
    // Get it in a Json before sending it to the front-end
    $json = json_encode($array);
    echo $json;

?>