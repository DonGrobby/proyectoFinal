<?php
    include 'support/connection.php';
    include 'support/PostData.php';
    include 'support/AccountMethods.php';
    
    $postData = new PostData();
    $accountMethods = new AccountMethods();

    if($pdo != null) {
        $state = $accountMethods->registUser($pdo, $postData);
        echo $state;
    }

?>