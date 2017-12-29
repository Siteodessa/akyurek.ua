<?php

function metapolename($detali, $pid) { $metko = get_post_meta($pid, $detali, true); if (!empty($metko))  return $metko; }

function check_mobile_device() {
                      $mobile_agent_array = array('ipad', 'iphone', 'android', 'pocket', 'palm', 'windows ce', 'windowsce', 'cellphone', 'opera mobi', 'ipod', 'small', 'sharp', 'sonyericsson', 'symbian', 'opera mini', 'nokia', 'htc_', 'samsung', 'motorola', 'smartphone', 'blackberry', 'playstation portable', 'tablet browser');
                      $agent = strtolower($_SERVER['HTTP_USER_AGENT']);
                      // var_dump($agent);exit;
                      foreach ($mobile_agent_array as $value) {
                          if (strpos($agent, $value) !== false) return true;
                      }
                      return false;
                  };
function we_are_dev()
{
    $base = dirname(__FILE__);
    $path = false;

    if (@file_exists(dirname(dirname($base))."/wp-config.php"))
    {
        $path = dirname(dirname($base))."";
    }
    else
    if (@file_exists(dirname(dirname(dirname($base)))."/wp-config.php"))
    {
        $path = dirname(dirname(dirname($base)))."";
    }
    else
    $path = false;

    if ($path != false)
    {
        $path = str_replace("\\", "/", $path);
    }

if (strpos($path, "developer"))

{

  return true;  /*means you are using dev machine*/
}
else {

return false; /*means you are using remote server */
}

}

?>
