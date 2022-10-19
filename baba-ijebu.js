

function play() {
    let input = document.getElementById('third-input');
    let newInput = Array.from(input.value)
    const random =[]
    const user = newInput;
    for(let i =0; i  < 6; i++ ){
        random[i] = Math.floor(Math.random() * 11)
     }
    // let userString = user.toString()
    // let usernumber = Number(userString)
    
    const correctGuess =[];
    let correctIndex =0
    for(let value of user){
        if(random.includes(value)){
            correctGuess[correctIndex] = value;
            correctIndex++
        }
    }

    if(correctGuess.length >=3){
        document.getElementById('result').innerHTML = "You win!!"
    }else{
        document.getElementById('result').innerHTML = "Oti lule"
    }

    document.getElementById('random').innerHTML = random
    document.getElementById('avail-no').innerHTML = correctGuess 
}