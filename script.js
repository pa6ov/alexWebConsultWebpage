/**
 * AlexWeb Consult Shared JavaScript File
 * Handles interactivity, smooth scrolling, and responsive menu toggling.
 * Pure Vanilla JS adhering to performance best practices.
 */

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.sticky-nav');
    const toggleButton = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    // const mainContent = document.body; // No longer needed for simple scroll detection

    // 1. Mobile Navigation Toggle Functionality
    if (toggleButton && navLinksContainer) {
        toggleButton.addEventListener('click', () => {
            const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true' || false;

            // Toggle visibility via a class/aria attribute
            navLinksContainer.classList.toggle('open');
            toggleButton.setAttribute('aria-expanded', !isExpanded);
        });

        // Close menu when a link is clicked (improves UX on single page scrolls)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                // Check if the click occurred on the mobile breakpoint and close the menu if necessary
                if (window.innerWidth <= 768 && navLinksContainer.classList.contains('open')) {
                    navLinksContainer.classList.remove('open');
                    toggleButton.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }


    // 2. Sticky Navigation Color Change (Subtle animation)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'rgba(11, 14, 26, 1)'; // Fully opaque on scroll
            // Adding a shadow to visually separate the sticky element from content
            nav.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.3)';
        } else {
            // Default state is handled by CSS (semi-transparent)
        }
    });


    // 3. Scroll Reveal Animation (Intersection Observer API)
    const sections = document.querySelectorAll('.service-section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Apply final state styles for animation effect
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => {
        // Set initial state for animation effect to work (invisible and slightly moved down)
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'; // Consistent transition curve
        observer.observe(section);
    });


    // 4. Smooth Scrolling (Universal fallback for internal links)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') !== '#' && this.getAttribute('href').length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(this.getAttribute('href'));

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Offset by header height for better scroll landing spot
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

});
