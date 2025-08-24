// Revenue Tracking Page JavaScript

// Bank Account Animation
class BankAccountAnimation {
    constructor() {
        this.accountContent = document.getElementById('account-content');
        this.currentBalance = 0;
        this.transactions = [
            { amount: 85, service: 'Professional Makeup', time: '09:15' },
            { amount: 45, service: 'Nail Art & Polish', time: '10:30' },
            { amount: 120, service: 'Haircut & Style', time: '11:45' },
            { amount: 65, service: 'Facial Treatment', time: '13:20' },
            { amount: 95, service: 'Color & Highlights', time: '14:30' },
            { amount: 55, service: 'Manicure', time: '15:45' }
        ];
        
        this.init();
    }
    
    init() {
        if (!this.accountContent) return;
        
        // Start the animation after page load
        setTimeout(() => {
            this.startBankAnimation();
        }, 1000);
    }
    
    startBankAnimation() {
        this.showAccountBalance();
    }
    
    showAccountBalance() {
        const balanceScreen = `
            <div class="balance-screen">
                <div class="balance-header">
                    <h3>Current Balance</h3>
                    <div class="balance-amount">
                        <span class="currency">£</span>
                        <span class="amount">0.00</span>
                    </div>
                </div>
                <div class="balance-chart">
                    <div class="chart-line"></div>
                </div>
                <div class="balance-status">
                    <i class="fas fa-circle"></i>
                    <span>Live tracking active</span>
                </div>
            </div>
        `;
        
        this.accountContent.innerHTML = balanceScreen;
        
        // Show balance with animation
        const balance = this.accountContent.querySelector('.balance-screen');
        balance.style.opacity = '0';
        balance.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            balance.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            balance.style.opacity = '1';
            balance.style.transform = 'translateY(0)';
        }, 100);
        
        // Start showing transactions
        setTimeout(() => {
            this.showTransactions();
        }, 2000);
    }
    
    showTransactions() {
        const transactionScreen = `
            <div class="transaction-screen">
                <div class="transaction-header">
                    <h3>Recent Transactions</h3>
                    <div class="total-balance">
                        <span>Total: £</span>
                        <span class="total-amount">0</span>
                    </div>
                </div>
                <div class="transactions-list" id="transactions-list">
                    <!-- Transactions will be added here -->
                </div>
            </div>
        `;
        
        this.accountContent.innerHTML = transactionScreen;
        
        // Animate transactions coming in
        this.animateTransactions();
    }
    
    animateTransactions() {
        const transactionsList = document.getElementById('transactions-list');
        const totalAmountElement = document.querySelector('.total-amount');
        
        let currentIndex = 0;
        
        const addTransaction = () => {
            if (currentIndex >= this.transactions.length) {
                // Show final balance
                setTimeout(() => {
                    this.showFinalBalance();
                }, 2000);
                return;
            }
            
            const transaction = this.transactions[currentIndex];
            this.currentBalance += transaction.amount;
            
            const transactionElement = `
                <div class="transaction-item" style="opacity: 0; transform: translateY(-20px);">
                    <div class="transaction-info">
                        <div class="transaction-service">${transaction.service}</div>
                        <div class="transaction-time">${transaction.time}</div>
                    </div>
                    <div class="transaction-amount">
                        <span class="currency">£</span>
                        <span class="amount">${transaction.amount.toFixed(2)}</span>
                    </div>
                    <div class="transaction-status">
                        <i class="fas fa-check-circle"></i>
                    </div>
                </div>
            `;
            
            // Insert at the beginning to stack on top
            transactionsList.insertAdjacentHTML('afterbegin', transactionElement);
            
            // Animate the new transaction sliding down from top
            const newTransaction = transactionsList.firstElementChild;
            setTimeout(() => {
                newTransaction.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                newTransaction.style.opacity = '1';
                newTransaction.style.transform = 'translateY(0)';
            }, 100);
            
            // Update total balance
            if (totalAmountElement) {
                totalAmountElement.textContent = this.currentBalance.toFixed(2);
            }
            
            currentIndex++;
            
            // Add next transaction after delay
            setTimeout(addTransaction, 1500);
        };
        
        // Start adding transactions
        setTimeout(addTransaction, 500);
    }
    
    showFinalBalance() {
        const finalScreen = `
            <div class="final-balance-screen">
                <div class="final-balance-header">
                    <h3>Revenue Summary</h3>
                    <div class="final-amount">
                        <span class="currency">£</span>
                        <span class="amount">${this.currentBalance.toFixed(2)}</span>
                    </div>
                </div>
                <div class="summary-stats">
                    <div class="stat-item">
                        <span class="stat-label">Transactions</span>
                        <span class="stat-value">${this.transactions.length}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Average</span>
                        <span class="stat-value">£${(this.currentBalance / this.transactions.length).toFixed(2)}</span>
                    </div>
                </div>
                <div class="success-indicator">
                    <i class="fas fa-chart-line"></i>
                    <span>Revenue tracking complete</span>
                </div>
            </div>
        `;
        
        this.accountContent.innerHTML = finalScreen;
        
        // Animate final screen
        const final = this.accountContent.querySelector('.final-balance-screen');
        final.style.opacity = '0';
        final.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            final.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            final.style.opacity = '1';
            final.style.transform = 'scale(1)';
        }, 100);
        
        // Reset animation after showing final balance
        setTimeout(() => {
            this.resetAnimation();
        }, 4000);
    }
    
    resetAnimation() {
        this.accountContent.innerHTML = '';
        this.currentBalance = 0;
        setTimeout(() => {
            this.startBankAnimation();
        }, 2000);
    }
}

