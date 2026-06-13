/* =====================================================
   Barra Lateral
   ===================================================== */
const btnMenu = document.getElementById('btnMenu');
const sideMenu = document.getElementById('sideMenu');

btnMenu.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
});

/* =====================================================
   Tamanho da Fonte
   ===================================================== */
const fontIncrease = document.getElementById('fontIncrease');
const fontDecrease = document.getElementById('fontDecrease');

const FONT_STEP = 1;      
const FONT_MIN  = 12;     
const FONT_MAX  = 24;    

let currentFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

function applyFontSize(size) {
    currentFontSize = Math.min(FONT_MAX, Math.max(FONT_MIN, size));
    document.documentElement.style.fontSize = currentFontSize + 'px';
}

if (fontIncrease) {
    fontIncrease.addEventListener('click', () => applyFontSize(currentFontSize + FONT_STEP));
}

if (fontDecrease) {
    fontDecrease.addEventListener('click', () => applyFontSize(currentFontSize - FONT_STEP));
}

/* =====================================================
   Dark-Mode
   ===================================================== */
const darkModeToggle = document.getElementById('darkModeToggle');

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = '☀️'; 
        } else {
            darkModeToggle.textContent = '🌙'; 
        }
    });
}