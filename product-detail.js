// Product Data
const productsData = {
    'raw-cashew-nuts': {
        title: 'Raw Cashew Nuts',
        image: 'image/raw-cashew-nuts.jpeg',
        description: 'Our top-quality raw cashew nuts are perfect for processing into kernels, butter, and other cashew products. Packed with essential nutrients, these nuts ensure a steady, reliable supply for your production line. We source our raw cashew nuts from premium farms, ensuring consistent quality and freshness.',
        fullDescription: 'Raw cashew nuts are the unprocessed form of cashews, harvested directly from cashew trees. These nuts are carefully selected and sorted to ensure only the highest quality reaches our customers. Our raw cashew nuts are ideal for various processing applications including kernel extraction, cashew butter production, and other cashew-based products.',
        grades: [],
        specifications: [
            'Premium quality raw cashews',
            'Carefully sorted and graded',
            'Moisture content: < 8%',
            'Free from foreign matter',
            'Available in bulk quantities',
            'Pan-India delivery available'
        ],
        applications: [
            'Processing into cashew kernels',
            'Cashew butter production',
            'Food processing industries',
            'Confectionery manufacturing',
            'Snack food production',
            'Export purposes'
        ],
        rcnOrigins: {
            intro: 'We source our premium Raw Cashew Nuts (RCN) from the finest growing regions across Africa. Each origin offers unique characteristics and quality attributes that make them ideal for different processing needs.',
            origins: [
                {
                    name: 'Benin',
                    importance: 'Benin is one of the leading producers of high-quality raw cashew nuts in West Africa. Known for their consistent size and excellent kernel yield, Benin cashews are prized for their superior quality and processing characteristics.',
                    characteristics: [
                        'High kernel yield ratio',
                        'Consistent nut size',
                        'Excellent processing quality',
                        'Premium grade kernels',
                        'Low moisture content'
                    ]
                },
                {
                    name: 'Togo',
                    importance: 'Togo produces premium quality raw cashew nuts with excellent processing characteristics. The cashews from Togo are known for their rich flavor profile and high nutritional value, making them ideal for premium kernel production.',
                    characteristics: [
                        'Rich flavor profile',
                        'High nutritional value',
                        'Excellent shell quality',
                        'Good kernel recovery',
                        'Premium processing grade'
                    ]
                },
                {
                    name: 'Ogbomosho',
                    importance: 'Ogbomosho region is renowned for producing some of the finest raw cashew nuts in Africa. These cashews are characterized by their large size, excellent kernel quality, and superior processing yields.',
                    characteristics: [
                        'Large nut size',
                        'Superior kernel quality',
                        'High processing yields',
                        'Excellent shell characteristics',
                        'Premium export quality'
                    ]
                },
                {
                    name: 'Ivory Coast',
                    importance: 'Ivory Coast is a major producer of high-quality raw cashew nuts, known for their consistent quality and excellent processing characteristics. Ivory Coast cashews are widely used in the global cashew processing industry.',
                    characteristics: [
                        'Consistent quality',
                        'Excellent processing characteristics',
                        'Good kernel yield',
                        'Reliable supply chain',
                        'International quality standards'
                    ]
                },
                {
                    name: 'Tanzania',
                    importance: 'Tanzania produces premium raw cashew nuts with excellent quality attributes. The cashews from Tanzania are known for their good size, high kernel recovery, and excellent flavor profile.',
                    characteristics: [
                        'Good nut size',
                        'High kernel recovery',
                        'Excellent flavor profile',
                        'Consistent quality',
                        'Good processing yields'
                    ]
                },
                {
                    name: 'Guinea-Bissau (GNIBICARE)',
                    importance: 'Guinea-Bissau, particularly the GNIBICARE region, produces high-quality raw cashew nuts known for their excellent processing characteristics and premium kernel quality. These cashews are ideal for producing top-grade kernels.',
                    characteristics: [
                        'Premium kernel quality',
                        'Excellent processing characteristics',
                        'High kernel recovery rate',
                        'Consistent nut size',
                        'Superior grade kernels'
                    ]
                },
                {
                    name: 'Ghana',
                    importance: 'Ghana is a significant producer of quality raw cashew nuts in West Africa. Ghanaian cashews are known for their good processing characteristics, consistent quality, and reliable supply, making them a preferred choice for many processors.',
                    characteristics: [
                        'Good processing characteristics',
                        'Consistent quality',
                        'Reliable supply',
                        'Good kernel yield',
                        'Competitive pricing'
                    ]
                }
            ]
        }
    },
    'cashew-broken': {
        title: 'Cashew Broken',
        image: 'image/swp-cashew-nut.webp',
        fallbackImage: 'image/kaju2.jpg',
        description: 'Cashew Broken are premium quality split cashew kernels. These are perfect for confectionery, baking, and food processing industries. Our broken cashews maintain excellent quality and consistency.',
        fullDescription: 'Cashew Broken are high-quality split cashew kernels with a white appearance. These pieces are obtained by splitting whole cashew kernels and are perfect for various food applications where smaller pieces are required. Our broken cashews are processed under strict quality control to ensure consistency and purity.',
        grades: ['JH', 'JK', 'LWP', 'SWP'],
        specifications: [
            'Premium split white pieces',
            'Consistent size and quality',
            'White appearance',
            'Free from defects',
            'Ideal for food processing',
            'Bulk quantities available'
        ],
        applications: [
            'Confectionery manufacturing',
            'Baking industry',
            'Ice cream production',
            'Dessert making',
            'Food processing',
            'Snack production'
        ]
    },
    'cashew-ssp': {
        title: 'Cashew SSP',
        image: 'image/cashew-ssp.png',
        fallbackImage: 'image/kaju3.jpg',
        description: 'Cashew SSP (Split Scorched Pieces) are high-quality split cashew kernels with a light roasted appearance. These are ideal for various food applications and offer excellent value for bulk buyers.',
        fullDescription: 'Cashew SSP (Split Scorched Pieces) are premium split cashew kernels with a light roasted or scorched appearance. These pieces offer excellent value while maintaining good quality and flavor. SSP cashews are perfect for applications where appearance is less critical but quality and taste are important.',
        grades: ['SSP', 'BB'],
        specifications: [
            'Split scorched pieces',
            'Light roasted appearance',
            'Good quality and flavor',
            'Cost-effective option',
            'Bulk supply available',
            'Consistent quality'
        ],
        applications: [
            'Food processing',
            'Snack manufacturing',
            'Bakery products',
            'Confectionery',
            'Dessert making',
            'Bulk food production'
        ]
    },
    'cashew-kernels': {
        title: 'Cashew Kernels',
        image: 'image/cashew-kernels.jpeg',
        description: 'Our premium cashew kernels are ideal for any business, whether you\'re in food or retail. Sourced from top farms, these cashews deliver a rich, consistent taste that your customers will love.',
        fullDescription: 'Our premium cashew kernels are the finest quality cashews, carefully processed and graded to meet international standards. These kernels are sourced from the best farms and processed using advanced techniques to ensure maximum quality, freshness, and flavor. Perfect for retail, food service, and export purposes.',
        grades: ['W180', 'W240', 'W320', 'W400'],
        specifications: [
            'Premium quality kernels',
            'Multiple grades available',
            'International quality standards',
            'Rich and consistent flavor',
            'Custom packaging options',
            'Export quality certified'
        ],
        applications: [
            'Retail packaging',
            'Food service industry',
            'Export purposes',
            'Confectionery',
            'Snack manufacturing',
            'Direct consumption'
        ]
    },
    'cashew-husk': {
        title: 'Cashew Husk',
        image: 'image/cashew-husk.webp',
        fallbackImage: 'image/cashew-husk-powder.webp',
        description: 'Our nutrient-rich cashew husk is ideal for animal feed, composting, and producing natural dyes. This sustainable by-product offers antioxidant benefits and cost-effective solutions for your agricultural business. We also offer premium cashew husk powder for various industrial and agricultural applications.',
        fullDescription: 'Cashew husk is the thin skin that covers the cashew kernel. This by-product is rich in antioxidants and nutrients, making it valuable for various applications. Our cashew husk is collected during processing and is available in bulk quantities for agricultural and industrial uses. We offer both raw cashew husk and finely processed cashew husk powder, which is ideal for specialized applications requiring fine particle size and consistent quality.',
        grades: ['Husk', 'Powder'],
        specifications: [
            'Nutrient-rich by-product',
            'High antioxidant content',
            'Sustainable material',
            'Available in husk and powder form',
            'Bulk availability',
            'Cost-effective solution',
            'Natural and organic',
            'Fine powder grade available'
        ],
        applications: [
            'Animal feed production',
            'Composting and fertilizers',
            'Natural dye production',
            'Agricultural applications',
            'Organic farming',
            'Industrial uses',
            'Pharmaceutical applications (powder)',
            'Cosmetic industry (powder)',
            'Food processing (powder)'
        ]
    },
    'cashew-nut-shell': {
        title: 'Cashew Shell',
        image: 'image/cashew-nuts-shell.webp',
        description: 'Our cashew shells are processed for purity and are ideal for biofuel and CNSL production. These versatile shells support sustainable, cost-effective industrial practices, helping your business go green.',
        fullDescription: 'Cashew shells are the hard outer covering of cashews. These shells contain valuable cashew shell liquid (CNSL) and can be used for various industrial applications. Our processed cashew shells are clean, sorted, and ready for industrial use, supporting sustainable and eco-friendly practices.',
        grades: [],
        specifications: [
            'Processed and cleaned shells',
            'CNSL extraction ready',
            'Biofuel production suitable',
            'Industrial grade quality',
            'Bulk quantities available',
            'Sustainable material'
        ],
        applications: [
            'CNSL (Cashew Shell Liquid) extraction',
            'Biofuel production',
            'Industrial fuel',
            'Resin production',
            'Lubricant manufacturing',
            'Sustainable energy source'
        ]
    },
    'cashew-cake': {
        title: 'Cashew Cake',
        image: 'image/cashew-cake.webp',
        fallbackImage: 'image/kaju1.jpg',
        description: 'Cashew cake is a valuable by-product obtained after oil extraction from cashew kernels. Rich in protein and nutrients, it\'s an excellent ingredient for animal feed and organic fertilizers.',
        fullDescription: 'Cashew cake is the residue left after extracting oil from cashew kernels. This by-product is rich in protein, fiber, and other nutrients, making it an excellent ingredient for animal feed and organic fertilizers. Our cashew cake is processed and packaged to maintain its nutritional value.',
        grades: [],
        specifications: [
            'High protein content',
            'Rich in nutrients',
            'Organic by-product',
            'Animal feed grade',
            'Fertilizer suitable',
            'Bulk availability'
        ],
        applications: [
            'Animal feed production',
            'Organic fertilizer',
            'Livestock nutrition',
            'Agricultural use',
            'Composting',
            'Organic farming'
        ]
    }
};

