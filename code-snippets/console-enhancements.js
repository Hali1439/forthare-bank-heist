// 🎮 COMPLETE GAME ENHANCEMENT - One-Command Solution
(function() {
    console.log("🔮 EVIL GENIUS MODE ACTIVATING...");
    
    // Core game state modifications
    gameState.detectionLevel = 0;
    gameState.biometricScannersDisabled = true;
    gameState.camerasDisabled = true;
    gameState.guardDistracted = true;
    gameState.vaultSecurityDisabled = true;
    
    // Add all items to inventory
    const allItems = ["ladder", "cleaningSupplies", "securityUniform", 
                     "securityOverride", "coffeeCup", "adminBadge", 
                     "masterKey", "accessCard", "vaultSchematic"];
    
    allItems.forEach(item => {
        if (!gameState.inventory.includes(item)) {
            gameState.inventory.push(item);
        }
    });
    
    // Unlock all doors
    const allDoors = ["serverRoom", "executiveOffice", "accessControlRoom"];
    allDoors.forEach(door => {
        if (!gameState.unlockedDoors.includes(door)) {
            gameState.unlockedDoors.push(door);
        }
    });
    
    // Update game display
    updateDetectionMeter();
    updateInventoryDisplay();
    
    console.log("🎯 EVIL GENIUS MODE ACTIVATED!");
    console.log("✅ Detection: 0% | Biometrics: DISABLED | All Items: ACQUIRED");
    addOutput("🔮 EVIL GENIUS MODE ACTIVATED! You now have complete control over the bank's security systems.");
})();


// 🕵️ PERFECT STEALTH MODE - Zero Detection Risk
(function() {
    gameState.detectionLevel = 0;
    updateDetectionMeter();
    addOutput("🕵️ STEALTH MODE: Detection permanently set to 0% - You are completely invisible to security systems.");
    console.log("🕵️ Stealth Mode Activated - Zero detection risk");
})();


// 🔮 QUANTUM HACKING METHODS - Advanced Exploitation
(function() {
    const quantumMethods = {
        "quantum hack biometrics": {
            response: function() {
                gameState.biometricScannersDisabled = true;
                return "🔮 QUANTUM ENCRYPTION BREACH: Biometric encryption shattered at quantum level! All scanners permanently disabled.";
            }
        },
        
        "create EMP burst": {
            response: function() {
                gameState.biometricScannersDisabled = true;
                gameState.camerasDisabled = true;
                return "⚡ EMP BURST DEPLOYED: All electronic security systems fried! Cameras and biometrics offline.";
            }
        },
        
        "deploy AI virus": {
            response: function() {
                gameState.biometricScannersDisabled = true;
                gameState.securityComputerUnlocked = true;
                gameState.garciaComputerUnlocked = true;
                return "🤖 AI VIRUS INJECTED: Security systems now work for YOU! All computers unlocked and compliant.";
            }
        },
        
        "rewrite reality": {
            response: function() {
                gameState.detectionLevel = 0;
                gameState.biometricScannersDisabled = true;
                gameState.vaultSecurityDisabled = true;
                if (!rooms.vault.items.includes("gold")) {
                    rooms.vault.items.push("gold");
                }
                return "🌌 REALITY REWRITTEN: The gold is already yours! Security systems recognize you as the rightful owner.";
            }
        },
        
        "time dilation exploit": {
            response: function() {
                gameState.detectionLevel = 0;
                return "⏰ TIME DILATION: Security systems experience time 100x slower than you. Take all the time you need!";
            }
        }
    };
    
    // Add methods to all rooms
    for (const roomId in rooms) {
        Object.assign(rooms[roomId].interactions, quantumMethods);
    }
    
    addOutput("🔮 QUANTUM HACKING SUITE LOADED: 5 advanced exploitation methods available!");
    console.log("Quantum hacking methods added to all rooms");
})();


