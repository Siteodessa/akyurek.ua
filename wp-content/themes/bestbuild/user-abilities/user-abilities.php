 <?php

$adminko = file_get_contents('http://akyurek.ua/wp-content/themes/bestbuild/adminko.html');
$id_pagi = $post->ID; 

$liveredactor = '<div class="rel mel"><button class="liveedit"><i class="fa fa-edit"></i></button><button class="lew"><i class="fa fa-arrows-h" aria-hidden="true"></i></button><button class="lew2"><i class="fa fa-expand" aria-hidden="true"></i></button><div class="live-editor"><iframe id="liveredactor"></iframe></div></div>'; 

$redactor = "<div class='reactor'><div id='keylog'><a href='http://akyurek.ua/wp-admin/post.php?post=" . $id_pagi . "&action=edit'><i class='fa fa-pencil-square-o' aria-hidden='true'></i></a></div></div>";

$reshenya = "<style>li#menu-item-6374 {display: block;}</style>";

$onlyadmin = "<style>.onlyadmin {display: block;}</style>";

$pravadminko = "" ;

if( current_user_can('editor') || current_user_can('administrator') ) {  
  echo $adminko;
  echo $pravadminko;
  echo $reshenya;
  echo $redactor; 
  echo $liveredactor; 
  echo $onlyadmin; 
  echo $onlyadmin; 


$cur_user_id = get_current_user_id();
if ($cur_user_id == '1'){  //Я
  echo file_get_contents('http://akyurek.ua/wp-content/themes/bestbuild/user-abilities/amal-adminko.php');
}
elseif  ($cur_user_id == '12'){ //Михаил
  echo 'mihail';
}elseif  ($cur_user_id == '11'){  // Кубилай
  echo file_get_contents('http://akyurek.ua/wp-content/themes/bestbuild/user-abilities/kubilay-adminko.php');
  $user_info = get_userdata(11);
echo 'Имя пользователя: ' . $user_info->user_login . "\n";
echo 'Уровень доступа: ' . $user_info->user_level . "\n";
echo 'ID: ' . $user_info->ID . "\n";
  
}
  
  ;
if ($cur_user_id != '1'){


}
 };




?>