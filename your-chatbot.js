document.getElementById("send-btn").addEventListener("click", function() {
    console.log("Button clicked!");  // Log when the button is clicked.

    const userInput = document.getElementById("user-input").value;
    console.log("User input:", userInput);  // Log the user's input.

    if (userInput.trim() === "") return; // Prevent sending empty messages.

    addUserMessage(userInput);  // Add user's message to chat.
    addBotMessage(generateBotResponse(userInput));  // Get and add bot's response.

    document.getElementById("user-input").value = "";  // Clear input after sending.
});

// Function to add the user's message to the chat
function addUserMessage(message) {
    const chatBox = document.getElementById("chat-box");
    const userMessageDiv = document.createElement("div");
    userMessageDiv.classList.add("user-message");
    userMessageDiv.textContent = message;
    chatBox.appendChild(userMessageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom of the chat
}

// Function to add the bot's message to the chat
function addBotMessage(message) {
    const chatBox = document.getElementById("chat-box");
    const botMessageDiv = document.createElement("div");
    botMessageDiv.classList.add("bot-message");
    botMessageDiv.textContent = message;
    chatBox.appendChild(botMessageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom of the chat
}

// Function to generate the bot's response based on user input
function generateBotResponse(input) {
    const responses = {
        "anxiety": "It sounds like you're feeling anxious. It's important to recognize this feeling. Would you like to explore some relaxation techniques or talk to a professional?",
        "depression": "I'm sorry you're feeling this way. It's helpful to reach out to someone you trust or a mental health professional to talk about it.",
        "stress": "Stress can be overwhelming. Taking a few deep breaths and talking to someone can make a big difference.",
        "panic": "Panic attacks can be scary. Try grounding techniques, like focusing on an object in the room or practicing deep breathing.",
        "sleep": "Sleep issues can often be related to stress or anxiety. Maintaining a bedtime routine and relaxing before bed might help.",
        "self-care": "Self-care is important. Take some time to do something you enjoy, even if it's just a short break."
    };

    input = input.toLowerCase(); // Convert input to lowercase for matching

    for (let key in responses) {
        if (input.includes(key)) {
            return responses[key]; // Return the response if a keyword matches
        }
    }

    return "Sorry, I didn't catch that. Could you describe your concern in a bit more detail?"; // Default response
}
