
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}


class Logger {
  constructor(consoleElement) {
    this.console = consoleElement;
    this.logs = [];
  }

  log(message, type = 'info') {
    const timestamp = new Date().toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      fractionalSecondDigits: 3
    });
    
    const logEntry = { timestamp, message, type };
    this.logs.push(logEntry);
    
    const logElement = document.createElement('div');
    logElement.className = `log-entry ${type}`;
    logElement.innerHTML = `
      <span class="log-timestamp">${timestamp}</span>
      <span class="log-message">${message}</span>
    `;
    
    this.console.appendChild(logElement);
    this.console.scrollTop = this.console.scrollHeight;
  }

  info(message) { this.log(message, 'info'); }
  success(message) { this.log(message, 'success'); }
  warning(message) { this.log(message, 'warning'); }
  error(message) { this.log(message, 'error'); }

  clear() {
    this.logs = [];
    this.console.innerHTML = '';
  }
}

// Utility functions
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', initTheme);