// Load product details based on URL parameter
function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') || urlParams.get('product');
    
    if (!productId || !productsData[productId]) {
        // Product not found, redirect to products page
        window.location.href = 'products.html';
        return;
    }

    const product = productsData[productId];
    
    // Update page title
    document.title = `${product.title} - Ganesh Exports`;
    
    // Update breadcrumb
    const breadcrumbProduct = document.getElementById('breadcrumb-product');
    if (breadcrumbProduct) {
        breadcrumbProduct.textContent = product.title;
    }
    
    // Update product image
    const productImage = document.getElementById('product-detail-img');
    if (productImage) {
        productImage.src = product.image;
        productImage.alt = product.title;
        productImage.onerror = function() {
            if (product.fallbackImage) {
                this.src = product.fallbackImage;
            }
        };
    }
    
    // Update product title
    const productTitle = document.getElementById('product-detail-title');
    if (productTitle) {
        productTitle.textContent = product.title;
    }
    
    // Update product description
    const productDescription = document.getElementById('product-detail-description');
    if (productDescription) {
        productDescription.innerHTML = `
            <p>${product.description}</p>
            <p>${product.fullDescription}</p>
        `;
    }
    
    // Update product grades
    const gradesContainer = document.getElementById('product-grades-container');
    const gradesDiv = document.getElementById('product-grades');
    if (product.grades && product.grades.length > 0) {
        gradesContainer.style.display = 'block';
        gradesDiv.innerHTML = product.grades.map(grade => 
            `<span class="grade-tag">${grade}</span>`
        ).join('');
    } else {
        gradesContainer.style.display = 'none';
    }
    
    // Update specifications (hidden for all products)
    const specsContainer = document.getElementById('product-specifications');
    if (specsContainer) {
        specsContainer.style.display = 'none';
    }
    
    // Update applications (hidden for all products)
    const applicationsContainer = document.getElementById('product-applications');
    if (applicationsContainer) {
        applicationsContainer.style.display = 'none';
    }
    
    // Update RCN Origins (for Raw Cashew Nuts only)
    const rcnContainer = document.getElementById('rcn-origins-container');
    const rcnList = document.getElementById('rcn-origins-list');
    
    if (product.rcnOrigins && rcnContainer && rcnList) {
        rcnContainer.style.display = 'block';
        rcnList.innerHTML = product.rcnOrigins.origins.map(origin => 
            `<div class="rcn-origin-item">
                <div class="rcn-origin-badge">
                    <i class="fas fa-gem"></i>
                </div>
                <span class="rcn-origin-name">${origin.name}</span>
            </div>`
        ).join('');
    } else if (rcnContainer) {
        rcnContainer.style.display = 'none';
    }
}

