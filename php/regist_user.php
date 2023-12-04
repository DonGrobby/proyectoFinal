<?php
    include 'support/connection.php';
    include 'support/PostData.php';
    include 'support/AccountMethods.php';
    
    $postData = new PostData();
    $accountMethods = new AccountMethods();

    if(strlen($postData->data['captcha']) == 0){
        echo 'captchaNotSuccess';
        exit(0);
    }

    if($pdo != null) {
        $state = $accountMethods->registUser($pdo, $postData);
        echo $state;
    }

?>