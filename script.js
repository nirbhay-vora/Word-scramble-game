let msg = document.querySelector('.msg')
let words = document.querySelector('input')
let btn = document.querySelector('.btn')
let play = false
let newWords = "";
let ranWords = "";
let sWords = ['samsung','oneplus','apple','oppo','vivo','realme','redmi','blackberry','htc'];

const createNewWords = () =>{
    let ranNum = Math.floor (Math.random() * sWords.length);
    let newTempWords = sWords[ranNum];
   return newTempWords;
}

const scrambleWords = (arr) => {
    for(i=arr.length-1;i>0;i--){
        let temp = arr[i]   
        let j = Math.floor(Math.random()*(i+1))
        arr[i] = arr[j];
        arr[j] = temp;
    
    }
    return arr;
}

btn.addEventListener('click',function(){
    if(!play){
        play = true;
        btn.innerHTML = 'Guess';
        words.classList.toggle('hidden')
        newWords = createNewWords();
        ranWords = scrambleWords(newWords.split("")).join("");
        console.log(ranWords)
        msg.innerHTML = `Guess the word : "${ranWords}"`;
    }
    else{
        let guessWords = words.value;
        if(guessWords === newWords){
            play = false;
            msg.innerHTML = `You are right, it's "${newWords}"`
            btn.innerHTML = "Start again"
            words.classList.toggle('hidden')
            words.value = ""
            
        }
        else{
            msg.innerHTML = `You are wrong, please Try Again "${ranWords}"`
            btn.innerHTML = "Try again"
            words.value = ""
        }
    }
})