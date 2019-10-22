<?php

    session_start();
    include('database.php');
    $id = $_SESSION['userId'];
    $user = $_SESSION['user'];

    /** hoursId is used to go to horasMantenimiento */
    $deviceId = $_SESSION['hoursId'];


    $sql= "SELECT * FROM mt_records WHERE deviceId LIKE '$deviceId' AND enFuncionDe LIKE 'kms'
           ORDER BY id DESC LIMIT 1 ";
    $res = mysqli_query($db, $sql);
    if (!$res){
        die('Querie failed: '. mysqli_error($db));
    }
   

    $json = array();
    while($row = mysqli_fetch_array($res)){
         
        $json[] = array(
            'nombre' => $row['tipoDeEquipo'],

            'fechaIngreso' => $row['fechaIngreso'],
        
            'rutina' => $row['tipoMantenimiento'],
     
            'actividades' => $row['actividades'],
            
            'comentariosActividades' => $row['comentarios_actividades']

        );
      
     }
     /**Codifiquemos el array obtenido a un string de json */
     $j = json_encode($json);
     echo $j;

?>