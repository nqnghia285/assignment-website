<?php
  class User {
    public $id;
    public $username;
    public $email;
    public $firstName;
    public $lastName;
    public $phone;
    public $address;
    public $gender;
    public $dateJoin;
    public $role;

    function __construct($id, $username, $email, $firstName, $lastName, $phone, $address, $gender, $dateJoin, $role) {
      $this->id =  $id;
      $this->username =  $username;
      $this->email =  $email;
      $this->firstName =  $firstName;
      $this->lastName =  $lastName;
      $this->phone =  $phone;
      $this->address =  $address;
      $this->gender =  $gender;
      $this->dateJoin =  $dateJoin;
      $this->role =  $role;
    }
  }
?>