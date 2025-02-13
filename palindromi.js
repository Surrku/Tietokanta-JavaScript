const prompt = require('prompt-sync')();

function palindromi(sana) {
    let sana1 = sana.replace(/\s+/g, '').toLowerCase();
    let sana2 = sana1.split('').reverse().join('');
    return sana1 === sana2;
}

let sana = prompt("Anna sana: ");

if (palindromi(sana)) {
    console.log(`${sana} on palindromi`);
} else {
    console.log(`${sana} ei ole palindromi.`);
}
