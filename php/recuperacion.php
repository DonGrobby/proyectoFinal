<?php

    require 'D:\xampp\htdocs\proyectoFinal\phpMailer\src\Exception.php';
    require 'D:\xampp\htdocs\proyectoFinal\phpMailer\src\PHPMailer.php';
    require 'D:\xampp\htdocs\proyectoFinal\phpMailer\src\SMTP.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    include 'support/connection.php';
    include 'support/PostData.php';
    include 'support/AccountMethods.php';

    $postData = new PostData();
    $accountMethods = new AccountMethods();
    $token = $accountMethods->getToken($pdo, $postData->data['email']);

    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'webpracticexampp@gmail.com';
    $mail->Password = 'gsznavbbpxmwsijm';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->setFrom('webpracticexampp@gmail.com');

    $mail->addAddress($postData->data['email']);

    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Body = 
    '
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Lorem Ipsum y Botón Centrado</title>
        <link rel="stylesheet" href="styles.css">
        <style>
        
        body {
            font-family: Arial, sans-serif;
            margin-bottom: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 130vh;
            background-color: #f4f4f4;
        }
            
        .container {
            text-align: center;
            padding-bottom: 10px;
        }
            
        .lorem {
            font-size: 18px;
            color: #333;
            margin-bottom: 20px;
        }
            
        .styled-button {
            padding: 10px 20px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            background-color: #007bff;
            color: #fff;
            cursor: pointer;
            transition: background-color 0.3s ease;
            margin-bottom: 10px;
        }
            
        .styled-button:hover {
            background-color: #0056b3;
        }

        </style>

    </head>
    <body>
        <div class="container">
            <p class="lorem">Este es un correo de recuperación, si usted no ha solicitado el proceso de recuperación de contraseña puede ignorar este correo.</p>
            <a href="localhost/proyectoFinal/change_password.html?token='.$token.'" class="styled-button">Recuperar contraseña</a>
        </div>

    </body>
</html>
    '
    ;

    $mail->Subject = 'Recuperación de contraseña';

    $mail->send();
    
?>