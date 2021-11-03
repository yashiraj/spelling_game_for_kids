
//logic for button audio: 

const allButtonClicks = document.querySelectorAll('.button').length

for(let i = 0; i < allButtonClicks; i++){
    document.querySelectorAll('.button')[i].addEventListener("click", function(){
        console.log(this.innerHTML)
        if(this.innerHTML === "Click to hear the word 🐜"){
                const hearAntWord = new Audio("sounds/ant_voice.mp3");
                hearAntWord.play();
            } else {
                console.log("The ant button was not clicked");
        }; 

        if(this.innerHTML === "Click to hear the word 🐈 "){
                const hearCatWord = new Audio("sounds/cat_voice.mp3");
                hearCatWord.play();
            } else {
                console.log("The cat button was not clicked");
            };

       if(this.innerHTML === "Click to hear the word 🐄 "){
                const hearCowWord = new Audio("sounds/cow_voice.mp3");
                hearCowWord.play();
            } else {
                console.log("The cow button was not clicked");
            };
        
        if(this.innerHTML === "Click to hear the word 🐕 "){
                const hearDogWord = new Audio("sounds/dog_voice.mp3");
                hearDogWord.play();
            } else {
                console.log("The dog button was not clicked!")
        };

        if(this.innerHTML === "Click to hear the word 🐖"){
            const hearPigWord = new Audio("sounds/pig_voice.mp3");
            hearPigWord.play();
        } else {
            console.log("Pig button was not clicked!")
        };
    }); 
};




