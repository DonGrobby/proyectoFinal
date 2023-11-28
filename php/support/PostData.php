<?php
    class PostData{
        public $data = array();
        public function __construct(){
            $this->getData();
        }
        public function getData(){
            $this->data = json_decode(file_get_contents('php://input'), true);
        }

        public function isEmpty(){
            return empty($this->data);
        }
    }
?>