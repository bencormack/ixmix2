<?php
session_start();

//$_SESSION['renegadePercentage']

require_once 'mobileDetect/Mobile_Detect.php';
$detect = new Mobile_Detect;

echo '<!doctype html>';
echo '<html>';
echo '<head>';
    echo '<title></title>';
    echo '<link rel="stylesheet" type="text/css" href="style/style.css">';
    echo '<link rel="stylesheet" type="text/css" href="style/header.css">';
    echo '<link rel="stylesheet" type="text/css" href="style/' . $bespokeStyle . '">';
    echo '<meta name="viewport" content="width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0" />';

    if (isset($_SESSION['desktopMobile']) && $_SESSION['desktopMobile'] != '' && ($_SESSION['desktopMobile'] == 'mobile' || $_SESSION['desktopMobile'] == 'desktop')) {
        // $_SESSION['desktopMobile'] is set
    } else {
        if ($detect->isMobile()) {
            $_SESSION['desktopMobile'] = 'mobile';
        } else {
            $_SESSION['desktopMobile'] = 'desktop';
        }
    }

    echo '<script>';
    echo 'console.log("You are viewing on a ' . $_SESSION['desktopMobile'] . ' device");';
    echo '</script>';
echo '</head>';

// HEADER ----------------------------------------
echo '<body>';
    echo '<header>';
        echo '<a href="index.php"><img id="ixLogo" class="vCenter" src="images/ixLogo.png" ></a>';
        echo '<img id="ibmLogo" class="vCenter" src="images/ibmLogo.png">';
    echo '</header>'
    
?>