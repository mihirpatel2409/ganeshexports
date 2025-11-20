// Page Loader
window.addEventListener('load', () => {
    const pageLoader = document.getElementById('pageLoader');
    if (pageLoader) {
        setTimeout(() => {
            pageLoader.classList.add('hidden');
            setTimeout(() => {
                pageLoader.style.display = 'none';
            }, 500);
        }, 1300);
    }
});

// Custom Cursor Follow Effect
const customCursor = document.getElementById('customCursor');

if (customCursor && window.innerWidth > 768) {
    let cursorX = 0;
    let cursorY = 0;
    let cursorElementX = 0;
    let cursorElementY = 0;
    let isMoving = false;

    // Show cursor immediately when page loads
    customCursor.classList.add('active');
    isMoving = true;

    // Show cursor when mouse moves
    document.addEventListener('mousemove', (e) => {
        if (!isMoving) {
            customCursor.classList.add('active');
            isMoving = true;
        }
        cursorX = e.clientX;
        cursorY = e.clientY;
    });

    // Update cursor position with smooth animation
    const updateCursor = () => {
        const dx = cursorX - cursorElementX;
        const dy = cursorY - cursorElementY;
        
        cursorElementX += dx * 0.7;
        cursorElementY += dy * 0.7;
        
        customCursor.style.left = cursorElementX + 'px';
        customCursor.style.top = cursorElementY + 'px';
        
        requestAnimationFrame(updateCursor);
    };

    // Add hover effect on ALL clickable/interactive elements
    const clickableElements = document.querySelectorAll('a, button, .btn-primary, .btn-secondary, .nav-link, .hamburger, .dropdown-toggle, input, textarea, select, .product-link, .top-bar-item, .social-links a, .product-card, .slider-btn, .testimonial-btn, .back-to-top, .logo-link, .logo-icon, .logo-text, .feature-card, .stat-item');

    clickableElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            customCursor.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', () => {
            customCursor.classList.remove('hover');
        });
        
        element.addEventListener('mousedown', () => {
            customCursor.classList.add('click');
        });
        
        element.addEventListener('mouseup', () => {
            customCursor.classList.remove('click');
        });
    });

    // Also add hover effect to body and all elements for better coverage
    document.body.addEventListener('mouseenter', () => {
        customCursor.classList.add('active');
        isMoving = true;
    });

    // Hide cursor when mouse leaves window
    document.addEventListener('mouseleave', () => {
        customCursor.classList.remove('active');
        isMoving = false;
    });

    document.addEventListener('mouseenter', () => {
        customCursor.classList.add('active');
        isMoving = true;
    });

    // Initialize cursor position on page load
    document.addEventListener('DOMContentLoaded', () => {
        cursorX = window.innerWidth / 2;
        cursorY = window.innerHeight / 2;
        cursorElementX = cursorX;
        cursorElementY = cursorY;
        customCursor.style.left = cursorX + 'px';
        customCursor.style.top = cursorY + 'px';
    });

    // Start cursor animation
    updateCursor();
}

// ============================================
// MOBILE NAVIGATION SYSTEM (ORIGINAL STYLE)
// ============================================

