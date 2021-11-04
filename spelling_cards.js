
// ************** ANT SECTION *****************************

const grabAntSectionCards = document.querySelectorAll('.ant_section_cards').length;

for(let i = 0; i < grabAntSectionCards; i++){
    const listenEachAntCard = document.querySelectorAll('.ant_section_cards')[i];
    listenEachAntCard.addEventListener('click', function(){
        console.log(this.innerHTML);
        if(this.innerHTML === "ant"){
            alert("You got it right! Great job!");
        } else {
            alert("Give it another try!");
        }
    })
}

// ************** CAT SECTION ***********************

const grabCatSectionCards = document.querySelectorAll('.cat_section_cards');
for(let i = 0; i < grabCatSectionCards.length; i++){
   const listenEachCatCard = document.querySelectorAll('.cat_section_cards')[i];
   listenEachCatCard.addEventListener('click', function(){
       console.log(this.innerHTML)
       if(this.innerHTML=== 'cat'){
           alert("You got it right, great job!")
       }else{
           alert("Give it another try!")
       }
   })
}

//**************** COW SECTION ********************** 

const grabCowSectionCards = document.querySelectorAll('.cow_section_cards');
for(let i = 0; i < grabCowSectionCards.length; i++){
    const listenEachCowCard = document.querySelectorAll('.cow_section_cards')[i];    
    listenEachCowCard.addEventListener('click', function(){
        console.log(this.innerHTML)
        if(this.innerHTML === "cow"){
            alert("You got it right, great job!")
        } else {
            alert("Give it another try!")
        }
    })
}

