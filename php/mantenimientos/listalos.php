<?php

    session_start();
    include('database.php');
    $id = $_SESSION['userId'];
    $user = $_SESSION['user'];

    /** hoursId is used to go to horasMantenimiento */
    $deviceId = $_SESSION['hoursId'];


    $sql= "SELECT * FROM mt_records WHERE deviceId LIKE '$deviceId' AND enFuncionDe LIKE 'hrs' ";
    $res = mysqli_query($db, $sql);
    if (!$res){
        die('Querie failed: '. mysqli_error($db));
    }
   

    $json = array();
    while($row = mysqli_fetch_array($res)){
         
        $json[] = array(
            'nombre' => $row['tipoDeEquipo'],
            'numRegistro' => $row['id'],
           
            'rutina' => $row['tipoMantenimiento'],
            'fechaIngreso' => $row['fechaIngreso'],
            'kilometraje' => $row['kilometrajeEnFecha'],
            'horasMotor' => $row['horasEnFecha'],
            
            'actividades' => $row['actividades'],
           
            'idHoras' => $deviceId,
            'comentariosActividades' => $row['comentarios_actividades']

        );
      
     }
     /**Codifiquemos el array obtenido a un string de json */
     $j = json_encode($json);
     echo $j;

?>