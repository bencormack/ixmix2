<?php

$errrorArray = array();

$socialPlatform;
$json;
$realistPercentage;

$twitterHandle;

switch ($_GET['p']) {
    case 'linkedin':
    case 'twitter':
        $socialPlatform = $_GET['p'];
        /*if (isset($_POST['twitterHandle']) && $_POST['twitterHandle'] != '') {
            $twitterHandle = cleanInput($_POST['twitterHandle']);
            $json = file_get_contents('https://ixrenegade-realist.mybluemix.net/Twitter?q=' . $twitterHandle);
            $json = json_decode($json);
            $_SESSION['realistPercentage'] = $realistPercentage = $json->realist;
        } else {
            $errrorArray[] = 'Twitter handle incorrect.';
        }*/
        $_SESSION['realistPercentage'] = $_GET['realist'];
        break;
    /*case 'linkedin':
        $socialPlatform = 'linkedin';
        if (isset($_POST['twitterHandle']) && $_POST['twitterHandle'] != '') {
            $twitterHandle = cleanInput($_POST['twitterHandle']);
        } else {
            $errrorArray[] = 'Twitter handle incorrect.';
        }
        break;*/
    case 'email':
        break;
    default:
        //Error handling
}



echo '<script>
        console.log("' . $_GET['p'] . '");
        console.log("$realistPercentage = ' . $realistPercentage . '%");
    </script>';

function cleanInput($input) {
    $output = trim($input);
    $output = htmlentities($output);
    return $output;
}

?>