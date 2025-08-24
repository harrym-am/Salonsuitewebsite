// Simple Chat Animation
function startChatAnimation() {
    const messagesContainer = document.getElementById('chat-messages');
    
    if (!messagesContainer) {
        return;
    }
    
    // Clear any existing messages first
    messagesContainer.innerHTML = '';
    
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
                messagesContainer.innerHTML = '';
                currentIndex = 0;
                isAnimating = false;
                setTimeout(addMessage, 2000);
            }, 3000);
            return;
        }
        
        isAnimating = true;
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
            isAnimating = false;
            currentIndex++;
            
            // Show next message with faster delay
            setTimeout(addMessage, 1500);
        }, 200);
    }
    
    // Start the animation
    setTimeout(addMessage, 1500);
}

let animationStarted = false;

// Initialize the animation only once
document.addEventListener('DOMContentLoaded', () => {
    if (!animationStarted) {
        animationStarted = true;
        startChatAnimation();
    }
});
