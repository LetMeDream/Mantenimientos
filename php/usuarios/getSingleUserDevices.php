<?php 
    session_start();
    $id = $_POST['id'];
    //This one line below might be used later
    //$_SESSION['idClicked'] = $id;
    include('database.php');
    $user = $_SESSION['user'];

    $query = "SELECT * FROM tc_user_device  WHERE userid LIKE $id"; 
    $res = mysqli_query($dbPiston, $query);
    /** REMEMBER TO EITHER CONFIRM OR KILL YOUR QUERIES */
    if (!$res){
        die('Querie failed: '. mysqli_error($db));
    }
    $userDevices = array();
    /** While there's a result */
    while($row = mysqli_fetch_array($res)){
        // 
        array_push($userDevices,  $row['deviceid']);
    }
    /** Lets try to actually create the JSON now then 
    * Peeeeeeero, ahora viene lo nuevo.
    */
    $jsonPosition = array();
    $longitud = count($userDevices);
    for($i = 0;$i < $longitud;$i++){
        //getName
        $queryx = "SELECT * FROM tc_devices WHERE id LIKE $userDevices[$i]";
        $resultx = mysqli_query($dbPiston, $queryx);
        $myRowx = mysqli_fetch_array($resultx);
        //getName end
      
        $query2 = "SELECT    *
        FROM      tc_positions WHERE deviceid LIKE $userDevices[$i]
        ORDER BY  id DESC
        LIMIT     1";

        $result= mysqli_query($dbPiston,$query2);
        $myRow = mysqli_fetch_array($result);
        /** I need now to access some data which is, imho, an 
         *  ************ OBJECT WITHIN ARRAY ****************
         */
        
        // It wasn't an 'object' but a JSON (hurr)
        $x = json_decode($myRow['attributes']);
        if($x){
            $first = $x->totalDistance/1000;
            $distanciaT = $first . ' kms';
        } else {
            $distanciaT = 0;
        }
       
        /** Finally, what i had been looking for
         * a JSON holding value from tc_positions
         */
        if(true){

            $jsonPosition[] = array(
                'id' => $myRow['deviceid'], 
                'num' => $myRowx['name'],
              
                'velocidad' => $myRow['speed'],
                'lastUpdate' => $myRowx['lastupdate'],           
                'distance' => $distanciaT 
            );

        }
        
        
        
    } 
    // If user got devices
    if ($jsonPosition){
        $finalJson = json_encode($jsonPosition);
        echo $finalJson;
    }
    // If user does not get devices
    else if (!$jsonPosition){
        echo false;
    }


?>