document.addEventListener('DOMContentLoaded', () => {
   document.addEventListener('DOMContentLoaded', () => { HTMLOptionsCollection });

    const chatbox = document.getElementById('chatbox');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    // Simple dictionary for bot responses
    const responses = {
        "hello":"Hello there! How can I help you?",
        "how are you":"I am a bot, but I'm doing great! Thanks for asking.",
        "what is your name":"You can call me mr chandra prakash.",
        "bye":"Goodbye! Have a great day.",
        "help":"You can ask me simple questions about my identity or say hello.",
    };

    function sendMessage() {
        const userText = userInput.value.trim();
        if (userText === "") return;

        // Add user message to the chatbox
        const userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('user-message');
        userMessageDiv.textContent = userText;
        chatbox.appendChild(userMessageDiv);

        // Get bot response
        let botReply = "Sorry, I don't understand that. You can try asking for 'help'.";
        const normalizedText = userText.toLowerCase();

        for (const keyword in responses) {
            if (normalizedText.includes(keyword)) {
                botReply = responses[keyword];
                break;
            }
        }

        // Add a delay to simulate typing
        setTimeout(() => {
            const botMessageDiv = document.createElement('div');
            botMessageDiv.classList.add('bot-message');
            botMessageDiv.textContent = botReply;
            chatbox.appendChild(botMessageDiv);
            
            // Scroll to the bottom of the chat
            chatbox.scrollTop = chatbox.scrollHeight;
        }, 1000);

        // Clear the input field
        userInput.value = "";
    }

    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});

