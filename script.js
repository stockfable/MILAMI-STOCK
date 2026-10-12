// =========================================
// STOCKFABLE - Main Script (FINAL)
// =========================================

// ১. ট্যাব পরিবর্তন
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

// ২. জেনারেট বাটন (ডেমো)
const generateBtn = document.querySelector('.btn-generate');
if (generateBtn) {
    generateBtn.addEventListener('click', () => {
        alert("Generating AI Image... (Demo)");
    });
}

// =========================================
// ৩. ★ Sidebar 9-Dot Grid Menu ★
// =========================================
function toggleSidebarMenu(event) {
    if (event) event.stopPropagation();
    const menu = document.getElementById('sidebarMenu');
    if (menu) menu.classList.toggle('open');
}

// বাইরে ক্লিক করলে সাইডবার বন্ধ
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebarMenu');
    if (sidebar && !sidebar.contains(event.target)) {
        sidebar.classList.remove('open');
    }
});

// ESC চাপলে সাইডবার বন্ধ
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const sidebar = document.getElementById('sidebarMenu');
        if (sidebar) sidebar.classList.remove('open');
    }
});

// =========================================
// ৪. FAQ Toggle
// =========================================
function toggleFaq(el) {
    const item = el.parentElement;
    const isActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!isActive) item.classList.add('active');
}

// =========================================
// ৫. ★ Theme Toggle (Dark / Light) ★
// =========================================
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
}

// পেজ লোড হওয়ার সময় আগের থিম চেক করা
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
});

// =========================================
// ৬. Global expose (HTML থেকে কল করার জন্য)
// =========================================
window.toggleSidebarMenu = toggleSidebarMenu;
window.toggleFaq = toggleFaq;
window.toggleTheme = toggleTheme;