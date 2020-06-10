<?php

if (isset($_POST["element1"]) && isset($_POST["element2"]) && isset($_POST["element3"]) && isset($_POST["element4"]) && isset($_POST["element5"]) && isset($_POST["element6"]) && isset($_POST["element7"]) && isset($_POST["element8"]) && isset($_POST["element9"]) && isset($_POST["element10"]) && isset($_POST["element11"]) && isset($_POST["element12"])) { 

$a1=$_POST['element1'];
   $b1=$_POST['element2'];
     $c1=$_POST['element3'];
     $a2=$_POST['element4'];
     $b2=$_POST['element5'];
    $c2=$_POST['element6'];
    $a3=$_POST['element7'];
     $b3=$_POST['element8'];
    $c3=$_POST['element9'];
    $a0=$_POST['element10'];
     $b0=$_POST['element11'];
    $c0=$_POST['element12'];
    
    $a1=$a2*2+$a1;
    $b1=$b2*2+$b1;
    $c1=$c2*2+$c1;
    $a0=$b0*2+$a0;

    $a2=$a3+$a2;
    $b2=$b3+$b2;
    $c2=$c3+$c2;
    $b0=$c0+$b0;

    $a1=$a1*3+$a2*(-1);
     $b1=$b1*3+$b2*(-1);
      $c1=$c1*3+$c2*(-1);
       $a0=$a0*3+$b0*(-1);

       $x3=$a0/$c1;
       $x2=($b0-$c2*$x3)/$b2;
       $x1=($c0-($b3*$x2+$c3*$x3));

	// Формируем массив для JSON ответа
    $result = array(
    	'name' => $x3,
    	'phonenumber' => $x2,
        'tel' => $x1
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 
}

?>