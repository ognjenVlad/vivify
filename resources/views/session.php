<?php
   session_start();
   if(!isset($_SESSION['u'])){
     echo("AAAA");
      header("location:login");
      exit();
   }
   $u = $_SESSION['u'];


?>
