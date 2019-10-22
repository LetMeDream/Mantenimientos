<?php 

    session_start();
    include('database.php');
    $user = $_SESSION['user'];// not needed
    $search = $_POST['date'];

    /** hoursId is used to go to horasMantenimiento */
    $deviceId = $_SESSION['hoursId'];

    //if there is a value in search
    if($search){
        $sql = "SELECT * FROM mt_records WHERE fechaIngreso LIKE '$search' AND deviceId LIKE '$deviceId' AND enFuncionDe LIKE 'kms' ";
        $result = mysqli_query($db, $sql);
        /** En caso de no haber conexión, habrá error y será mostrado cual fue. */
        if(!$result){
            die('Query error:   '. mysqli_error($db));
        }
        $array = array();
        while($row = mysqli_fetch_array($result)){
        
           $array[] = array(
                'nombre' => $row['tipoDeEquipo'],
                'numRegistro' => $row['id'],
            
                'rutina' => $row['tipoMantenimiento'],
                'fechaIngreso' => $row['fechaIngreso'],
                'kilometraje' => $row['kilometrajeEnFecha'],
                'horasMotor' => $row['horasEnFecha'],
               
                'actividades' => $row['actividades'],
                'comentariosActividades' => $row['comentarios_actividades'],
                
                'idHoras' => $deviceId

            );
        }
     
      

        $send = json_encode($array);
        echo $send;



    }
    



?>