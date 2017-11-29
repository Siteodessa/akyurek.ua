<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'akyurek');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         't^q@&jzA8`m1uX>7niNz?i^VTI3`u,muU/wQt~`P;4Di=!sT1OpMb0g1D!T42bW#');
define('SECURE_AUTH_KEY',  'y6J00RjjOb<E@*$b+9p~;9d2htBssnm&Eeq=l4CX.^@5PimS,WH=#=X6j@o_Ej}6');
define('LOGGED_IN_KEY',    '(V6oA9n?I.;5BR>O?_^77}[=0k5v7TF4zvD.zHFAG0L`nre#$?cm@U#lvxfKO/bs');
define('NONCE_KEY',        'zxD]Nva**qI(fk-n/!4okmQeJ`e?ligCj6:hPs#aiDk*#|kByRIW=&c?XRmKi{}2');
define('AUTH_SALT',        'D~R5rX+[`&0:k_:_t/VvuU_QYc49}VB]KZkgaZi1q>WfPia~W~J@t<]uP(mysj;u');
define('SECURE_AUTH_SALT', 'O2j;~F415$0u[13nii4X<I$0=-`08&68ncJc>&^1w(hKT#EWgCWj:p}>zYS{>hk:');
define('LOGGED_IN_SALT',   'bJb{An<X(1TTAu^O2B??#VKd,Ms5&CUmW6Z!bE@;3me7X65t{Wws3.{KYbt|PY*O');
define('NONCE_SALT',       'G)(1y)VX^K&+Le/qSS]&Lh<}GIro>R]LYmTT=`qS=lRKbhj|g!FVVl,E304]2m9!');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