// Related Products Slider - Complete Rebuild
let relatedProductsSlider = null;
let sliderState = {
    currentIndex: 0,
    isTransitioning: false,
    cards: [],
    cardWidth: 0,
    cardsPerView: 3
};

// Initialize Related Products Slider
function initializeRelatedProductsSlider(currentProductId) {
    const slider = document.getElementById('relatedProductsSlider');
    if (!slider) return;
    
    // Prevent multiple simultaneous initializations
    if (sliderState.isTransitioning) {
        return;
    }
    
    sliderState.isTransitioning = true;

    // Clear everything completely
    slider.innerHTML = '';
    slider.style.transform = 'translateX(0px)';
    slider.style.transition = 'transform 0.5s ease';
    
    // Reset slider state
    sliderState.cards = [];
    sliderState.currentIndex = 0;
    
    // Remove existing navigation buttons
    const sliderWrapper = slider.closest('.products-slider-wrapper');
    if (sliderWrapper) {
        const existingBtns = sliderWrapper.querySelectorAll('.slider-nav-btn');
        existingBtns.forEach(btn => btn.remove());
    }

    // Get all unique product IDs and ensure no duplicates
    const productIds = Object.keys(productsData);
    // Remove Cashew Cake from the slider
    const filteredProductIds = productIds.filter(id => id !== 'cashew-cake');
    let uniqueProductIds = [...new Set(filteredProductIds)];
    
    // Find current product index
    const currentProductIndex = uniqueProductIds.indexOf(currentProductId);
    
    // Check if "Cashew Kernels" is on the second page (indices 3, 4, or 5)
    const cashewKernelsIndex = uniqueProductIds.indexOf('cashew-kernels');
    const secondPageStart = 3;
    const secondPageEnd = 5;
    
    if (cashewKernelsIndex >= secondPageStart && cashewKernelsIndex <= secondPageEnd && cashewKernelsIndex !== -1) {
        // Replace "Cashew Kernels" with another product from the first page
        // Get products from first page (indices 0, 1, 2) that are not the current product
        const firstPageProducts = uniqueProductIds.filter((id, idx) => 
            idx < secondPageStart && 
            id !== currentProductId &&
            id !== 'cashew-kernels'
        );
        
        if (firstPageProducts.length > 0) {
            // Replace "Cashew Kernels" with a product from the first page
            const replacementProduct = firstPageProducts[0];
            // Find the replacement product's index BEFORE replacement
            const replacementIndex = uniqueProductIds.indexOf(replacementProduct);
            
            // Swap: put replacement product in second page, and "Cashew Kernels" in first page
            uniqueProductIds[cashewKernelsIndex] = replacementProduct;
            if (replacementIndex !== -1 && replacementIndex < secondPageStart) {
                uniqueProductIds[replacementIndex] = 'cashew-kernels';
            }
        } else {
            // If no first page product available, find any other product
            const allOtherProducts = uniqueProductIds.filter((id, idx) => 
                id !== 'cashew-kernels' && 
                id !== currentProductId &&
                idx !== cashewKernelsIndex
            );
            if (allOtherProducts.length > 0) {
                uniqueProductIds[cashewKernelsIndex] = allOtherProducts[0];
            }
        }
    }
    
    // Track added product IDs to prevent duplicates
    const addedProductIds = new Set();
    
    // Build product cards - ensure each product appears only once
    const cards = [];
    uniqueProductIds.forEach((productId, index) => {
        // Skip if already added (double-check for duplicates)
        if (addedProductIds.has(productId)) {
            console.warn(`Duplicate product ID detected: ${productId}`);
            return;
        }
        
        const product = productsData[productId];
        if (!product) return;
        
        const isCurrent = productId === currentProductId;
        const cardClass = isCurrent ? 'product-card current-product' : 'product-card';
        
        const cardDiv = document.createElement('div');
        cardDiv.className = cardClass;
        cardDiv.setAttribute('data-product-id', productId);
        cardDiv.setAttribute('data-index', index);
        cardDiv.setAttribute('data-href', `product-detail.html?id=${productId}`);
        
        cardDiv.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" onerror="${product.fallbackImage ? `this.src='${product.fallbackImage}'` : ''}">
            </div>
            <div class="product-content">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                ${product.grades && product.grades.length > 0 ? `
                    <div class="product-grades">
                        ${product.grades.slice(0, 3).map(grade => `<span class="grade-tag">${grade}</span>`).join('')}
                        ${product.grades.length > 3 ? `<span class="grade-tag">+${product.grades.length - 3}</span>` : ''}
                    </div>
                ` : ''}
                <a href="product-detail.html?id=${productId}" class="product-link">View Details <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
        
        // Mark card as having click handler
        cardDiv.setAttribute('data-click-handler', 'true');
        
        // Add click handler to make entire card clickable
        cardDiv.addEventListener('click', function(e) {
            // Don't navigate if clicking on the "View Details" link (let it handle its own click)
            if (e.target.closest('.product-link')) {
                return;
            }
            // Navigate to product detail page
            window.location.href = `product-detail.html?id=${productId}`;
        });
        
        // Add cursor pointer style
        cardDiv.style.cursor = 'pointer';
        
        slider.appendChild(cardDiv);
        cards.push(cardDiv);
        addedProductIds.add(productId);
    });
    
    // Final check: Remove any duplicate cards that might exist
    const allCards = slider.querySelectorAll('.product-card');
    const seenIds = new Set();
    allCards.forEach((card) => {
        const productId = card.getAttribute('data-product-id');
        if (seenIds.has(productId)) {
            card.remove();
        } else {
            seenIds.add(productId);
        }
    });
    
    // Rebuild cards array after removing duplicates
    const finalCards = Array.from(slider.querySelectorAll('.product-card'));

    // Add click handlers to all cards (including after duplicate removal)
    finalCards.forEach(card => {
        const productId = card.getAttribute('data-product-id');
        if (productId && !card.hasAttribute('data-click-handler')) {
            // Mark card as having click handler to avoid duplicates
            card.setAttribute('data-click-handler', 'true');
            
            // Add click handler to the card
            card.addEventListener('click', function(e) {
                // Don't navigate if clicking on the "View Details" link (let it handle its own click)
                if (e.target.closest('.product-link')) {
                    return;
                }
                // Navigate to product detail page
                window.location.href = `product-detail.html?id=${productId}`;
            });
            
            // Add cursor pointer style
            card.style.cursor = 'pointer';
        }
    });

    // Update slider state with final cards (after duplicate removal)
    sliderState.cards = Array.from(slider.querySelectorAll('.product-card'));
    sliderState.cardsPerView = Math.min(3, sliderState.cards.length);
    
    // Wait for DOM to render, then initialize
    setTimeout(() => {
        sliderState.isTransitioning = false;
        initializeSliderPositioning(slider, currentProductIndex);
        initializeSliderNavigation(slider, sliderWrapper);
    }, 150);
}

