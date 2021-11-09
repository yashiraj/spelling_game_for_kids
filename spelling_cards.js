
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
        };
    });
};

// ************** CAT SECTION ***********************

const grabCatSectionCards = document.querySelectorAll('.cat_section_cards');
for(let i = 0; i < grabCatSectionCards.length; i++){
   const listenEachCatCard = document.querySelectorAll('.cat_section_cards')[i];
   listenEachCatCard.addEventListener('click', function(){
       console.log(this.innerHTML);
       if(this.innerHTML=== "cat"){
           alert("You got it right, great job!");
       }else{
           alert("Give it another try!");
       };
   });
};

// **************** COW SECTION ********************** 

const grabCowSectionCards = document.querySelectorAll('.cow_section_cards');
for(let i = 0; i < grabCowSectionCards.length; i++){
    const listenEachCowCard = document.querySelectorAll('.cow_section_cards')[i];    
    listenEachCowCard.addEventListener('click', function(){
        console.log(this.innerHTML);
        if(this.innerHTML === "cow"){
            alert("You got it right, great job!");
        } else {
            alert("Give it another try!");
        };
    });
};

// ****************** DOG SECTION ************************ 

const grabDogSectionCards = document.querySelectorAll('.dog_section_cards');
console.log(grabDogSectionCards);
for(let i = 0; i < grabDogSectionCards.length; i++){
   const listenEachDogCard = document.querySelectorAll('.dog_section_cards')[i];
   listenEachDogCard.addEventListener('click', function(){
       console.log(this.innerHTML);
       if(this.innerHTML === "dog"){
           alert("You got it right!");
       } else {
           alert("Give it another try!");
       }
   })
}


// ******************** PIG SECTION ***********************

const grabPigSectionCards = document.querySelectorAll('.pig_section_cards');
console.log(grabPigSectionCards);

for(let i = 0; i < grabPigSectionCards.length; i++){
   const listenEachPigCard = document.querySelectorAll('.pig_section_cards')[i];
   listenEachPigCard.addEventListener('click', function(){
       console.log(this.innerHTML);
       if(this.innerHTML === "pig"){
           alert("You got it right!")
       }else{
           alert("Give it another try!")
       }
   })
}
