// script.js

function makeChoice(choice) {
    const storyText = document.getElementById('story-text');
    const choices = document.getElementById('choices');

    if (choice === 'left') {
        storyText.innerHTML = 'Benny decided to take the left path and soon found a sparkling stream. Should Benny drink the water or continue walking?';
        choices.innerHTML = `
            <button class="choice-btn" onclick="makeChoice('drink')">Drink the Water</button>
            <button class="choice-btn" onclick="makeChoice('walk')">Continue Walking</button>
        `;
    } else if (choice === 'right') {
        storyText.innerHTML = 'Benny took the right path and found a tall tree with a ladder. Should Benny climb the tree or explore the ground?';
        choices.innerHTML = `
            <button class="choice-btn" onclick="makeChoice('climb')">Climb the Tree</button>
            <button class="choice-btn" onclick="makeChoice('explore')">Explore the Ground</button>
        `;
    } else if (choice === 'drink') {
        storyText.innerHTML = 'Benny drank the water and felt refreshed! Suddenly, a magical fish appeared and granted Benny a wish. Benny wished for a never-ending supply of carrots and lived happily ever after!';
        choices.innerHTML = `<button class="choice-btn" onclick="restartStory()">Restart Story</button>`;
    } else if (choice === 'walk') {
        storyText.innerHTML = 'Benny continued walking and found a hidden treasure chest! Inside, Benny discovered enough gold to buy all the carrots in the world. Benny lived happily ever after!';
        choices.innerHTML = `<button class="choice-btn" onclick="restartStory()">Restart Story</button>`;
    } else if (choice === 'climb') {
        storyText.innerHTML = 'Benny climbed the tree and discovered a nest of golden eggs! Benny carefully took one egg and brought it home. The egg hatched into a magical bird that became Benny\'s best friend!';
        choices.innerHTML = `<button class="choice-btn" onclick="restartStory()">Restart Story</button>`;
    } else if (choice === 'explore') {
        storyText.innerHTML = 'Benny explored the ground and found a hidden tunnel. Inside, Benny discovered a secret carrot garden! Benny ate to his heart\'s content and shared the rest with his friends!';
        choices.innerHTML = `<button class="choice-btn" onclick="restartStory()">Restart Story</button>`;
    }
}

function restartStory() {
    const storyText = document.getElementById('story-text');
    const choices = document.getElementById('choices');

    storyText.innerHTML = 'Once upon a time, in a land far, far away, there lived a curious little rabbit named Benny. One day, Benny found two paths in the forest. Which path should Benny take?';
    choices.innerHTML = `
        <button class="choice-btn" onclick="makeChoice('left')">Take the Left Path</button>
        <button class="choice-btn" onclick="makeChoice('right')">Take the Right Path</button>
    `;
}