(function() {
    'use strict';
    
    function initMobileNav() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        
        if (!hamburger || !navMenu) return;
        
        const isMobile = () => window.innerWidth <= 768;
        
        // ============================================
        // HAMBURGER CLICK
        // ============================================
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
            
            // Close dropdown when closing menu
            if (!navMenu.classList.contains('active')) {
                const dropdown = navMenu.querySelector('.nav-dropdown');
                if (dropdown) dropdown.classList.remove('active');
            }
        });
        
        // ============================================
        // PRODUCTS DROPDOWN TOGGLE
        // ============================================
        const productsToggle = navMenu.querySelector('.dropdown-toggle');
        const productsDropdown = navMenu.querySelector('.nav-dropdown');
        
        if (productsToggle && productsDropdown) {
            productsToggle.addEventListener('click', function(e) {
                // On mobile, allow normal navigation (no dropdown)
                if (isMobile()) {
                    // Let the link navigate normally to products.html
                    return;
                }
                
                // Desktop/Tablet: Allow navigation to products page
                // Don't prevent default - let the link navigate normally
                // The dropdown will still work on hover (mouseenter/mouseleave)
                // Just allow normal navigation when clicking on "Products"
                return;
            });
        } else {
            console.warn('Products dropdown elements not found:', { productsToggle, productsDropdown });
        }
        
        // ============================================
        // REGULAR NAV LINKS - CLOSE MENU
        // ============================================
        const regularLinks = navMenu.querySelectorAll('.nav-link:not(.dropdown-toggle)');
        regularLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (isMobile()) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                    document.body.style.overflow = '';
                    if (productsDropdown) productsDropdown.classList.remove('active');
                }
            });
        });
        
        // On mobile, Products link should also close menu and navigate normally
        if (productsToggle && isMobile()) {
            productsToggle.addEventListener('click', function() {
                if (isMobile()) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                    document.body.style.overflow = '';
                    if (productsDropdown) productsDropdown.classList.remove('active');
                }
            });
        }
        
        // ============================================
        // DROPDOWN ITEMS - CLOSE MENU
        // ============================================
        const dropdownItems = navMenu.querySelectorAll('.dropdown-menu a');
        dropdownItems.forEach(item => {
            item.addEventListener('click', function() {
                if (isMobile()) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                    document.body.style.overflow = '';
                    if (productsDropdown) productsDropdown.classList.remove('active');
                }
            });
        });
        
        // ============================================
        // CLICK OUTSIDE - CLOSE MENU AND DROPDOWN
        // ============================================
        document.addEventListener('click', function(e) {
            if (!isMobile()) return;
            if (!navMenu.classList.contains('active')) return;
            
            // Check if click is on dropdown toggle or inside dropdown
            const clickedOnDropdown = productsDropdown && (
                productsDropdown.contains(e.target) || 
                e.target.closest('.nav-dropdown')
            );
            
            // Check if click is on the dropdown toggle button
            const clickedOnToggle = e.target.closest('.dropdown-toggle');
            
            // If clicking outside menu and hamburger, close everything
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = '';
                if (productsDropdown) productsDropdown.classList.remove('active');
            }
            // If clicking on dropdown toggle, let it handle the toggle (already handled above)
            else if (clickedOnToggle) {
                // The toggle handler will manage this
                return;
            }
            // If clicking on a dropdown menu item, don't close the dropdown until navigation
            else if (clickedOnDropdown && e.target.closest('.dropdown-menu a')) {
                // Let the dropdown item handler manage closing
                return;
            }
            // If clicking outside dropdown but inside menu, close dropdown only
            else if (productsDropdown && productsDropdown.classList.contains('active') && 
                     !clickedOnDropdown && navMenu.contains(e.target) && !clickedOnToggle) {
                productsDropdown.classList.remove('active');
            }
        });
        
        // ============================================
        // DESKTOP DROPDOWN (HOVER)
        // ============================================
        if (productsDropdown) {
            productsDropdown.addEventListener('mouseenter', function() {
                if (!isMobile()) {
                    this.classList.add('active');
                }
            });
            
            productsDropdown.addEventListener('mouseleave', function() {
                if (!isMobile()) {
                    this.classList.remove('active');
                }
            });
        }
        
        // ============================================
        // WINDOW RESIZE
        // ============================================
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                if (!isMobile()) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                    document.body.style.overflow = '';
                    if (productsDropdown) productsDropdown.classList.remove('active');
                }
            }, 250);
        });
    }
    
    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileNav);
    } else {
        initMobileNav();
    }
    
})();

// Navbar scroll effect and positioning
const navbar = document.getElementById('navbar');
const topBar = document.querySelector('.top-bar');
let lastScroll = 0;

// Function to update navbar position based on top bar height
const updateNavbarPosition = () => {
    if (topBar && navbar && window.innerWidth > 768) {
        const topBarHeight = topBar.offsetHeight;
        const navbarHeight = navbar.offsetHeight;
        navbar.style.top = topBarHeight + 'px';
        
        // Update hero section padding to account for both top bar and navbar
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.paddingTop = (topBarHeight + navbarHeight + 20) + 'px';
        }
        
        // Update page header padding
        const pageHeader = document.querySelector('.page-header');
        if (pageHeader) {
            pageHeader.style.paddingTop = (topBarHeight + navbarHeight + 60) + 'px';
        }
    } else if (navbar) {
        navbar.style.top = '0';
        const navbarHeight = navbar.offsetHeight;
        
        // Update hero section padding for mobile
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.paddingTop = (navbarHeight + 20) + 'px';
        }
        
        // Update page header padding for mobile
        const pageHeader = document.querySelector('.page-header');
        if (pageHeader) {
            pageHeader.style.paddingTop = (navbarHeight + 60) + 'px';
        }
    }
};

// Update navbar position on load and resize
window.addEventListener('load', updateNavbarPosition);
window.addEventListener('resize', updateNavbarPosition);

