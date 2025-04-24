<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Include the database connection file
include("db_connect.php");

// Function to log messages (append to a file)
function logMessage($message, $logFile = 'registration_log.txt') {
    $timestamp = date("Y-m-d H:i:s");
    $logMessage = "[$timestamp] $message" . PHP_EOL;
    file_put_contents($logFile, $logMessage, FILE_APPEND);
}

// Initial log message
logMessage("register.php script started");

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    logMessage("Form submitted via POST");

    // 1.  Database Connection
    $conn = connectDB();
    if (!$conn) {
        $error_message = "Failed to connect to database: " . mysqli_connect_error();
        logMessage($error_message);
        die($error_message); // Stop execution
    }
    logMessage("Successfully connected to the database");

    // 2.  Retrieve and Sanitize Data
    $name = mysqli_real_escape_string($conn, $_POST["name"]);
    $email = mysqli_real_escape_string($conn, $_POST["email"]);
    $phone = mysqli_real_escape_string($conn, $_POST["phone"]);
    $username = mysqli_real_escape_string($conn, $_POST["username"]);
    $password = $_POST["password"];  // DO NOT escape password before hashing
    $confirm_password = mysqli_real_escape_string($conn, $_POST["confirm-password"]);
    $terms = isset($_POST['terms']) ? 1 : 0;

    logMessage("Retrieved form data: name=$name, email=$email, phone=$phone, username=$username, terms=$terms");

    // 3.  Validation
    $errors = [];

    if (empty($name))      { $errors[] = "Name is required"; }
    if (empty($email))     { $errors[] = "Email is required"; }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { $errors[] = "Invalid email format"; }
    if (empty($phone))     { $errors[] = "Phone is required"; }
    if (!preg_match("/^[0-9]{10}$/", $phone)) { $errors[] = "Invalid phone number (10 digits)"; }
    if (empty($username))  { $errors[] = "Username is required"; }
    if (empty($password))  { $errors[] = "Password is required"; }
    if ($password !== $confirm_password)  { $errors[] = "Passwords do not match"; }
    if ($terms != 1)      { $errors[] = "Terms and Conditions must be accepted"; }

    if (!empty($errors)) {
        logMessage("Validation errors: " . implode(", ", $errors));
        echo "<b>Registration Errors:</b><br>";
        foreach ($errors as $error) {
            echo "- $error<br>";
        }
        mysqli_close($conn);
        exit; // Stop processing
    }

    // 4. Check for Duplicate Usernames or Emails
    $checkQuery = "SELECT id FROM users WHERE username = '$username' OR email = '$email'";
    logMessage("Checking for duplicate username/email: $checkQuery");
    $checkResult = mysqli_query($conn, $checkQuery);  // Use mysqli_query
    if (!$checkResult) {
        $db_error = mysqli_error($conn);
        logMessage("Database error checking duplicates: $db_error");
        die("Database error: $db_error");
    }

    if (mysqli_num_rows($checkResult) > 0) {
        logMessage("Duplicate username or email found");
        echo "Error: Username or email already exists";
        mysqli_close($conn);
        exit;
    }

    // 5.  Password Hashing
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    logMessage("Password hashed");

    // 6.  Insert New User
    // Corrected insert query to match the provided table structure
    $insertQuery = "INSERT INTO users (name, email, phone, username, password) VALUES ('$name', '$email', '$phone', '$username', '$hashedPassword')";
    logMessage("Insert query: $insertQuery");
    $insertResult = mysqli_query($conn, $insertQuery); // Use mysqli_query

    if ($insertResult) {
        logMessage("User registered successfully");
        echo "Registration successful!";
        //  header("Location: login.html"); // Removed header()
        //  exit();
    } else {
        $db_error = mysqli_error($conn);
        logMessage("Error inserting user: $db_error");
        echo "Registration failed: " . $db_error;
    }

    // 7. Close Connection
    mysqli_close($conn);
    logMessage("Database connection closed");

} 
     else {
    logMessage("Direct access to register.php is not allowed.");
    echo "Direct access to this page is not allowed.";
}

logMessage("register.php script завершено");
?>
