<?php
include_once('../inc/login.inc.php');


//erste Variante um etwas abzuspeichern :

$newEntry = array();
$newEntry['email'] = $_POST['inputMail'];
$newEntry['name'] =$_POST['inputName'];

//Abkürzung für Statement, das pdo bezieht sich auf die Datenbankverbindung
$stmt = $pdo->prepare("INSERT INTO exercise01 (name, mail) VALUES (:name,:email)");
$stmt->execute($newEntry);

header('Location: ' . $_SERVER['HTTP_REFERER']);