// Initialize slider positioning
function initializeSliderPositioning(slider, currentProductIndex) {
    if (!slider || sliderState.cards.length === 0) return;
    
    // Calculate card width
    const firstCard = sliderState.cards[0];
    if (!firstCard) return;
    
    const cardWidth = firstCard.offsetWidth;
    const gap = parseFloat(window.getComputedStyle(slider).gap) || 40;
    sliderState.cardWidth = cardWidth + gap;
    
    // Calculate target index to show current product
    const maxIndex = Math.max(0, sliderState.cards.length - sliderState.cardsPerView);
    let targetIndex = currentProductIndex;
    
    // Adjust position to center current product if possible
    if (currentProductIndex < sliderState.cardsPerView) {
        targetIndex = 0;
    } else if (currentProductIndex + sliderState.cardsPerView > sliderState.cards.length) {
        targetIndex = maxIndex;
    } else {
        targetIndex = Math.max(0, Math.min(maxIndex, currentProductIndex - Math.floor(sliderState.cardsPerView / 2)));
    }
    
    sliderState.currentIndex = targetIndex;
    
    // Set initial position without transition
    slider.style.transition = 'none';
    slider.style.transform = `translateX(${-targetIndex * sliderState.cardWidth}px)`;
    
    // Re-enable transition
    setTimeout(() => {
        slider.style.transition = 'transform 0.5s ease';
    }, 50);
}

