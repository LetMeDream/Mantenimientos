<?php

    include('database.php');

    echo 'Holaaaa';
    /** Primero comprobemos que nos llega algún dato del front end ($_POST['id'])
     * (o mejor no)
    */

     /**Lets catch the id from the FRONT END */
     $i = $_POST['id'];  /** And use it in our query */
     $sql = "DELETE FROM mt_records WHERE id LIKE '$i' ";
     $res = mysqli_query($db, $sql);

     if(!$res){
         die('Query Failed: '. mysqli_error($db));
     }

     echo 'Task succesfully deleted';




?>
