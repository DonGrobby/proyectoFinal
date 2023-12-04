<?php
    include 'support/connection.php';
    include 'support/PostData.php';
    include 'support/AccountMethods.php';

    $postData = new PostData();
    $accountMethods = new AccountMethods();

    $accountMethods->changePassword($pdo, $postData->data['changePassword'], $postData->data['token']);
    
?>