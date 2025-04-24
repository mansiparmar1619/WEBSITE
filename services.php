<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    echo "<script>alert('Please log in to access Services.'); window.location.href='login.html';</script>";
    exit();
}
?>
