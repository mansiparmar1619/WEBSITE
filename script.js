// Product data
const products = {
    laptops: {
        gaming: [
            {
                id: 'laptop-gaming-1',
                name: 'MSI GS66 Stealth',
                price: 165999,
                image: 'https://rukminim2.flixcart.com/image/750/900/kyag87k0/computer/h/i/l/stealth-gs66-12ugs-gaming-laptop-msi-original-imagak5jdsg4bgtp.jpeg?q=20&crop=false',
                description: '15.6" Gaming Laptop, RTX 3080, 32GB RAM, 1TB SSD'
            },
            {
                id: 'laptop-gaming-2',
                name: 'ASUS ROG Zephyrus',
                price: 149999,
                image: 'https://rukminim3.flixcart.com/image/750/900/xif0q/computer/e/o/z/rog-zephyrus-g14-gaming-laptop-asus-original-imahfcjyjcvuu2hz.jpeg?q=20&crop=false',
                description: '15.6" Gaming Laptop, RTX 3070, 16GB RAM, 1TB SSD'
            },
            {
                id: 'laptop-gaming-3',
                name: 'Razer Blade 15',
                price: 157999,
                image: 'https://m.media-amazon.com/images/I/71kcJxMggRL._AC_UF1000,1000_QL80_.jpg',
                description: '15.6" Gaming Laptop, RTX 3080, 32GB RAM, 1TB SSD'
            },
            {
                id: 'laptop-gaming-4',
                name: 'ASUS ROG Strix G15',
                price: 129999,
                image: 'https://rukminim3.flixcart.com/image/750/900/xif0q/computer/p/o/b/g513ih-hn086t-gaming-laptop-asus-original-imah3w8nb7bazkpf.jpeg?q=20&crop=false',
                description: '15.6" Gaming Laptop, RTX 3060, 16GB RAM, 512GB SSD'
            },
            {
                id: 'laptop-gaming-5',
                name: 'Lenovo Legion 5 Pro',
                price: 139999,
                image: 'https://p3-ofp.static.pub//fes/cms/2024/09/12/elsxf6rwrtxudesy107rsj88cg0qhx499173.png',
                description: '16" Gaming Laptop, RTX 3070, 16GB RAM, 1TB SSD'
            },
            {
                id: 'laptop-gaming-6',
                name: 'HP Omen 16',
                price: 119999,
                image: 'https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08880572_3.png',
                description: '16" Gaming Laptop, RTX 3060, 16GB RAM, 512GB SSD'
            },
            {
                id: 'laptop-gaming-7',
                name: 'Acer Predator Helios 300',
                price: 109999,
                image: 'https://m.media-amazon.com/images/I/71Xk9qt6IwL.jpg',
                description: '15.6" Gaming Laptop, RTX 3060, 16GB RAM, 512GB SSD'
            }
        ],
        business: [
            {
                id: 'laptop-business-1',
                name: 'Dell XPS 15',
                price: 124999,
                image: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-9520-t-black-gallery-3.psd?fmt=pjpg&pscan=auto&scl=1&wid=3788&hei=2333&qlt=100,1&resMode=sharp2&size=3788,2333&chrss=full&imwidth=5000',
                description: '15.6" Business Laptop, i7, 16GB RAM, 512GB SSD'
            },
            {
                id: 'laptop-business-2',
                name: 'HP EliteBook 840',
                price: 107999,
                image: 'https://images-cdn.ubuy.co.in/633c8f220c1093110433cf1d-hp-elitebook-840-g6-14-touchscreen.jpg',
                description: '14" Business Laptop, i7, 16GB RAM, 512GB SSD'
            },
            {
                id: 'laptop-business-3',
                name: 'Lenovo ThinkPad X1',
                price: 132999,
                image: 'https://p3-ofp.static.pub/ShareResource/na/products/thinkpad/400x300/lenovo-thinkpad-t16-black-01.png',
                description: '14" Business Laptop, i7, 16GB RAM, 1TB SSD'
            },
            {
                id: 'laptop-business-4',
                name: 'HP ProBook 450',
                price: 99999,
                image: 'https://5.imimg.com/data5/SELLER/Default/2023/10/353474784/XB/UJ/EF/188011544/hp-probook-450-g4-series-7th-gen-i7-laptop.jpg',
                description: '15.6" Business Laptop, i7, 16GB RAM, 512GB SSD'
            },
            {
                id: 'laptop-business-5',
                name: 'Dell Latitude 5420',
                price: 115999,
                image: 'https://www.electronicsbazaar.com/pub/media/catalog/product/cache/aeefd4355f66eb9f2c71605021c9e25d/5/1/51wnzk3mf7l._ac_sl1500_.webp',
                description: '14" Business Laptop, i7, 16GB RAM, 1TB SSD'
            },
            {
                id: 'laptop-business-6',
                name: 'Lenovo ThinkPad T14',
                price: 107999,
                image: 'https://p3-ofp.static.pub/fes/cms/2023/04/03/i9t01qveap33003d706u1qul3m5xip610419.jpg',
                description: '14" Business Laptop, i7, 16GB RAM, 512GB SSD'
            },
            {
                id: 'laptop-business-7',
                name: 'ASUS ExpertBook B9',
                price: 124999,
                image: 'https://images-cdn.ubuy.co.in/6631f0fcb30b5c31866fe89a-asus-expertbook-b9-oled-ultralight.jpg',
                description: '14" Business Laptop, i7, 16GB RAM, 1TB SSD'
            }
        ],
        student: [
            {
                id: 'laptop-student-1',
                name: 'HP Pavilion',
                price: 57999,
                image: 'https://m.media-amazon.com/images/I/71lWuRFiCoL._AC_UF1000,1000_QL80_.jpg',
                description: '15.6" Student Laptop, i5, 8GB RAM, 256GB SSD'
            },
            {
                id: 'laptop-student-2',
                name: 'Lenovo IdeaPad',
                price: 49999,
                image: 'https://m.media-amazon.com/images/I/513bplmZ3VL.jpg',
                description: '15.6" Student Laptop, i5, 8GB RAM, 256GB SSD'
            },
            {
                id: 'laptop-student-3',
                name: 'ASUS VivoBook',
                price: 53999,
                image: 'https://in.store.asus.com/media/catalog/product/v/i/vivobook_16_x1605v_product_photo_1s_cool_silver_05_fingerprint.png?width=439&height=439&store=en_IN&image-type=image',
                description: '15.6" Student Laptop, i5, 8GB RAM, 256GB SSD'
            },
            {
                id: 'laptop-student-4',
                name: 'Acer Aspire 5',
                price: 49999,
                image: 'https://m.media-amazon.com/images/I/61NPqJky+cL._AC_UF1000,1000_QL80_.jpg',
                description: '15.6" Student Laptop, i5, 8GB RAM, 256GB SSD'
            },
            {
                id: 'laptop-student-5',
                name: 'Dell Inspiron 15',
                price: 53999,
                image: 'https://vsprod.vijaysales.com/media/catalog/product/2/3/237102_1_.jpg?optimize=medium&fit=bounds&height=500&width=500',
                description: '15.6" Student Laptop, i5, 8GB RAM, 256GB SSD'
            },
            {
                id: 'laptop-student-6',
                name: 'HP 15-dw',
                price: 45999,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKz4xsaNmGOS0-dHYefYs3jVWv261D7vTy9g&s',
                description: '15.6" Student Laptop, i5, 8GB RAM, 256GB SSD'
            },
            {
                id: 'laptop-student-7',
                name: 'Lenovo Flex 5',
                price: 57999,
                image: 'https://p2-ofp.static.pub//fes/cms/2024/06/24/529uhpkn8j2z57v1wc5xajdseb78j8228261.jpg',
                description: '14" Convertible Laptop, i5, 8GB RAM, 256GB SSD'
            }
        ]
    },
    desktops: [
        {
            id: 'desktop-1',
            name: 'Gaming Desktop Pro',
            price: 207999,
            image: 'https://5.imimg.com/data5/SELLER/Default/2020/11/AM/GI/TN/3245790/assembled-computer-gaming-desktop.jpg',
            description: 'RTX 4080, i9, 32GB RAM, 2TB SSD'
        },
        {
            id: 'desktop-2',
            name: 'Workstation Elite',
            price: 165999,
            image: 'https://m.media-amazon.com/images/I/51A4Sq+7ncS._AC_UF1000,1000_QL80_.jpg',
            description: 'RTX 3070, i7, 32GB RAM, 1TB SSD'
        },
        {
            id: 'desktop-3',
            name: 'Home Office Plus',
            price: 107999,
            image: 'https://m.media-amazon.com/images/I/51LulbYHimL._AC_UF1000,1000_QL80_.jpg',
            description: 'RTX 3060, i5, 16GB RAM, 512GB SSD'
        },
        {
            id: 'desktop-4',
            name: 'Student Desktop',
            price: 65999,
            image: 'https://m.media-amazon.com/images/I/713lte89XZL._AC_UF1000,1000_QL80_.jpg',
            description: 'GTX 1650, i5, 8GB RAM, 256GB SSD'
        },
        {
            id: 'desktop-5',
            name: 'Budget Gaming PC',
            price: 82999,
            image: 'https://m.media-amazon.com/images/I/71HeLhm-7FL.jpg',
            description: 'RTX 3050, i5, 16GB RAM, 512GB SSD'
        },
        {
            id: 'desktop-6',
            name: 'Professional Workstation',
            price: 249999,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCPzQH1yFLuanzb_PmKDZMziieqy4zGC_MYg&s',
            description: 'RTX 4090, i9, 64GB RAM, 4TB SSD'
        },
        {
            id: 'desktop-7',
            name: 'Compact Office PC',
            price: 74999,
            image: 'https://p1-ofp.static.pub/medias/26146349384_ThinkCentreneo50a24Gen5_202310310229451721409478839.png',
            description: 'i5, 16GB RAM, 512GB SSD'
        },
        {
            id: 'desktop-8',
            name: 'High-End Gaming',
            price: 232999,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMqA_Fyk5MJ1XGthrRwFgfum9yIrq4fS4pDw&s',
            description: 'RTX 4080, i9, 32GB RAM, 2TB SSD'
        },
        {
            id: 'desktop-9',
            name: 'Family Desktop',
            price: 57999,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqsVqUAoGOaPRh2M6zYhgdhN2B-JJerU7HQ&s',
            description: 'i5, 8GB RAM, 256GB SSD'
        },
        {
            id: 'desktop-10',
            name: 'Creator Workstation',
            price: 165999,
            image: 'https://www.pugetsystems.com/wp-content/uploads/2022/08/Workstation-with-Monitor-Running-Content-Creation.png',
            description: 'RTX 3070, i7, 32GB RAM, 1TB SSD'
        }
    ],
    accessories: {
        mouse: [
            {
                id: 'mouse-1',
                name: 'Logitech G502',
                price: 6499,
                image: 'https://m.media-amazon.com/images/I/61mpMH5TzkL.jpg',
                description: 'Gaming Mouse with RGB'
            },
            {
                id: 'mouse-2',
                name: 'Razer DeathAdder',
                price: 5799,
                image: 'https://m.media-amazon.com/images/I/41iLtLRTsZL._AC_UF1000,1000_QL80_.jpg',
                description: 'Ergonomic Gaming Mouse'
            },
            {
                id: 'mouse-3',
                name: 'Logitech MX Master 3',
                price: 8299,
                image: 'https://m.media-amazon.com/images/I/61VjlQUqQDL._AC_UF1000,1000_QL80_.jpg',
                description: 'Wireless Ergonomic Mouse'
            },
            {
                id: 'mouse-4',
                name: 'SteelSeries Prime',
                price: 4999,
                image: 'https://m.media-amazon.com/images/I/41POmV4mMyL._AC_UF1000,1000_QL80_.jpg',
                description: 'Gaming Mouse with RGB'
            },
            {
                id: 'mouse-5',
                name: 'Corsair Dark Core',
                price: 7499,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiWHEYbeHm4LxxRloBfOw65IGDHrg4YCZyxg&s',
                description: 'Wireless Gaming Mouse'
            }
        ],
        keyboard: [
            {
                id: 'keyboard-1',
                name: 'Corsair K95',
                price: 16499,
                image: 'https://rukminim2.flixcart.com/image/850/1000/kxhvf680/keyboard/gaming-keyboard/w/r/z/k95-rgb-platinum-xt-mx-blue-corsair-original-imag9yytb2ezvpb4.jpeg?q=20&crop=false',
                description: 'RGB Mechanical Keyboard'
            },
            {
                id: 'keyboard-2',
                name: 'Razer BlackWidow',
                price: 12499,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7mZdHkos6EARe6O6eBl8V9fBJ_Z4Y6NVRw&s',
                description: 'Mechanical Gaming Keyboard'
            },
            {
                id: 'keyboard-3',
                name: 'SteelSeries Apex Pro',
                price: 16499,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9aQbO_sWquVNXKFnKEbBlNHYp8PsB2pNKdQ&s',
                description: 'RGB Mechanical Keyboard'
            },
            {
                id: 'keyboard-4',
                name: 'Logitech G915',
                price: 20799,
                image: 'https://m.media-amazon.com/images/I/611TTTsiGDL._AC_UF1000,1000_QL80_.jpg',
                description: 'Wireless RGB Keyboard'
            },
            {
                id: 'keyboard-5',
                name: 'Ducky One 2',
                price: 10799,
                image: 'https://m.media-amazon.com/images/I/71cLFUb+yrL.jpg',
                description: 'Mechanical Keyboard'
            }
        ],
        storage: [
            {
                id: 'storage-1',
                name: 'Samsung 970 EVO',
                price: 8299,
                image: 'https://m.media-amazon.com/images/I/71OYNmVRFhL._AC_UF1000,1000_QL80_.jpg',
                description: '1TB NVMe SSD'
            },
            {
                id: 'storage-2',
                name: 'SanDisk Ultra',
                price: 2499,
                image: 'https://m.media-amazon.com/images/I/7180ZAZmERL.jpg',
                description: '128GB USB 3.0 Flash Drive'
            },
            {
                id: 'storage-3',
                name: 'WD Black SN850',
                price: 12499,
                image: 'https://m.media-amazon.com/images/I/413LlM22SJL._AC_UF1000,1000_QL80_.jpg',
                description: '1TB NVMe SSD'
            },
            {
                id: 'storage-4',
                name: 'Crucial P3',
                price: 6499,
                image: 'https://www.crucial.in/content/dam/crucial/ssd-products/p3/images/web/Crucial-p3-ssd-standing-up-on-white-cropped-Image.psd.transform/small-jpg/img.jpg',
                description: '500GB NVMe SSD'
            },
            {
                id: 'storage-5',
                name: 'Samsung T7',
                price: 10799,
                image: 'https://m.media-amazon.com/images/I/81VKxjrWZdL.jpg',
                description: '1TB Portable SSD'
            }
        ],
        monitor: [
            {
                id: 'monitor-1',
                name: 'LG 27GL850',
                price: 32999,
                image: 'https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/227b376e-c8b6-443d-b578-487704537f1d/md06064916-zoom-01-jpg?io=transform:fill,width:596',
                description: '27" 144Hz Gaming Monitor'
            },
            {
                id: 'monitor-2',
                name: 'Dell S2721DGF',
                price: 28999,
                image: 'https://images-cdn.ubuy.co.in/635338e754e87c5cb27b84e8-new-dell-s2721dgf-27-in-gaming-monitor.jpg',
                description: '27" 165Hz Gaming Monitor'
            },
            {
                id: 'monitor-3',
                name: 'ASUS ROG Swift',
                price: 41499,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF0V1BYzN2ds9VSKSnEkOiVTKJJC0BeePHlw&s',
                description: '27" 165Hz Gaming Monitor'
            },
            {
                id: 'monitor-4',
                name: 'MSI Optix MAG',
                price: 37499,
                image: 'https://asset.msi.com/resize/image/global/product/product_3_20201021135442_5f8fcd223adfa.png62405b38c58fe0f07fcef2367d8a9ba1/600.png',
                description: '27" 144Hz Gaming Monitor'
            },
            {
                id: 'monitor-5',
                name: 'Acer Predator',
                price: 49999,
                image: 'https://m.media-amazon.com/images/I/61Hhf3jz5AL.jpg',
                description: '27" 240Hz Gaming Monitor'
            }
        ]
    }
};

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Image Slider functionality
function setupImageSlider() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setupImageSlider();
    setupCategoryNavigation();
    setupSubcategoryNavigation();
    setupCartModal();
    setupThemeToggle();
    loadCheckoutPage();
    
    // Other initialization code
    updateCartCount();
    
    // Display products if on products page
    if (window.location.pathname.includes('products.html')) {
        displayProducts('laptops', 'gaming');
    }
    
    // Setup contact form if on contact page
    if (document.querySelector('.contact-form')) {
        setupContactForm();
    }
});

