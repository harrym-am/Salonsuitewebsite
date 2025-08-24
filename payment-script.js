// Payment System Page JavaScript

// Payment Confirmation Animation
class PaymentAnimation {
    constructor() {
        this.paymentContent = document.getElementById('payment-content');
        this.currentStep = 0;
        
        this.init();
    }
    
    init() {
        if (!this.paymentContent) return;
        
        // Start the animation after page load
        setTimeout(() => {
            this.startPaymentAnimation();
        }, 1000);
    }
    
    startPaymentAnimation() {
        this.showPaymentForm();
    }
    
    showPaymentForm() {
        const paymentForm = `
            <div class="payment-form">
                <div class="payment-amount">
                    <span class="currency">£</span>
                    <span class="amount">85.00</span>
                </div>
                <div class="payment-details">
                    <div class="service-item">
                        <span>Nail Art & Polish</span>
                        <span>£45.00</span>
                    </div>
                    <div class="service-item">
                        <span>Professional Makeup</span>
                        <span>£40.00</span>
                    </div>
                </div>
                <div class="payment-method">
                    <div class="card-preview">
                        <i class="fas fa-credit-card"></i>
                        <span>•••• •••• •••• 4242</span>
                    </div>
                </div>
                <div class="payment-button">
                    <button class="pay-btn">
                        <i class="fas fa-lock"></i>
                        Pay Securely
                    </button>
                </div>
            </div>
        `;
        
        this.paymentContent.innerHTML = paymentForm;
        
        // Show payment form with animation
        const form = this.paymentContent.querySelector('.payment-form');
        form.style.opacity = '0';
        form.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            form.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            form.style.opacity = '1';
            form.style.transform = 'translateY(0)';
        }, 100);
        
        // Show success after payment form
        setTimeout(() => {
            this.showPaymentSuccess();
        }, 2000);
    }
    
    processPayment() {
        const processingScreen = `
            <div class="processing-screen">
                <div class="processing-spinner">
                    <div class="spinner"></div>
                </div>
                <h3>Processing Payment...</h3>
                <p>Please wait while we securely process your payment</p>
            </div>
        `;
        
        this.paymentContent.innerHTML = processingScreen;
        
        // Animate processing
        const processing = this.paymentContent.querySelector('.processing-screen');
        processing.style.opacity = '0';
        
        setTimeout(() => {
            processing.style.transition = 'opacity 0.5s ease';
            processing.style.opacity = '1';
        }, 100);
        
        // Show success after processing
        setTimeout(() => {
            this.showPaymentSuccess();
        }, 3000);
    }
    
    showPaymentSuccess() {
        const successScreen = `
            <div class="success-screen">
                <div class="success-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3>Payment Successful!</h3>
            </div>
        `;
        
        this.paymentContent.innerHTML = successScreen;
        
        // Animate success
        const success = this.paymentContent.querySelector('.success-screen');
        success.style.opacity = '0';
        success.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            success.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            success.style.opacity = '1';
            success.style.transform = 'scale(1)';
        }, 100);
        
        // Animate success icon
        const icon = success.querySelector('.success-icon');
        setTimeout(() => {
            icon.style.transform = 'scale(1.2)';
            setTimeout(() => {
                icon.style.transform = 'scale(1)';
            }, 200);
        }, 300);
        
        // Reset animation after showing success
        setTimeout(() => {
            this.resetAnimation();
        }, 3000);
    }
    
    resetAnimation() {
        this.paymentContent.innerHTML = '';
        setTimeout(() => {
            this.startPaymentAnimation();
        }, 2000);
    }
}

// Initialize payment animation
document.addEventListener('DOMContentLoaded', () => {
    new PaymentAnimation();
});

