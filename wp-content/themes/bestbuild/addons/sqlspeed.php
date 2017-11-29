<div class="sqlspeed">
<?php
$user = wp_get_current_user();
if ( $user->id == 1 ) {
echo " MySQL: " . get_num_queries() . " запросов за "; timer_stop(1);
echo " секунд. Память: ".round(memory_get_usage()/1024/1024, 2)." MB";
var_dump($GLOBALS['wpdb']->queries);
  echo memory_get_usage() . "\n"; // 36640

}
?>
</div>