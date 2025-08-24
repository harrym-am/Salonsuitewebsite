// Chat System Page Specific JavaScript

// Journey step animations
const journeySteps = document.querySelectorAll('.journey-step');
const stepObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Animate step number
            const stepNumber = entry.target.querySelector('.step-number');
            if (stepNumber) {
                stepNumber.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    stepNumber.style.transform = 'scale(1)';
                }, 300);
            }
            
            // Animate feature cards
            const featureCard = entry.target.querySelector('.feature-card');
            if (featureCard) {
                setTimeout(() => {
                    featureCard.style.transform = 'translateY(0) scale(1)';
                    featureCard.style.opacity = '1';
                }, 200);
            }
        }
    });
}, { threshold: 0.3 });

journeySteps.forEach(step => {
    step.style.opacity = '0';
    step.style.transform = 'translateY(50px)';
    step.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    const featureCard = step.querySelector('.feature-card');
    if (featureCard) {
        featureCard.style.transform = 'translateY(30px) scale(0.95)';
        featureCard.style.opacity = '0';
        featureCard.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
    }
    
    stepObserver.observe(step);
});

// Chat preview interactions
const chatPreview = document.querySelector('.chat-preview');
if (chatPreview) {
    // Add typing animation
    const chatInput = chatPreview.querySelector('.chat-input input');
    const sendButton = chatPreview.querySelector('.fa-paper-plane');
    
    if (chatInput && sendButton) {
        chatInput.addEventListener('focus', () => {
            chatPreview.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.02)';
        });
        
        chatInput.addEventListener('blur', () => {
            chatPreview.style.transform = 'perspective(1000px) rotateY(-5deg) rotateX(5deg) scale(1)';
        });
        
        // Simulate typing
        let typingTimeout;
        chatInput.addEventListener('input', () => {
            clearTimeout(typingTimeout);
            sendButton.style.color = 'var(--primary-color)';
            sendButton.style.transform = 'scale(1.1)';
            
            typingTimeout = setTimeout(() => {
                sendButton.style.color = 'var(--text-secondary)';
                sendButton.style.transform = 'scale(1)';
            }, 1000);
        });
    }
}

// Simple Chat Animation - Just Messages Sliding In
function startChatAnimation() {
    const messagesContainer = document.getElementById('chat-messages');
    
    if (!messagesContainer) {
        console.log('Messages container not found!');
        return;
    }
    
    const messages = [
        { type: 'received', text: 'Hi! I need to book an appointment for tomorrow' },
        { type: 'sent', text: 'Hi Sarah! I\'d be happy to help. What service are you looking for?' },
        { type: 'received', text: 'I want a cut and color, around 2 PM if possible' },
        { type: 'sent', text: 'Perfect! I have a 2:15 PM slot available. Would that work?' },
        { type: 'received', text: 'That sounds great! I\'ll see you then' },
        { type: 'sent', text: 'Excellent! I\'ll send you a confirmation. Looking forward to it! 💇‍♀️' }
    ];
    
    let currentIndex = 0;
    
    function addMessage() {
        if (currentIndex >= messages.length) {
            // Reset and start over
            setTimeout(() => {
                messagesContainer.innerHTML = '';
                currentIndex = 0;
                setTimeout(addMessage, 1000);
            }, 4000);
            return;
        }
        
        const messageData = messages[currentIndex];
        const messageEl = document.createElement('div');
        messageEl.className = `message ${messageData.type}`;
        messageEl.innerHTML = `
            <div class="message-bubble">
                ${messageData.text}
            </div>
        `;
        
        messagesContainer.appendChild(messageEl);
        
        // Animate in
        setTimeout(() => {
            messageEl.classList.add('show');
        }, 100);
        
        currentIndex++;
        
        // Show next message
        setTimeout(addMessage, 2000);
    }
    
    // Start the animation
    setTimeout(addMessage, 1000);
}
    
    showNextMessage() {
        console.log('showNextMessage called, currentIndex:', this.currentIndex);
        
        if (this.currentIndex >= this.messages.length) {
            console.log('All messages shown, resetting...');
            // Reset and start over
            setTimeout(() => {
                this.resetAnimation();
            }, 3000);
            return;
        }
        
        const messageData = this.messages[this.currentIndex];
        console.log('Adding message:', messageData);
        this.addMessage(messageData.type, messageData.text);
        
        this.currentIndex++;
        
        // Show next message after delay
        setTimeout(() => {
            this.showNextMessage();
        }, 1500);
    }
    
    addMessage(type, text) {
        console.log('addMessage called:', type, text);
        
        const messageEl = document.createElement('div');
        messageEl.className = `message ${type}`;
        messageEl.innerHTML = `
            <div class="message-bubble">
                ${text}
            </div>
        `;
        
        console.log('Appending message element to container');
        this.messagesContainer.appendChild(messageEl);
        
        // Animate in
        setTimeout(() => {
            messageEl.classList.add('show');
            console.log('Message should now be visible');
        }, 100);
        
        // Auto-scroll to bottom
        this.scrollToBottom();
    }
    
    resetAnimation() {
        // Clear all messages
        this.messagesContainer.innerHTML = '';
        this.currentIndex = 0;
        
        // Restart animation
        setTimeout(() => {
            this.showNextMessage();
        }, 1000);
    }
    
    scrollToBottom() {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
}

