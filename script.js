// Scroll animation
        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scroll for navigation
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });

            // Fade-in animation for elements when scrolled into view
            const fadeElements = document.querySelectorAll('.fade-in, .gallery-item, .team-member');
           
            function checkFade() {
                fadeElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const elementVisible = 150;
                   
                    if (elementTop < window.innerHeight - elementVisible) {
                        element.classList.add('visible');
                    }
                });
            }
           
            window.addEventListener('scroll', checkFade);
            checkFade(); // Initial check
           
            // Particle animation for background
            const particlesContainer = document.querySelector('.particles');
            const particleCount = 50;
           
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.style.position = 'absolute';
                particle.style.width = `${Math.random() * 5 + 1}px`;
                particle.style.height = particle.style.width;
                particle.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                particle.style.borderRadius = '50%';
               
                // Random starting position
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
               
                // Animation
                particle.style.animation = `particleFloat ${Math.random() * 15 + 5}s linear infinite`;
                particle.style.opacity = Math.random() * 0.5 + 0.1;
               
                particlesContainer.appendChild(particle);
            }
           
            // Add particle animation
            const style = document.createElement('style');
            style.innerHTML = `
                @keyframes particleFloat {
                    0% {
                        transform: translateY(0) rotate(0deg);
                    }
                    100% {
                        transform: translateY(-100vh) rotate(360deg);
                    }
                }
            `;
            document.head.appendChild(style);
           
            // Project button click
            document.getElementById('goToProjectBtn').addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = this.href;
            });
        });