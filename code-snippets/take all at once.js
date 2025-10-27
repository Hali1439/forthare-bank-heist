// 🏆 INSTANT VICTORY PREPARATION
(function() {
    console.log("🎮 SETTING UP INSTANT VICTORY...");
    
    // Add all items
    const allItems = ["ladder","cleaningSupplies","securityUniform","securityOverride",
                     "coffeeCup","adminBadge","masterKey","accessCard","vaultSchematic",
                     "manual","employeeDirectory"];
    allItems.forEach(item => gameState.inventory.includes(item) || gameState.inventory.push(item));
    
    // Disable all security
    gameState.detectionLevel = 0;
    gameState.biometricScannersDisabled = gameState.camerasDisabled = 
    gameState.guardDistracted = gameState.vaultSecurityDisabled = true;
    
    // Unlock everything
    ["serverRoom","executiveOffice","accessControlRoom"].forEach(door => 
        gameState.unlockedDoors.includes(door) || gameState.unlockedDoors.push(door));
    
    // Ensure gold available
    rooms.vault.items.includes("gold") || rooms.vault.items.push("gold");
    
    // Teleport to vault
    gameState.currentRoom = "vault";
    displayRoom("vault");
    
    // Update displays
    updateDetectionMeter();
    updateInventoryDisplay();
    drawMap();
    
    addOutput(`🏆 INSTANT VICTORY READY!
    
All items acquired ✅
All security disabled ✅  
All doors unlocked ✅
Vault access ready ✅

Simply type: take gold
to complete the heist!`);
})();
