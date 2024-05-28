function trimSpaces(string) {
    return string.trim()
}

function removeSpaces(string) {
    return string.replace(/\s+/g, "")
}

function valleDateEmail(email) {
    if (!email.includes("@")) {
        return `not vallid ${email}`
    }
    if (email.startsWith("@")) {
        return `not vallid ${email}`
    }
    if (email.endsWith("@")) {
        return `not vallid ${email}`
    }
    return email
}

function validateYearOfBirth(year) {
    const cleanedYear = year.replace(/[^0-9]/g, '');
    if (cleanedYear.length !== 4 || isNaN(parseInt(cleanedYear, 10))) {
        return `not valid year <b>${year}</b> (invalid format or non-numeric characters)`;
    }
    return parseInt(cleanedYear, 10);
}


function calculateFullAge(birhtsday) {
    const curentYear = new Date().getFullYear()
    return curentYear - birhtsday
}

let firstName = prompt("Видите имя")
firstName = trimSpaces(firstName)
let lastName = prompt("Ведите фамилию")
lastName = trimSpaces(lastName)
let email = prompt("Видите email")
email = removeSpaces(email).toLowerCase()
email = valleDateEmail(email)
let userBirtsday = prompt("Ведите год рождения")
userBirtsday = removeSpaces(userBirtsday)
const validYear = validateYearOfBirth(userBirtsday)

let age;

if (typeof validYear === 'string') {
    yearOfBirth = validYear;
    age = 'N/A';
} else {
    yearOfBirth = validYear;
    age = calculateFullAge(validYear);
}
const outPut = `
<ul>
<li>Имя: ${firstName}</li>
<li>Фамилия: ${lastName}</li>
<li>Емайл: ${email}</li>
<li>Год рождения: ${userBirtsday}</li>
<li>Возраст: ${age}</li>
</ul>

`
document.body.innerHTML = outPut