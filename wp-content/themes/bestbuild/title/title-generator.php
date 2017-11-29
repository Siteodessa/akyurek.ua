<?php  

$zernoochistiteli = 'Зерноочистительные машины';
$protravlivateli = 'Протравливатели';
$shelushiteli = 'Шелушители семян';
$polirovalnye = 'Полировальные машины';
$transportnaya = 'Транспортная система';
$upakovka = 'Весы и упаковка';
$zashhita = 'Защита от пыли';
$hranenie = 'Хранение зерна';
$url = 'http://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
if (stripos($url,'se-tovary/separatory-semyan') !== false) { echo $zernoochistiteli;}
elseif (stripos($url,'vse-tovary/protravlivateli/') !== false) { echo $protravlivateli;}
elseif (stripos($url,'vse-tovary/shelushiteli-semyan-vse-tovary/') !== false) { echo $shelushiteli;}
elseif (stripos($url,'vse-tovary/polirovalnye-mashiny/') !== false) { echo $polirovalnye;}
elseif (stripos($url,'vse-tovary/goods/transportnaya-sistema/') !== false) { echo $transportnaya;}
elseif (stripos($url,'vse-tovary/vesy-upakovka/') !== false) { echo $upakovka;}
elseif (stripos($url,'vse-tovary/zashhita-ot-pyli/') !== false) { echo $zashhita;}
elseif (stripos($url,'vse-tovary/hranenie-zerna/') !== false) { echo $hranenie;}
else{ 
the_title( '', ' Акюрек - Зерноочиститель купить в Украине' ); 
}
?>