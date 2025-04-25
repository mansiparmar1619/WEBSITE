<?php
// Include the database connection file
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $message = $_POST['message'];
    $serviceType = $_POST['service-type'];

    // Use prepared statements to prevent SQL injection
    $sql = "INSERT INTO bookings (name, email, phone, address, message, service_type) 
            VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssss", $name, $email, $phone, $address, $message, $serviceType);

    if ($stmt->execute()) {
        echo "success";  // Sending plain text response
    } else {
        echo "error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
