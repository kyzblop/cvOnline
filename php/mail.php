<?php

$retour = mail('jeremymoi.jd@gmail.com', 'Mail depuis le CV en ligne', $_POST['message'], 'From : $POST['adresseEnvoie']');
if(retour)
    echo'Votre message est envoyé';

?>