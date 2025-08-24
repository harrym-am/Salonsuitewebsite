// Merge System Animation
class MergeAnimation {
    constructor() {
        this.demoScreen = document.getElementById('demo-screen');
        this.isAnimating = false;
        this.init();
    }

    init() {
        if (this.demoScreen) {
            this.startAnimation();
        }
    }

    startAnimation() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        
        // Clear the screen
        this.demoScreen.innerHTML = '';
        
        // Step 1: Show upload screen
        this.showUploadScreen();
    }

    showUploadScreen() {
        const uploadScreen = document.createElement('div');
        uploadScreen.className = 'upload-screen';
        
        uploadScreen.innerHTML = `
            <div class="upload-area">
                <div class="upload-icon">
                    <i class="fas fa-file-csv"></i>
                </div>
                <div class="upload-text">Upload CSV File</div>
                <div class="upload-subtext">Drag & drop or click to browse</div>
            </div>
        `;

        this.demoScreen.appendChild(uploadScreen);

        // Wait for upload screen, then show loading
        setTimeout(() => {
            this.showLoadingScreen();
        }, 3000);
    }

    showLoadingScreen() {
        // Clear screen
        this.demoScreen.innerHTML = '';

        const loadingScreen = document.createElement('div');
        loadingScreen.className = 'loading-screen';
        
        loadingScreen.innerHTML = `
            <div class="loading-text">Processing Your Data...</div>
            <div class="progress-bar">
                <div class="progress-fill"></div>
            </div>
            <div class="progress-text">Mapping data fields...</div>
        `;

        this.demoScreen.appendChild(loadingScreen);

        // Update progress text during loading
        const progressTexts = [
            'Mapping data fields...',
            'Validating information...',
            'Detecting duplicates...',
            'Formatting data...',
            'Finalizing transfer...'
        ];

        let textIndex = 0;
        const progressTextElement = loadingScreen.querySelector('.progress-text');
        
        const textInterval = setInterval(() => {
            if (textIndex < progressTexts.length) {
                progressTextElement.textContent = progressTexts[textIndex];
                textIndex++;
            } else {
                clearInterval(textInterval);
            }
        }, 600);

        // Wait for loading, then show analytics
        setTimeout(() => {
            this.showAnalyticsScreen();
        }, 3000);
    }

    showAnalyticsScreen() {
        // Clear screen
        this.demoScreen.innerHTML = '';

        const analyticsScreen = document.createElement('div');
        analyticsScreen.className = 'analytics-screen';
        
        analyticsScreen.innerHTML = `
            <div class="analytics-title">Transfer Complete!</div>
            <div class="analytics-grid">
                <div class="analytics-item">
                    <div class="analytics-number">12</div>
                    <div class="analytics-label">Staff Members</div>
                </div>
                <div class="analytics-item">
                    <div class="analytics-number">847</div>
                    <div class="analytics-label">Customers</div>
                </div>
                <div class="analytics-item">
                    <div class="analytics-number">2,341</div>
                    <div class="analytics-label">Bookings</div>
                </div>
                <div class="analytics-item">
                    <div class="analytics-number">£45,230</div>
                    <div class="analytics-label">Revenue</div>
                </div>
            </div>
        `;

        this.demoScreen.appendChild(analyticsScreen);

        // Wait a bit, then restart animation
        setTimeout(() => {
            this.isAnimating = false;
            this.startAnimation();
        }, 5000);
    }
}

// Initialize animation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MergeAnimation();
});

// Fallback for if DOMContentLoaded has already fired
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new MergeAnimation();
    });
} else {
    new MergeAnimation();
}
