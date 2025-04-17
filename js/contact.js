document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    // Form validation
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Simple validation
        if (!name || !email || !message) {
            showAlert('Please fill in all required fields', 'error');
            return;
        }
        
        if (!validateEmail(email)) {
            showAlert('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        showAlert('Message sent successfully!', 'success');
        contactForm.reset();
    });
    
    // Email validation helper
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Show alert message
    function showAlert(message, type) {
        const alertBox = document.createElement('div');
        alertBox.className = `alert ${type}`;
        alertBox.textContent = message;
        
        // Insert before form
        contactForm.parentNode.insertBefore(alertBox, contactForm);
        
        // Remove after 3 seconds
        setTimeout(() => {
            alertBox.style.opacity = '0';
            setTimeout(() => alertBox.remove(), 300);
        }, 3000);
    }
    
    // Animate form elements on scroll
    const formGroups = document.querySelectorAll('.form-group');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    formGroups.forEach(group => {
        group.style.opacity = '0';
        group.style.transform = 'translateY(20px)';
        group.style.transition = 'all 0.4s ease-out';
        observer.observe(group);
    });
});