// Initialize slider navigation
function initializeSliderNavigation(slider, sliderWrapper) {
    if (!slider || !sliderWrapper) return;
    
    // Don't add controls if all products fit
    if (sliderState.cards.length <= sliderState.cardsPerView) return;
    
    // Create navigation buttons
    const prevBtn = document.createElement('button');
    prevBtn.className = 'slider-nav-btn slider-nav-prev';
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevBtn.setAttribute('aria-label', 'Previous products');
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'slider-nav-btn slider-nav-next';
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextBtn.setAttribute('aria-label', 'Next products');
    
    sliderWrapper.style.position = 'relative';
    sliderWrapper.appendChild(prevBtn);
    sliderWrapper.appendChild(nextBtn);
    
    // Update button states
    const updateButtonStates = () => {
        const maxIndex = Math.max(0, sliderState.cards.length - sliderState.cardsPerView);
        prevBtn.style.opacity = sliderState.currentIndex > 0 ? '1' : '0.5';
        prevBtn.style.pointerEvents = sliderState.currentIndex > 0 ? 'auto' : 'none';
        nextBtn.style.opacity = sliderState.currentIndex < maxIndex ? '1' : '0.5';
        nextBtn.style.pointerEvents = sliderState.currentIndex < maxIndex ? 'auto' : 'none';
    };
    
    // Update slider position
    const updateSliderPosition = () => {
        if (sliderState.isTransitioning) return;
        
        sliderState.isTransitioning = true;
        const offset = -sliderState.currentIndex * sliderState.cardWidth;
        slider.style.transform = `translateX(${offset}px)`;
        
        updateButtonStates();
        
        setTimeout(() => {
            sliderState.isTransitioning = false;
        }, 500);
    };
    
    // Next slide function
    const nextSlide = () => {
        if (sliderState.isTransitioning) return;
        
        const maxIndex = Math.max(0, sliderState.cards.length - sliderState.cardsPerView);
        const newIndex = sliderState.currentIndex + sliderState.cardsPerView;
        
        if (newIndex <= maxIndex) {
            sliderState.currentIndex = newIndex;
            updateSliderPosition();
        } else if (sliderState.currentIndex < maxIndex) {
            sliderState.currentIndex = maxIndex;
            updateSliderPosition();
        }
    };
    
    // Previous slide function
    const prevSlide = () => {
        if (sliderState.isTransitioning) return;
        
        const newIndex = sliderState.currentIndex - sliderState.cardsPerView;
        
        if (newIndex >= 0) {
            sliderState.currentIndex = newIndex;
            updateSliderPosition();
        } else if (sliderState.currentIndex > 0) {
            sliderState.currentIndex = 0;
            updateSliderPosition();
        }
    };
    
    // Attach event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Handle window resize
    let resizeTimer;
    const handleResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Recalculate card width
            if (sliderState.cards.length > 0 && sliderState.cards[0]) {
                const cardWidth = sliderState.cards[0].offsetWidth;
                const gap = parseFloat(window.getComputedStyle(slider).gap) || 40;
                sliderState.cardWidth = cardWidth + gap;
                
                // Ensure current index is within bounds
                const maxIndex = Math.max(0, sliderState.cards.length - sliderState.cardsPerView);
                if (sliderState.currentIndex > maxIndex) {
                    sliderState.currentIndex = maxIndex;
                }
                
                // Update position
                slider.style.transition = 'none';
                slider.style.transform = `translateX(${-sliderState.currentIndex * sliderState.cardWidth}px)`;
                setTimeout(() => {
                    slider.style.transition = 'transform 0.5s ease';
                }, 50);
                
                updateButtonStates();
            }
        }, 250);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Initial button state
    updateButtonStates();
    
    // Store references for cleanup if needed
    relatedProductsSlider = {
        slider,
        sliderWrapper,
        prevBtn,
        nextBtn,
        handleResize
    };
}

// Track if slider is initialized to prevent duplicates
let sliderInitialized = false;

// Load product details when page loads
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') || urlParams.get('product');
    
    loadProductDetails();
    
    // Reset initialization flag and initialize slider
    if (productId && productsData[productId]) {
        sliderInitialized = false; // Reset to allow re-initialization
        initializeRelatedProductsSlider(productId);
        sliderInitialized = true;
    }
});