// Category Navigation
function setupCategoryNavigation() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Show selected category
            const category = button.dataset.category;
            document.querySelectorAll('.category-section').forEach(section => {
                section.style.display = 'none';
            });
            document.getElementById(category).style.display = 'block';

            // Display products for the category
            if (category === 'desktops') {
                displayDesktopProducts();
            } else {
                displayProducts(category, Object.keys(products[category])[0]);
            }
        });
    });
}

// Subcategory Navigation
function setupSubcategoryNavigation() {
    const subcategoryButtons = document.querySelectorAll('.subcategory-btn');
    subcategoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            const parent = button.closest('.subcategory-nav');
            parent.querySelectorAll('.subcategory-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');

            // Display products for the subcategory
            const category = document.querySelector('.category-btn.active').dataset.category;
            const subcategory = button.dataset.subcategory;
            displayProducts(category, subcategory);
        });
    });
}

// Display Products
function displayProducts(category, subcategory) {
    const container = document.getElementById(`${category}-container`);
    container.innerHTML = '';

    const productList = products[category][subcategory];
    productList.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

function displayDesktopProducts() {
    const container = document.getElementById('desktops-container');
    container.innerHTML = '';

    products.desktops.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">₹${product.price.toLocaleString('en-IN')}</p>
        <button class="book-btn" onclick="addToCart('${product.id}')">Add to Cart</button>
    `;
    return card;
}

// Cart functionality
function addToCart(productId) {
    let product;
    // Find product in all categories
    for (const category in products) {
        if (category === 'desktops') {
            product = products[category].find(p => p.id === productId);
        } else {
            for (const subcategory in products[category]) {
                product = products[category][subcategory].find(p => p.id === productId);
                if (product) break;
            }
        }
        if (product) break;
    }

    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showNotification('Product added to cart!');
    }
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Cart Modal
function setupCartModal() {
    const modal = document.getElementById('cart-modal');
    const cartLink = document.querySelector('a[href="#cart"]');
    const closeBtn = modal.querySelector('.close');
    const checkoutBtn = modal.querySelector('.checkout-btn');
    const continueShoppingBtn = modal.querySelector('.continue-shopping-btn');

    if (!cartLink || !modal) return;

    cartLink.addEventListener('click', (e) => {
        e.preventDefault();
        displayCart();
        modal.style.display = 'block';
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Direct checkout button click handler
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            // Check if there are items in the cart
            if (cart.length > 0) {
                window.location.href = 'checkout.html';
            } else {
                showNotification('Your cart is empty', 'error');
            }
            modal.style.display = 'none';
        });
    }
    
    // Continue shopping button handler
    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            window.location.href = 'products.html';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total-amount');
    
    cartItems.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotal.textContent = '0';
        return;
    }

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>₹${item.price.toLocaleString('en-IN')}</p>
            </div>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
        total += item.price;
    });

    cartTotal.textContent = total.toLocaleString('en-IN');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    displayCart();
}

// Service Booking
function bookRepair() {
    const name = prompt('Please enter your name:');
    if (name) {
        const phone = prompt('Please enter your phone number:');
        if (phone) {
            const issue = prompt('Please describe the issue:');
            if (issue) {
                showNotification('Repair service booked! We will contact you shortly.');
            }
        }
    }
}

function bookCCTV() {
    const name = prompt('Please enter your name:');
    if (name) {
        const phone = prompt('Please enter your phone number:');
        if (phone) {
            const address = prompt('Please enter your address:');
            if (address) {
                showNotification('CCTV installation booked! We will contact you shortly.');
            }
        }
    }
}

function bookSecurity() {
    const name = prompt('Please enter your name:');
    if (name) {
        const phone = prompt('Please enter your phone number:');
        if (phone) {
            const propertyType = prompt('Is this for a home or business?');
            if (propertyType) {
                const requirements = prompt('Please describe your security requirements:');
                if (requirements) {
                    showNotification('Security quote request received! We will contact you shortly.');
                }
            }
        }
    }
}

// Contact Form
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send the data to a server
            console.log('Contact form submitted:', data);
            
            showNotification('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
}

// Add notification styles
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: var(--primary-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: 4px;
        animation: slideIn 0.3s ease-out;
    }

    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .cart-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        border-bottom: 1px solid #eee;
    }

    .cart-item-details {
        flex-grow: 1;
    }

    .cart-item button {
        background-color: #ff4444;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
    }
`;
document.head.appendChild(style);

// Booking Modal Functions
function openBookingModal(serviceType) {
    const modal = document.getElementById('booking-modal');
    const serviceTypeInput = document.getElementById('service-type');
    serviceTypeInput.value = serviceType;
    modal.style.display = 'block';
}

function closeBookingModal() {
    const modal = document.getElementById('booking-modal');
    modal.style.display = 'none';
    document.getElementById('booking-form').reset();
}

function submitBooking(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const bookingData = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Booking submitted:', bookingData);
    
    // Show success message
    showNotification('Thank you for booking our service! We will contact you shortly.');
    
    // Close modal and reset form
    closeBookingModal();
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const bookingModal = document.getElementById('booking-modal');
    if (e.target === bookingModal) {
        closeBookingModal();
    }
});

// Authentication Functions
function handleLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const loginData = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Login attempt:', loginData);
    
    // For demo purposes, show success message
    showNotification('Login successful!');
    
    // Redirect to home page
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}

