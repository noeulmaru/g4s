<?
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

$captcha = (object)array(
    'lib' => $g4['path']."/plugin/tcaptcha/tcaptcha.lib.php",
    'js'  => $g4['path']."/plugin/tcaptcha/tcaptcha.js"
);
?>