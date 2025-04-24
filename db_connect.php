<?php
// Load database credentials from environment variables
$db_host = getenv("DB_HOST") ?: "localhost";
$db_user = getenv("DB_USER") ?: "root";
$db_pass = getenv("DB_PASSWORD") ?: "root";
$db_name = getenv("DB_NAME") ?: "np_solutions_db";

// Create connection
$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);

// Check connection
if ($conn->connect_error) {
    error_log("Connection failed: " . $conn->connect_error, 0); // Log the error
    die("Database connection failed. Please try again later.");
}

// Function to get the database connection (for use in other scripts)
function connectDB() {
    global $conn;
    return $conn;
}
?>
