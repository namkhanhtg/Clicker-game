
document.addEventListener("DOMContentLoaded", () => {

   
    let score = 0;
    let clickPower = 1;
    let upgradeCost = 10;

  
    const clickButton = document.querySelector(".Clickerbutton");
    const scoreText = document.getElementById("scoreText");
    const upgradeBtn = document.getElementById("upgradeBtn");
    const upgradeCostText = document.getElementById("upgradeCost");

 
  
    clickButton.addEventListener("click", () => {
        score += clickPower;
        updateUI();
        saveGame();
    });


    upgradeBtn.addEventListener("click", () => {
        if (score >= upgradeCost) {
            score -= upgradeCost;
            clickPower += 1;
            upgradeCost = Math.floor(upgradeCost * 1.5);
            updateUI();
            saveGame();
        }
    });

   
    function updateUI() {
        scoreText.textContent = "Score: " + score;
        upgradeCostText.textContent = "Cost: " + upgradeCost;
    }

   
    function saveGame() {
        localStorage.setItem("clickerScore", score);
        localStorage.setItem("clickerPower", clickPower);
        localStorage.setItem("clickerCost", upgradeCost);
    }

  
    function loadGame() {
        const savedScore = localStorage.getItem("clickerScore");
        const savedPower = localStorage.getItem("clickerPower");
        const savedCost = localStorage.getItem("clickerCost");

        if (savedScore !== null) score = parseInt(savedScore);
        if (savedPower !== null) clickPower = parseInt(savedPower);
        if (savedCost !== null) upgradeCost = parseInt(savedCost);

        updateUI();
    }

});