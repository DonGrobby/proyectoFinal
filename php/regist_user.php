<?php
    include 'connection.php';
    include 'PostData.php';
    
    $postData = new PostData();

    if($pdo != null && !$postData->isEmpty()) {
        $query = 'INSERT INTO users VALUES (:name, :email, :password)';
        $command = $pdo->prepare($query);

        $encrypted_password = md5($postData->data['password']);

        $command->bindParam(':name', $postData->data['name']);
        $command->bindParam(':email', $postData->data['email']);
        $command->bindParam(':password', $encrypted_password);

        $command->execute();
    }
?>