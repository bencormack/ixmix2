<?php
$bespokeStyle = 'circle.css';
include('includes/header.php');
?>

    <script>
        var realistPercentage = <?php echo $_SESSION['realistPercentage']; ?>;
    </script>
    
    <p id='tts1' class='vCenter mwcMix'>MWC MIX</p>
    <p id='renagadeText'>Renegade<br/><span id='renPercentageText' class='renRealPercentageText'><?php echo (100 - $_SESSION['realistPercentage']); ?>%</span></p>
    <canvas id='circleCanvas' width='500' height='500' style='border:none;'>Your browser does not support the HTML5 canvas tag.</canvas>
    <p id='realistText'>Realist<br/><span id='realPercentageText' class='renRealPercentageText'><?php echo $_SESSION['realistPercentage']; ?>%</span></p>
    <p id='tts2' class='nextText'><a href='07-compareMix.php'>Discover more comparisons ></a></p>
    
    <script src='logic/CSSPlugin.min.js'></script>
    <script src='logic/TweenMax.min.js'></script>
    <script src='logic/jquery-3.1.1.min.js'></script>
    <script src='logic/06-watson.js'></script>

</body>
</html>
