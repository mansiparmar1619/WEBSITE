<?php
// Include the database connection file
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $phone = trim($_POST['phone']);
    $address = trim($_POST['address']);
    $message = trim($_POST['message']);
    $serviceType = trim($_POST['service-type']);

    // Use prepared statements to prevent SQL injection
    $sql = "INSERT INTO bookings (name, email, phone, address, message, service_type) 
            VALUES (?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("ssssss", $name, $email, $phone, $address, $message, $serviceType);

        if ($stmt->execute()) {
            echo "success"; // Plain text success response
        } else {
            echo "error: " . $stmt->error; // Print SQL error
        }

        $stmt->close();
    } else {
        echo "error: " . $conn->error; // Connection error if prepare() fails
    }

    $conn->close();
} else {
    echo "error: Invalid request method.";
}
?>
