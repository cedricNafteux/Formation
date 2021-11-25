<?php
    $page = 'acceuil';
?>
<!DOCTYPE html>
<html>
    <head>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <title>210_00_TP_Papeterie DWWM</title>
        <link href="dist/css/bootstrap.css" rel="stylesheet" type="text/css"/>
        <link href="css/papeterie.css" rel="stylesheet" type="text/css"/>
        <script src="dist/js/jquery-3.4.1.js"></script>
        <script src="dist/js/bootstrap.js"></script>

    </head>
    <body>
        <div class='wrap'>
		    <?php
                include 'entete.php';
                include 'nav.php';
		    ?>
            <main class="container">
                <p class="h2">Bienvenue sur le site de la Papeterie du centre</p>
            </main>
        </div>
		<?php
            include 'footer.php';
		?>
    </body>
</html>
