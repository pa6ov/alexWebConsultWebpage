/**
 * AlexWeb Consult Shared JavaScript File
 * Handles interactivity, smooth scrolling, and responsive menu toggling.
 */

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.sticky-nav');
    const toggleButton = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');


    // 1. Mobile Navigation Toggle Functionality (Behavior polish)
    if (toggleButton && navLinksContainer) {
        toggleButton.addEventListener('click', () => {
            const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true' || false;
            navLinksContainer.classList.toggle('open');
            toggleButton.setAttribute('aria-expanded', !isExpanded);
        });

        // Close menu when a link is clicked (Handles internal page links)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768 && navLinksContainer.classList.contains('open')) {
                    setTimeout(() => {
                        navLinksContainer.classList.remove('open');
                        toggleButton.setAttribute('aria-expanded', 'false');
                    }, 150);
                }
            });
        });
    }

    // --- NEW: Language Selector Handling (Localization Algo) ---
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        languageSelector.addEventListener('click', handleLanguageChange);
    }

    function handleLanguageChange(e) {
        const langCode = e.target.getAttribute('data-locale');
        console.log(`[i18n] Attempting to switch site language to: ${langCode}`);
        // In a real application, this would fetch the translated content (JSON/API call) 
        // and update all visible text elements across the page dynamically.
    }


    // 2. Sticky Navigation Color Change (Behavior polish)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'rgba(11, 14, 26, 1)'; // Fully opaque on scroll
            nav.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.3)'; // More pronounced shadow
        } else {
            // Resetting background to initial transparent/semi-transparent state defined in CSS
        }
    });


    // 3. Scroll Reveal Animation (Optimization and Polish)
    const sections = document.querySelectorAll('.service-section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Apply final state styles for animation effect
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => {
        // Set initial state for animation effect
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        observer.observe(section);
    });


    // 4. Smooth Scrolling (Polish)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') !== '#' && this.getAttribute('href').length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(this.getAttribute('href'));

                if (targetElement) {
                    // Scroll to the top of the element minus a buffer equal to the sticky header height (80px)
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

});
