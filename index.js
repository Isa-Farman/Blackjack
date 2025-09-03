let player = {
    name: "Player",
    chips: 200
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerel = document.getElementById("player-el")

playerel.textContent = player.name + ": $" + player.chips

function getrandomcard(){
    let randomcard = Math.floor(Math.random() * 13)+1
    if (randomcard === 1){
        return 11
    }else if(randomcard > 10){
        return 10
    }else{
        return randomcard
    }   
}

function startgame(){
    isAlive = true
    let firstcard = getrandomcard()
    let secondcard = getrandomcard()
    cards = [firstcard, secondcard  ]
    sum = firstcard + secondcard
    rendergame()
}

function rendergame() {
    cardsEl.textContent = "Cards: "
    for(let i = 0 ; i<cards.length ; i++){
        cardsEl.textContent +=  cards[i] + " "
    }
        sumEl.textContent = "Sum: " + sum
        if (sum <= 20) {
            message = "Do you want to draw a new card?"
        } else if (sum === 21) {
            message = "You've got Blackjack!"
            hasBlackJack = true
        } else {
            message = "You're out of the game!"
            isAlive = false
        }
        messageEl.textContent = message
    
}

function newcard() {
    if(isAlive===true && hasBlackJack===false){
        let card = getrandomcard()
    sum += card
    cards.push(card)
    rendergame()
    }
   
}



