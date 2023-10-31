let choices = null;
let correctChoice = null;


fetch("https://api.gameofthronesquotes.xyz/v1/random/3")
    .then(res => res.json())
    .then(data => {
        correctChoice = data[0];
        document.querySelector('blockquote').innerText = correctChoice.sentence;

        choices = data.map(x => x.character.name);
        choices.sort();
        document.querySelectorAll('label.user-choice').forEach((x, i, thisArr) => {
            x.querySelector('span').innerText = choices[i];
            x.onclick = () => {
                // set green background if correct else red
                thisArr.forEach((label) => 
                    label.style.background = (label.querySelector('span').innerText == correctChoice.character.name) ? '#55ff55' : '#ff5555'
                );
            };
        });
    })
    .catch(err => console.error(err));

document.querySelector('#btn-hint').onclick = () => {
    document.querySelector('#hint-text').innerText = 'Someone from ' + correctChoice.character.house.name;
}

