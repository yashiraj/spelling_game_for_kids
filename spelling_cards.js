
// ************** ANT SECTION 

// const grabAllCards = document.querySelectorAll('.card_name_1').length

//     for(let i = 0; i < grabAllCards; i++){
//         const listenEachCard = document.querySelectorAll('.card_name_1')[i];
//         console.log(listenEachCard)
//         const catCard = listenEachCard.addEventListener('click', function(){
//             console.log("The cat card has been clicked!");
//             if(this.innerHTML === "cat"){
//                 console.log("You got it right!")
//             }
//         })

//     };


const grabAntSectionCards = document.querySelectorAll('.ant_section_cards').length

for(let i = 0; i < grabAntSectionCards; i++){
    const listenEachAntCard = document.querySelectorAll('.ant_section_cards')[i];
    listenEachAntCard.addEventListener('click', function(){
        console.log(this.innerHTML)
        if(this.innerHTML === "ant"){
            alert("You got it right! Great job!")
        } else {
            alert("Give it another try!")
        }
    })
}
