<?php
include_once('../inc/login.inc.php');

$updateMail = $_POST['inputMail'];
$updateName = $_POST['inputName'];
$updateID = $_POST['inputID'];

$stmt = $pdo->prepare('UPDATE exercise01 SET mail = :email_new, name = :name_new WHERE id = :id');
$stmt->execute(array('id' => $updateID, 'email_new' => $updateMail, 'name_new' => $updateName));

header('Location: ../pages/index.php');
