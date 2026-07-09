/**
 * AlexWeb Consult Shared JavaScript File
 * Handles interactivity, smooth scrolling, and responsive menu toggling.
 * Pure Vanilla JS adhering to performance best practices.
 */

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.sticky-nav');
    const toggleButton = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    const mainContent = document.body;

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
            nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        } else {
            // The CSS handles the initial transparent state, but this ensures JS doesn't overwrite it unnecessarily
        }
    });


    // 3. Scroll Reveal Animation (Minimalist approach)
    const sections = document.querySelectorAll('.service-section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a class that triggers CSS animations defined in styles.css
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Stop observing once visible
            } else {
                // Reset state for smooth entry (if needed, depends on full CSS implementation)
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => {
        // Initialize elements with hidden/transformed state for the animation to work
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'; // Custom timing function for professional feel
        observer.observe(section);
    });


    // 4. Smooth Scrolling (Fallback/Improvement)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if it's an internal jump link or a navigation CTA
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});
