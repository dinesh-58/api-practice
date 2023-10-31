// get random quote
// https://api.gameofthronesquotes.xyz/v1/random

const choices = [];
// array of objects{name, slug}. sort by slug and place in document
let correctChoice = null;


fetch("https://api.gameofthronesquotes.xyz/v1/random/3")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        correctChoice = data[0];
        document.querySelector('blockquote').innerText = correctChoice.sentence;
    })
    .catch(err => console.error(err));

document.querySelector('#btn-hint').onclick = () => {
    document.querySelector('#hint-text').innerText = 'Someone from ' + correctChoice.character.house.name;
}
// TODO: need to place choices randomly
