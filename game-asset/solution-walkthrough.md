# 🎮 Forthare Bank Heist - Complete Solution Walkthrough

## 🗺️ Step-by-Step Game Guide

### Phase 1: Initial Infiltration (Outer Area)

#### Step 1: Starting Position - Outer Wall
```bash
# Initial reconnaissance
> look around
# "The wall is about 15 feet tall with security cameras positioned at regular intervals..."

> examine cameras  
# "Looking carefully at the security cameras, you notice they're positioned to cover most of the wall. However, there's a small blind spot between two of them..."

> go east
# Move to Maintenance Closet
```

#### Step 2: Maintenance Closet - Tool Acquisition
```bash
> look around
# "The closet contains various tools and supplies. You see a folding ladder leaning against one wall, some cleaning supplies, and a maintenance schedule..."

> take ladder
# "You take the Ladder"

> read schedule
# "The maintenance schedule shows that the biometric systems in the vault area are serviced every Wednesday. Today is Wednesday according to the date on the schedule."

> take cleaning supplies  
# "You take the Cleaning Supplies"

> go west
# Return to Outer Wall
```

#### Step 3: Perimeter Breach
```bash
> use ladder
# "Using the ladder, you carefully climb over the wall at the camera blind spot. You drop down on the other side, finding yourself near the back entrance of the bank."
# NEW LOCATION: Back Entrance
```

---

### Phase 2: Building Entry & Initial Recon

#### Step 4: Back Entrance - Code Discovery
```bash
> look around
# "There is a keypad on the door. There's also a small decorative flowerpot next to the door."

> examine keypad
# "The buttons 1, 3, 5, and 7 show signs of wear, suggesting they're frequently used in the code."

> examine flowerpot
# "You turn over the flowerpot and find a sticky note with '1357' written on it."

> enter 1357
# "The keypad beeps and the door unlocks. You enter the bank through the service entrance and find yourself in a hallway."
# NEW LOCATION: Hallway
```

#### Step 5: Hallway - Navigation Planning
```bash
> look around
# "The hallway branches in different directions. The building map shows that the security office is to the north and the break room is to the east..."

> examine map
# "The map shows the layout of this floor of the bank. You note the locations of the security office, break room, IT department, and several other areas."
# MAP REVEALED: Full building layout now visible

> listen
# "From the security office, you hear guards discussing camera maintenance scheduled for today. One mentions getting coffee before starting work."
```

---

### Phase 3: Security Office Compromise

#### Step 6: Security Office Access
```bash
> go north
# NEW LOCATION: Security Office
# "The bank's security center with multiple monitors showing camera feeds. A guard is seated at the desk."

> look around
# "Monitors show feeds from security cameras throughout the bank. A guard is seated at the desk... You notice a spare security uniform hanging on a hook by the door."

> examine desk
# "On the desk, you see a sticky note partially hidden under a keyboard."

> examine sticky note  
# "The sticky note has 'CamW4tch!' written on it - looks like a password."

> take security uniform
# "You take the Security Uniform"

> take security override
# "You take the Security Override Card"

> wait
# "You wait patiently. After a few minutes, the guard looks at his watch and leaves for his coffee break."
```

#### Step 7: Security System Disable
```bash
> use computer
# "You sit at the computer. It's locked and requires a password."

> enter CamW4tch!
# "You enter the password and gain access to the security system."

> disable cameras
# "You navigate through the security system and disable the cameras in the lower sections of the bank. This should help you move around more freely."
# CAMERAS DISABLED: Safe movement to IT Department enabled
```

---

### Phase 4: IT Infrastructure Breach

#### Step 8: IT Department Access
```bash
> go east
# NEW LOCATION: IT Department
# "The bank's IT workspace with desks, computers, and technical equipment."

> look around
# "Several workstations with computers and technical manuals. One desk has a nameplate for 'Garcia, Systems Administrator'."

> examine desk
# "On Garcia's desk, you find a framed photo of a dog and some notepad."

> examine photo
# "A cute Labrador named 'Rex' according to the name engraved on the frame."

> examine notepad
# "On the notepad, reminder note, simply says 'Dog+year' with a smiley face."

> use computer
# "Garcia's computer requires a password."

> enter Rex2025
# "You try a combination of the dog's name and the current year. The computer unlocks! Garcia was logged into his email before leaving for his coffee break."
# COMPUTER ACCESS: Garcia's system compromised

> read email
# "In Garcia's email, you find a message about server maintenance with the note: 'Reminder: Server Room code is just SERVER spelled on the keypad (737837). Typical sloppy security...'"

> take admin badge
# "You take the Admin Badge"
```

