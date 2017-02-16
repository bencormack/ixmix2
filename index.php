<?php
$bespokeStyle = '01-videoIntro.css';
include('includes/header.php');
?>
    
    <div class='videoContainer'>
        <video id='introVideo' muted>
            <?php 
                if ($_SESSION['desktopMobile'] == 'desktop') {
                    //Desktop version
                    echo '<source src="video/videoIntro_d.mp4" type="video/mp4">';
                    /*echo '<source src="videoIntro_d.ogg" type="video/ogg">';*/
                } else {
                    //Mobile version
                    echo '<source src="video/videoIntro_m.mp4" type="video/mp4">';
                    /*echo '<source src="videoIntro_m.ogg" type="video/ogg">';*/
                }
            ?>
            Your browser does not support the video tag.
        </video>
    </div>
    
    <p class='renegadeText'>Are you a Renegade?</p>
    <p class='renegadeText'>or Realist?</p>
    <p class='renegadeText'>Or the Perfect Mix?</p>
    
    <img id='touchToStart' class='touchToStart' src='images/touchToStart.png'>

    <script src='logic/CSSPlugin.min.js'></script>
    <script src='logic/TweenMax.min.js'></script>
	<script src='logic/01-videoIntro.js'></script>
</body>

</html>