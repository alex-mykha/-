function trimSpaces(string) {
    const trimmedString = string.trim();
    return trimmedString.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

function removeSpaces(string) {
    return string.replace(/\s+/g, "");
}

function validateEmail(email) {
    const trimmedEmail = email.trim();
    if (!trimmedEmail.includes("@") || trimmedEmail.startsWith("@") || trimmedEmail.endsWith("@")) {
        return `not valid ${trimmedEmail}`;
    }
    return trimmedEmail.toLowerCase();
}

function validateYearOfBirth(year) {
    const cleanedYear = year.replace(/[^0-9]/g, '');
    if (cleanedYear.length !== 4 || isNaN(parseInt(cleanedYear, 10)) || parseInt(cleanedYear, 10) <= 1900) {
        return "dinosaur";
    }
    return parseInt(cleanedYear, 10);
}

function calculateFullAge(birthday) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthday;
}

let firstName = prompt("Введите имя");
firstName = trimSpaces(firstName);

let lastName = prompt("Введите фамилию");
lastName = trimSpaces(lastName);

let email = prompt("Введите email");
email = removeSpaces(email);
email = validateEmail(email);

let userBirthday = prompt("Введите год рождения");
userBirthday = removeSpaces(userBirthday);
const validYear = validateYearOfBirth(userBirthday);

let age, yearOfBirth;

if (validYear === "dinosaur") {
    yearOfBirth = "Динозавр";
    age = 'N/A';
} else {
    yearOfBirth = validYear;
    age = calculateFullAge(validYear);
}

const output = `
<ul>
    <li>Имя: ${firstName}</li>
    <li>Фамилия: ${lastName}</li>
    <li>Email: ${email}</li>
    <li>Год рождения: ${yearOfBirth}</li>
    <li>Возраст: ${age}</li>
</ul>`;

document.body.innerHTML = output;