function handleRegister(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const registerData = Object.fromEntries(formData);
    
    // Validate passwords match
    if (registerData.password !== registerData['confirm-password']) {
        showNotification('Passwords do not match!', 'error');
        return;
    }
    
    // Here you would typically send the data to a server
    console.log('Registration data:', registerData);
    
    // For demo purposes, show success message
    showNotification('Registration successful! Please login.');
    
    // Redirect to login page
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1500);
}

// Theme toggle functionality
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const sliderIcon = document.querySelector('.slider-icon i');
    
    // Check if dark mode is saved in localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
        sliderIcon.classList.remove('fa-moon');
        sliderIcon.classList.add('fa-sun');
    }
    
    // Toggle dark mode when switch is clicked
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
            sliderIcon.classList.remove('fa-moon');
            sliderIcon.classList.add('fa-sun');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
            sliderIcon.classList.remove('fa-sun');
            sliderIcon.classList.add('fa-moon');
        }
    });
}

// Function to load checkout items and calculate totals
function loadCheckoutPage() {
    // Check if we're on the checkout page
    if (!window.location.href.includes('checkout.html')) return;
    
    const checkoutItems = document.getElementById('checkout-items');
    const subtotalElement = document.getElementById('checkout-subtotal');
    const shippingElement = document.getElementById('checkout-shipping');
    const taxElement = document.getElementById('checkout-tax');
    const totalElement = document.getElementById('checkout-total');
    
    // Get cart items from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // If cart is empty, redirect to products page
    if (cart.length === 0) {
        window.location.href = 'products.html';
        return;
    }
    
    // Clear previous items
    checkoutItems.innerHTML = '';
    
    // Calculate subtotal
    let subtotal = 0;
    
    // Add items to checkout summary
    cart.forEach(item => {
        const checkoutItem = document.createElement('div');
        checkoutItem.className = 'checkout-item';
        checkoutItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="checkout-item-image">
            <div class="checkout-item-details">
                <div class="checkout-item-name">${item.name}</div>
                <div class="checkout-item-price">₹${item.price.toLocaleString('en-IN')}</div>
            </div>
        `;
        checkoutItems.appendChild(checkoutItem);
        subtotal += item.price;
    });
    
    // Calculate shipping, tax, and total
    const shipping = subtotal > 0 ? 499 : 0; // Free shipping over ₹10,000
    const tax = Math.round(subtotal * 0.18); // 18% GST
    const total = subtotal + shipping + tax;
    
    // Update totals in the UI
    subtotalElement.textContent = subtotal.toLocaleString('en-IN');
    shippingElement.textContent = shipping.toLocaleString('en-IN');
    taxElement.textContent = tax.toLocaleString('en-IN');
    totalElement.textContent = total.toLocaleString('en-IN');
    
    // Set up payment method toggle
    setupPaymentToggle();
    
    // Set up checkout form submission
    setupCheckoutForm();
}

// Function to toggle payment method details
function setupPaymentToggle() {
    const paymentOptions = document.querySelectorAll('input[name="payment-method"]');
    const creditCardDetails = document.getElementById('credit-card-details');
    const upiDetails = document.getElementById('upi-details');
    const netBankingDetails = document.getElementById('net-banking-details');
    
    // Hide all payment details initially except credit card
    function hideAllPaymentDetails() {
        creditCardDetails.style.display = 'none';
        upiDetails.style.display = 'none';
        netBankingDetails.style.display = 'none';
    }
    
    // Show payment details based on selected option
    paymentOptions.forEach(option => {
        option.addEventListener('change', function() {
            hideAllPaymentDetails();
            
            switch(this.value) {
                case 'credit-card':
                    creditCardDetails.style.display = 'block';
                    break;
                case 'upi':
                    upiDetails.style.display = 'block';
                    break;
                case 'net-banking':
                    netBankingDetails.style.display = 'block';
                    break;
                // Cash on delivery doesn't need extra details
            }
        });
    });
}

// Function to handle checkout form submission
function setupCheckoutForm() {
    const checkoutForm = document.getElementById('checkout-form');
    
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect form data
            const formData = new FormData(checkoutForm);
            const orderData = Object.fromEntries(formData);
            
            // Validate card details if credit card is selected
            if (orderData['payment-method'] === 'credit-card') {
                if (!validateCardDetails(orderData)) {
                    return;
                }
            }
            
            // Here you would typically send the order data to a server
            console.log('Order submitted:', orderData);
            
            // Show order confirmation
            showOrderConfirmation();
        });
    }
}

// Function to validate credit card details
function validateCardDetails(orderData) {
    if (orderData['payment-method'] !== 'credit-card') return true;
    
    // Basic validation - in a real app, you'd want more robust validation
    if (!orderData['card-number'] || orderData['card-number'].length < 16) {
        showNotification('Please enter a valid card number', 'error');
        return false;
    }
    
    if (!orderData['expiry'] || !orderData['expiry'].includes('/')) {
        showNotification('Please enter a valid expiry date (MM/YY)', 'error');
        return false;
    }
    
    if (!orderData['cvv'] || orderData['cvv'].length < 3) {
        showNotification('Please enter a valid CVV', 'error');
        return false;
    }
    
    if (!orderData['card-name']) {
        showNotification('Please enter the name on your card', 'error');
        return false;
    }
    
    return true;
}

// Function to show order confirmation
function showOrderConfirmation() {
    // Clear the cart
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Show success message
    showNotification('Order placed successfully!', 'success');
    
    // Redirect to a thank you page or back to home
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
} 