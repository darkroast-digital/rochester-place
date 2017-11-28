<?php

require __DIR__ . '/../vendor/autoload.php';

function snippet($snippet)
{
    include __DIR__ . '/../views/snippets/' . $snippet . '.php';
}

$app = new \Slim\App([
    'settings' => [
        'displayErrorDetails' => true,

        'database' => [
            'driver' => 'mysql',
            'host' => 'localhost',
            'port' => '3306',
            'database' => 'rocheste_events',
            'username' => 'root',
            'password' => '',
        ],
    ]
]);

$container = $app->getContainer();

$container['view'] = function ($container) {
    $view = new \Slim\Views\Twig(__DIR__ . '/../resources/views', [
        'cache' => false
    ]);
    
    // Instantiate and add Slim specific extension
    $basePath = rtrim(str_ireplace('index.php', '', $container['request']->getUri()->getBasePath()), '/');
    $view->addExtension(new Slim\Views\TwigExtension($container['router'], $basePath));

    return $view;
};

require __DIR__ . '/helpers.php';

require_once __DIR__ . '/database.php';

require __DIR__ . '/../routes/web.php';