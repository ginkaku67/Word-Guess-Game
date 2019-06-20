var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0
var blanks = "";
var livesLeft = 10;
var regrets = [];
var wordPool = ["sensei", "senpai", "uzumaki naruto", "kurosaki ichigo", "midoriya izuku", "gaara", "todoroki shoto", "bakugo katsuki", "jiraiya", "kenpachi", "weeb", "otaku", "my hero academia", "naruto shippuden", "nakano ichika"]
var 


function gameStart() {
    wordPool = word[Math.floor(Math.random() * word.length)];
    letters = blanks.split("");
    num = letters.length;