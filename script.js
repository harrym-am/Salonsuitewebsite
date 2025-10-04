// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scrolling for navigation links
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

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .section-header, .pricing-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Chart animation
const chartBars = document.querySelectorAll('.chart-bar');
chartBars.forEach((bar, index) => {
    setTimeout(() => {
        bar.style.height = bar.style.height || '60%';
    }, index * 100);
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Trigger counter animation when stats come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                if (text.includes('+')) {
                    const number = parseInt(text.replace(/\D/g, ''));
                    stat.textContent = '0+';
                    animateCounter(stat, number, 2000);
                    setTimeout(() => {
                        stat.textContent = number + '+';
                    }, 2000);
                } else if (text.includes('%')) {
                    const number = parseFloat(text);
                    stat.textContent = '0%';
                    animateCounter(stat, number, 2000);
                    setTimeout(() => {
                        stat.textContent = number + '%';
                    }, 2000);
                } else if (text.includes('/')) {
                    // For 24/7, just animate the 24
                    stat.textContent = '0/7';
                    animateCounter(stat, 24, 2000);
                    setTimeout(() => {
                        stat.textContent = '24/7';
                    }, 2000);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// Parallax effect for floating shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    const ctaShapes = document.querySelectorAll('.cta-shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
    
    ctaShapes.forEach((shape, index) => {
        const speed = 0.3 + (index * 0.1);
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.05}deg)`;
    });
});

// Hover effects for CTA buttons
const ctaButtons = document.querySelectorAll('.cta-primary, .cta-secondary');
ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px) scale(1.02)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0) scale(1)';
    });
});

// Feature card hover animations
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.feature-icon');
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.feature-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// Dashboard preview hover effect
const dashboardPreview = document.querySelector('.dashboard-preview');
if (dashboardPreview) {
    dashboardPreview.addEventListener('mouseenter', () => {
        dashboardPreview.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.02)';
    });
    
    dashboardPreview.addEventListener('mouseleave', () => {
        dashboardPreview.style.transform = 'perspective(1000px) rotateY(-5deg) rotateX(5deg) scale(1)';
    });
}

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title .title-line:first-child');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 500);
    }
});

// Smooth reveal animation for dashboard content
const dashboardContent = document.querySelector('.dashboard-content');
if (dashboardContent) {
    const widgets = dashboardContent.querySelectorAll('.widget');
    widgets.forEach((widget, index) => {
        widget.style.opacity = '0';
        widget.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            widget.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            widget.style.opacity = '1';
            widget.style.transform = 'translateY(0)';
        }, 1000 + (index * 200));
    });
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations here
}, 16));

// Add some interactive micro-animations
document.addEventListener('DOMContentLoaded', () => {
    // Initialize booking demo animation
    initBookingDemo();
    initChatDemo();
    initPaymentDemo();
    initRevenueDemo();
    initMergeDemo();
    initMobileDemo();
    
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
    
    // Add hover sound effect simulation (visual feedback)
    const interactiveElements = document.querySelectorAll('.nav-link, .feature-card, .cta-primary, .cta-secondary, .pricing-card');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transition = 'all 0.2s ease';
        });
    });
});

// Booking Demo Animation
function initBookingDemo() {
    const bookingDemo = document.getElementById('booking-demo');
    if (!bookingDemo) return;

    function showCalendarScreen() {
        const calendarHTML = `
            <div class="demo-calendar">
                <div class="demo-calendar-header">
                    <div class="demo-calendar-title">Smart Calendar</div>
                    <div class="demo-calendar-date">September 2025</div>
                </div>
                <div class="demo-calendar-grid" id="calendar-grid">
                    <div class="demo-day">S</div>
                    <div class="demo-day">M</div>
                    <div class="demo-day">T</div>
                    <div class="demo-day">W</div>
                    <div class="demo-day">T</div>
                    <div class="demo-day">F</div>
                    <div class="demo-day">S</div>
                    <div class="demo-day"></div>
                    <div class="demo-day"></div>
                    <div class="demo-day"></div>
                    <div class="demo-day"></div>
                    <div class="demo-day"></div>
                    <div class="demo-day">1</div>
                    <div class="demo-day">2</div>
                    <div class="demo-day">3</div>
                    <div class="demo-day">4</div>
                    <div class="demo-day">5</div>
                    <div class="demo-day">6</div>
                    <div class="demo-day">7</div>
                    <div class="demo-day">8</div>
                    <div class="demo-day">9</div>
                    <div class="demo-day">10</div>
                    <div class="demo-day">11</div>
                    <div class="demo-day">12</div>
                    <div class="demo-day">13</div>
                    <div class="demo-day">14</div>
                    <div class="demo-day demo-selected" id="demo-selected-date">15</div>
                    <div class="demo-day">16</div>
                    <div class="demo-day">17</div>
                    <div class="demo-day">18</div>
                    <div class="demo-day">19</div>
                    <div class="demo-day">20</div>
                    <div class="demo-day">21</div>
                </div>
                <div class="demo-time-slots" id="time-slots" style="display: none;">
                    <div class="demo-time-header">
                        <h4>Available Time Slots - September 15</h4>
                    </div>
                    <div class="demo-time-list" id="time-slots-list">
                        <!-- Time slots will be added here -->
                    </div>
                </div>
                <div class="demo-appointments" id="appointment-list" style="display: none;">
                    <!-- Appointments will be added here -->
                </div>
            </div>
        `;
        bookingDemo.innerHTML = calendarHTML;
    }

    function animateTimeSlots() {
        const timeSlotsList = document.getElementById('time-slots-list');
        
        const slots = [
            { time: '9:00 AM', available: true },
            { time: '10:30 AM', available: false },
            { time: '12:00 PM', available: true },
            { time: '1:30 PM', available: true },
            { time: '3:00 PM', available: false },
            { time: '4:30 PM', available: true },
            { time: '6:00 PM', available: true }
        ];

        timeSlotsList.innerHTML = '';

        slots.forEach((slot, index) => {
            setTimeout(() => {
                const slotElement = document.createElement('div');
                slotElement.className = `demo-time-slot ${slot.available ? 'available' : 'booked'}`;
                slotElement.style.opacity = '0';
                slotElement.style.transform = 'translateY(20px)';
                
                slotElement.innerHTML = `
                    <div class="demo-slot-time">${slot.time}</div>
                    <div class="demo-slot-status">${slot.available ? 'Available' : 'Booked'}</div>
                `;

                timeSlotsList.appendChild(slotElement);

                // Animate in
                setTimeout(() => {
                    slotElement.style.transition = 'all 0.5s ease';
                    slotElement.style.opacity = '1';
                    slotElement.style.transform = 'translateY(0)';
                }, 100);

            }, index * 300);
        });
    }

    function animateAppointments() {
        const appointmentList = document.getElementById('appointment-list');
        
        const appointments = [
            {
                time: '9:00 AM',
                client: 'Sarah Johnson',
                service: 'Gel Nails & Polish',
                status: 'Confirmed'
            },
            {
                time: '10:30 AM',
                client: 'Emma Davis',
                service: 'Professional Makeup',
                status: 'Confirmed'
            },
            {
                time: '2:00 PM',
                client: 'Lisa Chen',
                service: 'Eyebrow Threading',
                status: 'Confirmed'
            },
            {
                time: '3:30 PM',
                client: 'Jessica Miller',
                service: 'Eyelash Extensions',
                status: 'Pending'
            }
        ];

        appointments.forEach((appointment, index) => {
            setTimeout(() => {
                const appointmentElement = document.createElement('div');
                appointmentElement.className = 'demo-appointment';
                appointmentElement.style.opacity = '0';
                appointmentElement.style.transform = 'translateY(20px)';
                
                appointmentElement.innerHTML = `
                    <div class="demo-appointment-time">${appointment.time}</div>
                    <div class="demo-appointment-info">
                        <div class="demo-appointment-name">${appointment.client}</div>
                        <div class="demo-appointment-service">${appointment.service}</div>
                    </div>
                    <div class="demo-appointment-status ${appointment.status.toLowerCase()}">${appointment.status}</div>
                `;

                appointmentList.appendChild(appointmentElement);

                // Animate in
                setTimeout(() => {
                    appointmentElement.style.transition = 'all 0.5s ease';
                    appointmentElement.style.opacity = '1';
                    appointmentElement.style.transform = 'translateY(0)';
                }, 100);

            }, index * 800);
        });
    }

    function animateCalendarInteraction() {
        const selectedDate = document.getElementById('demo-selected-date');
        const timeSlots = document.getElementById('time-slots');
        const appointmentList = document.getElementById('appointment-list');
        const calendarGrid = document.getElementById('calendar-grid');

        // Step 1: Show click animation on selected date
        setTimeout(() => {
            selectedDate.style.transform = 'scale(1.2)';
            selectedDate.style.boxShadow = '0 0 20px rgba(236, 72, 153, 0.5)';
        }, 1000);

        // Step 2: Hide calendar and show time slots
        setTimeout(() => {
            calendarGrid.style.display = 'none';
            timeSlots.style.display = 'block';
            animateTimeSlots();
        }, 2000);

        // Step 3: Show appointments after time slots
        setTimeout(() => {
            timeSlots.style.display = 'none';
            appointmentList.style.display = 'block';
            animateAppointments();
        }, 6000);

        // Restart animation after completion
        setTimeout(() => {
            showCalendarScreen();
            setTimeout(() => {
                animateCalendarInteraction();
            }, 1000);
        }, 12000);
    }

    // Start animation sequence
    showCalendarScreen();
    setTimeout(() => {
        animateCalendarInteraction();
    }, 1000);
}

// Chat Demo Animation
function initChatDemo() {
    const chatDemo = document.getElementById('chat-demo');
    if (!chatDemo) return;

    const chatHTML = `
        <div class="demo-chat">
            <div class="demo-chat-header">
                <div class="demo-chat-avatar">
                    <i class="fas fa-user"></i>
                </div>
                <div class="demo-chat-info">
                    <h3 class="demo-chat-name">Sarah Johnson</h3>
                    <div class="demo-chat-status">Online</div>
                </div>
            </div>
            <div class="demo-chat-messages" id="demo-chat-messages">
                <!-- Messages will be added here -->
            </div>
            <div class="demo-chat-input">
                <div class="demo-typing-area" id="demo-typing-area">
                    <span class="demo-text" id="demo-text"></span>
                    <span class="demo-cursor" id="demo-cursor">|</span>
                </div>
                <div class="demo-send-button" id="demo-send-button">
                    <i class="fas fa-paper-plane"></i>
                </div>
            </div>
        </div>
    `;

    chatDemo.innerHTML = chatHTML;

    const messages = [
        { type: 'received', text: 'Hi! I need to book an appointment for tomorrow' },
        { type: 'sent', text: 'Hi Sarah! I\'d be happy to help. What service are you looking for?' },
        { type: 'received', text: 'Actually, could we do Thursday March 15th at 3:30 PM instead?' }
    ];

    let currentIndex = 0;
    let isAnimating = false;
    
    function addMessage() {
        if (isAnimating) return;
        
        if (currentIndex >= messages.length) {
            // Reset and start over
            setTimeout(() => {
                document.getElementById('demo-chat-messages').innerHTML = '';
                currentIndex = 0;
                isAnimating = false;
                setTimeout(addMessage, 2000);
            }, 3000);
            return;
        }
        
        isAnimating = true;
        const messageData = messages[currentIndex];
        const messageEl = document.createElement('div');
        messageEl.className = `demo-message ${messageData.type}`;
        messageEl.innerHTML = `
            <div class="demo-message-bubble">
                ${messageData.text}
            </div>
        `;
        
        document.getElementById('demo-chat-messages').appendChild(messageEl);
        
        // Animate in with dedicated page style
        setTimeout(() => {
            messageEl.style.opacity = '1';
            messageEl.style.transform = 'translateY(0)';
            messageEl.classList.add('show');
            isAnimating = false;
            currentIndex++;
            
            // Show next message with faster delay
            setTimeout(addMessage, 1500);
        }, 200);
    }
    
    // Start the animation
    setTimeout(addMessage, 1500);
}

// Payment Demo Animation
function initPaymentDemo() {
    const paymentDemo = document.getElementById('payment-demo');
    if (!paymentDemo) return;

    const paymentHTML = `
        <div class="demo-payment">
            <div class="demo-payment-content" id="payment-content">
                <!-- Payment form will appear here -->
            </div>
        </div>
    `;

    paymentDemo.innerHTML = paymentHTML;

    function showPaymentForm() {
        const paymentContent = document.getElementById('payment-content');
        const paymentForm = `
            <div class="demo-payment-form">
                <div class="demo-payment-amount">
                    <span class="demo-currency">£</span>
                    <span class="demo-amount">85.00</span>
                </div>
                <div class="demo-payment-details">
                    <div class="demo-service-item">
                        <span>Nail Art & Polish</span>
                        <span>£45.00</span>
                    </div>
                    <div class="demo-service-item">
                        <span>Professional Makeup</span>
                        <span>£40.00</span>
                    </div>
                </div>
                <div class="demo-payment-method">
                    <div class="demo-card-preview">
                        <i class="fas fa-credit-card"></i>
                        <span>•••• •••• •••• 4242</span>
                    </div>
                </div>
                <div class="demo-payment-button">
                    <button class="demo-pay-btn">
                        <i class="fas fa-lock"></i>
                        Pay Securely
                    </button>
                </div>
            </div>
        `;
        
        paymentContent.innerHTML = paymentForm;
        
        // Show payment form with animation
        const form = paymentContent.querySelector('.demo-payment-form');
        form.style.opacity = '0';
        form.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            form.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            form.style.opacity = '1';
            form.style.transform = 'translateY(0)';
        }, 100);
    }

    function showPaymentSuccess() {
        const paymentContent = document.getElementById('payment-content');
        const successScreen = `
            <div class="demo-success-screen">
                <div class="demo-success-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3>Payment Successful!</h3>
            </div>
        `;
        
        paymentContent.innerHTML = successScreen;
        
        // Animate success
        const success = paymentContent.querySelector('.demo-success-screen');
        success.style.opacity = '0';
        success.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            success.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            success.style.opacity = '1';
            success.style.transform = 'scale(1)';
        }, 100);
        
        // Animate success icon
        const icon = success.querySelector('.demo-success-icon');
        setTimeout(() => {
            icon.style.transform = 'scale(1.2)';
            setTimeout(() => {
                icon.style.transform = 'scale(1)';
            }, 200);
        }, 300);
    }

    function resetAnimation() {
        setTimeout(() => {
            showPaymentForm();
            
            // Show success after payment form
            setTimeout(() => {
                showPaymentSuccess();
            }, 2000);
            
            // Reset after showing success
            setTimeout(() => {
                resetAnimation();
            }, 3000);
        }, 2000);
    }

    // Start animation sequence
    showPaymentForm();
    
    // Show success after payment form
    setTimeout(() => {
        showPaymentSuccess();
    }, 2000);
    
    // Reset after showing success
    setTimeout(() => {
        resetAnimation();
    }, 3000);
}

// Revenue Demo Animation
function initRevenueDemo() {
    const revenueDemo = document.getElementById('revenue-demo');
    if (!revenueDemo) return;

    const revenueHTML = `
        <div class="demo-revenue">
            <div class="demo-revenue-header">
                <h3>Bank Account</h3>
                <div class="demo-revenue-balance" id="revenue-balance">£12,450.00</div>
            </div>
            <div class="demo-revenue-transactions" id="revenue-transactions">
                <!-- Transactions will be added here -->
            </div>
        </div>
    `;

    revenueDemo.innerHTML = revenueHTML;

    const transactions = [
        { amount: '+£85.00', description: 'Sarah Johnson - Gel Nails', time: '2 min ago' },
        { amount: '+£120.00', description: 'Emma Davis - Full Service', time: '15 min ago' },
        { amount: '+£65.00', description: 'Lisa Chen - Eyebrow Threading', time: '1 hour ago' },
        { amount: '+£95.00', description: 'Jessica Miller - Eyelash Extensions', time: '2 hours ago' }
    ];

    let transactionIndex = 0;
    
    function addTransaction() {
        if (transactionIndex >= transactions.length) {
            transactionIndex = 0;
            document.getElementById('revenue-transactions').innerHTML = '';
        }

        const transaction = transactions[transactionIndex];
        const transactionElement = document.createElement('div');
        transactionElement.className = 'demo-transaction';
        transactionElement.style.opacity = '0';
        transactionElement.style.transform = 'translateY(20px)';
        
        transactionElement.innerHTML = `
            <div class="demo-transaction-info">
                <div class="demo-transaction-description">${transaction.description}</div>
                <div class="demo-transaction-time">${transaction.time}</div>
            </div>
            <div class="demo-transaction-amount">${transaction.amount}</div>
        `;
        
        document.getElementById('revenue-transactions').appendChild(transactionElement);
        
        // Animate in
        setTimeout(() => {
            transactionElement.style.transition = 'all 0.5s ease';
            transactionElement.style.opacity = '1';
            transactionElement.style.transform = 'translateY(0)';
        }, 100);
        
        transactionIndex++;
        
        setTimeout(addTransaction, 2000);
    }

    setTimeout(addTransaction, 1000);
}

// Merge Demo Animation
function initMergeDemo() {
    const mergeDemo = document.getElementById('merge-demo');
    if (!mergeDemo) return;
    
    let isAnimating = false;

    function showUploadScreen() {
        mergeDemo.innerHTML = `
            <div class="demo-upload-screen">
                <div class="demo-upload-area">
                    <div class="demo-upload-icon">
                        <i class="fas fa-file-csv"></i>
                    </div>
                    <div class="demo-upload-text">Upload CSV File</div>
                    <div class="demo-upload-subtext">Drag & drop or click to browse</div>
                </div>
            </div>
        `;
    }

    function showLoadingScreen() {
        mergeDemo.innerHTML = `
            <div class="demo-loading-screen">
                <div class="demo-loading-text">Processing Your Data...</div>
                <div class="demo-progress-bar">
                    <div class="demo-progress-fill"></div>
                </div>
                <div class="demo-progress-text">Mapping data fields...</div>
            </div>
        `;

        // Update progress text during loading
        const progressTexts = [
            'Mapping data fields...',
            'Validating information...',
            'Detecting duplicates...',
            'Formatting data...',
            'Finalizing transfer...'
        ];

        let textIndex = 0;
        const progressTextElement = mergeDemo.querySelector('.demo-progress-text');
        
        const textInterval = setInterval(() => {
            if (textIndex < progressTexts.length && progressTextElement) {
                progressTextElement.textContent = progressTexts[textIndex];
                textIndex++;
            } else {
                clearInterval(textInterval);
            }
        }, 600);
    }

    function showAnalyticsScreen() {
        mergeDemo.innerHTML = `
            <div class="demo-analytics-screen">
                <div class="demo-analytics-title">Transfer Complete!</div>
                <div class="demo-analytics-grid">
                    <div class="demo-analytics-item">
                        <div class="demo-analytics-number">12</div>
                        <div class="demo-analytics-label">Staff</div>
                    </div>
                    <div class="demo-analytics-item">
                        <div class="demo-analytics-number">847</div>
                        <div class="demo-analytics-label">Customers</div>
                    </div>
                    <div class="demo-analytics-item">
                        <div class="demo-analytics-number">2,341</div>
                        <div class="demo-analytics-label">Bookings</div>
                    </div>
                    <div class="demo-analytics-item">
                        <div class="demo-analytics-number">£45,230</div>
                        <div class="demo-analytics-label">Revenue</div>
                    </div>
                </div>
            </div>
        `;
    }

    function startAnimation() {
        if (isAnimating) return;
        isAnimating = true;
        
        // Step 1: Show upload screen
        showUploadScreen();
        
        // Step 2: Show loading screen after 3 seconds
        setTimeout(() => {
            showLoadingScreen();
        }, 3000);
        
        // Step 3: Show analytics screen after 6 seconds
        setTimeout(() => {
            showAnalyticsScreen();
        }, 6000);
        
        // Reset after 11 seconds
        setTimeout(() => {
            isAnimating = false;
            startAnimation();
        }, 11000);
    }

    // Start initial animation
    startAnimation();
}

// Mobile Demo Animation
function initMobileDemo() {
    const mobileDemo = document.getElementById('mobile-demo');
    if (!mobileDemo) return;
    
    let isAnimating = false;

    const mobileHTML = `
        <div class="demo-phone">
            <div class="demo-phone-frame">
                <div class="demo-phone-screen" id="mobile-screen">
                    <!-- Mobile app animation will appear here -->
                </div>
            </div>
        </div>
    `;

    mobileDemo.innerHTML = mobileHTML;

    function showAppLogo() {
        const mobileScreen = document.getElementById('mobile-screen');
        mobileScreen.innerHTML = `
            <div class="demo-app-logo">SS</div>
        `;
    }

    function showClickEffect() {
        const mobileScreen = document.getElementById('mobile-screen');
        mobileScreen.innerHTML += `
            <div class="demo-click-effect"></div>
        `;
    }

    function showLoginScreen() {
        const mobileScreen = document.getElementById('mobile-screen');
        mobileScreen.innerHTML = `
            <div class="demo-login-screen">
                <div class="demo-login-logo">salon</div>
                <div class="demo-role-cards">
                    <div class="demo-role-card">
                        <div class="demo-role-icon">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="demo-role-title">I'm a Customer</div>
                    </div>
                    <div class="demo-role-card">
                        <div class="demo-role-icon">
                            <i class="fas fa-store"></i>
                        </div>
                        <div class="demo-role-title">I'm a Salon Owner</div>
                    </div>
                </div>
            </div>
        `;
    }

    function startAnimation() {
        if (isAnimating) return;
        isAnimating = true;
        
        // Step 1: Show app logo
        showAppLogo();
        
        // Step 2: Show click effect after 2 seconds
        setTimeout(() => {
            showClickEffect();
        }, 2000);
        
        // Step 3: Show login screen after 3 seconds
        setTimeout(() => {
            showLoginScreen();
        }, 3000);
        
        // Reset after 8 seconds
        setTimeout(() => {
            isAnimating = false;
            startAnimation();
        }, 8000);
    }

    // Start initial animation
    startAnimation();
}

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add focus management for accessibility
document.querySelectorAll('.nav-link, .cta-primary, .cta-secondary, .pricing-cta').forEach(element => {
    element.addEventListener('focus', () => {
        element.style.outline = '2px solid var(--primary-color)';
        element.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', () => {
        element.style.outline = 'none';
    });
});

// Static pricing card interactions (no floating animations)
const pricingCards = document.querySelectorAll('.pricing-card');
pricingCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Add subtle glow effect
        card.style.boxShadow = '0 25px 50px -12px rgba(99, 102, 241, 0.25)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '';
    });
    
    // Add click effect
    card.addEventListener('click', () => {
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = '';
        }, 150);
    });
});

// Feature details reveal animation
const featureDetails = document.querySelectorAll('.feature-details');
featureDetails.forEach(detail => {
    const listItems = detail.querySelectorAll('li');
    listItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 500 + (index * 100));
    });
});

// Pricing badge animations
const pricingBadges = document.querySelectorAll('.pricing-badge');
pricingBadges.forEach(badge => {
    badge.addEventListener('mouseenter', () => {
        badge.style.transform = 'translateX(-50%) scale(1.1)';
    });
    
    badge.addEventListener('mouseleave', () => {
        badge.style.transform = 'translateX(-50%) scale(1)';
    });
});

// CTA section is now white with floating shapes - no background animation needed

// Feature details are now always visible - no hover interactions needed

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

// Add ripple effect to all buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', createRipple);
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Email Validation Modal System
class EmailValidationModal {
    constructor() {
        this.modal = document.getElementById('email-modal');
        this.modalContainer = this.modal.querySelector('.modal-container');
        this.emailInput = document.getElementById('email-input');
        this.emailForm = document.getElementById('trial-email-form');
        this.continueBtn = document.getElementById('continue-btn');
        this.loadingSpinner = document.getElementById('loading-spinner');
        this.btnText = this.continueBtn.querySelector('.btn-text');
        
        // API Configuration - Update this URL to match your backend
        this.API_BASE_URL = 'https://salon-suite.onrender.com'; // Change this to your actual backend URL
        
        // State management
        this.currentStripeUrl = null;
        this.isLoading = false;
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.setupAccessibility();
    }
    
    bindEvents() {
        // Form submission
        this.emailForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleEmailSubmit();
        });
        
        // Modal close events
        this.modal.querySelector('.modal-close').addEventListener('click', () => {
            this.closeModal();
        });
        
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });
        
        // Cancel button
        document.getElementById('cancel-btn').addEventListener('click', () => {
            this.closeModal();
        });
        
        // Ineligible state buttons
        document.getElementById('try-different-email').addEventListener('click', () => {
            this.showEmailForm();
        });
        
        document.getElementById('contact-support').addEventListener('click', () => {
            this.contactSupport();
        });
        
        document.getElementById('upgrade-plan').addEventListener('click', () => {
            this.upgradePlan();
        });
        
        // Error state buttons
        document.getElementById('error-cancel').addEventListener('click', () => {
            this.closeModal();
        });
        
        document.getElementById('continue-anyway').addEventListener('click', () => {
            this.redirectToStripe();
        });
        
        // Keyboard events
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.closeModal();
            }
        });
        
        // Email input validation
        this.emailInput.addEventListener('input', () => {
            this.clearEmailError();
        });
    }
    
    setupAccessibility() {
        // Set initial ARIA attributes
        this.modal.setAttribute('aria-hidden', 'true');
        this.modalContainer.setAttribute('tabindex', '-1');
    }
    
    openModal(stripeUrl) {
        this.currentStripeUrl = stripeUrl;
        this.showEmailForm();
        this.modal.classList.add('active');
        this.modal.setAttribute('aria-hidden', 'false');
        
        // Focus management
        setTimeout(() => {
            this.emailInput.focus();
        }, 300);
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }
    
    closeModal() {
        this.modal.classList.remove('active');
        this.modal.setAttribute('aria-hidden', 'true');
        
        // Restore body scroll
        document.body.style.overflow = '';
        
        // Reset form
        this.emailForm.reset();
        this.clearEmailError();
        
        // Reset to initial state
        setTimeout(() => {
            this.showEmailForm();
        }, 300);
    }
    
    showEmailForm() {
        this.hideAllStates();
        document.getElementById('email-form-state').style.display = 'block';
        this.modal.querySelector('.modal-title').textContent = 'Start Your Free Trial';
        this.modal.querySelector('.modal-subtitle').textContent = 'Enter your email to continue';
    }
    
    showLoadingState() {
        this.hideAllStates();
        document.getElementById('loading-state').style.display = 'block';
        this.modal.querySelector('.modal-title').textContent = 'Checking Eligibility...';
        this.modal.querySelector('.modal-subtitle').textContent = 'Please wait while we verify your trial eligibility.';
    }
    
    showIneligibleState(response) {
        this.hideAllStates();
        document.getElementById('ineligible-state').style.display = 'block';
        this.modal.querySelector('.modal-title').textContent = 'Trial Already Used';
        this.modal.querySelector('.modal-subtitle').textContent = 'This email has already used our free trial.';
        
        // Update message if provided by API
        const messageElement = document.getElementById('ineligible-message');
        if (response.message) {
            messageElement.textContent = response.message;
        }
        
        // Update suggestions if provided by API
        const suggestionsList = document.getElementById('suggestions-list');
        if (response.suggestions && Array.isArray(response.suggestions)) {
            suggestionsList.innerHTML = response.suggestions.map(suggestion => 
                `<li><i class="fas fa-check"></i> ${suggestion}</li>`
            ).join('');
        } else {
            // Default suggestions
            suggestionsList.innerHTML = `
                <li><i class="fas fa-check"></i> Try a different email address</li>
                <li><i class="fas fa-check"></i> Contact support for assistance</li>
                <li><i class="fas fa-check"></i> Upgrade to a paid plan</li>
            `;
        }
        
        // Show/hide contact support button based on API response
        const contactSupportBtn = document.getElementById('contact-support');
        if (response.can_contact_support === false) {
            contactSupportBtn.style.display = 'none';
        } else {
            contactSupportBtn.style.display = 'flex';
        }
    }
    
    showErrorState() {
        this.hideAllStates();
        document.getElementById('error-state').style.display = 'block';
        this.modal.querySelector('.modal-title').textContent = 'Unable to Verify';
        this.modal.querySelector('.modal-subtitle').textContent = 'We couldn\'t verify your trial eligibility at this time.';
    }
    
    showSuccessState() {
        this.hideAllStates();
        document.getElementById('success-state').style.display = 'block';
        this.modal.querySelector('.modal-title').textContent = 'Eligible for Trial!';
        this.modal.querySelector('.modal-subtitle').textContent = 'Great! You\'re eligible for our free trial.';
        
        // Redirect after a short delay
        setTimeout(() => {
            this.redirectToStripe();
        }, 2000);
    }
    
    hideAllStates() {
        const states = ['email-form-state', 'loading-state', 'ineligible-state', 'error-state', 'success-state'];
        states.forEach(state => {
            document.getElementById(state).style.display = 'none';
        });
    }
    
    async handleEmailSubmit() {
        const email = this.emailInput.value.trim();
        
        if (!this.validateEmail(email)) {
            this.showEmailError('Please enter a valid email address.');
            return;
        }
        
        this.setLoadingState(true);
        this.showLoadingState();
        
        try {
            const response = await this.checkTrialEligibility(email);
            
            if (response.eligible === true) {
                this.showSuccessState();
            } else {
                this.showIneligibleState(response);
            }
        } catch (error) {
            console.error('Trial eligibility check failed:', error);
            this.showErrorState();
        } finally {
            this.setLoadingState(false);
        }
    }
    
    async checkTrialEligibility(email) {
        try {
            const response = await fetch(`${this.API_BASE_URL}/api/check-trial-eligibility?email=${encodeURIComponent(email)}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('API call failed:', error);
            // Return a fallback response that allows continuation
            return { 
                eligible: true, 
                error: 'Unable to check eligibility' 
            };
        }
    }
    
    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    showEmailError(message) {
        const errorElement = document.getElementById('email-error');
        errorElement.textContent = message;
        errorElement.classList.add('show');
        this.emailInput.classList.add('error');
    }
    
    clearEmailError() {
        const errorElement = document.getElementById('email-error');
        errorElement.classList.remove('show');
        this.emailInput.classList.remove('error');
    }
    
    setLoadingState(loading) {
        this.isLoading = loading;
        this.continueBtn.disabled = loading;
        
        if (loading) {
            this.loadingSpinner.classList.add('show');
            this.btnText.style.opacity = '0.7';
        } else {
            this.loadingSpinner.classList.remove('show');
            this.btnText.style.opacity = '1';
        }
    }
    
    redirectToStripe() {
        if (this.currentStripeUrl) {
            window.location.href = this.currentStripeUrl;
        } else {
            // Fallback to pricing section
            document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
            this.closeModal();
        }
    }
    
    contactSupport() {
        // Open support contact (you can customize this)
        window.open('mailto:support@salonsuite.app?subject=Trial Eligibility Support', '_blank');
        this.closeModal();
    }
    
    upgradePlan() {
        // Redirect to login page for paid plan upgrade
        window.location.href = 'https://app.salonsuite.app/login';
    }
}

// Initialize the modal system
let emailModal = null;

document.addEventListener('DOMContentLoaded', () => {
    emailModal = new EmailValidationModal();
    
       // Override only plan-specific "Start Free Trial" buttons (not navigation buttons)
       const trialButtons = document.querySelectorAll('a[href*="stripe.com"]');
       trialButtons.forEach(button => {
           // Only override buttons that contain "Start Free Trial" text AND are Stripe links
           if (button.textContent.toLowerCase().includes('start free trial') || 
               button.textContent.toLowerCase().includes('start your free trial')) {
               
               button.addEventListener('click', (e) => {
                   e.preventDefault();
                   
                   // Get the Stripe URL from the href attribute
                   const stripeUrl = button.getAttribute('href');
                   
                   // Open the email validation modal
                   if (emailModal) {
                       emailModal.openModal(stripeUrl);
                   }
               });
           }
       });
});