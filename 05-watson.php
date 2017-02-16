<?php
$bespokeStyle = '05-watson.css';
include('includes/header.php');
include('includes/loginScript.php');
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
        <div id='labelContainerOuter' class='labelContainerOuter'>
            <div id='realistPcText'>
                <p class='label'>Realist</p>
                <p class='percentage'><?php echo $_SESSION['realistPercentage']; ?>%</p>
            </div>
            <div id='renegadePcText'>
                <p class='label'>Renegade</p>
                <p class='percentage'><?php echo (100 - $_SESSION['realistPercentage']); ?>%</p>
            </div>
        </div>
    </div>
    
    <p id='renegadeText' class='renegadeText'>Watson is analysing your data using Watson Personality Insights</p>
        
    <div id='popup'>
        <img id='xBtn' src='images/x.png'>
        <p class='popupTitle'>Share your results</p>
        <img id='twitBtn' class='popupImage' src='images/twitterBtn.png'>
        <img id='linkBtn' class='popupImage' src='images/linkedinBtn.png'>
        <img id='emaiBtn' class='popupImage' src='images/emailBtn.png'>
    </div>
    
    <p id='nextText' class='nextText'>How do you compare with MWC MIX ></p>
    

    <script src='logic/CSSPlugin.min.js'></script>
    <script src='logic/TweenMax.min.js'></script>
	<script src='logic/05-watson.js'></script>
</body>

</html>