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
                    <li><a href="logout.php" class="auth-link">Logout (<?php echo htmlspecialchars($_SESSION['username']); ?>)</a></li>
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
            <div class="slide">
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-ecommerce-website-with-shopping-cart-with-the-shopping-cart-on-a-image_2975658.jpg" alt="Modern Office">
            </div>
        </div>
        <div class="hero-content">
            <h1>Welcome to NP Solutions</h1>
            <p>Your One-Stop Shop for Computers, Repairs, and Security Solutions</p>
            <?php if (isset($_SESSION['username'])): ?>
                <p class="welcome-msg">Hello, <?php echo htmlspecialchars($_SESSION['username']); ?>!</p>
            <?php else: ?>
                <p class="welcome-msg">Please login or register to explore our services and products.</p>
            <?php endif; ?>
        </div>
    </section>

    <!-- About Section -->
    <section class="about">
        <div class="about-container">
            <h2>About NP Solutions</h2>
            <div class="about-content">
                <div class="about-highlight">
                    <p>NP Solutions is your premier destination for cutting-edge technology solutions. With years of experience in the industry, we provide top-quality products and services to meet all your technological needs.</p>
                </div>
                <div class="about-description">
                    <p>NP Solutions is a trusted provider of cutting-edge technology solutions, offering a seamless experience for customers looking to purchase, repair, and secure their digital assets. We specialize in computers, accessories, repair services, and CCTV installations, catering to individuals and businesses alike.</p>
                    <p>Our online platform ensures hassle-free shopping, secure transactions, and real-time service tracking, allowing customers to browse products, book repair services, or schedule CCTV installations from their homes.</p>
                </div>
                <div class="about-features">
                    <div class="feature">
                        <i class="fas fa-check-circle"></i>
                        <p>Authorized dealer of premium brands</p>
                    </div>
                    <div class="feature">
                        <i class="fas fa-check-circle"></i>
                        <p>Expert technical support</p>
                    </div>
                    <div class="feature">
                        <i class="fas fa-check-circle"></i>
                        <p>Professional repair services</p>
                    </div>
                    <div class="feature">
                        <i class="fas fa-check-circle"></i>
                        <p>Comprehensive security solutions</p>
                    </div>
                </div>
                <div class="about-stats">
                    <div class="stat-item">
                        <span class="stat-number">10+</span>
                        <span class="stat-label">Years Experience</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">1000+</span>
                        <span class="stat-label">Happy Customers</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">50+</span>
                        <span class="stat-label">Expert Technicians</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Brand Collaborations -->
    <section class="brands">
        <h2>Our Authorized Brands</h2>
        <div class="brand-grid">
            <div class="brand-card">
                <img src="https://www.freeiconspng.com/uploads/hp-logo-icon-6.jpg" alt="HP">
                <h3>HP</h3>
                <p>Innovation that matters</p>
            </div>
            <div class="brand-card">
                <img src="https://1000logos.net/wp-content/uploads/2017/07/Dell-Logo.png" alt="Dell">
                <h3>Dell</h3>
                <p>Innovation starts with you</p>
            </div>
            <div class="brand-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Lenovo_Global_Corporate_Logo.png/2560px-Lenovo_Global_Corporate_Logo.png" alt="Lenovo">
                <h3>Lenovo</h3>
                <p>Innovation never stands still</p>
            </div>
            <div class="brand-card">
                <img src="https://1000logos.net/wp-content/uploads/2016/10/Asus-Logo-1995.png" alt="ASUS">
                <h3>ASUS</h3>
                <p>In search of incredible</p>
            </div>
            <div class="brand-card">
                <img src="https://1000logos.net/wp-content/uploads/2018/10/MSI-Logo.png" alt="MSI">
                <h3>MSI</h3>
                <p>True gaming</p>
            </div>
            <div class="brand-card">
                <img src="https://w7.pngwing.com/pngs/251/709/png-transparent-computer-keyboard-logitech-logo-headphones-marketplace-electronics-text-computer.png" alt="Logitech">
                <h3>Logitech</h3>
                <p>Design for life</p>
            </div>
        </div>
    </section>

    <!-- Shopping Cart Modal -->
    <div id="cart-modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Shopping Cart</h2>
            <div id="cart-items"></div>
            <div class="cart-total">
                <h3>Total: ₹<span id="cart-total-amount">0</span></h3>
                <div class="cart-buttons">
                    <button class="continue-shopping-btn" onclick="window.location.href='products.php'">Continue Shopping</button>
                    <button class="checkout-btn">Checkout</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>NP Solutions</h3>
                <p>Your trusted partner for computer solutions and security services.</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 NP Solutions. All rights reserved.</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
