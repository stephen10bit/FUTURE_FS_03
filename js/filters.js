document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.querySelector('.search-input');
    const sortSelect = document.querySelector('.sort-select');
    const productCards = document.querySelectorAll('.product-card');
    const pageButtons = document.querySelectorAll('.page-btn');
    
    // Active filter state
    let activeFilter = 'all';
    let searchTerm = '';
    let sortMethod = 'featured';
    
    // Filter function
    function filterProducts() {
        productCards.forEach(card => {
            const matchesFilter = activeFilter === 'all' || 
                                card.dataset.category === activeFilter;
            const matchesSearch = card.querySelector('h3').textContent
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase());
            
            if (matchesFilter && matchesSearch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        sortProducts();
    }
    
    // Sort function
    function sortProducts() {
        const container = document.querySelector('.product-grid');
        const cards = Array.from(document.querySelectorAll('.product-card[style="display: block;"]'));
        
        cards.sort((a, b) => {
            switch(sortMethod) {
                case 'price-low':
                    return parseFloat(a.dataset.price) - parseFloat(b.dataset.price);
                case 'price-high':
                    return parseFloat(b.dataset.price) - parseFloat(a.dataset.price);
                case 'newest':
                    return new Date(b.dataset.date) - new Date(a.dataset.date);
                default: // featured
                    return parseInt(a.dataset.featuredRank) - parseInt(b.dataset.featuredRank);
            }
        });
        
        // Re-append sorted cards
        cards.forEach(card => container.appendChild(card));
    }
    
    // Event listeners
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            activeFilter = button.dataset.filter;
            filterProducts();
        });
    });
    
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value;
        filterProducts();
    });
    
    sortSelect.addEventListener('change', (e) => {
        sortMethod = e.target.value;
        filterProducts();
    });
    
    // Pagination
    pageButtons.forEach(button => {
        button.addEventListener('click', () => {
            pageButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            // In a real app, you'd fetch new products here
        });
    });
    
    // Initialize
    filterProducts();
});