#### Step 9: Server Room Entry
```bash
> go south
# "The server room door is locked with a keypad. You need to enter the access code."

> enter 737837
# "You enter the code on the server room door keypad. The light turns green and the door unlocks with a click."
# NEW LOCATION: Server Room
```

---

### Phase 5: Executive Access Acquisition

#### Step 10: Server Room Intelligence Gathering
```bash
> look around
# "Rows of servers with blinking lights and cooling systems. The room is cold and noisy from the equipment fans."

> look behind servers
# "Behind the main server rack, you find a manual labeled 'EXECUTIVE ACCESS PROTOCOLS' that was carelessly left there."

> read manual
# "The manual contains procedures for emergency access to the executive areas. It mentions that a master key is kept in the Filing Room under 'Insurance' documents."

> take manual
# "You take the Executive Access Manual"
```

#### Step 11: Filing Room Key Acquisition
```bash
> go east
# NEW LOCATION: Filing Room
# "A room with filing cabinets containing the bank's documents and records."

> look around
# "Row upon row of filing cabinets, each labeled with different categories of documents. One section is marked 'Insurance'."

> examine insurance
# "You search through the insurance files and find a hollowed-out document folder labeled 'Executive Policy'. Inside is a master key with a sticky note attached reading 'EO: 9876'."

> take master key
# "You take the Master Key"
```

#### Step 12: Executive Office Entry
```bash
> go north
# "The executive office door is locked. You need both the master key and the correct code to enter."

> use master key
# "You insert the master key into the door lock. You still need to enter the code."

> enter 9876
# "You enter the code 9876 from the sticky note and use the master key. The door unlocks and you enter the executive office."
# NEW LOCATION: Executive Office
```

---

### Phase 6: Vault Access Preparation

#### Step 13: Executive Office Safe Cracking
```bash
> look around
# "A spacious office with a large desk, leather chair, and expensive artwork. A painting of the bank's founder hangs prominently on one wall."

> examine painting
# "The painting shows the bank's founder. You notice it's hanging slightly crooked, as if it's been moved recently."

> move painting
# "Behind the painting is a wall safe."

> examine desk
# "On the desk, you notice the founder's biography with three dates highlighted: 10 23 82."

> examine safe
# "A combination safe with three dials."

> enter 102382
# "The safe clicks open! Inside is an access card for the vault area and a note about Wednesday maintenance of the biometric systems."
# ACCESS CARD ACQUIRED: Automatically added to inventory
```

---

### Phase 7: Final Approach - Vault Area

#### Step 14: Access Control Room Social Engineering
```bash
> go west (from Executive Office back through Filing Room and Server Room)
> go west (to IT Department)
> go west (to Security Office)
> go west
# "The Access Control Room door is locked. You need an access card to enter."

> use access card
# "You swipe the access card and the door to the Access Control Room unlocks with a beep."
# NEW LOCATION: Access Control Room

> look around
# "A room filled with security equipment controlling access to the vault area. There are biometric scanners, monitoring systems, and a guard station..."

> examine guard
# "A security officer is stationed at the desk controlling access to the vault area. He looks alert and serious about his job. He is holding an empty coffee cup."

> go east (back to Security Office)
> go south (to Hallway)
> go east (to Break Room)
```

#### Step 15: Break Room - Social Engineering Tool
```bash
> look around
# "A cozy room where employees take breaks. There's a coffee machine in the corner..."

> take coffee cup
# "You take the Coffee Cup"

> go west (to Hallway)
> go north (to Security Office)
> go west (to Access Control Room)
```

