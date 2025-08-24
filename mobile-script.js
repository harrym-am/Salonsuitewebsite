// Mobile App Launch Animation
class MobileAppAnimation {
    constructor() {
        this.phoneScreen = document.getElementById('phone-screen');
        this.isAnimating = false;
        this.init();
    }

    init() {
        if (this.phoneScreen) {
            this.startAnimation();
        }
    }

    startAnimation() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        
        // Clear the screen
        this.phoneScreen.innerHTML = '';
        
        // Step 1: Show app logo
        this.showAppLogo();
    }

    showAppLogo() {
        const logo = document.createElement('div');
        logo.className = 'app-logo';
        logo.innerHTML = 'SS';
        this.phoneScreen.appendChild(logo);

        // Wait for logo animation, then show click effect
        setTimeout(() => {
            this.showClickEffect();
        }, 2000);
    }

    showClickEffect() {
        const clickEffect = document.createElement('div');
        clickEffect.className = 'click-effect';
        this.phoneScreen.appendChild(clickEffect);

        // Wait for click effect, then show login screen
        setTimeout(() => {
            this.showLoginScreen();
        }, 1000);
    }

    showLoginScreen() {
        // Clear screen
        this.phoneScreen.innerHTML = '';

        const loginScreen = document.createElement('div');
        loginScreen.className = 'login-screen';
        
        loginScreen.innerHTML = `
            <div class="login-logo">salon</div>
            <div class="role-cards">
                <div class="role-card">
                    <div class="role-icon">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="role-title">I'm a Customer</div>
                </div>
                <div class="role-card">
                    <div class="role-icon">
                        <i class="fas fa-store"></i>
                    </div>
                    <div class="role-title">I'm a Salon Owner</div>
                </div>
            </div>
        `;

        this.phoneScreen.appendChild(loginScreen);

        // Wait a bit, then restart animation
        setTimeout(() => {
            this.isAnimating = false;
            this.startAnimation();
        }, 5000);
    }
}

// Initialize animation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MobileAppAnimation();
});

// Fallback for if DOMContentLoaded has already fired
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new MobileAppAnimation();
    });
} else {
    new MobileAppAnimation();
}
