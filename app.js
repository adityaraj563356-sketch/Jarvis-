// JARVIS V1 - Basic Brain

function jarvisCommand(text) {
  const lower = text.toLowerCase().trim();

  if (lower.includes("hello") || lower.includes("हेलो") || lower.includes("hi")) {
    return "Hello! Main JARVIS hoon. Main ready hoon.";
  }

  if (lower.includes("naam") || lower.includes("name")) {
    return "Mera naam JARVIS hai.";
  }

  if (lower.includes("kaise ho") || lower.includes("कैसे हो")) {
    return "Main bilkul ready hoon. Aap bataiye.";
  }

  if (lower.includes("time") || lower.includes("samay")) {
    return "Main abhi time check karne ke liye ready hoon.";
  }

  return "Maine suna: " + text;
}

// Future AI connection yahin add hoga.
console.log("JARVIS V1 loaded successfully.");
