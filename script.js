// Wait for the page to load completely
document.addEventListener('DOMContentLoaded', function() {
    
    // Get menu button and navigation links
    const menuButton = document.getElementById('menu');
    const navLinks = document.getElementById('links');
    
    // Open and close mobile menu when button is clicked
    if (menuButton) {
        menuButton.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
    }
    
    // Close menu when any link is clicked
    const allLinks = document.querySelectorAll('.link');
    allLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navLinks.classList.remove('show');
        });
    });
    
    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.fill');
    
    // Function to check if element is visible
    function isElementVisible(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }
    
    // Function to animate skill bars
    function animateSkillBars() {
        skillBars.forEach(function(bar) {
            if (isElementVisible(bar) && bar.style.width === '') {
                const targetWidth = bar.getAttribute('data-width');
                if (targetWidth) {
                    // Add small delay for smooth animation
                    setTimeout(function() {
                        bar.style.width = targetWidth + '%';
                    }, 100);
                }
            }
        });
    }
    
    // Check skill bars on scroll
    window.addEventListener('scroll', animateSkillBars);
    
    // Check skill bars on page load
    animateSkillBars();
    
    // Form submission handling
    const form = document.getElementById('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            // Prevent page reload
            event.preventDefault();
            
            // Get all input fields
            const inputs = form.querySelectorAll('.input');
            let allFieldsFilled = true;
            
            // Check if all fields are filled
            inputs.forEach(function(input) {
                if (input.value.trim() === '') {
                    allFieldsFilled = false;
                    // Highlight empty field with red border
                    input.style.borderColor = '#ec4899';
                } else {
                    // Reset border color for filled fields
                    input.style.borderColor = 'rgba(168, 85, 247, 0.3)';
                }
            });
            
            // Show message based on form validation
            if (allFieldsFilled) {
                alert('Thank you for your message! I will get back to you soon.');
                form.reset();
            } else {
                alert('Please fill in all fields before submitting.');
            }
        });
    }
    
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(function(button) {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Smooth scroll back to top when logo is clicked
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Add animation to fade elements when they appear
    const fadeElements = document.querySelectorAll('.fade');
    
    // Create observer to watch elements
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            // If element is visible
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of element is visible
    });
    
    // Observe all fade elements
    fadeElements.forEach(function(element) {
        observer.observe(element);
    });
    
    // Add focus animation to form inputs
    const formInputs = document.querySelectorAll('.input');
    formInputs.forEach(function(input) {
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    allLinks.forEach(function(link) {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Add parallax effect to home section profile picture
    const profilePic = document.querySelector('.pic');
    if (profilePic) {
        window.addEventListener('scroll', function() {
            const scrolled = window.scrollY;
            const speed = 0.3;
            profilePic.style.transform = 'translateY(' + (scrolled * speed) + 'px)';
        });
    }
    
    // Console message for developers
    console.log('%c👋 Hello Developer!', 'color: #a855f7; font-size: 20px; font-weight: bold;');
    console.log('%cLike what you see? Let\'s connect!', 'color: #ec4899; font-size: 14px;');
    console.log('%cEmail: kattisourabh99@email.com', 'color: #a855f7; font-size: 12px;');
    
});

// Page load animation
window.addEventListener('load', function() {
    // Add loaded class to body for any additional animations
    document.body.classList.add('loaded');
});