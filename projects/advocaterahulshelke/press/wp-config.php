<?php
define('WP_AUTO_UPDATE_CORE', 'minor');// This setting is required to make sure that WordPress updates can be properly managed in WordPress Toolkit. Remove this line if this WordPress website is not managed by WordPress Toolkit anymore.
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
define('DB_NAME', 'advocate_wp884');

/** MySQL database username */
define('DB_USER', 'advocate_wp884');

/** MySQL database password */
define('DB_PASSWORD', '3--.3)4S8eP)vpQr');

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
define('AUTH_KEY',         '8ru3wqoqt3pohrxtn4rj9hkhtqyjstk4rc9xhjpuxbggmtlayppar6if7f2h7jkx');
define('SECURE_AUTH_KEY',  '21e9ec2eatdz06adxjyr0bjjxc904qloexvressqclqghcbkovmdpcq7wl7uju9v');
define('LOGGED_IN_KEY',    'dlamezie2np6nu15wrn8u3p7verwrf5g5gkbcesdqxp5almfj3ivwpwlmzrfxfv8');
define('NONCE_KEY',        'ruivqjulnx3wwlg0ek6us6g7vfcpy6r4ex1tx6rxanf9fgsqhrpkmr5xnhljlryy');
define('AUTH_SALT',        '0vf2o40o84xfdyedikuuqhxi8w3ytb3bw8gttz4fnpsxqlatpokuvecmddy3miw6');
define('SECURE_AUTH_SALT', 'hoguocwblqca600ktnxrw2tecxvhhmoxn1kdpe6yu7b3sfrm38pl4xmd07qupl8x');
define('LOGGED_IN_SALT',   'tpxggnzzaflkthz0iihsja8ymzulpdwrmlqbmusocc6ihumjk6njwofy4xwpxrxm');
define('NONCE_SALT',       'w5squrycpn5leik3nxfixpnsx6vprzdv5bjezxan0hm3dyxmkidjzw6gbdavivtw');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wpy6_';

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
