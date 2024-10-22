const chatArea = document.getElementById('chat-area');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Basic AI responses
const responses = {
    'hello': 'Hi! How can I assist you?',
    'how are you': 'I\'m doing great, thanks!',
    'what is your name': 'I\'m an AI chatbot.',
    // Add more responses here...
};

// Function to generate AI response
function getResponse(input) {
    input = input.toLowerCase();
    return responses[input] || 'Sorry, I didn\'t understand that.';
}

// Function to display chat message
function displayMessage(message, type) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${type}-message`;
    msgDiv.textContent = message;
    chatArea.appendChild(msgDiv);
    chatArea.scrollTop = chatArea.scrollHeight;
}

// Event listener for send button
sendBtn.addEventListener('click', () => {
    const userInputValue = userInput.value.trim();
    if (userInputValue !== '') {
        displayMessage(userInputValue, 'user');
        const response = getResponse(userInputValue);
        displayMessage(response, 'bot');
        userInput.value = '';
    }
});

// Event listener for enter key press
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendBtn.click();
    }
});