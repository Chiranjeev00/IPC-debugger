# IPC Debugger - Inter-Process Communication Visualizer

![IPC Debugger](https://img.shields.io/badge/Status-Complete-success)
![License](https://img.shields.io/badge/License-Educational-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

An interactive, educational website that visually simulates **Inter-Process Communication (IPC)** mechanisms in Operating Systems. Perfect for students learning OS concepts through hands-on visualization.

## 🌟 Features

### Three Complete IPC Simulators
- **🔗 Pipes** - Unidirectional data flow with blocking/non-blocking modes
- **📬 Message Queue** - Priority-based message passing with FIFO ordering
- **🧠 Shared Memory** - Direct memory access with race condition demonstrations

### Interactive Visualizations
- ✨ Smooth animations showing real-time data flow
- 🎨 Color-coded process identification
- 📊 Live buffer/queue/memory status updates
- 🐛 Comprehensive debugging console with timestamped logs

### Modern UI/UX
- 🌓 Dark mode support with persistent theme
- 📱 Fully responsive design (desktop, tablet, mobile)
- 🎯 Clean, intuitive interface
- ⚡ Fast, client-side only (no backend needed)

---

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Edge, Safari)
- No installation or dependencies required!

### How to Run

**Option 1: Direct File Access**
1. Navigate to the project folder: `CSE316/`
2. Double-click `index.html`
3. The website will open in your default browser

**Option 2: From Browser**
1. Open your web browser
2. Press `Ctrl+O` (or `Cmd+O` on Mac)
3. Navigate to and select `index.html`
4. Click "Open"

**Option 3: Using File URL**
```
file:///C:/Users/hp/Desktop/CSE316/index.html
```
(Adjust the path to match your file location)

---

## 📖 How to Use

### Home Page

**Purpose:** Introduction to IPC concepts and navigation hub

**Features:**
- Read about what IPC is and why it matters
- View comparison table of all three IPC mechanisms
- Click on any simulator card to navigate

**Actions:**
- Click **"Launch Simulator →"** on any card to start
- Toggle **🌙/☀️** in the top-right for dark mode
- Use navigation links to move between pages

---

### 🔗 Pipes Simulator

**What it demonstrates:** Unidirectional communication between two processes through a buffered pipe.

#### How to Use:

1. **Send Data:**
   - Type a message in the "Data to Send" input field
   - Click **"Send Data →"** or press `Enter`
   - Watch the animation as data flows from Process A → Pipe → Process B

2. **Toggle Blocking Mode:**
   - ✅ **Checked (Blocking):** Process waits if buffer is full
   - ☐ **Unchecked (Non-blocking):** Returns error immediately if buffer is full

3. **Monitor Buffer:**
   - Watch the buffer status bar fill up
   - Bar turns red when >80% full
   - Shows current usage: `X / 4096 bytes`

4. **Simulate Errors:**
   - **"Simulate Buffer Full"** - Shows blocking behavior when buffer reaches capacity
   - **"Simulate Pipe Closed"** - Demonstrates SIGPIPE error
   - **"Reset Pipe"** - Clears all data and resets state

5. **Read Logs:**
   - Scroll through the debugging console
   - See `write()` and `read()` system calls
   - View timestamps for each operation

---

### 📬 Message Queue Simulator

**What it demonstrates:** Structured message passing with priority levels and FIFO ordering.

#### How to Use:

1. **Send Messages:**
   - Type your message in the "Message Text" field
   - Select priority: **Low** (🟢), **Medium** (🟡), or **High** (🔴)
   - Click **"Enqueue Message"** or press `Enter`
   - Watch the message slide into the queue

2. **View Message Details:**
   - Each message shows:
     - **ID:** Unique message identifier
     - **Priority:** Color-coded priority level
     - **Size:** Message size in bytes
     - **Time:** Timestamp when sent

3. **Dequeue Messages:**
   - Click **"Dequeue Message"** to remove the first message
   - Watch the highlight animation
   - See the message details in the logs

4. **Monitor Queue:**
   - Check queue status: `X messages`
   - View capacity: `X / 50`
   - Queue automatically prevents overflow

5. **Simulate Errors:**
   - **"Simulate Queue Full"** - Fills queue to capacity (50 messages)
   - **"Simulate Permission Denied"** - Shows EACCES error
   - **"Clear Queue"** - Removes all messages

6. **Read Logs:**
   - See `msgsnd()` calls when sending
   - See `msgrcv()` calls when receiving
   - View message metadata in logs

---

### 🧠 Shared Memory Simulator

**What it demonstrates:** Direct memory access shared between multiple processes with synchronization challenges.

#### How to Use:

1. **Attach Processes:**
   - Click **"Attach to Memory"** for any process (1, 2, or 3)
   - Status changes to "Attached"
   - Process can now read/write to shared memory
   - Click again to detach

2. **Write to Memory:**
   - Select which process to write from (dropdown)
   - Enter data to write (max 20 characters)
   - Choose memory address (0-15)
   - Click **"Write to Memory"**
   - Watch the memory cell update with color coding:
     - 🔵 **Blue** = Process 1
     - 🟢 **Green** = Process 2
     - 🟡 **Orange** = Process 3

3. **View Memory Grid:**
   - 16 cells representing memory addresses
   - Each cell shows:
     - **Address:** Hexadecimal memory address (0x7F8A4000+)
     - **Value:** Current data stored
   - Hover over cells for interaction
   - All attached processes see changes instantly

4. **Run Producer-Consumer Demo:**
   - Click **"Run Producer-Consumer Demo"**
   - Watch automated demonstration:
     - Process 1 produces 5 items sequentially
     - Process 2 consumes items one by one
     - See real-time memory updates
     - Follow along in the logs

5. **Simulate Race Condition:**
   - Click **"Simulate Race Condition"**
   - Watch two processes try to write to the same address
   - See how Process 1 overwrites Process 2's data
   - Understand why synchronization (semaphores/mutexes) is needed

6. **Clear Memory:**
   - Click **"Clear Memory"** to reset all cells
   - All data is removed
   - Memory returns to empty state

7. **Read Logs:**
   - See `shmat()` calls when processes attach
   - See `shmdt()` calls when processes detach
   - View read/write operations with addresses
   - Watch race condition warnings

---

## 🐛 Debugging Console

**Available on all simulator pages**

### Features:
- **Timestamped Logs:** Every operation logged with precise timestamp (HH:MM:SS.mmm)
- **Color-Coded Levels:**
  - 🔵 **Info** - General operations and status updates
  - 🟢 **Success** - Successful operations
  - 🟡 **Warning** - Non-critical issues
  - 🔴 **Error** - Errors and failures
- **Auto-Scroll:** Automatically scrolls to latest entry
- **Clear Button:** Remove all logs to start fresh

### What's Logged:
- System call names and parameters
- Operation results and return values
- Buffer/queue/memory status changes
- Error messages with error codes
- Process state transitions

---

## 🌓 Dark Mode

### How to Toggle:
- Click the **🌙** (moon) or **☀️** (sun) icon in the top-right navigation
- Theme persists across all pages
- Automatically saved to browser storage

### Benefits:
- Reduces eye strain in low-light environments
- Modern, sleek appearance
- All colors optimized for readability in both modes

---

## 📱 Responsive Design

The website automatically adapts to your screen size:

- **Desktop (>768px):** Full multi-column layouts with side-by-side processes
- **Tablet (768px):** Adjusted grid columns, optimized spacing
- **Mobile (<768px):** 
  - Stacked layouts
  - Vertical process arrangement
  - Rotated pipe visualization
  - Touch-friendly buttons
  - Single-column forms

---

## 🎓 Educational Use

### Learning Objectives:

1. **Understand IPC Concepts:**
   - See how processes communicate in isolated memory spaces
   - Learn differences between IPC mechanisms
   - Understand when to use each method

2. **Visualize System Calls:**
   - See `write()`, `read()`, `msgsnd()`, `msgrcv()`, `shmat()`, `shmdt()`
   - Understand parameters and return values
   - Learn error handling (EAGAIN, SIGPIPE, EACCES)

3. **Explore Synchronization:**
   - See blocking vs non-blocking behavior
   - Understand race conditions
   - Learn why synchronization primitives are needed

4. **Compare Performance:**
   - Understand speed differences (Shared Memory is fastest)
   - Learn about data structure overhead
   - See buffer/queue capacity limits

### Recommended Workflow:

1. **Start with Home Page:** Read IPC introduction and comparison table
2. **Try Pipes First:** Simplest mechanism, unidirectional flow
3. **Move to Message Queue:** More structured, priority-based
4. **Explore Shared Memory:** Most complex, fastest, requires synchronization
5. **Experiment with Errors:** Use error simulation buttons to see edge cases
6. **Read All Logs:** Understand what's happening at the OS level

---

## 🛠️ Technical Details

### Technology Stack:
- **HTML5** - Semantic structure
- **CSS3** - Modern styling with CSS Variables, Grid, Flexbox
- **Vanilla JavaScript** - No frameworks, pure ES6+
- **Google Fonts** - Inter (UI), JetBrains Mono (code/logs)

### Browser Compatibility:
- ✅ Chrome/Edge (Chromium) - Recommended
- ✅ Firefox
- ✅ Safari
- ✅ Any modern browser with ES6 support

### File Structure:
```
CSE316/
├── index.html              # Home page
├── pipes.html              # Pipes simulator
├── message-queue.html      # Message Queue simulator
├── shared-memory.html      # Shared Memory simulator
├── styles.css              # Complete design system
├── script.js               # Core utilities
└── README.md               # This file
```

### Key Features:
- **Client-Side Only:** No server required, runs entirely in browser
- **No Dependencies:** No npm packages, no build process
- **Lightweight:** Fast loading, minimal resources
- **Accessible:** Semantic HTML, keyboard navigation support

---

## 🎯 Tips & Tricks

### Pipes:
- Try sending long messages to see buffer fill up
- Toggle blocking mode mid-operation to see different behaviors
- Use "Reset Pipe" between experiments for clean state

### Message Queue:
- Send messages with different priorities to see color coding
- Fill the queue to see capacity limits
- Watch the slide-in animation when enqueueing

### Shared Memory:
- Attach all three processes to see simultaneous access
- Write to same address from different processes
- Run Producer-Consumer demo multiple times
- Pay attention to race condition simulation - it's educational!

### General:
- Keep the debugging console visible to learn system calls
- Try dark mode for extended use
- Test on mobile to see responsive design
- Clear logs periodically for better readability

---

## 📊 Quick Reference

### Keyboard Shortcuts:
- `Enter` - Send data/message (when input is focused)
- `Ctrl+O` / `Cmd+O` - Open file in browser

### System Calls Reference:

| IPC Method | Send | Receive | Create | Destroy |
|------------|------|---------|--------|---------|
| **Pipes** | `write()` | `read()` | `pipe()` | `close()` |
| **Message Queue** | `msgsnd()` | `msgrcv()` | `msgget()` | `msgctl()` |
| **Shared Memory** | Direct write | Direct read | `shmget()` | `shmctl()` |

### Error Codes:
- **EAGAIN** - Resource temporarily unavailable (non-blocking)
- **SIGPIPE** - Broken pipe (write to closed pipe)
- **EACCES** - Permission denied

---

## 🤝 Support

### Common Issues:

**Q: Website not loading?**
- Ensure all files are in the same directory
- Check browser console for errors (F12)
- Try a different browser

**Q: Animations not working?**
- Ensure JavaScript is enabled
- Clear browser cache and reload
- Update to latest browser version

**Q: Dark mode not persisting?**
- Check browser allows localStorage
- Ensure cookies/storage not blocked
- Try in non-incognito mode

**Q: Mobile layout broken?**
- Ensure viewport meta tag is present
- Try rotating device
- Zoom out if needed

---

## 📝 License

This project is created for **educational purposes** to help students learn Operating System concepts.

---

## 🎉 Enjoy Learning!

Explore each simulator, experiment with different scenarios, read the logs, and most importantly - **have fun learning about Inter-Process Communication!**

For questions or feedback, refer to the debugging console logs to understand what's happening under the hood.

**Happy Simulating! 🚀**
