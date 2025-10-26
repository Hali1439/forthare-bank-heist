# 🗺️ Forthare Bank Heist - Complete Room Maps & Layouts

## 📋 Table of Contents
- [Overall Building Layout](#-overall-building-layout)
- [Room-by-Room Details](#-room-by-room-details)
- [Navigation Paths](#-navigation-paths)
- [Security System Overview](#-security-system-overview)

---

## 🏢 Overall Building Layout

### Floor Plan Coordinates
```
          🏢 FORTHARE BANK - MAIN FLOOR 🏢
          
    +------------+------------+------------+
    |            |            |            |
    |  Access    | Security   |    IT      |
    | Control    |  Office    | Department |
    |  Room      |   (3,1)    |   (5,1)    |
    |  (1,1)     |            |            |
    +------------+------------+------------+
    |            |            |            |
    |            |            |  Server    |
    |   Vault    |   Hallway  |   Room     |
    |   (1,3)    |   (3,4)    |   (5,3)    |
    |            |            |            |
    +------------+------------+------------+
    |            |            |            |
    |            |  Back      |  Filing    |
    |  Outer     | Entrance   |   Room     |
    |  Wall      |   (3,6)    |   (7,3)    |
    |  (3,8)     |            |            |
    +------------+------------+------------+
    |            |            |            |
    |            | Maintenance| Executive  |
    |            |  Closet    |  Office    |
    |            |   (5,8)    |   (7,1)    |
    |            |            |            |
    +------------+------------+------------+
    |            |            |            |
    |            |  Break     |            |
    |            |   Room     |            |
    |            |   (5,4)    |            |
    |            |            |            |
    +------------+------------+------------+
```

### Quick Navigation Reference
```
OUTSIDE: Outer Wall (3,8) → Maintenance Closet (5,8)
ENTRY: Back Entrance (3,6) → Hallway (3,4)
SECURITY WING: Security Office (3,1) ←→ Access Control Room (1,1)
IT WING: IT Department (5,1) → Server Room (5,3)
EXECUTIVE WING: Filing Room (7,3) → Executive Office (7,1)
VAULT AREA: Access Control Room (1,1) → Vault (1,3)
```

---

## 🏗️ Room-by-Room Details

### 1. Outer Wall `(3,8)`
**Security Level:** Low
**Detection Risk:** +10%
**Description:** Main perimeter with 15-foot wall and security cameras

```
🛡️ OUTER WALL LAYOUT:
    +----------------------+
    |      🎥      🎥      |
    |                      |
    |      [MAIN GATE]     |
    |                      |
    |   [GUARD PATROL]     |
    |                      |
    |   [LADDER ACCESS]    |
    |         ↓            |
    +----------------------+
    EXITS: East → Maintenance Closet
```

**Key Features:**
- 15-foot concrete wall
- 4 security cameras with overlapping coverage
- Guard patrol route every 5 minutes
- Small blind spot between cameras 2 and 3
- Large tree blocking west side

**Items:** None (initially)

### 2. Maintenance Closet `(5,8)`
**Security Level:** None  
**Detection Risk:** +0%
**Description:** Unsecured utility room with maintenance equipment

```
🔧 MAINTENANCE CLOSET:
    +----------------------+
    | [CABINET] [SCHEDULE] |
    |                      |
    |   [LADDER]   [SUPPLIES]  |
    |                      |
    |       [DOOR] →       |
    |         West         |
    +----------------------+
    EXITS: West → Outer Wall
```

**Key Features:**
- Unlocked wooden door
- Maintenance schedule posted
- Cabinet with weak lock
- Various cleaning supplies
- Folding ladder against wall

**Items:** 
- `ladder` (against wall)
- `cleaningSupplies` (cart)

### 3. Back Entrance `(3,6)`
**Security Level:** Medium
**Detection Risk:** +0%
**Description:** Service entrance with electronic keypad

```
🚪 BACK ENTRANCE:
    +----------------------+
    |   [FLOWERPOT]        |
    |         |            |
    |  [KEYPAD] [DOOR]     |
    |    1357    → Hallway |
    |                      |
    |      [EXIT] →        |
    |        South         |
    +----------------------+
    EXITS: South → Outer Wall, North → Hallway
```

**Key Features:**
- Electronic keypad lock
- Decorative flowerpot with hidden code
- Service entrance for deliveries
- Minimal camera coverage

**Items:** None

### 4. Hallway `(3,4)`
**Security Level:** Low-Medium
**Detection Risk:** +0%
**Description:** Central corridor with building map

```
🏃 HALLWAY LAYOUT:
    +----------------------+
    |   [BUILDING MAP]     |
    |                      |
    | North    East   West |
    | [SEC]   [BREAK] [ACC]|
    | Office   Room   Ctrl |
    |                      |
    |       [EXIT] →       |
    |        South         |
    +----------------------+
    EXITS: North → Security Office, East → Break Room, South → Back Entrance
```

**Key Features:**
- Building map on wall
- Employee traffic area
- Can hear guard conversations
- Multiple branching paths

**Items:** None

### 5. Security Office `(3,1)`
**Security Level:** High  
**Detection Risk:** +40%
**Description:** Bank security nerve center

```
👮 SECURITY OFFICE:
    +----------------------+
    | [MONITORS] [GUARD]   |
    |                      |
    |   [DESK]  [STICKY]   |
    |          CamW4tch!   |
    |                      |
    | West    [UNIFORM]    |
    | [ACC]   [OVERRIDE]   |
    | Ctrl                |
    +----------------------+
    EXITS: East → IT Department, South → Hallway, West → Access Control Room
```

**Key Features:**
- Multiple security monitors
- Guard station
- Computer requiring password
- Spare security uniform
- Security override card

**Items:**
- `securityUniform` (on hook)
- `securityOverride` (on desk)

### 6. Break Room `(5,4)`
**Security Level:** Low
**Detection Risk:** +20%
**Description:** Employee lounge area

```
☕ BREAK ROOM:
    +----------------------+
    | [BULLETIN] [TABLE]   |
    |                      |
    | [COFFEE]   [CHAIRS]  |
    | Machine             |
    |                      |
    | [MICROWAVE]          |
    |      ⚠️ DANGER       |
    +----------------------+
    EXITS: West → Hallway
```

**Key Features:**
- Coffee machine
- Bulletin board with notices
- Tables and chairs
- Microwave (security risk)
- Employee directory

**Items:**
- `coffeeCup` (on table)
- `employeeDirectory` (on bulletin board)

### 7. IT Department `(5,1)`
**Security Level:** Medium-High
**Detection Risk:** +0% (with cameras disabled)
**Description:** Technical workspace and admin area

```
💻 IT DEPARTMENT:
    +----------------------+
    | [GARCIA'S DESK]      |
    |  [PHOTO] [NOTEPAD]   |
    |   Rex    Dog+year    |
    |                      |
    | [COMPUTER] [BADGE]   |
    |                      |
    |       [EXIT] →       |
    |        South         |
    +----------------------+
    EXITS: South → Server Room, West → Security Office
```

**Key Features:**
- Garcia's workstation
- Personal items (photo, notepad)
- Computer requiring password
- Admin badge access

**Items:**
- `adminBadge` (on desk)

### 8. Server Room `(5,3)`
**Security Level:** High
**Detection Risk:** +70%
**Description:** Data center with critical infrastructure

```
🖥️ SERVER ROOM:
    +----------------------+
    | [SERVER RACKS]       |
    |   ⚠️ HOT ⚠️          |
    |                      |
    | [MANUAL]←[BEHIND]    |
    |   EXEC ACCESS        |
    |                      |
    |       [EXIT] →       |
    |         East         |
    +----------------------+
    EXITS: North → IT Department, East → Filing Room
```

**Key Features:**
- Multiple server racks
- Cooling systems (noisy)
- Hidden manual behind main rack
- Keypad-protected entry

**Items:**
- `manual` (behind servers)

### 9. Filing Room `(7,3)`
**Security Level:** Medium
**Detection Risk:** +40%
**Description:** Document storage and records

```
📁 FILING ROOM:
    +----------------------+
    | [CABINETS A-M]       |
    |                      |
    | [INSURANCE SECTION]  |
    |   [MASTER KEY]       |
    |      EO: 9876        |
    |                      |
    |       [EXIT] →       |
    |        North         |
    +----------------------+
    EXITS: North → Executive Office, West → Server Room
```

**Key Features:**
- Alphabetical filing system
- Insurance documents section
- Hidden master key
- Executive office access information

**Items:**
- `masterKey` (in insurance files)

### 10. Executive Office `(7,1)`
**Security Level:** High
**Detection Risk:** +80%
**Description:** Luxurious executive workspace

```
💼 EXECUTIVE OFFICE:
    +----------------------+
    |   [PAINTING]         |
    |    ⬆️ (crooked)      |
    |                      |
    |     [DESK]           |
    |  [BIOGRAPHY]         |
    |   10 23 82           |
    |                      |
    |   [SAFE]←[WALL]      |
    +----------------------+
    EXITS: South → Filing Room
```

**Key Features:**
- Expensive artwork (movable)
- Executive desk with documents
- Hidden wall safe
- Bank founder biography

**Items:**
- `accessCard` (in safe - automatically acquired)

### 11. Access Control Room `(1,1)`
**Security Level:** Very High
**Detection Risk:** +90%
**Description:** Vault area security checkpoint

```
🔐 ACCESS CONTROL ROOM:
    +----------------------+
    | [GUARD STATION]      |
    |   [COFFEE CUP]       |
    |                      |
    | [BIOMETRIC CONTROLS] |
    | [SCHEMATICS] [MANUAL]|
    |                      |
    |       [EXIT] →       |
    |        South         |
    +----------------------+
    EXITS: East → Security Office, South → Vault
```

**Key Features:**
- Guard station with biometric controls
- Technical schematics
- Security manuals
- Coffee cup (social engineering)

**Items:**
- `vaultSchematic` (on desk)

### 12. The Vault `(1,3)`
**Security Level:** Maximum
**Detection Risk:** +95%
**Description:** Main gold deposit storage

```
💰 THE VAULT:
    +----------------------+
    |   [PLAQUE]           |
    | Founded: 04-13-1986  |
    |                      |
    |  [VAULT DOOR]        |
    |  🚨 SECURE 🚨        |
    |                      |
    | [CONTROL PANEL]      |
    |   [RED BUTTON] ⚠️    |
    +----------------------+
    EXITS: North → Access Control Room
```

**Key Features:**
- Massive reinforced door
- Multiple security systems
- Historical plaque with founding date
- Emergency alarm button
- Gold storage area

**Items:**
- `gold` (appears after vault opened)

---

## 🧭 Navigation Paths

### Primary Route (Recommended)
```
Outer Wall (Start)
    ↓ East
Maintenance Closet (Get ladder & supplies)
    ↓ West  
Outer Wall (Use ladder to climb wall)
    ↓ (Automatically)
Back Entrance (Find code 1357)
    ↓ North
Hallway (Examine map, listen)
    ↓ North
Security Office (Get uniform, override, disable cameras)
    ↓ East
IT Department (Get admin badge, find server code)
    ↓ South
Server Room (Get executive manual)
    ↓ East
Filing Room (Get master key)
    ↓ North
Executive Office (Get access card from safe)
    ↓ (Backtrack through Server Room → IT Department → Security Office)
    ↓ West
Access Control Room (Distract guard, disable biometrics)
    ↓ South
The Vault (Disable security, open vault, take gold)
```

### Alternative Routes
```
QUICK PATH (Social Engineering Focus):
Outer Wall → Maintenance Closet → Back Entrance → Hallway → Break Room → Security Office → Access Control Room

TECHNICAL PATH (Digital Focus):  
Outer Wall → Maintenance Closet → Back Entrance → Hallway → Security Office → IT Department → Server Room → Executive Path
```

### Backtracking Requirements
- **Security Office → Access Control Room**: Requires access card from Executive Office
- **IT Department → Server Room**: Requires code 737837 from email
- **Filing Room → Executive Office**: Requires master key + code 9876
- **Access Control Room → Vault**: Requires biometrics disabled + guard distracted

---

## 🔒 Security System Overview

### Physical Security Layers
```
LAYER 1: Perimeter Security
├── 15-foot outer wall
├── Security cameras with blind spots
└── Guard patrols

LAYER 2: Building Access  
├── Electronic keypad (1357)
├── Employee awareness
└── Camera surveillance

LAYER 3: Internal Security
├── Security office monitoring
├── Guard stations
└── Access control points

LAYER 4: High-Security Areas
├── Biometric scanners
├── Specialized access cards
└── Multi-factor authentication
```

### Digital Security Systems
```
SYSTEM 1: Camera Network
├── Coverage: Outer areas, hallways, security office
├── Vulnerability: Can be disabled from security computer
└── Bypass: "disable cameras" command

SYSTEM 2: Computer Access  
├── Security Computer: Password "CamW4tch!"
├── IT Computer: Password "Rex2025"
└── Vulnerability: Weak passwords, physical access

SYSTEM 3: Biometric Control
├── Location: Access Control Room
├── Requirement: Admin badge + guard distraction  
└── Bypass: Social engineering + administrative access
```

### Human Security Elements
```
ELEMENT 1: Guard Presence
├── Outer Wall: Patrol route
├── Security Office: Stationed guard
├── Access Control: Alert guard
└── Vulnerability: Social engineering

ELEMENT 2: Employee Awareness
├── Hallway: Passing employees
├── Break Room: Casual interactions  
└── Vulnerability: Can report suspicious activity

ELEMENT 3: Procedural Security
├── Maintenance schedules
├── Access protocols
└── Vulnerability: Predictable patterns
```

---

## 🎯 Strategic Points of Interest

### Critical Choke Points
1. **Access Control Room**: Only path to vault, requires multiple preparations
2. **Security Office**: Central control point for camera disabling
3. **Executive Office**: Source of vault access card

### Key Intelligence Locations
1. **Maintenance Closet**: Biometric maintenance schedule
2. **Security Office**: Camera passwords and security overrides
3. **IT Department**: Server room codes and admin access
4. **Server Room**: Executive access procedures
5. **Executive Office**: Vault security information

### Optimal Timing Considerations
- **Guard Breaks**: Use "wait" in Security Office when guard leaves
- **Maintenance Windows**: Wednesday biometric maintenance (from schedule)
- **Employee Patterns**: Listen in hallway for guard coffee breaks

---

## 💡 Navigation Tips

### Efficient Movement
- Use the map coordinates to plan optimal routes
- Minimize backtracking by completing area objectives before moving on
- Combine social engineering with technical exploits for fastest progress

### Risk Management
- High-detection areas (Security Office, Access Control, Vault) should be approached prepared
- Use security uniform in high-risk areas to reduce detection
- Complete camera disabling before accessing IT Department

### Item Collection Strategy
- Some items are automatically acquired (access card from safe)
- Not all items need to be carried for completion
- Critical path items: ladder, security override, admin badge, master key, access card

---

