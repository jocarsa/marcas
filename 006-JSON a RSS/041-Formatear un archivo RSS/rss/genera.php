<?php
    
    $json = "../json/entradas.json";
    $datos = file_get_contents($json);
    echo $datos;
    $datosjson = json_decode($datos);
    
    $rss = new SimpleXMLElement('
        <?xml version="1.0" encoding="UTF-8" ?>
        <rss version="2.0"></rss>
    ');

    
    echo $rss->asXML();
?>