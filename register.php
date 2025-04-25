<?php
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve and sanitize input values
    $name = $_POST["name"] ?? '';
    $email = $_POST["email"] ?? '';
    $phone = $_POST["phone"] ?? '';
    $username = $_POST["username"] ?? '';
    $password = $_POST["password"] ?? '';
    $cpassword = $_POST["cpassword"] ?? '';

    // Check for empty fields
   /*if (empty($name) || empty($email) || empty($phone) || empty($username) || empty($password) || empty($cpassword)) {
        echo "Please fill in all required fields.";
        exit();
    }
    */

    // Check if passwords match
    if ($password !== $cpassword) {
        echo "Passwords do not match!";
        exit();
    }

    // Hash the password
    $password_hash = password_hash($password, PASSWORD_DEFAULT);

    // Connect to database
    $conn = connectDB();

    // Check if email or username already exists
    $checkStmt = $conn->prepare("SELECT id FROM users WHERE email = ? OR username = ?");
    $checkStmt->bind_param("ss", $email, $username);
    $checkStmt->execute();
    $checkStmt->store_result();

    if ($checkStmt->num_rows > 0) {
        echo "Email or username already exists!";
        $checkStmt->close();
        $conn->close();
        exit();
    }
    $checkStmt->close();

    // Insert new user
    $stmt = $conn->prepare("INSERT INTO users (name, email, phone, username, password, registration_date) VALUES (?, ?, ?, ?, ?, NOW())");
    $stmt->bind_param("sssss", $name, $email, $phone, $username, $password_hash);

    if ($stmt->execute()) {
        // Log registration (for testing/debugging on Render)
        $log_data = "[" . date("Y-m-d H:i:s") . "] Registered: $name ($email, $phone)\n";
        file_put_contents("/tmp/registration_log.txt", $log_data, FILE_APPEND);

        echo "Registered successfully!";
    } else {
        echo "Registration failed: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
