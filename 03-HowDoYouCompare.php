<?php
$bespokeStyle = '03-HowDoYouCompare.css';
include('includes/header.php');
?>
    
    <div class='videoContainer'>
        <video id='introVideo'>
            <?php 
                if ($_SESSION['desktopMobile'] == 'desktop') {
                    //Desktop version
                    echo '<source src="video/howDoYouCompare_d.mp4" type="video/mp4">';
                    /*echo '<source src="howDoYouCompare_d.ogg" type="video/ogg">';*/
                } else {
                    //Mobile version
                    echo '<source src="video/howDoYouCompare_m.mp4" type="video/mp4">';
                    /*echo '<source src="howDoYouCompare_m.ogg" type="video/ogg">';*/
                }
            ?>
            Your browser does not support the video tag.
        </video>
    </div>
    
    <p class='renegadeText'>How do you compare?</p>
    
    <img id='touchToStart' class='touchToStart' src='images/touchToStart.png'>

    <script src='logic/CSSPlugin.min.js'></script>
    <script src='logic/TweenMax.min.js'></script>
	<script src='logic/03-HowDoYouCompare.js'></script>
</body>

</html>