// Add CSS for payment animations
const paymentStyles = document.createElement('style');
paymentStyles.textContent = `
    .payment-form {
        background: white;
        border-radius: 16px;
        padding: 2rem;
        box-shadow: var(--shadow-lg);
        max-width: 400px;
        margin: 0 auto;
    }
    
    .payment-amount {
        text-align: center;
        margin-bottom: 2rem;
        padding: 1.5rem;
        background: var(--bg-secondary);
        border-radius: 12px;
    }
    
    .payment-amount .currency {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--text-secondary);
    }
    
    .payment-amount .amount {
        font-size: 3rem;
        font-weight: 900;
        color: var(--primary-color);
        margin-left: 0.25rem;
    }
    
    .payment-details {
        margin-bottom: 2rem;
    }
    
    .service-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem 0;
        border-bottom: 1px solid var(--border-color);
    }
    
    .service-item:last-child {
        border-bottom: none;
    }
    
    .service-item span:first-child {
        color: var(--text-primary);
        font-weight: 500;
    }
    
    .service-item span:last-child {
        color: var(--text-secondary);
        font-weight: 600;
    }
    
    .payment-method {
        margin-bottom: 2rem;
    }
    
    .card-preview {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem;
        background: var(--bg-secondary);
        border-radius: 8px;
        border: 2px solid var(--border-color);
    }
    
    .card-preview i {
        color: var(--primary-color);
        font-size: 1.25rem;
    }
    
    .card-preview span {
        color: var(--text-primary);
        font-weight: 500;
        font-family: 'Courier New', monospace;
    }
    
    .payment-button {
        text-align: center;
    }
    
    .pay-btn {
        background: var(--gradient-glossy);
        color: white;
        border: none;
        padding: 1rem 2rem;
        border-radius: 50px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin: 0 auto;
        transition: all 0.3s ease;
        box-shadow: var(--shadow-md);
    }
    
    .pay-btn:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-lg);
    }
    
    .processing-screen {
        text-align: center;
        color: var(--text-primary);
    }
    
    .processing-spinner {
        margin-bottom: 1.5rem;
    }
    
    .spinner {
        width: 60px;
        height: 60px;
        border: 4px solid var(--border-color);
        border-top: 4px solid var(--primary-color);
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .processing-screen h3 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }
    
    .processing-screen p {
        color: var(--text-secondary);
        font-size: 0.9rem;
    }
    
    .success-screen {
        text-align: center;
        color: white;
        max-width: 350px;
        margin: 0 auto;
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        border-radius: 24px;
        padding: 2.5rem 2rem;
        box-shadow: 0 25px 50px rgba(16, 185, 129, 0.25);
        position: relative;
        overflow: hidden;
    }
    
    .success-screen::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
        animation: shimmer 2s ease-in-out infinite;
    }
    
    @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
    }
    
    .success-icon {
        margin-bottom: 1.5rem;
        transition: all 0.4s ease;
        position: relative;
        z-index: 1;
    }
    
    .success-icon i {
        font-size: 4rem;
        color: white;
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
    }
    
    .success-screen h3 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 0;
        color: white;
        position: relative;
        z-index: 1;
        letter-spacing: -0.5px;
    }
    
    .success-details {
        margin-bottom: 2rem;
    }
    
    .amount-confirmed {
        margin-bottom: 1rem;
    }
    
    .amount-confirmed .currency {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--text-secondary);
    }
    
    .amount-confirmed .amount {
        font-size: 2.5rem;
        font-weight: 900;
        color: var(--primary-color);
        margin-left: 0.25rem;
    }
    
    .transaction-id {
        font-size: 0.8rem;
        color: var(--text-secondary);
        margin-bottom: 0.5rem;
    }
    
    .confirmation-message {
        font-size: 0.9rem;
        color: var(--text-secondary);
        line-height: 1.4;
    }
    
    .receipt-preview {
        background: white;
        border-radius: 12px;
        padding: 1.5rem;
        box-shadow: var(--shadow-md);
        text-align: left;
    }
    
    .receipt-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--border-color);
    }
    
    .receipt-header h4 {
        font-size: 1rem;
        font-weight: 700;
        margin: 0;
    }
    
    .receipt-date {
        font-size: 0.8rem;
        color: var(--text-secondary);
    }
    
    .receipt-items {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .receipt-item {
        display: flex;
        justify-content: space-between;
        font-size: 0.9rem;
    }
    
    .receipt-item span:first-child {
        color: var(--text-primary);
    }
    
    .receipt-item span:last-child {
        color: var(--text-secondary);
        font-weight: 600;
    }
    
    .receipt-total {
        display: flex;
        justify-content: space-between;
        font-weight: 700;
        font-size: 1rem;
        margin-top: 0.5rem;
        padding-top: 0.5rem;
        border-top: 2px solid var(--border-color);
    }
    
    .receipt-total span:first-child {
        color: var(--text-primary);
    }
    
    .receipt-total span:last-child {
        color: var(--primary-color);
    }
`;

document.head.appendChild(paymentStyles);

// Add smooth scrolling for navigation
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

// Add loading animation for payment page
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
