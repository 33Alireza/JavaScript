const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / (johnHeight * johnHeight);

const markHigherBMI = markMass > johnBMI;

console.log(markBMI, johnBMI);

if (markHigherBMI) console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
else console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)

const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy!');
} else {
    console.log('No one wins the trophy 😭');
}