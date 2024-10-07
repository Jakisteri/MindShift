document.getElementById("send-btn").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    addUserMessage(userInput);
    addBotMessage(generateBotResponse(userInput));

    document.getElementById("user-input").value = ""; // clear input after sending
});

function addUserMessage(message) {
    const chatBox = document.getElementById("chat-box");
    const userMessageDiv = document.createElement("div");
    userMessageDiv.classList.add("user-message");
    userMessageDiv.textContent = message;
    chatBox.appendChild(userMessageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function addBotMessage(message) {
    const chatBox = document.getElementById("chat-box");
    const botMessageDiv = document.createElement("div");
    botMessageDiv.classList.add("bot-message");
    botMessageDiv.textContent = message;
    chatBox.appendChild(botMessageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateBotResponse(input) {
    const responses = {
        "anxiety": "It sounds like you're feeling anxious. It's important to recognize this feeling. Would you like to explore some relaxation techniques or talk to a professional?",
        "depression": "I'm sorry you're feeling this way. It's helpful to reach out to someone you trust or a mental health professional to talk about it.",
        "stress": "Stress can be overwhelming. Taking a few deep breaths and talking to someone can make a big difference.",
        "panic": "Panic attacks can be scary. Try grounding techniques, like focusing on an object in the room or practicing deep breathing.",
        "sleep": "Sleep issues can often be related to stress or anxiety. Maintaining a bedtime routine and relaxing before bed might help.",
        "self-care": "Self-care is important. Take some time to do something you enjoy, even if it's just a short break."
    };

    input = input.toLowerCase();

    for (let key in responses) {
        if (input.includes(key)) {
            return responses[key];
        }
    }

    return "Sorry, I didn't catch that. Could you describe your concern in a bit more detail?";
}
