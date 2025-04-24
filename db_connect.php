<?php
// Load database credentials from environment variables
$db_host = getenv("DB_HOST") ?: "sql108.infinityfree.com";
$db_user = getenv("DB_USER") ?: "if0_38826873";
$db_pass = getenv("DB_PASSWORD") ?: "Lohitaksh1619";
$db_name = getenv("DB_NAME") ?: "if0_38826873_np_solutions_db";

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