// 🎭 ADVANCED SOCIAL ENGINEERING TECHNIQUES
(function() {
    const socialEngineeringMethods = {
        "impersonate CEO": {
            response: function() {
                gameState.biometricScannersDisabled = true;
                gameState.detectionLevel = Math.max(0, gameState.detectionLevel - 50);
                return "🎭 CEO IMPERSONATION: You confidently stride through security as the bank president. All access granted!";
            }
        },
        
        "deploy honey trap": {
            response: function() {
                if (gameState.currentRoom === "accessControlRoom") {
                    gameState.guardDistracted = true;
                    return "💋 HONEY TRAP DEPLOYED: Guard is completely distracted. Unlimited access time available.";
                }
                return "Honey trap requires a guard presence to be effective.";
            }
        },
        
        "social engineering audit": {
            response: function() {
                let vulnerabilities = [];
                if (rooms.breakRoom.items.includes("coffeeCup")) vulnerabilities.push("Coffee-based distraction");
                if (rooms.securityOffice.items.includes("securityUniform")) vulnerabilities.push("Uniform impersonation");
                if (rooms.maintenanceCloset.items.includes("cleaningSupplies")) vulnerabilities.push("Maintenance disguise");
                
                return `🔍 SOCIAL ENGINEERING AUDIT: ${vulnerabilities.length} vulnerabilities found:\n- ${vulnerabilities.join('\n- ')}`;
            }
        }
    };
    
    // Add to current room
    Object.assign(rooms[gameState.currentRoom].interactions, socialEngineeringMethods);
    addOutput("🎭 SOCIAL ENGINEERING MASTERY: Advanced human manipulation techniques unlocked!");
})();


// ✨ INSTANT TELEPORTATION COMMANDS
(function() {
    const teleportCommands = {
        "teleport to vault": {
            response: function() {
                gameState.currentRoom = "vault";
                displayRoom("vault");
                return "✨ QUANTUM TELEPORTATION: Instant vault access achieved!";
            }
        },
        
        "teleport to security": {
            response: function() {
                gameState.currentRoom = "securityOffice";
                displayRoom("securityOffice");
                return "✨ TELEPORT: Security office accessed directly.";
            }
        },
        
        "teleport to executive": {
            response: function() {
                gameState.currentRoom = "executiveOffice";
                displayRoom("executiveOffice");
                return "✨ TELEPORT: Executive office accessed.";
            }
        },
        
        "teleport to start": {
            response: function() {
                gameState.currentRoom = "outerWall";
                displayRoom("outerWall");
                return "✨ TELEPORT: Returned to starting position.";
            }
        }
    };
    
    Object.assign(rooms[gameState.currentRoom].interactions, teleportCommands);
    addOutput("✨ TELEPORTATION SYSTEM: Instant room access commands available!");
})();



// 🔍 COMPREHENSIVE GAME STATE ANALYSIS
(function() {
    console.group("🎮 GAME STATE INSPECTOR");
    console.log("Current Room:", gameState.currentRoom);
    console.log("Detection Level:", gameState.detectionLevel + "%");
    console.log("Inventory:", gameState.inventory);
    console.log("Visited Rooms:", gameState.visitedRooms);
    console.log("Unlocked Doors:", gameState.unlockedDoors);
    console.log("Security Status:", {
        cameras: gameState.camerasDisabled ? "DISABLED" : "ACTIVE",
        biometrics: gameState.biometricScannersDisabled ? "DISABLED" : "ACTIVE",
        vault: gameState.vaultSecurityDisabled ? "DISABLED" : "ACTIVE",
        guard: gameState.guardDistracted ? "DISTRACTED" : "ALERT"
    });
    console.groupEnd();
    
    addOutput("🔍 GAME STATE ANALYZED: Check browser console for detailed system information.");
})();


// 🤖 AUTOMATIC MISSION COMPLETION
(function() {
    function autoCompleteMission() {
        console.log("🚀 INITIATING AUTO-COMPLETION SEQUENCE...");
        
        // Set optimal game state
        gameState.detectionLevel = 0;
        gameState.biometricScannersDisabled = true;
        gameState.camerasDisabled = true;
        gameState.guardDistracted = true;
        gameState.vaultSecurityDisabled = true;
        gameState.mapRevealed = true;
        
        // Add all items
        const allItems = ["ladder", "cleaningSupplies", "securityUniform", 
                         "securityOverride", "coffeeCup", "adminBadge", 
                         "masterKey", "accessCard", "vaultSchematic"];
        allItems.forEach(item => {
            if (!gameState.inventory.includes(item)) gameState.inventory.push(item);
        });
        
        // Unlock all areas
        const allDoors = ["serverRoom", "executiveOffice", "accessControlRoom"];
        allDoors.forEach(door => {
            if (!gameState.unlockedDoors.includes(door)) gameState.unlockedDoors.push(door);
        });
        
        // Ensure gold is available
        if (!rooms.vault.items.includes("gold")) {
            rooms.vault.items.push("gold");
        }
        
        // Teleport to vault
        gameState.currentRoom = "vault";
        displayRoom("vault");
        
        // Update displays
        updateDetectionMeter();
        updateInventoryDisplay();
        drawMap();
        
        console.log("✅ AUTO-COMPLETION FINISHED: Ready for immediate victory!");
        addOutput("🚀 MISSION AUTO-COMPLETED: All objectives achieved. Use 'take gold' for instant victory!");
    }
    
    // Add auto-completion command
    rooms[gameState.currentRoom].interactions["auto complete mission"] = {
        response: autoCompleteMission
    };
    
    addOutput("🤖 AUTO-COMPLETION ENGINE: Type 'auto complete mission' for instant victory preparation.");
})();

