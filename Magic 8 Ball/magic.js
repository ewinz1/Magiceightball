// Magic 8 ball Assignment JS by Edwin

// Variables 
let ballImgEl = document.getElementById("eightball");
let outcome = document.getElementById("answer-output");

// Event Listener
ballImgEl.addEventListener("click", tellFortune);

// Event Function
function tellFortune() {

    // Getting Input
let textInputEl = document.getElementById("question-box").value;
    // Probability Distributions for various outcomes
    
    if (textInputEl === "") {
        outcome.innerHTML = 'Please enter a question';

    } else if (textInputEl === "Do magic 8 balls really work?") {
        outcome.innerHTML = 'How Dare You Doubt me!';
    
    } else if (textInputEl === "Is Javascript awesome?") {
        outcome.innerHTML = 'Of Course!';


    } else {
        // Probability Distributions for various outcomes
        let randNum = Math.random();

        if (randNum < 0.2) {
            outcome.innerHTML = 'Without a Doubt.';
    
        } else if (randNum < 0.4) {
            outcome.innerHTML = 'As I see it, yes.';
    
        } else if (randNum < 0.6) {
            outcome.innerHTML = 'Do not count on it.';
    
        } else if (randNum < 0.8) {
            outcome.innerHTML = 'Outlook not so good.';
    
        } else {
            outcome.innerHTML = 'Concentrate and ask again.';
    
        }
    }

}
    

// Output
document.getElementById("answer-output").innerHTML = outcome;