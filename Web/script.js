/* script.js */

// Mobile Sidebar Toggle
const sidebar = document.querySelector('.sidebar');
const mobileBtn = document.querySelector('.mobile-toggle');

if(mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
}

// Copy to Clipboard with Toast
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast("Key copied to clipboard");
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Toast Notification Logic
function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}