# 📦 Forthare Bank Heist - Complete Item Catalog

## 📋 Inventory Overview

| Item | Location | Required | Purpose | Auto-Acquired |
|------|----------|----------|---------|---------------|
| 🔨 Ladder | Maintenance Closet | ✅ Yes | Physical perimeter breach | No |
| 🧹 Cleaning Supplies | Maintenance Closet | ❌ No | Maintenance disguise | No |
| 👮 Security Uniform | Security Office | ❌ No | Identity concealment | No |
| 💳 Security Override Card | Security Office | ✅ Yes | Vault security bypass | No |
| ☕ Coffee Cup | Break Room | ✅ Yes | Guard distraction | No |
| 🪪 Admin Badge | IT Department | ✅ Yes | Biometric system access | No |
| 🔑 Master Key | Filing Room | ✅ Yes | Executive office access | No |
| 🎫 Access Card | Executive Office Safe | ✅ Yes | Access Control Room entry | ✅ Yes |
| 📋 Vault Schematic | Access Control Room | ❌ No | Vault security analysis | No |
| 📖 Executive Access Manual | Server Room | ❌ No | Master key location info | No |
| 📓 Employee Directory | Break Room | ❌ No | Background information | No |
| 💰 Gold | Vault | ✅ Yes | Mission objective | No |

---

## 🔨 Detailed Item Analysis

### 1. Ladder
**Location:** Maintenance Closet  
**Acquisition:** `take ladder`  
**Critical Path:** ✅ REQUIRED  
**Usage:** `climb wall`  
**Purpose:** Physical perimeter breach over 15-foot outer wall

```
ITEM: Ladder
┌─────────────────────────────────────┐
│ Type: Physical Tool                 │
│ Weight: Portable                    │
│ Usage: Single use                   │
│ Effect: Enables wall climbing       │
│ Detection Impact: +5% (climbing)    │
└─────────────────────────────────────┘
```

**Strategic Notes:**
- Essential for initial infiltration
- Must be acquired before attempting wall climb
- Cannot progress without this item
- No alternative methods for wall bypass

### 2. Cleaning Supplies
**Location:** Maintenance Closet  
**Acquisition:** `take cleaning supplies`  
**Critical Path:** ❌ OPTIONAL  
**Usage:** Various (mostly ineffective)  
**Purpose:** Maintenance personnel disguise

```
ITEM: Cleaning Supplies
┌─────────────────────────────────────┐
│ Type: Disguise Tool                 │
│ Weight: Cart-based                  │
│ Usage: Multiple attempts            │
│ Effect: Limited disguise value      │
│ Detection Impact: Variable          │
└─────────────────────────────────────┘
```

**Strategic Notes:**
- Attempted use in Access Control Room causes Game Over
- Primarily for role-playing and experimentation
- Not required for successful completion
- Demonstrates poor social engineering approach

### 3. Security Uniform
**Location:** Security Office  
**Acquisition:** `take security uniform`  
**Critical Path:** ❌ OPTIONAL  
**Usage:** `use security uniform`  
**Purpose:** Reduces detection risk in high-security areas

```
ITEM: Security Uniform
┌─────────────────────────────────────┐
│ Type: Disguise Equipment            │
│ Weight: Wearable                    │
│ Usage: Continuous effect            │
│ Effect: -50% detection increase     │
│ Duration: Permanent until removed   │
└─────────────────────────────────────┘
```

**Strategic Notes:**
- Reduces detection risk from room security levels
- Particularly useful in Security Office and Access Control Room
- Not essential but highly recommended
- Can be used at any time for immediate effect

### 4. Security Override Card
**Location:** Security Office  
**Acquisition:** `take security override`  
**Critical Path:** ✅ REQUIRED  
**Usage:** `use security override card` (in Vault)  
**Purpose:** Enables vault security code input

```
ITEM: Security Override Card
┌─────────────────────────────────────┐
│ Type: Electronic Access             │
│ Weight: Card-sized                  │
│ Usage: Single use (Vault only)      │
│ Effect: Unlocks vault code input    │
│ Prerequisite: Biometrics disabled   │
└─────────────────────────────────────┘
```

**Strategic Notes:**
- Must be used before entering vault code
- Requires biometric scanners to be disabled first
- Critical path item - cannot complete heist without it
- Keep in inventory until vault sequence

### 5. Coffee Cup
**Location:** Break Room  
**Acquisition:** `take coffee cup`  
**Critical Path:** ✅ REQUIRED  
**Usage:** `offer coffee` (in Access Control Room)  
**Purpose:** Social engineering tool for guard distraction

```
ITEM: Coffee Cup
┌─────────────────────────────────────┐
│ Type: Social Engineering Tool       │
│ Weight: Portable                    │
│ Usage: Single use                   │
│ Effect: Distracts guard for 10 min  │
│ Detection Impact: +5% (interaction) │
└─────────────────────────────────────┘
```

