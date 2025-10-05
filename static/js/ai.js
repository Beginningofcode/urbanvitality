document.addEventListener("DOMContentLoaded", () => {
    const chatToggle = document.getElementById("chat-toggle");
    const chatWindow = document.getElementById("chat-window");
    const chatContent = document.getElementById("chat-content");
    const userInput = document.getElementById("user-input");
  
    let greeted = sessionStorage.getItem("aiGreeted");
  
    function appendMessage(sender, text) {
      const msg = document.createElement("div");
      msg.textContent = `${sender}: ${text}`;
      chatContent.appendChild(msg);
      chatContent.scrollTop = chatContent.scrollHeight;
    }
  
    function respondToQuestion(question) {
      const q = question.toLowerCase();
      if (q.includes("pollution") || q.includes("air")) return "Reducing emissions and planting trees improves air quality 🌿.";
      if (q.includes("water")) return "Conserving water and avoiding contamination helps ecosystems thrive 💧.";
      if (q.includes("forest") || q.includes("tree")) return "Forests store carbon, protect biodiversity, and cool our planet 🌲.";
      if (q.includes("climate") || q.includes("change")) return "We must cut greenhouse gases and adopt clean energy to fight climate change.";
      return "Let's stay focused on our planet 🌎 — ask me about sustainability, the environment, or healthy cities!";
    }
  
    chatToggle.addEventListener("click", () => {
      chatWindow.classList.toggle("hidden");
      if (!greeted) {
        appendMessage("AI", "Hello, I’m Earth Guardian 🌿. Ask me about sustainability or how to protect our planet!");
        sessionStorage.setItem("aiGreeted", "true");
        greeted = true;
      }
    });
  
    userInput.addEventListener("keypress", e => {
      if (e.key === "Enter" && userInput.value.trim() !== "") {
        const question = userInput.value.trim();
        appendMessage("You", question);
        const answer = respondToQuestion(question);
        appendMessage("AI", answer);
        userInput.value = "";
      }
    });
  });
  