// Initialize simple animation
function initChatAnimation() {
    console.log('Initializing chat animation...');
    const container = document.getElementById('chat-messages');
    console.log('Container found:', container);
    
    if (container) {
        new SimpleChatAnimation();
    } else {
        console.log('Container not found, retrying in 500ms...');
        setTimeout(initChatAnimation, 500);
    }
}

// Try multiple ways to ensure it runs
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatAnimation);
} else {
    initChatAnimation();
}

// Also try after window load as fallback
window.addEventListener('load', () => {
    console.log('Window loaded, checking if animation is running...');
    if (!document.querySelector('.message')) {
        console.log('No messages found, reinitializing...');
        initChatAnimation();
    }
});



// Feature card hover effects
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.card-icon');
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.card-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// Customer profile interactions
const customerProfile = document.querySelector('.customer-profile');
if (customerProfile) {
    const detailItems = customerProfile.querySelectorAll('.detail-item');
    
    detailItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 300 + (index * 100));
    });
}

// Chat actions hover effects
const chatActions = document.querySelectorAll('.chat-actions i');
chatActions.forEach(action => {
    action.addEventListener('mouseenter', () => {
        action.style.transform = 'scale(1.2)';
    });
    
    action.addEventListener('mouseleave', () => {
        action.style.transform = 'scale(1)';
    });
});

// Pricing reminder animations
const pricingReminder = document.querySelector('.pricing-reminder');
if (pricingReminder) {
    const reminderObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const icon = entry.target.querySelector('.reminder-icon');
                const highlights = entry.target.querySelectorAll('.highlight-item');
                
                if (icon) {
                    icon.style.transform = 'scale(1.1) rotate(5deg)';
                    setTimeout(() => {
                        icon.style.transform = 'scale(1) rotate(0deg)';
                    }, 300);
                }
                
                highlights.forEach((highlight, index) => {
                    highlight.style.opacity = '0';
                    highlight.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        highlight.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                        highlight.style.opacity = '1';
                        highlight.style.transform = 'translateY(0)';
                    }, 200 + (index * 100));
                });
            }
        });
    }, { threshold: 0.5 });
    
    reminderObserver.observe(pricingReminder);
}

// Hero badge animation
const heroBadge = document.querySelector('.hero-badge');
if (heroBadge) {
    heroBadge.style.opacity = '0';
    heroBadge.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        heroBadge.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        heroBadge.style.opacity = '1';
        heroBadge.style.transform = 'translateY(0)';
    }, 1000);
}

// Chat input interactions
const chatInput = document.querySelector('.chat-input');
if (chatInput) {
    const inputField = chatInput.querySelector('input');
    const icons = chatInput.querySelectorAll('i');
    
    if (inputField) {
        inputField.addEventListener('focus', () => {
            chatInput.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.1)';
        });
        
        inputField.addEventListener('blur', () => {
            chatInput.style.boxShadow = 'none';
        });
    }
    
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.2)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1)';
        });
    });
}

// Step features animation
const stepFeatures = document.querySelectorAll('.step-features li');
stepFeatures.forEach((feature, index) => {
    feature.style.opacity = '0';
    feature.style.transform = 'translateX(-20px)';
    
    setTimeout(() => {
        feature.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        feature.style.opacity = '1';
        feature.style.transform = 'translateX(0)';
    }, 500 + (index * 100));
});

// Chat features grid animations
const chatFeaturesGrid = document.querySelector('.chat-features .features-grid');
if (chatFeaturesGrid) {
    const gridObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const cards = entry.target.querySelectorAll('.feature-card');
                cards.forEach((card, index) => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px)';
                    
                    setTimeout(() => {
                        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, { threshold: 0.2 });
    
    gridObserver.observe(chatFeaturesGrid);
}

// Add ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple effect to all buttons on chat page
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', createRipple);
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation for chat page
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Parallax effect for floating shapes on chat page
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Add some interactive micro-animations
document.addEventListener('DOMContentLoaded', () => {
    // Pulse animation for CTA buttons
    const pulseAnimation = [
        { transform: 'scale(1)' },
        { transform: 'scale(1.05)' },
        { transform: 'scale(1)' }
    ];
    
    const pulseTiming = {
        duration: 2000,
        iterations: Infinity
    };
    
    // Add subtle pulse to primary CTA
    const primaryCTA = document.querySelector('.cta-primary');
    if (primaryCTA) {
        setTimeout(() => {
            primaryCTA.animate(pulseAnimation, pulseTiming);
        }, 3000);
    }
});
