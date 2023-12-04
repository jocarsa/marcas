<?php
    
    $json = "../json/entradas.json";
    $datos = file_get_contents($json);
    echo $datos;
    
?>