#### Step 16: Guard Distraction & Biometric Disable
```bash
> offer coffee
# "You offer the guard the coffee cup. 'Oh, thanks,' he says. 'It's getting cold though. I think I'll go warm it up in the break room. Keep an eye on things for a few minutes, will you?' He leaves his post, giving you temporary access to the vault area."
# GUARD DISTRACTED: Temporary unsupervised access

> use admin badge
# "With the security guard gone, you use the admin badge to access the biometric security system. The terminal grants you administrative access, allowing you to temporarily disable the biometric scanners for 'maintenance'. The scanners will remain disabled for 10 minutes."
# BIOMETRICS DISABLED: Vault access enabled

> take vault schematic
# "You take the Vault Schematic"
```

---

### Phase 8: Vault Breach & Objective Completion

#### Step 17: Vault Entry
```bash
> go south
# NEW LOCATION: The Vault
# "The main gold deposit vault with heavy security and massive door. Detection level is at its highest here, we better move fast"

> look around
# "A massive vault door with multiple security systems. There's a dedication plaque on the wall and an advanced security panel..."
```

#### Step 18: Security System Analysis
```bash
> examine plaque
# "The plaque commemorates the vault's creation, noting that Forthare Bank was founded on April 13, 1986 (04-13-1986)."

> examine schematic
# "You carefully study the vault schematic. It indicates that the master reset code for the security system is the bank's founding date. But you need to use the security override card to disable the security system first."
```

#### Step 19: Final Security Bypass
```bash
> use security override card
# "You insert the security override card into the panel. It now requires the master reset code."

> enter 04131986
# "You enter the bank's founding date as the master code. The security systems deactivate, and the vault mechanism begins to turn!"
# VAULT SECURITY DISABLED: Final barrier removed

> open vault
# "The heavy vault door swings open, revealing stacks of gold bars inside."
# GOLD APPEARS: Objective in sight
```

#### Step 20: Mission Completion
```bash
> take gold
# "You've successfully completed the heist!"
# 🎉 VICTORY ACHIEVED: Mission accomplished
```

---

## ⚡ Pro Tips & Shortcuts

### Quick Path Optimization
```bash
# Most efficient room progression:
Outer Wall → Maintenance Closet → Back Entrance → Hallway → 
Security Office → Break Room → IT Department → Server Room → 
Filing Room → Executive Office → Access Control Room → Vault
```

### Critical Items Checklist
- ✅ Ladder (Maintenance Closet)
- ✅ Cleaning Supplies (Maintenance Closet) 
- ✅ Security Uniform (Security Office)
- ✅ Security Override Card (Security Office)
- ✅ Coffee Cup (Break Room)
- ✅ Admin Badge (IT Department)
- ✅ Master Key (Filing Room)
- ✅ Access Card (Executive Office Safe)
- ✅ Vault Schematic (Access Control Room)

### Essential Codes & Passwords
- **Back Entrance**: `1357`
- **Security Computer**: `CamW4tch!`
- **IT Computer**: `Rex2025`
- **Server Room**: `737837`
- **Executive Office**: `9876` + Master Key
- **Executive Safe**: `102382`
- **Vault System**: `04131986` + Security Override Card

---

## 🚨 Common Pitfalls & Solutions

### Game Over Scenarios to Avoid
1. **Talking to guard directly** - Use coffee distraction instead
2. **Breaking cabinet lock** - Creates noise and detection
3. **Using microwave with metal** - Triggers fire alarm
4. **Downloading data from IT computer** - Silent security alert
5. **Pressing red button in vault** - Emergency alarm activation

### Detection Management
- Wear security uniform to reduce detection risk by 50%
- Move quickly through high-security areas
- Use `wait` command when guards are present
- Complete social engineering before technical exploits

---

## 🎯 Completion Verification

### Success Indicators
- ✅ Gold successfully taken from vault
- ✅ Victory message displayed
- ✅ Game win modal appears with confetti
- ✅ All inputs disabled (normal game end state)

### Troubleshooting
If victory doesn't trigger:
1. Ensure vault security is fully disabled
2. Verify gold is present in vault items
3. Check that all prerequisite steps are completed
4. Use browser console enhancement if needed

