const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
var cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
    res.end('Hello World!');
});

app.get('/piglatin', (req, res) => {
    let word = req.query.word;
    translatePigLatin(word)
    res.send(translatePigLatin(word));
});

app.get("/data", (req, res) => {
    fs.readFile(__dirname + "/" + "data.json", "utf8", (err, data) => {
        res.end(data)
    });
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
});

function translatePigLatin(word) {
    let pigLatin = "";

    let vowels = { a: "a", e: "e", i: "i", o: "o", u: "u" };
    if (word[0] in vowels) {
        pigLatin = word + "way"
    } else {
        let firstVowel = word.match(/[aeiou]/g || 0);
        let vowel = word.indexOf(firstVowel[0]);
        pigLatin = word.substring(vowel) + word.substring(0, vowel) + "ay";
    }

    return pigLatin;
}