<?php
include 'conn/db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $mobile = $_POST["mobile"];
    $password = $_POST["password"];
    $cpassword = $_POST["cpassword"];

    if ($password != $cpassword) {
        echo "<script>alert('Passwords do not match!'); window.location.href = '../signup.html';</script>";
        exit();
    }

    $password_hash = password_hash($password, PASSWORD_DEFAULT);

    $conn = connectDB();

    $stmt = $conn->prepare("INSERT INTO users (name, email, mobile, password) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $mobile, $password_hash);

    if ($stmt->execute()) {
        // ✅ Log registration info to a writable location (Render)
        $log_data = "[" . date("Y-m-d H:i:s") . "] Registered: $name ($email, $mobile)\n";
        file_put_contents("/tmp/registration_log.txt", $log_data, FILE_APPEND);

        echo "<script>alert('Registered successfully!'); window.location.href = '../login.html';</script>";
    } else {
        echo "<script>alert('Registration failed: " . $stmt->error . "'); window.location.href = '../signup.html';</script>";
    }

    $stmt->close();
    $conn->close();
}
?>
