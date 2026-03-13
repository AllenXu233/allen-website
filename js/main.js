// Main JavaScript for Allen Xu's Website

document.addEventListener('DOMContentLoaded', () => {
    // Smooth reveal animation on load
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }

    // Add scroll-based navigation background
    const nav = document.querySelector('.nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.style.background = 'rgba(10, 10, 11, 0.95)';
            } else {
                nav.style.background = 'rgba(10, 10, 11, 0.8)';
            }
        });
    }

    // Add year to footer
    const footerYear = document.querySelector('.footer .container p');
    if (footerYear) {
        const year = new Date().getFullYear();
        footerYear.textContent = `© ${year} Allen Xu · All thoughts are mine.`;
    }

    // Mobile navigation toggle (for future use)
    const createMobileNav = () => {
        const nav = document.querySelector('.nav');
        if (!nav) return;
        
        const toggle = document.createElement('button');
        toggle.className = 'mobile-nav-toggle';
        toggle.innerHTML = '☰';
        toggle.style.cssText = `
            display: none;
            background: none;
            border: none;
            color: var(--text-primary);
            font-size: 1.5rem;
            cursor: pointer;
        `;
        
        nav.querySelector('.nav-container').appendChild(toggle);
        
        const navLinks = document.querySelector('.nav-links');
        
        toggle.addEventListener('click', () => {
            const isVisible = navLinks.style.display === 'flex';
            navLinks.style.display = isVisible ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = 'var(--bg-primary)';
            navLinks.style.padding = '1rem';
            navLinks.style.borderBottom = '1px solid var(--border)';
        });
        
        if (window.innerWidth <= 768) {
            toggle.style.display = 'block';
        }
        
        window.addEventListener('resize', () => {
            toggle.style.display = window.innerWidth <= 768 ? 'block' : 'none';
            if (window.innerWidth > 768) {
                navLinks.style.display = 'flex';
                navLinks.style.position = '';
                navLinks.style.flexDirection = '';
            }
        });
    };
    
    createMobileNav();
});
