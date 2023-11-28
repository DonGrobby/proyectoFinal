<?php
    class AccountMethods
    {

        private function nameIsTaken($pdo, $search_name)
        {
            $command = $pdo->prepare("SELECT * FROM users WHERE name = :name");
            $command->bindParam(':name', $search_name);
            $command->execute();

            $result = $command->fetch();

            return $result;
        }

        private function registedEmail($pdo, $search_email)
        {
            $command = $pdo->prepare("SELECT * FROM users WHERE email = :email");
            $command->bindParam(':email', $search_email);
            $command->execute();

            $result = $command->fetch();

            return $result;
        }

        public function registUser($pdo, $postData)
        {
            if ($this->nameIsTaken($pdo, $postData->data['name'])) {
                return 'nameTaken';
            }

            if ($this->registedEmail($pdo, $postData->data['email'])) {
                return 'registeredEmail';
            }

            $query = 'INSERT INTO users VALUES (:name, :email, :password)';
            $command = $pdo->prepare($query);

            $encrypted_password = md5($postData->data['password']);

            $command->bindParam(':name', $postData->data['name']);
            $command->bindParam(':email', $postData->data['email']);
            $command->bindParam(':password', $encrypted_password);

            $command->execute();

            return 'success';
        }

        public function login_user($pdo, $postData){

            if ($this->registedEmail($pdo, $postData->data['email'])) {

                $command = $pdo->prepare("SELECT password FROM users WHERE email = :email");
                $command->bindParam(':email', $postData->data['email']);
                $command->execute();

                $row = $command->fetch();

                if($row['password'] == md5($postData->data['password'])){
                    return 'success';
                }

                return 'wrongPassword';
                
            }

            return 'emailNotExist';

        }
    }
?>