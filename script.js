document.addEventListener('DOMContentLoaded', function() {
    const startScreen = document.querySelector('.start-screen');
    const container = document.querySelector('.container');
    const startButton = document.querySelector('.start-button');
    const profile = document.querySelector('.profile');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const nosDiv = document.querySelector('.nos');

    const profiles = [
        { name: 'Boneco Branco da Acad', imgSrc: 'perfil1.png', description: 'Branco e bombado, o que mais?' },
        { name: 'Neeko', imgSrc: 'perfil2.jpg', description: 'LGBT e do lol. "Pra sobreviver preciso me misturar."' },
        { name: 'Cavalo do Stardew Valley de Chapeuzinho', imgSrc: 'perfil4.jpg', description: 'Apenas um Cavalo do Stardew Valley de Chapeuzinho' },
        { name: 'Kalista de Guinsoo', imgSrc: 'perfil5.jpg', description: 'Ta Stackada' },
        { name: 'Arthur Eduardo Good', imgSrc: 'perfil3.png', description: 'Sou um nerdinho programador em busca de uma baianinha ruiva de 1.77, acha que combina? 🙏🌹' },
    ];

    let currentProfileIndex = 0;

    function showProfile(index) {
        const currentProfile = profiles[index];
        profile.innerHTML = `
            <h2>${currentProfile.name}</h2>
            <img src="fotos/${currentProfile.imgSrc}" alt="Perfil ${index + 1}">
            <p>${currentProfile.description}</p>
        `;
    }

    leftArrow.addEventListener('click', function() {
        if (currentProfileIndex === profiles.length - 1) {
            const result = confirm("Tem certeza? Olha de novo");
            if (!result) return;
        }
        currentProfileIndex = currentProfileIndex + 1;
        if (currentProfileIndex >= profiles.length) {
            currentProfileIndex = profiles.length - 1;
        }
        showProfile(currentProfileIndex);
    });

    rightArrow.addEventListener('click', function() {
        if (currentProfileIndex == profiles.length - 1) {
            container.style.display = 'none';
            nosDiv.classList.remove('hidden');
        } else {
            const result = confirm("Infelizmente não houve compatibilidade. Deseja continuar?");
            if (result) {
                currentProfileIndex++;
                showProfile(currentProfileIndex);
            }
        }
    });

    startButton.addEventListener('click', function() {
        startScreen.style.display = 'none';
        container.classList.remove('hidden');
        showProfile(currentProfileIndex);
    });
});
