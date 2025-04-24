<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NP Solutions - Computer Store & Services</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <!-- Header Section -->
    <header>
        <nav class="navbar">
            <div class="logo">
                <img src="https://media.licdn.com/dms/image/v2/C4D0BAQE23B0eBd85vw/company-logo_200_200/company-logo_200_200/0/1653279544330/npsolutionlimited_logo?e=2147483647&v=beta&t=m_boZPRC77NsKAboSVmX_PWidFkDonRItRUgt0waovA" alt="NP Solutions Logo" style="width: 100px; height: 100px;">
            </div>
            <ul class="nav-links">
                <li><a href="index.php">Home</a></li>
                <?php if (isset($_SESSION['user_id'])): ?>
                    <li><a href="products.php">Products</a></li>
                    <li><a href="services.php">Services</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="logout.php" class="auth-link">Logout</a></li>
                <?php else: ?>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="login.html" class="auth-link">Login</a></li>
                    <li><a href="register.html" class="auth-link">Register</a></li>
                <?php endif; ?>
                <li><a href="#cart"><i class="fas fa-shopping-cart"></i> <span id="cart-count">0</span></a></li>
            </ul>
        </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="slider">
            <div class="slide active">
                <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" alt="Modern Technology">
            </div>
            <div class="slide">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Gaming Setup">
            </div>
            <div class="slide">
                <img src="https://media.istockphoto.com/id/625135580/photo/laptop-disassembling-with-screwdriver-at-repair.jpg?s=612x612&w=0&k=20&c=Em-dB6fevNhRd5yaIxcgjDfFxuTVT4OSm_ys_Ybke6c=" alt="Business Technology">
            </div>
        </div>
    </section>
    <!-- Add more sections as needed -->
</body>
</html>
