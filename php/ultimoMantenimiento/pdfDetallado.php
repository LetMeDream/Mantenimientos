<?php


        require('fpdf/fpdf.php');

        session_start();
        include('database.php');
        $id = $_SESSION['userId'];
        $user = $_SESSION['user'];

        /** hoursId is used to go to horasMantenimiento */
        $deviceId = $_SESSION['hoursId'];


        $sql= "SELECT * FROM mt_records WHERE deviceId LIKE '$deviceId' AND enFuncionDe LIKE 'hrs'
                ORDER BY id DESC LIMIT 1 ";
        $res = mysqli_query($db, $sql);
        if (!$res){
            die('Querie failed: '. mysqli_error($db));
        }


        /** PDF loading and stuff */
        // include composer packages
        include "vendor/autoload.php";
        use \setasign\Fpdi\Fpdi;


        $pdf = new FPDI('l');
        // Reference the PDF you want to use (use relative path)
        $pagecount = $pdf->setSourceFile( 'formato_mp.pdf' );
        // Import the first page from the PDF and add to dynamic PDF
        $tpl = $pdf->importPage(1);
        $pdf->AddPage();

        // Use the imported page as the template
        $pdf->useTemplate($tpl);




        while($row = mysqli_fetch_array($res)){
            /** Nombre */
            $pdf->SetFont('Arial','B',10);
            $pdf->Cell(50,77,utf8_encode($row['tipoDeEquipo']), 0, 1 ,'C', 0);
            /** Fecha */
            $pdf->SetFont('Arial','B',10);
            $pdf->SetXY(162, 47); // set the position of the box
            $pdf->Cell(40,10,utf8_encode($row['fechaIngreso']), 0, 1, 'C', 0);
            /** Rutina */
            $pdf->SetFont('Arial','B',10);
            $pdf->SetXY(16, 54); // set the position of the box
            $pdf->Cell(20,10,utf8_encode( $row['tipoMantenimiento']), 0, 1, 'C', 0);
            /** Horas en fecha */
            $pdf->SetFont('Arial','B',10);
            $pdf->SetXY(16, 50.5); // set the position of the box
            $pdf->Cell(60,10,utf8_encode( $row['horasEnFecha']). ' hrs.', 0, 1, 'C', 0);
            /** Device Id */
            $pdf->SetFont('Arial','B',10);
            $pdf->SetXY(16, 47); // set the position of the box
            $pdf->Cell(60,10,utf8_encode('00' . $row['deviceId']), 0, 1, 'C', 0);


            /** Proceso luego de normalizar las tablas, way more problematic. */
            /** Ahora debemos obtener el ID del Row (mt_records), para luego poder listar sus actividades desde mt_activity_record */
            $mt_id = $row['id'];
            $sql2= "SELECT * FROM mt_activity_record WHERE record_id LIKE '$mt_id' ";
            $res2 = mysqli_query($db, $sql2);

            /**Crearemos arreglo que guarde los activity_id de ROW2 */
            $activities_ids = array();
            while ( $row2 = mysqli_fetch_array($res2) ){
                array_push($activities_ids,  $row2['activity_id']);
            }
            $longitud = count($activities_ids);
            /** Hasta un máximo de 19 actividades, For */
            for($i = 0; $i < $longitud; $i++){
                $sql_act = "SELECT * FROM mt_activities WHERE id LIKE '$activities_ids[$i]' ";
                $result = mysqli_query($db, $sql_act);
                $my_row = mysqli_fetch_array($result);
                $pdf->SetFont('Arial','B',7);
                if($i==0){
                    $x = 24;
                    $y = 64;
                    $pdf->SetXY($x, $y); // set the position of the box
                    $pdf->Cell(81,10, $my_row['shortened_description'] , 0, 1, 'C', 0);
                }
                if($i==1){
                    $x = 24;
                    $y = 69;
                    $pdf->SetXY($x, $y); // set the position of the box
                    $pdf->Cell(81,10, $my_row['shortened_description'] , 0, 1, 'C', 0);
                }
                if($i==2){
                    $x = 24;
                    $y = 74;
                    $pdf->SetXY($x, $y); // set the position of the box
                    $pdf->Cell(81,10, $my_row['shortened_description'] , 0, 1, 'C', 0);
                }
                if($i==3){
                    $x = 24;
                    $y = 79;
                    $pdf->SetXY($x, $y); // set the position of the box
                    $pdf->Cell(81,10, $my_row['shortened_description'] , 0, 1, 'C', 0);
                }
                if($i==4){
                    $x = 24;
                    $y = 84;
                    $pdf->SetXY($x, $y); // set the position of the box
                    $pdf->Cell(81,10, $my_row['shortened_description'] , 0, 1, 'C', 0);
                }
                if($i==5){
                    $x = 24;
                    $y = 89;
                    $pdf->SetXY($x, $y); // set the position of the box
                    $pdf->Cell(81,10, $my_row['shortened_description'] , 0, 1, 'C', 0);
                }
                if($i==6){
                    $x = 24;
                    $y = 94;
                    $pdf->SetXY($x, $y); // set the position of the box
                    $pdf->Cell(81,10, $my_row['shortened_description'] , 0, 1, 'C', 0);
                }
                if($i==7){
                    $x = 24;
                    $y = 99;
                    $pdf->SetXY($x, $y); // set the position of the box
                    $pdf->Cell(81,10, $my_row['shortened_description'] , 0, 1, 'C', 0);
                }
                if($i==8){
                    $x = 24;
                    $y = 104;
                    $pdf->SetXY($x, $y); // set the position of the box
                    $pdf->Cell(81,10, $my_row['shortened_description'] , 0, 1, 'C', 0);
                }
                if($i==9){
                    $x = 24;
                    $y = 109;
                    $pdf->SetXY($x, $y); // set the position of the box
                    $pdf->Cell(81,10, $my_row['shortened_description'] , 0, 1, 'C', 0);
                }
                if($i==10){
                    $x = 24;
                    $y = 114;
                    $pdf->SetXY($x, $y); // set the position of the box
                    $pdf->Cell(81,10, $my_row['shortened_description'] , 0, 1, 'C', 0);
                }
                if($i==11){
                    $x = 24;
                    $y = 119;
                    $pdf->SetXY($x, $y); // set the position of the box
                    $pdf->Cell(81,10, $my_row['shortened_description'] , 0, 1, 'C', 0);
                }
                if($i==12){
                    $x = 24;
                    $y = 124;
                    $pdf->SetXY($x, $y); // set the position of the box
                    $pdf->Cell(81,10, $my_row['shortened_description'] , 0, 1, 'C', 0);
                }
                if($i==13){
                    $x = 24;
                    $y = 129;
                    $pdf->SetXY($x, $y); // set the position of the box
                    $pdf->Cell(81,10, $my_row['shortened_description'] , 0, 1, 'C', 0);
                }
                if($i==14){
                    $x = 24;
                    $y = 134;
                    $pdf->SetXY($x, $y); // set the position of the box
                    $pdf->Cell(81,10, $my_row['shortened_description'] , 0, 1, 'C', 0);
                }
                if($i==15){
                    $x = 24;
                    $y = 139;
                    $pdf->SetXY($x, $y); // set the position of the box
                    $pdf->Cell(81,10, $my_row['shortened_description'] , 0, 1, 'C', 0);
                }
                if($i==16){
                    $x = 24;
                    $y = 144;
                    $pdf->SetXY($x, $y); // set the position of the box
                    $pdf->Cell(81,10, $my_row['shortened_description'] , 0, 1, 'C', 0);
                }
                if($i==17){
                    $x = 24;
                    $y = 149;
                    $pdf->SetXY($x, $y); // set the position of the box
                    $pdf->Cell(81,10, $my_row['shortened_description'] , 0, 1, 'C', 0);
                }
                if($i==18){
                    $x = 24;
                    $y = 154;
                    $pdf->SetXY($x, $y); // set the position of the box
                    $pdf->Cell(81,10, $my_row['shortened_description'] , 0, 1, 'C', 0);
                }


            }


        }

        $pdf->Output();


?>