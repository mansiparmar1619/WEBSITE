<?php
session_start();
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = trim($_POST['username']);  // must match login form
    $password = $_POST['password'];         // must match login form

    $stmt = $conn->prepare("SELECT id, password FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($user_id, $db_password_hash);
        $stmt->fetch();

        if (password_verify($password, $db_password_hash)) {
            $_SESSION['user_id'] = $user_id;
            $_SESSION['username'] = $username;
            echo "<script>alert('Login successful!'); window.location.href='index.php';</script>";
        }
         else {
            echo "<script>alert('Invalid username or password.'); window.location.href='login.html';</script>";
        }
    } else {
        echo "<script>alert('Invalid username or password.'); window.location.href='login.html';</script>";
    }

    $stmt->close();
    $conn->close();
}
?>