// Initialize bank account animation
document.addEventListener('DOMContentLoaded', () => {
    new BankAccountAnimation();
});

// Add CSS for bank account animations
const bankStyles = document.createElement('style');
bankStyles.textContent = `
    .balance-screen {
        text-align: center;
        color: var(--text-primary);
        max-width: 400px;
        margin: 0 auto;
    }
    
    .balance-header h3 {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: var(--text-secondary);
    }
    
    .balance-amount {
        margin-bottom: 2rem;
    }
    
    .balance-amount .currency {
        font-size: 2rem;
        font-weight: 600;
        color: var(--text-secondary);
    }
    
    .balance-amount .amount {
        font-size: 3.5rem;
        font-weight: 900;
        color: var(--primary-color);
        margin-left: 0.25rem;
    }
    
    .balance-chart {
        margin-bottom: 2rem;
    }
    
    .chart-line {
        width: 100%;
        height: 4px;
        background: linear-gradient(90deg, var(--primary-color) 0%, var(--secondary-color) 100%);
        border-radius: 2px;
        animation: pulse 2s ease-in-out infinite;
    }
    
    @keyframes pulse {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 1; }
    }
    
    .balance-status {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        color: var(--text-secondary);
        font-size: 0.9rem;
    }
    
    .balance-status i {
        color: #10b981;
        font-size: 0.75rem;
        animation: blink 1.5s ease-in-out infinite;
    }
    
    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.3; }
    }
    
    .transaction-screen {
        max-width: 400px;
        margin: 0 auto;
        color: var(--text-primary);
    }
    
    .transaction-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--border-color);
    }
    
    .transaction-header h3 {
        font-size: 1.25rem;
        font-weight: 600;
        margin: 0;
    }
    
    .total-balance {
        font-size: 1rem;
        font-weight: 600;
        color: var(--primary-color);
    }
    
    .total-amount {
        font-weight: 700;
    }
    
    .transactions-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        position: relative;
        max-height: 300px;
        overflow: hidden;
    }
    
    .transaction-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        border: 1px solid var(--border-color);
        position: relative;
        z-index: 1;
        backdrop-filter: blur(10px);
        background: rgba(255, 255, 255, 0.95);
    }
    
    .transaction-item:nth-child(1) {
        z-index: 6;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
    
    .transaction-item:nth-child(2) {
        z-index: 5;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
        transform: scale(0.98);
    }
    
    .transaction-item:nth-child(3) {
        z-index: 4;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        transform: scale(0.96);
    }
    
    .transaction-item:nth-child(4) {
        z-index: 3;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
        transform: scale(0.94);
    }
    
    .transaction-item:nth-child(5) {
        z-index: 2;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.06);
        transform: scale(0.92);
    }
    
    .transaction-info {
        flex: 1;
    }
    
    .transaction-service {
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 0.25rem;
    }
    
    .transaction-time {
        font-size: 0.8rem;
        color: var(--text-secondary);
    }
    
    .transaction-amount {
        font-weight: 700;
        color: var(--primary-color);
        margin-right: 1rem;
    }
    
    .transaction-amount .currency {
        font-size: 0.9rem;
    }
    
    .transaction-amount .amount {
        font-size: 1.1rem;
    }
    
    .transaction-status i {
        color: #10b981;
        font-size: 1rem;
    }
    
    .final-balance-screen {
        text-align: center;
        color: var(--text-primary);
        max-width: 400px;
        margin: 0 auto;
    }
    
    .final-balance-header h3 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: var(--text-primary);
    }
    
    .final-amount {
        margin-bottom: 2rem;
    }
    
    .final-amount .currency {
        font-size: 2.5rem;
        font-weight: 600;
        color: var(--text-secondary);
    }
    
    .final-amount .amount {
        font-size: 4rem;
        font-weight: 900;
        color: var(--primary-color);
        margin-left: 0.25rem;
    }
    
    .summary-stats {
        display: flex;
        justify-content: space-around;
        margin-bottom: 2rem;
        padding: 1.5rem;
        background: white;
        border-radius: 12px;
        box-shadow: var(--shadow-sm);
    }
    
    .stat-item {
        text-align: center;
    }
    
    .stat-label {
        display: block;
        font-size: 0.8rem;
        color: var(--text-secondary);
        margin-bottom: 0.5rem;
    }
    
    .stat-value {
        display: block;
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--primary-color);
    }
    
    .success-indicator {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        color: var(--text-secondary);
        font-size: 0.9rem;
    }
    
    .success-indicator i {
        color: #10b981;
        font-size: 1rem;
    }
`;

document.head.appendChild(bankStyles);

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

// Add loading animation for revenue page
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
