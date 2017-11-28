<?php

$twig = $container->view-> getEnvironment();

// Die and Dump

// function dd ($el) {
//     var_dump($el);
//     die();
// }

// CSS Getter

$css = new Twig_SimpleFunction('css', function ($css) {
    return '/../resources/assets/css/'. $css . '.css';
});
$twig->addFunction($css);

// Forms

$form = new Twig_SimpleFunction('form', function ($action, $files) {
    echo '<form action="' . $action . '">';

    if ($files === true)
    {
       echo '<form action="' . $action . '" enctype="multipart/form-data">'; 
    }
});
$twig->addFunction($form);

$endform = new Twig_SimpleFunction('endform', function () {
    echo '</form>';
});
$twig->addFunction($endform);

// JS Getter

$js = new Twig_SimpleFunction('js', function ($js) {
    return '/../resources/assets/js/'. $js . '.js';
});
$twig->addFunction($js);

// IMG Getter

$img = new Twig_SimpleFunction('img', function ($img) {
    return '/../resources/assets/img/'. $img;
});
$twig->addFunction($img);

// Document Getter

$document = new Twig_SimpleFunction('document', function ($document) {
    return '/../resources/assets/documents/'. $document;
});
$twig->addFunction($document);

// Snippet Getter

$snippet = new Twig_SimpleFunction('snippet', function ($snippet) {
    include __DIR__ . '/../resources/views/snippets/'. $snippet . '.php';
});
$twig->addFunction($snippet);

// Page Name

$pagename = new Twig_SimpleFunction('pagename', function () {
    echo basename($_SERVER['SCRIPT_NAME']);
});
$twig->addFunction($pagename);

//$twig->addGlobal('page', $page);