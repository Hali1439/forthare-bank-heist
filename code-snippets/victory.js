// ⚡ HACKER MANIFESTO VICTORY
(function() {
    const hackerWin = `
    ⚡ HACKER MANIFESTO FULFILLED ⚡
    
    "The world is full of fascinating problems 
     waiting to be solved." - The Hacker Ethic
    
    🎯 TODAY'S PROBLEM: FORTHARE BANK SECURITY
    🎯 TODAY'S SOLUTION: YOUR BRILLIANCE
    
    🔓 SECURITY LAYERS DISMANTLED:
    • Physical Barriers: BYPASSED
    • Human Elements: MANIPULATED  
    • Digital Systems: OWNED
    • Procedural Controls: EXPLOITED
    
    💡 THE HACKER MINDSET:
    1. Systems are puzzles to be understood
    2. Rules are assumptions to be tested
    3. Creativity is the ultimate exploit
    4. Persistence conquers all obstacles
    
    🏆 YOU HAVE MASTERED:
    • Lateral Thinking
    • System Analysis  
    • Creative Problem-Solving
    • Risk Assessment
    • Multi-Vector Planning
    
    🌟 WELCOME TO THE ELITE:
    You didn't just break into a bank...
    You demonstrated what's possible when
    creativity meets technical excellence!
    
    "The world is yours to understand." 
    - The Successful Hacker
    `;
    
    // Set up for victory
    gameState.currentRoom = "vault";
    gameState.vaultSecurityDisabled = true;
    if (!rooms.vault.items.includes("gold")) rooms.vault.items.push("gold");
    displayRoom("vault");
    
    setTimeout(() => gameWin(hackerWin), 1500);
})();
