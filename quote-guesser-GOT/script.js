// get random quote
// https://api.gameofthronesquotes.xyz/v1/random

let choices = null;
// array of objects{name, slug}. sort by slug and place in document
let correctChoice = null;


fetch("https://api.gameofthronesquotes.xyz/v1/random/3")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        correctChoice = data[0];
        document.querySelector('blockquote').innerText = correctChoice.sentence;

        choices = data.map(x => x.character.name);
        choices.sort();
        document.querySelectorAll('label.user-choice').forEach((x, i) => {
            x.querySelector('span').innerText = choices[i];
        });
    })
    .catch(err => console.error(err));

document.querySelector('#btn-hint').onclick = () => {
    document.querySelector('#hint-text').innerText = 'Someone from ' + correctChoice.character.house.name;
}
// TODO: need to place choices randomly
