document.addEventListener('DOMContentLoaded', (event) => {
    checkLogin();  // Check login status on page load
});

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length);
    }
    return null;
}

async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

function login() {
    var password = document.getElementById('password').value;
    sha256(password).then(hash => {
        if (hash === '0b3a7b8b9dcb165c4bb95dd576ab9619efbe1dfbf3a1e39757e8f8211e74d14a') {
            setCookie("loggedIn", "true", 7); // Log in for 7 days
            document.querySelector('.login-page').style.display = 'none';
            document.querySelector('.main-content').style.display = 'block';
            showAllContentImmediately();
        } else {
            document.getElementById('login-error').innerHTML = 'Incorrect password. Please try again.';
        }
    });
}

function showAllContentImmediately() {
    var tabContents = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "block";  // Ensure all sections are visible
    }
}

function checkLogin() {
    var user = getCookie("loggedIn");
    if (user === "true") {
        document.querySelector('.login-page').style.display = 'none';
        document.querySelector('.main-content').style.display = 'block';
        showAllContentImmediately();
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        login();
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
