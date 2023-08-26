   document.querySelector('.img11').src = "screen.png" ||  'https://professormichael.github.io/astrology/screen.png';
    let result= {
      'result':''}


  console.log(result.result)
    function computerGuess1(){
      console.log(document.querySelector('.img11').src )
      if(document.querySelector('.img11').src === ('https://professormichael.github.io/astrology/screen.png') || document.querySelector('.img11').src ===('http://localhost:63342/untitled/web/public/templates/screen.png')){
        console.log(true)
        console.log(document.querySelector('.img11').src)
        document.querySelector('.img11').src = "screen1.png" ||  'https://professormichael.github.io/astrology/screen1.png';
        console.log(document.querySelector('.img11').src )
        document.querySelector('p').innerHTML = result.result;

    }
    else if(document.querySelector('.img11').src ===("https://professormichael.github.io/astrology/screen1.png")|| document.querySelector('.img11').src ===('http://localhost:63342/untitled/web/public/templates/screen1.png')){
        console.log(false)

        console.log(document.querySelector('.img11').src);
        document.querySelector('p').innerText = '';
    document.querySelector('.img11').src = "screen.png" ||  'https://professormichael.github.io/astrology/screen.png';
    }
    let computerGuess = Math.floor(Math.random()*10);
    if(computerGuess>=0 && computerGuess<=2){
        result.result = 'You need to be careful of who you move closer to.';
    }
    if(computerGuess>2 && computerGuess<=4){
        result.result = 'More Blessing Is Coming You Way';
    }
    if(computerGuess>4 && computerGuess<=6){
        result.result = 'You Have Some Close Friend, Love Them'
    }
    if(computerGuess>6 && computerGuess<=8){
        result.result = 'Your Job is going to better'
    }
    if(computerGuess>8 && computerGuess<=10){
        result.result = 'You will soon gain a new Job'
    }

  }