**Strategic Notes:**
- Essential for bypassing Access Control Room guard
- Must be used before attempting admin badge access
- Creates temporary unsupervised access window
- Only works in Access Control Room with guard present

### 6. Admin Badge
**Location:** IT Department  
**Acquisition:** `take admin badge`  
**Critical Path:** ✅ REQUIRED  
**Usage:** `use admin badge` (in Access Control Room)  
**Purpose:** Administrative access to biometric security systems

```
ITEM: Admin Badge
┌─────────────────────────────────────┐
│ Type: Electronic Credential         │
│ Weight: Badge-sized                 │
│ Usage: Single use                   │
│ Effect: Disables biometric scanners │
│ Prerequisite: Guard distracted      │
└─────────────────────────────────────┘
```

**Strategic Notes:**
- Must be used after guard distraction with coffee
- Disables biometric security for vault access
- Critical path item - no vault access without it
- Only effective in Access Control Room

### 7. Master Key
**Location:** Filing Room (Insurance section)  
**Acquisition:** `take master key`  
**Critical Path:** ✅ REQUIRED  
**Usage:** `use master key` + `enter 9876` (Executive Office)  
**Purpose:** Unlocks executive office access

```
ITEM: Master Key
┌─────────────────────────────────────┐
│ Type: Physical Security             │
│ Weight: Key-sized                   │
│ Usage: Single use                   │
│ Effect: Unlocks executive office    │
│ Code Required: 9876 (EO)            │
└─────────────────────────────────────┘
```

**Strategic Notes:**
- Found in Insurance section of Filing Room
- Requires code 9876 from sticky note
- Essential for accessing Executive Office
- Must be used before entering the code

### 8. Access Card
**Location:** Executive Office Safe  
**Acquisition:** Automatically acquired when safe opened  
**Critical Path:** ✅ REQUIRED  
**Usage:** Automatic when approaching Access Control Room  
**Purpose:** Unlocks Access Control Room door

```
ITEM: Access Card
┌─────────────────────────────────────┐
│ Type: Electronic Access             │
│ Weight: Card-sized                  │
│ Usage: Automatic                    │
│ Effect: Unlocks Access Control Room │
│ Acquisition: Auto from safe         │
└─────────────────────────────────────┘
```

**Strategic Notes:**
- Automatically added to inventory when safe opens
- Required for Access Control Room entry
- Cannot be dropped or lost
- Critical path item acquired through puzzle solving

### 9. Vault Schematic
**Location:** Access Control Room  
**Acquisition:** `take vault schematic`  
**Critical Path:** ❌ OPTIONAL  
**Usage:** `examine schematic` (in Vault)  
**Purpose:** Provides vault security analysis information

```
ITEM: Vault Schematic
┌─────────────────────────────────────┐
│ Type: Intelligence Document         │
│ Weight: Document                    │
│ Usage: Informational only           │
│ Effect: Reveals vault security info │
│ Value: Educational                  │
└─────────────────────────────────────┘
```

**Strategic Notes:**
- Provides helpful information but not required
- Reveals that vault code is bank founding date
- Confirms need for security override card
- Good for understanding security architecture

### 10. Executive Access Manual
**Location:** Server Room (behind servers)  
**Acquisition:** `take manual`  
**Critical Path:** ❌ OPTIONAL  
**Usage:** `read manual`  
**Purpose:** Reveals master key location information

```
ITEM: Executive Access Manual
┌─────────────────────────────────────┐
│ Type: Intelligence Document         │
│ Weight: Document                    │
│ Usage: Informational only           │
│ Effect: Reveals master key location │
│ Value: Hint provision               │
└─────────────────────────────────────┘
```

**Strategic Notes:**
- Provides hint about master key in Filing Room
- Not required but helpful for navigation
- Found in somewhat hidden location
- Demonstrates information security vulnerability

### 11. Employee Directory
**Location:** Break Room  
**Acquisition:** `take employee directory`  
**Critical Path:** ❌ OPTIONAL  
**Usage:** Informational only  
**Purpose:** Background information about bank staff

```
ITEM: Employee Directory
┌─────────────────────────────────────┐
│ Type: Background Material           │
│ Weight: Book                        │
│ Usage: Flavor text only             │
│ Effect: No gameplay impact          │
│ Value: Atmospheric                  │
└─────────────────────────────────────┘
```

**Strategic Notes:**
- Pure flavor item with no gameplay function
- Provides atmospheric world-building
- Can be safely ignored for completion
- Demonstrates environmental storytelling

