
<?php
 $title = 'PHP: пример простого сайта';
if(isset($_POST["element1"]) && isset($_POST["element2"]) && isset($_POST["element3"]) && isset($_POST["element4"]) && isset($_POST["element5"]) && isset($_POST["element6"]) && isset($_POST["element7"]) && isset($_POST["element8"]) && isset($_POST["element9"]) && isset($_POST["element10"]) && isset($_POST["element11"]) && isset($_POST["element12"])&& isset($_POST["element17"]) && isset($_POST["element18"]) && isset($_POST["element19"]) && isset($_POST["element13"])) {
   


    $a1=$_POST['element1'];
   $b1=$_POST['element2'];
     $c1=$_POST['element3'];
     $a2=$_POST['element4'];
     $b2=$_POST['element5'];
    $c2=$_POST['element6'];
    $a3=$_POST['element7'];
     $b3=$_POST['element8'];
    $c3=$_POST['element9'];
    $a4=$_POST['element17'];
     $b4=$_POST['element18'];
    $c4=$_POST['element19'];
    $d1=$_POST['element10'];
     $d2=$_POST['element11'];
    $d3=$_POST['element12'];
     $d4=$_POST['element13'];
    
function opredel($stepen, $elem1,$elem2,$elem3,$elem4,$elem5,$elem6,$elem7,$elem8,$elem9 ){
 return pow((-1), $stepen)*abs($elem1*$elem5*$elem9+$elem2*$elem6*$elem7+$elem4*$elem8*$elem3-$elem3*$elem5*$elem7-$elem2*$elem4*$elem9-$elem8*$elem6*$elem1);

}
$a11=opredel(2,$b2,$c2,$d2,$b3,$c3,$d3,$b4,$c4,$d4);
$a12=opredel(3,$a2,$c2,$d2,$a3,$c3,$d3,$a4,$c4,$d4);
$a13=opredel(4,$a2,$b2,$d2,$a3,$b3,$d3,$a4,$b4,$d4);
$a14=opredel(5,$a2,$b2,$c2,$a3,$b3,$c3,$a4,$b4,$c4);
$dela=$a1*$a11+$b1*$a12+$c1*$a13+$d1*$a14;
  if($dela==0){
    echo "Oпределитель равен 0, поэтому обратной матрицы нет";
  }else{
    $a21=opredel(3,$b1,$c1,$d1,$b3,$c3,$d3,$b4,$c4,$d4);
$a22=opredel(4,$a1,$c1,$d1,$a3,$c3,$d3,$a4,$c4,$d4);
$a23=opredel(5,$a1,$b1,$d1,$a3,$b3,$d3,$a4,$b4,$d4);
$a24=opredel(6,$a1,$b1,$c1,$a3,$b3,$c3,$a4,$b4,$c4);

$a31=opredel(4,$b1,$c1,$d1,$b2,$c2,$d2,$b4,$c4,$d4);
$a32=opredel(5,$a1,$c1,$d1,$a2,$c2,$d2,$a4,$c4,$d4);
$a33=opredel(6,$a1,$b1,$d1,$a2,$b2,$d2,$a4,$b4,$d4);
$a34=opredel(7,$a1,$b1,$c1,$a2,$b2,$c2,$a4,$b4,$c4);

$a41=opredel(5,$b1,$c1,$d1,$b2,$c2,$d2,$b3,$c3,$d3);
$a42=opredel(6,$a1,$c1,$d1,$a2,$c2,$d2,$a3,$c3,$d3);
$a43=opredel(7,$a1,$b1,$d1,$a2,$b2,$d2,$a3,$b3,$d3);
$a44=opredel(8,$a1,$b1,$c1,$a2,$b2,$c2,$a3,$b3,$c3);

$aobr11=1/$dela*$a11;
$aobr12=1/$dela*$a12;
$aobr13=1/$dela*$a13;
$aobr14=1/$dela*$a14;

$aobr21=1/$dela*$a21;
$aobr22=1/$dela*$a22;
$aobr23=1/$dela*$a23;
$aobr24=1/$dela*$a24;

$aobr31=1/$dela*$a31;
$aobr32=1/$dela*$a32;
$aobr33=1/$dela*$a33;
$aobr34=1/$dela*$a34;

$aobr41=1/$dela*$a41;
$aobr42=1/$dela*$a42;
$aobr43=1/$dela*$a43;
$aobr44=1/$dela*$a44;

// Формируем массив для JSON ответа
    $result = array(
      'el1' => $a11,
      'el2' => $a12,
        'el3' => $a13,
        'el4' => $a14,
      'el5' => $a21,
        'el6' => $a22,
        'el7' => $a23,
      'el8' => $a24,
       'el9' => $a31,
        'el10' => $a32,
        'el11' => $a33,
      'el12' => $a34,
      'el13' => $a41,
        'el14' => $a42,
        'el15' => $a43,
      'el16' => $a44,
        'dela'=> $dela
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 
}
}
    
?>
