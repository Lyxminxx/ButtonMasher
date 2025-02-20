document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("clickMeBTN");
    let count = parseInt(button.textContent); 
    let lightmodeBtn = document.getElementById("lightmode");
    let blackmode = document.getElementById("blackmode");
    let dracula = document.getElementById("dracula");
    let theme = document.getElementById("theme");

    let draculaUnlocked = localStorage.getItem("draculaUnlocked") === "true";
    let blackmodeUnlocked = localStorage.getItem("blackmodeUnlocked") === "true";
    let currentTheme = localStorage.getItem("currentTheme");

    // Set the theme on page load
    if (currentTheme === "lightmode") {
        theme.innerHTML = '<link id="theme" rel="stylesheet" href="themes/light.css">';
    } else if (currentTheme === "blackmode") {
        theme.innerHTML = '<link id="theme" rel="stylesheet" href="themes/black.css">';
    } else if (currentTheme === "dracula") {
        theme.innerHTML = '<link id="theme" rel="stylesheet" href="themes/dracula.css">';
    }

    // Show unlocked themes
    if (blackmodeUnlocked) {
        blackmode.style.display = "inline";
    }
    if (draculaUnlocked) {
        dracula.style.display = "inline";
    }

    // Button click event listener for increasing count and unlocking themes
    button.addEventListener("click", function () {
        button.textContent = count;

        if (count > 99 && !blackmodeUnlocked) {
            blackmode.style.display = "inline";
            localStorage.setItem("blackmodeUnlocked", "true");
        }
        if (count > 250 && !draculaUnlocked) {
            dracula.style.display = "inline";
            localStorage.setItem("draculaUnlocked", "true");
        }

        // Increment counter
        count++;
        button.textContent = count;
        localStorage.setItem("counter", count);
    });

    // Theme button event listeners to change the theme and save it
    lightmodeBtn.addEventListener("click", function() {
        theme.innerHTML = '<link id="theme" rel="stylesheet" href="themes/light.css">';
        localStorage.setItem("currentTheme", "lightmode"); // Correct assignment
    });

    blackmode.addEventListener("click", function() {
        theme.innerHTML = '<link id="theme" rel="stylesheet" href="themes/black.css">';
        localStorage.setItem("currentTheme", "blackmode"); // Correct assignment
    });

    dracula.addEventListener("click", function() {
        theme.innerHTML = '<link id="theme" rel="stylesheet" href="themes/dracula.css">';
        localStorage.setItem("currentTheme", "dracula"); // Correct assignment
    });
});
