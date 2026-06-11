const bgm = document.getElementById("bgm");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
    bgm.play();
    musicBtn.innerText = "🎵 Música Reproduciendo";
});

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "fixed";
    noBtn.style.left = Math.random() * (window.innerWidth - 150) + "px";
    noBtn.style.top = Math.random() * (window.innerHeight - 100) + "px";
});

document.getElementById("yesBtn").addEventListener("click", () => {
    document.getElementById("result").innerHTML = `
        <h2>🎉 PARTY CREADA 🎉</h2>
        <p>Crissy aceptó la invitación ❤️</p>
        <p>Cholo y Crissy comenzarán una aventura épica este fin de semana 🍁</p>
    `;
    createHearts();
});

function createLeaf(){
    const leaf = document.createElement("div");
    leaf.className = "leaf";
    leaf.innerHTML = "🍁";
    leaf.style.left = Math.random() * 100 + "vw";
    leaf.style.animationDuration = Math.random() * 4 + 5 + "s";
    document.body.appendChild(leaf);
    
    setTimeout(() => {
        leaf.remove();
    }, 9000);
}

setInterval(createLeaf, 300);

function createHearts(){
    for(let i = 0; i < 50; i++){
        setTimeout(() => {
            const heart = document.createElement("div");
            heart.className = "floating-heart";
            heart.innerHTML = "❤️";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.top = Math.random() * 100 + "vh";
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 2000);
        }, i * 50);
    }
}

const timer = document.getElementById("timer");
const target = new Date();
target.setDate(target.getDate() + 2);

function updateCountdown(){
    const now = new Date();
    const diff = target - now;
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor(diff % 86400000 / 3600000);
    const mins = Math.floor(diff % 3600000 / 60000);
    
    timer.innerHTML = `${days} días ${hours} horas ${mins} min`;
}

setInterval(updateCountdown, 1000);
updateCountdown();