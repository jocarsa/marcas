<?php
    
    $rss = new SimpleXMLElement('<?xml version="1.0" encoding="UTF-8" ?><formulario></formulario>');
    $rss->addChild('nombre','prueba');
    $rss->addChild('asunto','prueba');
    $rss->addChild('email','prueba');
    $rss->addChild('mensaje','prueba');
 
    file_put_contents(
        'formularios/'
        .date('Y')
        .date('m')
        .date('d')
        .date('H')
        .date('i')
        .date('s')
        .'.xml',$rss->asXML());
    echo "Formulario guardado";
?>