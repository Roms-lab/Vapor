// games.js - Enhanced version with easy game management
// Game configuration - Easy to add/remove games
const gameConfig = [
    {
        name: "FNAF 1",
        description: "Play Fnaf 1 in the browser",
        url: "https://roms-lab.github.io/Nexus/Games/FNAF1/FNAF1.html",
        icon: "fa-gamepad"
    }
];


// Function to show the games tab with links to external games
function showGamesTab() {
    const content = document.querySelector('.tab-contentaa.activeaa');
    const tab = document.querySelector('.tabaa.activeaa');
    
    if (content && tab) {
        // Generate game cards dynamically from config
        const gameCards = gameConfig.map(game => `
            <div style="background: #3c4043; border: 3px solid #4dffa6; border-radius: 10px; padding: 20px; width: 250px; text-align: center;">
                <h3 style="margin-top: 0; color: #4dffa6;"><i class="fas ${game.icon}"></i> ${game.name}</h3>
                <p>${game.description}</p>
                <a href="javascript:void(0);" onclick="openGame('${game.name}', '${game.url}')" style="display: inline-block; margin-top: 10px; background: #ff6161; color: white; padding: 10px 15px; border-radius: 5px; text-decoration: none;">Play Game</a>
            </div>
        `).join('');
        
        content.innerHTML = `
            <div class="Xt7Lm9Kp3R8f">
                <p>𝙼𝚊𝚍𝚎 𝚋𝚢 Zach!</p>
            </div>
            <div class="top-right-boxaa" title="Click here to visit the Vapor GitHub page!">
                <p><i class="fa-brands fa-github"></i></p>
            </div>
            <h23>Vapor Games</h23>
            <h21>Collection of Browser Games</h21>
            
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin-top: 30px;">
                ${gameCards}
            </div>
        `;
        
        tab.querySelector('.tab-nameaa').textContent = 'Vapor Games';
        
        // Update the URL in the address bar
        document.getElementById('url-baraa').value = 'Vapor://Games';
    }
}

// Function to open a game in an iframe
function openGame(gameName, gameUrl) {
    const content = document.querySelector('.tab-contentaa.activeaa');
    const tab = document.querySelector('.tabaa.activeaa');
    
    if (content && tab) {
        content.innerHTML = `
            <div class="Xt7Lm9Kp3R8f">
                <p>𝙼𝚊𝚍𝚎 𝚋𝚢 Zach!</p>
            </div>
            <div class="top-right-boxaa" title="Click here to visit the Vapor GitHub page!">
                <p><i class="fa-brands fa-github"></i></p>
            </div>
            <h23>${gameName}</h23>
            <h21>Game in Progress</h21>
            
            <div style="display: flex; justify-content: center; margin-top: 20px; gap: 10px;">
                <button onclick="toggleGameFullscreen()" style="background: #3c4043; color: white; border: 3px solid #4dffa6; padding: 10px 15px; border-radius: 5px; cursor: pointer;">Fullscreen</button>
                <button onclick="showGamesTab()" style="background: #ff6161; color: white; border: none; padding: 10px 15px; border-radius: 5px; cursor: pointer;">Return to Games</button>
            </div>
            
            <div style="margin-top: 20px; height: 70vh; width: 90%; margin-left: 5%; border: 3px solid #4dffa6; border-radius: 10px; overflow: hidden;">
                <iframe id="gameFrame" src="${gameUrl}" style="width: 100%; height: 100%; border: none;" title="${gameName}"></iframe>
            </div>
        `;
        
        tab.querySelector('.tab-nameaa').textContent = gameName;
        document.getElementById('url-baraa').value = gameUrl;
    }
}

// Function to toggle fullscreen mode for the game iframe (renamed to avoid conflict)
function toggleGameFullscreen() {
    const gameFrame = document.getElementById('gameFrame');
    if (gameFrame) {
        if (!document.fullscreenElement) {
            gameFrame.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }
}

// Add event listener for the Games button in the dropdown
document.addEventListener('DOMContentLoaded', function() {
    // Check if the Games button exists and attach click handler
    const gamesButton = document.querySelector('.dropdown-menuccc a:nth-child(3)');
    if (gamesButton) {
        gamesButton.addEventListener('click', function() {
            showGamesTab();
        });
    }
});

// Export functions for global access
window.showGamesTab = showGamesTab;
window.openGame = openGame;
window.toggleGameFullscreen = toggleGameFullscreen;
