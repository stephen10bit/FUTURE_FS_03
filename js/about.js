document.addEventListener('DOMContentLoaded', function() {
    // Animate timeline items on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    timelineItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease-out';
        observer.observe(item);
    });
    
    // Team card hover effects
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const img = card.querySelector('img');
            img.style.transform = 'scale(1.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            const img = card.querySelector('img');
            img.style.transform = 'scale(1)';
        });
    });
});