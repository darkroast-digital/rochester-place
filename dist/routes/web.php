<?php

use Shiva\Models\Event;

$app->get('/', function ($request, $response) {
    return $this->view->render($response, 'home.twig');
})->setName('home');

$app->get('/resort', function ($request, $response) {
    return $this->view->render($response, 'resort.twig');
})->setName('resort');

$app->get('/models', function ($request, $response) {
    return $this->view->render($response, 'models.twig');
})->setName('models');

$app->get('/gallery', function ($request, $response) {
    return $this->view->render($response, 'gallery.twig');
})->setName('gallery');

$app->get('/golf', function ($request, $response) {
    return $this->view->render($response, 'golf.twig');
})->setName('golf');

$app->get('/restaurant', function ($request, $response) {
    $events = Event::all();

    return $this->view->render($response, 'restaurant.twig', compact('events'));
})->setName('restaurant');

$app->get('/events', function ($request, $response) {
    return $this->view->render($response, 'events.twig');
})->setName('events');

$app->get('/contact', function ($request, $response) {
    return $this->view->render($response, 'contact.twig');
})->setName('contact');

$app->post('/contact/form', function ($request, $response) {
    $mail = new PHPMailer;

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['comments'];

    $mail->setFrom($email, $name);
    $mail->addAddress('info@rochesterplace.com');
    $mail->addReplyTo($email, $name);
    
    $mail->isHTML(true);

    $mail->Subject = 'A new email' . $name. 'on Rochester Place';
    $mail->Body    = "Name: $name <br>" . "Email: $email <br>" . $message;
    $mail->AltBody = "Name: $name\r\n" . "Email: $email\r\n" . $message;

    if(!$mail->send()) {
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'Message has been sent';
    }

})->setName('contact.form');