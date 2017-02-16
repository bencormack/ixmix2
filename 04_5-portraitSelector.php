<?php
$bespokeStyle = '04_5-portraitSelector.css';
include('includes/header.php');
?>

<?php 
    $userID = $_GET['id'];
?>
    
    <div id='frame03' class='contentSection'>
        <div id='topPanel'>
            <p id='simplyChoose'>Please pick a portrait matching your personality or write your own</p>
        </div>
        
        <div id='pleaseWork'>
            <a href='https://ixrenegade-realist.mybluemix.net/lessthan100?user=sophie&id=<?php echo $userID; ?>'><div id='sophieBtn' class='pleaseWorkBtn'>
                <p>SOPHIE</p>
                <p>is a firm believer in team work and individuals having a clear role. She's confident in her own abilities but appreciates the support of those around her. Before committing to any final decisions, she always listens to others opinions and is only truly happy when everyone else is.</p>
            </div></a>
            <a href='https://ixrenegade-realist.mybluemix.net/lessthan100?user=janet&id=<?php echo $userID; ?>'><div id='janetBtn' class='pleaseWorkBtn'>
                <p>JANET</p>
                <p>loves bringing ideas to life. She recognises talent in an instant. She knows good work when she sees it and believes in motivating her team. She loves a challenge and believes her inspiration 'makes things happen'. She always acknowledges those that deserve praise and rewards hard work.</p>
            </div></a>
            <a href='https://ixrenegade-realist.mybluemix.net/lessthan100?user=jonas&id=<?php echo $userID; ?>'><div id='jonasBtn' class='pleaseWorkBtn'>
                <p>JONAS</p>
                <p>likes to work on his own. He’s very imaginative but will only share his thoughts and ideas when he's happy they're perfect. Once he believes he can't improve his work, he expects his colleagues and peers to accept it and 'run-with-it' – as he's confident it's beyond improvement.</p>
            </div></a>
        </div>
        
        <div id='ownPortrait'>
            <p id='writeYourOwn'>Write your own portrait</p>
            <form id='ownPortraitForm' action="https://ixrenegade-realist.mybluemix.net/custom?user=custom&id=<?php echo $userID; ?>" method='post'>
                <textarea id='ownPortraitFormInput' type="text" name="q" value="Enter text here"></textarea><br/>
                <input type="submit" value="Analyze >">
            </form>
            <p id='wordCountP'></p>
        </div>
    </div>

    <script src='logic/CSSPlugin.min.js'></script>
    <script src='logic/TweenMax.min.js'></script>
    <script src='logic/jquery-3.1.1.min.js'></script>
	<script src='logic/04_5-portraitSelector.js'></script>
</body>

</html>