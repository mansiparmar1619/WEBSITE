<?php
// Include the database connection file
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $phone = trim($_POST['phone']);
    $message = trim($_POST['message']);

    // Get the database connection
    $conn = connectDB();

    // Use prepared statements to prevent SQL injection
    $stmt = $conn->prepare("INSERT INTO contact_submissions (name, email, phone, message) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $phone, $message);

    if ($stmt->execute()) {
        echo "<script>alert('Thank you for contacting us!'); window.location.href='contact.html';</script>";
    } else {
        echo "<script>alert('Error submitting your message. Please try again.'); window.location.href='contact.html';</script>";
    }

    $stmt->close();
    $conn->close();
}
?>