// Initial positioning
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateNavbarPosition);
} else {
    updateNavbarPosition();
}

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scrolling for navigation links (only for same-page anchors)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Only prevent default if it's an anchor link on the same page
        if (href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Animated counter for stats
const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

// Intersection Observer for stats animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                if (!stat.classList.contains('animated')) {
                    stat.classList.add('animated');
                    animateCounter(stat);
                }
            });
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Testimonials slider
const testimonialCards = document.querySelectorAll('.testimonial-card');
const testimonialButtons = document.querySelectorAll('.testimonial-btn');
let currentTestimonial = 0;

const showTestimonial = (index) => {
    testimonialCards.forEach((card, i) => {
        card.classList.remove('active');
        if (i === index) {
            card.classList.add('active');
        }
    });
    
    testimonialButtons.forEach((btn, i) => {
        btn.classList.remove('active');
        if (i === index) {
            btn.classList.add('active');
        }
    });
};

testimonialButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        currentTestimonial = index;
        showTestimonial(index);
    });
});

// Auto-rotate testimonials
let testimonialInterval = setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Pause auto-rotation on hover
const testimonialsSlider = document.querySelector('.testimonials-slider');
if (testimonialsSlider) {
    testimonialsSlider.addEventListener('mouseenter', () => {
        clearInterval(testimonialInterval);
    });
    
    testimonialsSlider.addEventListener('mouseleave', () => {
        testimonialInterval = setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    });
}