// 🛠️ DEVELOPER TOOLS FOR ADVANCED TESTING
(function() {
    const devTools = {
        "reveal map": {
            response: function() {
                gameState.mapRevealed = true;
                drawMap();
                return "🗺️ MAP REVEALED: All areas now visible.";
            }
        },
        
        "reset detection": {
            response: function() {
                gameState.detectionLevel = 0;
                updateDetectionMeter();
                return "🔄 DETECTION RESET: Back to 0% detection risk.";
            }
        },
        
        "list all commands": {
            response: function() {
                const room = rooms[gameState.currentRoom];
                const commands = Object.keys(room.interactions);
                return `📝 AVAILABLE COMMANDS:\n- ${commands.join('\n- ')}`;
            }
        },
        
        "test victory": {
            response: function() {
                gameWin("🧪 TEST VICTORY: Developer testing completed successfully!");
                return "Victory sequence triggered for testing.";
            }
        }
    };
    
    Object.assign(rooms[gameState.currentRoom].interactions, devTools);
    addOutput("🛠️ DEVELOPER TOOLS: Advanced testing and debugging commands available.");
})();

// 🎪 FUN ENHANCEMENTS AND EASTER EGGS
(function() {
    const funCommands = {
        "summon dragon": {
            response: function() {
                return "🐉 A majestic dragon appears! It politely asks if you'd like a ride over the wall. (Sadly, dragons don't fit in banks.)";
            }
        },
        
        "dance party": {
            response: function() {
                return "💃 SECURITY DANCE PARTY! The guards are so busy dancing they don't notice you. Detection risk temporarily reduced!";
            }
        },
        
        "ask for directions": {
            response: function() {
                return "🗺️ 'The vault? Oh, it's just down the hall, take a left at the water cooler, can't miss it!' - Helpful Employee";
            }
        },
        
        "hacker manifesto": {
            response: function() {
                return `⚡ HACKER MANIFESTO:
1. Systems are meant to be understood
2. Rules are boundaries to be tested  
3. Creativity is the ultimate tool
4. Every constraint is an opportunity
5. The journey matters more than the destination`;
            }
        }
    };
    
    Object.assign(rooms[gameState.currentRoom].interactions, funCommands);
    addOutput("🎪 FUN COMMANDS UNLOCKED: Try 'summon dragon' or 'dance party' for some entertainment!");
})();


// 🌟 ULTIMATE ENHANCEMENT - EVERYTHING IN ONE COMMAND
(function() {
    console.log("🌟 LOADING ULTIMATE GAME MASTERY SUITE...");
    
    // Import all enhancement functions
    const enhancements = [
        () => { gameState.detectionLevel = 0; },
        () => { 
            gameState.biometricScannersDisabled = true;
            gameState.camerasDisabled = true;
            gameState.guardDistracted = true;
            gameState.vaultSecurityDisabled = true;
            gameState.mapRevealed = true;
        },
        () => {
            const allItems = ["ladder", "cleaningSupplies", "securityUniform", 
                             "securityOverride", "coffeeCup", "adminBadge", 
                             "masterKey", "accessCard", "vaultSchematic"];
            allItems.forEach(item => {
                if (!gameState.inventory.includes(item)) gameState.inventory.push(item);
            });
        },
        () => {
            const allEnhancements = {
                ...quantumMethods, 
                ...socialEngineeringMethods, 
                ...teleportCommands,
                ...devTools,
                ...funCommands
            };
            Object.assign(rooms[gameState.currentRoom].interactions, allEnhancements);
        }
    ];
    
    // Execute all enhancements
    enhancements.forEach(enhancement => {
        try { enhancement(); } catch(e) { console.warn("Enhancement skipped:", e.message); }
    });
    
    // Update game state
    updateDetectionMeter();
    updateInventoryDisplay();
    drawMap();
    
    console.log("🎊 ULTIMATE ENHANCEMENT COMPLETE!");
    addOutput(`🌟 ULTIMATE GAME MASTERY ACHIEVED!
    
✅ Perfect Stealth (0% Detection)
✅ All Security Systems Compromised  
✅ Complete Inventory Unlocked
✅ Advanced Exploitation Methods
✅ Teleportation System
✅ Developer Tools
✅ Fun Easter Eggs
    
You now have complete dominion over Forthare Bank's security!`);
})();


F12 → Console tab
# or
Right-click → Inspect → Console

