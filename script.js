const races = ['Эльф', 'Гном', 'Человек', 'Орк'];
const genders = ['Мужской', 'Женский'];

const characterImages = {
    'Эльф': {
        'Мужской': 'images/elf_male.png',
        'Женский': 'images/elf_female.png'
    },
    'Гном': {
        'Мужской': 'images/dwarf_male.png',
        'Женский': 'images/dwarf_female.png'
    },
    'Человек': {
        'Мужской': 'images/human_male.png',
        'Женский': 'images/human_female.png'
    },
    'Орк': {
        'Мужской': 'images/orc_male.png',
        'Женский': 'images/orc_female.png'
    }
};

let currentGenderIndex = 0;
let currentRaceIndex = 2;

function updateCharacterPreview() {
    const characterImage = document.getElementById('characterImage');
    const gender = genders[currentGenderIndex];
    const race = races[currentRaceIndex];

    characterImage.src = characterImages[race][gender];
}

document.getElementById('prevGender').addEventListener('click', () => {
    currentGenderIndex = (currentGenderIndex - 1 + genders.length) % genders.length;
    document.getElementById('gender').textContent = genders[currentGenderIndex];
    updateCharacterPreview();
});

document.getElementById('nextGender').addEventListener('click', () => {
    currentGenderIndex = (currentGenderIndex + 1) % genders.length;
    document.getElementById('gender').textContent = genders[currentGenderIndex];
    updateCharacterPreview();
});

document.getElementById('prevRace').addEventListener('click', () => {
    currentRaceIndex = (currentRaceIndex - 1 + races.length) % races.length;
    document.getElementById('race').textContent = races[currentRaceIndex];
    updateCharacterPreview();
});

document.getElementById('nextRace').addEventListener('click', () => {
    currentRaceIndex = (currentRaceIndex + 1) % races.length;
    document.getElementById('race').textContent = races[currentRaceIndex];
    updateCharacterPreview();
});

document.getElementById('selectButton').addEventListener('click', () => {
    const name = document.getElementById('characterName').value;
    const gender = genders[currentGenderIndex];
    const race = races[currentRaceIndex];

    // Устанавливаем значения по умолчанию
    const health = 100;   // Здоровье
    const strength = 10;  // Сила
    const balance = 100;   // Баланс

    // Валидация имени
    const namePattern = /^[A-Za-z0-9]{1,15}$/; // Только буквы и цифры, 1-15 символов
    if (!namePattern.test(name)) {
        alert("Имя должно содержать только буквы и цифры, без пробелов и специальных символов, и быть длиной от 1 до 15 символов.");
        return;
    }

    // Сохранение персонажа в sessionStorage
    sessionStorage.setItem('character', JSON.stringify({ name, gender, race, health, strength, balance }));
    window.location.href = 'main.html';
});

// Инициализация
updateCharacterPreview();