// Back to top button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form submission handler - Using FormSubmit (works immediately, no setup needed)
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form values for validation
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            company: document.getElementById('company').value || 'Not provided',
            product: document.getElementById('product').value || 'Not specified',
            message: document.getElementById('message').value
        };
        
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        try {
            // Create FormData object
            const formDataObj = new FormData(contactForm);
            
            // Add formatted message with all details
            const formattedMessage = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nProduct Interest: ${formData.product}\n\nMessage:\n${formData.message}`;
            formDataObj.set('message', formattedMessage);
            
            // Submit to FormSubmit
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formDataObj,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                alert('Thank you for your inquiry! Your message has been sent successfully. We will contact you soon at ' + formData.email);
                contactForm.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Thank you for your inquiry! Your message is being sent. You will receive a confirmation email shortly.');
            // Still submit the form normally (browser will handle it)
            contactForm.submit();
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    });
}

// Fade in animation on scroll
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Apply fade-in to sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(section);
});

// Product card hover effect enhancement and click handler
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    // Make card clickable if it has data-href
    const href = card.getAttribute('data-href');
    if (href) {
        card.addEventListener('click', (e) => {
            // Don't navigate if clicking on the "View More" link (let it handle its own click)
            if (e.target.closest('.product-link')) {
                return;
            }
            window.location.href = href;
        });
    }
    
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Feature card animation on scroll
const featureCards = document.querySelectorAll('.feature-card');
const featureObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.2 });

featureCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    featureObserver.observe(card);
});

// Active navigation link highlighting (for same-page navigation)
const updateActiveNavLink = () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.pageYOffset + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                if (link.getAttribute('href').startsWith('#')) {
                    link.classList.remove('active');
                }
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
};

// Set active nav link based on current page
const setActiveNavLink = () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
};

window.addEventListener('scroll', () => {
    // Only update active nav link if we're on a page with sections
    if (document.querySelectorAll('section[id]').length > 0) {
        updateActiveNavLink();
    }
});

// Preload images for better performance
const preloadImages = () => {
    const images = [
        'image/kajumainbg.png',
        'image/cashew-kernels.jpeg',
        'image/raw-cashew-nuts.jpeg',
        'image/cashew-nuts-shell.webp',
        'image/cashew-husk.webp'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
};

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    preloadImages();
    setActiveNavLink();
    
    // Show first testimonial
    if (testimonialCards.length > 0) {
        showTestimonial(0);
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Products Slider with Auto-play and Infinite Loop
const productsSlider = document.getElementById('productsSlider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (productsSlider) {
    let currentIndex = 0;
    let isTransitioning = false;
    const cards = productsSlider.querySelectorAll('.product-card');
    const totalCards = cards.length;
    let autoPlayInterval;
    
    // Check if mobile view
    const isMobile = () => {
        return window.innerWidth <= 768;
    };
    
    // Get cards per view based on screen size
    const getCardsPerView = () => {
        return isMobile() ? 1 : 3;
    };
    
    // Calculate card width dynamically
    const getCardWidth = () => {
        if (cards.length > 0) {
            const card = cards[0];
            let cardWidth = card.offsetWidth;
            
            // If cardWidth is 0, try to calculate from computed style
            if (cardWidth === 0 || !cardWidth) {
                const computedStyle = window.getComputedStyle(card);
                cardWidth = parseFloat(computedStyle.width) || (window.innerWidth * 0.9);
            }
            
            const gap = parseFloat(window.getComputedStyle(productsSlider).gap) || (isMobile() ? 16 : 40);
            const width = cardWidth + gap;
            
            // On mobile, ensure we have a valid width
            if (isMobile()) {
                if (width <= 0 || !width || isNaN(width)) {
                    // Fallback: use viewport width for mobile (90% + gap)
                    return (window.innerWidth * 0.9) + gap;
                }
            }
            
            return width;
        }
        // Fallback based on screen size
        if (isMobile()) {
            return (window.innerWidth * 0.9) + 16;
        }
        return 360;
    };
    
    // Clone cards for infinite loop
    const cloneCards = () => {
        // On mobile, don't clone cards - just show all in a scrollable line
        if (isMobile()) {
            // Remove any existing clones
            const existingClones = productsSlider.querySelectorAll('.product-card[data-cloned]');
            existingClones.forEach(clone => clone.remove());
            
            // Reset transform for mobile scroll - ensure no transform blocks scrolling
            productsSlider.style.transform = 'none';
            productsSlider.style.transition = 'none';
            productsSlider.style.visibility = 'visible';
            productsSlider.style.opacity = '1';
            productsSlider.style.position = 'relative';
            productsSlider.style.left = '0';
            productsSlider.style.top = '0';
            currentIndex = 0;
            
            // Ensure wrapper can scroll
            const sliderWrapper = productsSlider.closest('.products-slider-wrapper');
            if (sliderWrapper) {
                sliderWrapper.style.overflowX = 'auto';
                sliderWrapper.style.overflowY = 'hidden';
            }
            return;
        }
        
        // Desktop: Clone cards for infinite loop
        // Remove existing clones
        const existingClones = productsSlider.querySelectorAll('.product-card[data-cloned]');
        existingClones.forEach(clone => clone.remove());
        
        // Get original cards before cloning
        const originalCards = productsSlider.querySelectorAll('.product-card:not([data-cloned])');
        const originalCount = originalCards.length;
        
        if (originalCount === 0) return;
        
        const cardsPerView = getCardsPerView();
        
        // Clone first N cards and append to end
        for (let i = 0; i < Math.min(cardsPerView, originalCount); i++) {
            const clone = originalCards[i].cloneNode(true);
            clone.setAttribute('data-cloned', 'true');
            productsSlider.appendChild(clone);
        }
        
        // Clone last N cards and prepend to start
        const startClone = Math.max(0, originalCount - cardsPerView);
        for (let i = startClone; i < originalCount; i++) {
            const clone = originalCards[i].cloneNode(true);
            clone.setAttribute('data-cloned', 'true');
            productsSlider.insertBefore(clone, originalCards[0]);
        }
        
        // Set initial position to show first real card(s)
        currentIndex = cardsPerView; // Skip the cloned cards at the start
        
        // Force initial position without transition
        productsSlider.style.transition = 'none';
        
        // Wait for layout to be ready, then set position
        setTimeout(() => {
            requestAnimationFrame(() => {
                const cardWidth = getCardWidth();
                if (cardWidth > 0 && !isNaN(cardWidth)) {
                    const offset = -currentIndex * cardWidth;
                    productsSlider.style.transform = `translateX(${offset}px)`;
                    productsSlider.style.visibility = 'visible';
                    productsSlider.style.opacity = '1';
                } else {
                    // Fallback: show first card at position 0
                    productsSlider.style.transform = 'translateX(0px)';
                    productsSlider.style.visibility = 'visible';
                    productsSlider.style.opacity = '1';
                    currentIndex = 0;
                }
                
                // Re-enable transition after a brief delay
                setTimeout(() => {
                    productsSlider.style.transition = 'transform 0.5s ease';
                }, 100);
            });
        }, 200);
    };
    
    const updateSliderPosition = () => {
        // On mobile, don't update position - let native scroll handle it
        if (isMobile()) {
            return;
        }
        
        if (isTransitioning) return;
        isTransitioning = true;
        const cardWidth = getCardWidth();
        
        // Ensure cardWidth is valid
        if (!cardWidth || cardWidth <= 0) {
            isTransitioning = false;
            return;
        }
        
        const offset = -currentIndex * cardWidth;
        productsSlider.style.transform = `translateX(${offset}px)`;
        
        setTimeout(() => {
            isTransitioning = false;
            // Get original cards count (excluding clones)
            const originalCards = productsSlider.querySelectorAll('.product-card:not([data-cloned])');
            const originalCount = originalCards.length;
            if (originalCount === 0) return;
            
            const cardsPerView = getCardsPerView();
            const clonedStart = cardsPerView; // Cloned cards are at the start
            const clonedEnd = originalCount + clonedStart;
            
            // Reset position for infinite loop (accounting for cards per view)
            if (currentIndex >= clonedEnd - (cardsPerView - 1)) {
                currentIndex = clonedStart;
                productsSlider.style.transition = 'none';
                updateSliderPosition();
                setTimeout(() => {
                    productsSlider.style.transition = 'transform 0.5s ease';
                }, 50);
            } else if (currentIndex < clonedStart) {
                currentIndex = clonedEnd - cardsPerView;
                productsSlider.style.transition = 'none';
                updateSliderPosition();
                setTimeout(() => {
                    productsSlider.style.transition = 'transform 0.5s ease';
                }, 50);
            }
        }, 500);
    };
    
    const nextSlide = () => {
        // On mobile, scroll horizontally instead
        if (isMobile()) {
            const sliderWrapper = productsSlider.closest('.products-slider-wrapper');
            if (sliderWrapper) {
                const cardWidth = 280; // Fixed card width on mobile
                sliderWrapper.scrollBy({ left: cardWidth + 16, behavior: 'smooth' });
            }
            return;
        }
        
        if (isTransitioning) return;
        const cardsPerView = getCardsPerView();
        currentIndex += cardsPerView; // Move N cards at a time (3 on desktop)
        updateSliderPosition();
    };
    
    const prevSlide = () => {
        // On mobile, scroll horizontally instead
        if (isMobile()) {
            const sliderWrapper = productsSlider.closest('.products-slider-wrapper');
            if (sliderWrapper) {
                const cardWidth = 280; // Fixed card width on mobile
                sliderWrapper.scrollBy({ left: -(cardWidth + 16), behavior: 'smooth' });
            }
            return;
        }
        
        if (isTransitioning) return;
        const cardsPerView = getCardsPerView();
        currentIndex -= cardsPerView; // Move N cards at a time (3 on desktop)
        updateSliderPosition();
    };
    
    const startAutoPlay = () => {
        // Don't auto-play on mobile
        if (isMobile()) {
            return;
        }
        autoPlayInterval = setInterval(() => {
            nextSlide();
        }, 3000); // Auto-play every 3 seconds
    };
    
    const stopAutoPlay = () => {
        clearInterval(autoPlayInterval);
    };
    
    // Initialize slider after DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                cloneCards();
                startAutoPlay();
            }, 200);
        });
    } else {
        setTimeout(() => {
            cloneCards();
            startAutoPlay();
        }, 200);
    }
    
    // Button controls
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            stopAutoPlay();
            nextSlide();
            setTimeout(startAutoPlay, 3000); // Restart after 3 seconds
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            stopAutoPlay();
            prevSlide();
            setTimeout(startAutoPlay, 3000); // Restart after 3 seconds
        });
    }
    
    // Pause on hover (desktop only)
    const sliderWrapper = productsSlider.closest('.products-slider-wrapper');
    if (sliderWrapper && !isMobile()) {
        sliderWrapper.addEventListener('mouseenter', stopAutoPlay);
        sliderWrapper.addEventListener('mouseleave', startAutoPlay);
    }
    
    // Handle window resize - reinitialize on mobile/desktop switch
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            stopAutoPlay();
            cloneCards();
            startAutoPlay();
        }, 300);
    });
}

// Map Click Handler - Open Google Maps when clicking on map
document.addEventListener('DOMContentLoaded', () => {
    const mapContainer = document.querySelector('.map-container');
    const mapOverlay = document.querySelector('.map-click-overlay');
    
    if (mapContainer && mapOverlay) {
        // Enable pointer events on overlay to make it clickable
        mapOverlay.style.pointerEvents = 'auto';
        
        // Handle clicks on the overlay to open Google Maps
        mapOverlay.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.open('https://www.google.com/maps/search/?api=1&query=A-9,+Samruddhi+Industrial+Estate,+Kathwada-Singarva+Rd,+Kathwada,+Ahmedabad,+Gujarat+382430', '_blank');
        });
    }
});


