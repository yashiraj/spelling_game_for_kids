
//test 

const oneButtonClick = document.querySelector('.button')

oneButtonClick.addEventListener("click", ()=> {
    alert("I've been clicked, yahoo!")
})

//target all buttons that have a selector of .button

const allButtonClicks = document.querySelectorAll('.button').length

for(let i = 0; i < allButtonClicks; i++){
    document.querySelectorAll('.button')[i].addEventListener("click", function(){
        console.log(this.innerHTML)
        if(this.innerHTML === "Click to hear the word 🐈 "){
            if(this.innerHTML === "Click to hear the word 🐈 "){
                const hearCatWord = new Audio("sounds/cat_voice.mp3");
                hearCatWord.play()
            } else {
                console.log("The cat button was not clicked")
            }
        }
    })
  
}

