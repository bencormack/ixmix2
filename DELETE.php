<?php
$bespokeStyle = 'circle.css';
include('includes/header.php');
?>
    
    <p id='tts1' class='vCenter mwcMix'>MWC MIX</p>
    <p id='renagadeText'>Renegade<br/><span id='renPercentageText' class='renRealPercentageText'>10%</span></p>
    <canvas id='circleCanvas' width='500' height='500' style='border:none;'>Your browser does not support the HTML5 canvas tag.</canvas>
    <p id='realistText'>Realist<br/><span id='realPercentageText' class='renRealPercentageText'>90%</span></p>
    
    <img id='touchToStart' class='touchToStart' src='images/touchToStart.png'>
    
    <!-- -------------------- SCRIPT -------------------- -->
    <script src='logic/CSSPlugin.min.js'></script>
    <script src='logic/TweenMax.min.js'></script>
    <script src='logic/jquery-3.1.1.min.js'></script>
    <script src='logic/02-MwcMix.js'></script>

</body>
    
</html>