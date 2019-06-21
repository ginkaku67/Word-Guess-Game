window.onload = function () {
     var word = "yikes";
     var used = [];
    
     
    document.getElementById("used").addEventListener("keydown", myFunction);
     
     function myFunction() {
    //   doc

    // }






    var wordPool = ["sensei", "senpai", "uzumaki naruto", "kurosaki ichigo", "midoriya izuku", "gaara", "todoroki shoto", "bakugo katsuki", "jiraiya", "kenpachi", "weeb", "otaku", "my hero academia", "naruto shippuden", "nakano ichika"]
    var goalWord = wordPool[Math.floor(Math.random() * wordPool.length)];

    console.log(goalWord);

    // for (var i = 0; i < goalWord.length; i++) {
    //     answerArray[i] = "_";
    // };
    var wins = document.getElementById("winTotal").innerHTML = 0;
    
    //if (input letter === goalWord){
    //    var wins = (Number+1);
    //}
    //else (input letter <= goalWord){
    //  var livesLeft = (number-1);
    //}
    
    //if/else statemnet for letter if correct
    //
    //declare correct/incorrect vars

    //if/else for win/loss declare those var
    
}