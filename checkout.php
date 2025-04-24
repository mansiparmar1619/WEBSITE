<?php
include 'db_connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $first = $_POST['first_name'];
    $last = $_POST['last_name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $street = $_POST['street_address'];
    $city = $_POST['city'];
    $state = $_POST['state'];
    $postal = $_POST['postal_code'];
    $country = $_POST['country'];
    $payment = $_POST['payment_method'];
    $cart = $_POST['cart_items']; // Expected as JSON
    $total = $_POST['total_amount'];

    $stmt = $conn->prepare("INSERT INTO orders 
        (first_name, last_name, email, phone, street_address, city, state, postal_code, country, payment_method, cart_items, total_amount) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

    $stmt->bind_param("sssssssssssd", $first, $last, $email, $phone, $street, $city, $state, $postal, $country, $payment, $cart, $total);

    if ($stmt->execute()) {
        echo "Order placed successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