### 12. Gold
**Location:** Vault (appears after opening)  
**Acquisition:** `take gold`  
**Critical Path:** ✅ REQUIRED  
**Usage:** Final objective completion  
**Purpose:** Mission success trigger

```
ITEM: Gold
┌─────────────────────────────────────┐
│ Type: Mission Objective             │
│ Weight: Heavy (thematically)        │
│ Usage: Victory condition            │
│ Effect: Completes the heist         │
│ Value: Priceless (game completion)  │
└─────────────────────────────────────┘
```

**Strategic Notes:**
- Appears only after vault security disabled and door opened
- Taking it triggers victory sequence
- Final step in the heist
- Represents successful mission completion

---

## 🎯 Critical Path Items Summary

### Must-Have Items (7)
1. **Ladder** - Perimeter access
2. **Security Override Card** - Vault security preparation  
3. **Coffee Cup** - Guard distraction
4. **Admin Badge** - Biometric system access
5. **Master Key** - Executive office entry
6. **Access Card** - Access Control Room entry (auto-acquired)
7. **Gold** - Mission objective (final step)

### Optional But Useful (2)
1. **Security Uniform** - Detection risk reduction
2. **Vault Schematic** - Security system information

### Purely Optional (3)
1. **Cleaning Supplies** - Experimental/disguise
2. **Executive Access Manual** - Hint provision
3. **Employee Directory** - Flavor text

---

## 🧭 Acquisition Sequence

### Optimal Collection Order
```
PHASE 1: Initial Infiltration
1. Ladder (Maintenance Closet)
2. Cleaning Supplies (Maintenance Closet) - Optional

PHASE 2: Building Access  
3. Security Uniform (Security Office) - Optional but recommended
4. Security Override Card (Security Office)
5. Coffee Cup (Break Room)

PHASE 3: Technical Access
6. Admin Badge (IT Department)

PHASE 4: Executive Access
7. Executive Access Manual (Server Room) - Optional hint
8. Master Key (Filing Room)
9. Access Card (Executive Office Safe) - Auto-acquired

PHASE 5: Vault Preparation  
10. Vault Schematic (Access Control Room) - Optional info

PHASE 6: Mission Completion
11. Gold (Vault) - Final objective
```

### Automatic Acquisition
- **Access Card**: Automatically added when executive office safe opens
- No other items are automatically acquired

---

## 💡 Strategic Item Usage

### Social Engineering Items
```
Coffee Cup → Use in Access Control Room with guard present
Security Uniform → Use anytime for continuous detection reduction
Cleaning Supplies → Avoid using (causes Game Over in Access Control)
```

### Technical Access Items
```
Admin Badge → Use after guard distraction in Access Control Room
Security Override Card → Use in Vault before code entry
Access Card → Automatic use when approaching Access Control Room
```

### Physical Access Items
```
Ladder → Single use at Outer Wall
Master Key → Use with code 9876 at Executive Office
```

### Information Items
```
Vault Schematic → Examine in Vault for security details
Executive Access Manual → Read for master key location hint
Employee Directory → Flavor text only
```

---

## ⚠️ Item Interaction Warnings

### Dangerous Uses
- **Cleaning Supplies** in Access Control Room → Immediate Game Over
- Using items without prerequisites (e.g., Admin Badge with guard present) → Game Over
- Attempting to use items in wrong locations → Command not recognized

### Prerequisite Chains
```
Coffee Cup → Must be used before Admin Badge
Admin Badge → Requires guard to be distracted
Security Override Card → Requires biometrics disabled
Master Key → Requires code 9876
```

### Automatic Triggers
- **Access Card**: Automatically used when needed, cannot be manually used
- **Gold**: Only appears and becomes available after all security disabled

---

## 🎮 Completion Verification

### Inventory Checklist for Success
```
✅ Ladder (acquired and used)
✅ Security Override Card (in inventory)
✅ Coffee Cup (acquired)
✅ Admin Badge (in inventory) 
✅ Master Key (acquired and used)
✅ Access Card (auto-acquired - check inventory)
```

### Common Missing Items Issues
- **No Access Card**: Forgot to open executive office safe
- **No Admin Badge**: Skipped IT Department or forgot to take it
- **No Security Override**: Left in Security Office
- **No Coffee Cup**: Didn't visit Break Room

### Victory Condition
- All critical path items either used or in inventory
- Gold available and taken from vault
- Triggers victory sequence and game completion

---

## 🔄 Item Reset and Management

### Persistent Items
- Once acquired, items remain in inventory permanently
- No capacity limits or weight restrictions
- Cannot drop or lose items once acquired

### Usage Limitations
- Most critical items are single-use
- Optional items can be used multiple times
- Some items have specific location requirements

### Game State Preservation
- Inventory persists through room changes
- Items remain after Game Over (if you restart from save)
- No item degradation or time-based effects

---


