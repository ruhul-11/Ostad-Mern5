function ageChecker(){
    let age = document.getElementById("userAgeInput");
    
    let cards = document.getElementById("cardsContainerID").getElementsByClassName("col-md-6");
    
    age.addEventListener("input", () => {
        
        if(age.value == "" || age.value < 1){
            cards[0].style.display = "block"
            cards[1].style.display = "block"
            
        }else if(age.value < 18){
            cards[0].style.display = "block"
            cards[1].style.display = "none"
        }else{
            cards[1].style.display = "block"
            cards[0].style.display = "none"
        }
        
    })
    
}
ageChecker()
