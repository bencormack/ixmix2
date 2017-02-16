<?php
$bespokeStyle = '04-logins.css';
include('includes/header.php');
?>
    <script type="text/javascript" src="//platform.linkedin.com/in.js">
        api_key:77acpguxdc2nig
        authorize: true
        onLoad: onLoad
    </script>
    
    <div id='frame03' class='contentSection'>
        <div id='topPanel'>
            <p>Renegade? Realist?</p>
            <p>Or just the right mix?</p>
            <p><br/>Let's find out</p>
            <p class='optionChoose'>Simply choose one of these options</p>
        </div>
        <div id='bottomPanel'>
            <div id='twitterBtn' class='socialBtn'>
                <img src='images/twitterIcon.png'>
                <h2>Use my Twitter account ></h2>
                <form action="https://ixrenegade-realist.mybluemix.net/Twitter" method='get'>
                    <input type="text" name="q" value="@"><br/>
                    <input type="submit" value="Analyze >">
                </form>
            </div>
            <div id='linkedinBtn' class='socialBtn'>
                <img src='images/linkedinIcon.png'>
                <h2>Use my Linkedin account ></h2>
            </div>
            <div id='emailBtn' class='socialBtn'>
                <img src='images/emailIcon.png'>
                <h2>I don't have one of these ></h2>
                <form action="https://ixrenegade-realist.mybluemix.net/alternative" method='get'>
                    <input type="text" name="firstName" value="First name">
                    <input type="text" name="lastName" value="Surname"><br/>
                    <input type="text" name="email" value="Email">
                    <input type="text" name="jobTitle" value="Job title">
                    <input type="text" name="industry" value="Industry"><br/>
                    <input type="submit" value="Analyze >">
                </form>
            </div>
        </div>
        <?php
            echo '<script>
                console.log("' . $_GET['error'] . '");
            </script>';
            if (isset($_GET['error']) && $_GET['error'] != ''){
                echo '<div id="errorPopup">';
                echo '<p>' . $_GET['error'] . '<br/><br/>Please select a different option ></p>';
                echo '</div>';
            }
        ?>
    </div>

    <script src='logic/CSSPlugin.min.js'></script>
    <script src='logic/TweenMax.min.js'></script>
	<script src='logic/04-logins.js'></script>
</body>

</html>