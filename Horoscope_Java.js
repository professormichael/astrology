 function onclick11(){
               var x = document.getElementById('fullName');
               var xa = document.getElementById('nickName');
               var xb = document.getElementById('dob');
               Xj = x.value;
               Xja = xa.value;
               Xjb = xb.value;
               var y = document.getElementById('hhh');
               var ya = document.getElementById('hhha');
               var yb = document.getElementById('hhhb');
               var inputElement_name = [Xj, Xja, Xjb]


               localStorage.setItem('inputElement_name',JSON.stringify(inputElement_name));
               window.location.href = 'Horoscope Line 2.html';

}

let storedValues = localStorage.getItem('inputElement_name');
let inputValues = JSON.parse(storedValues);
let listItem = document.getElementById('pit');
let listItem1 = document.getElementById('oyput');
let listItem2 = document.getElementById('our');
listItem.textContent =  inputValues[0];
listItem1.textContent = inputValues[1];

          var list_Aries = ["21, March","22, March","23, March","24, March","25, March","26, March","27, March","28, March","29, March","30, March","31,March", "1, April","2, April","3, April","4, April","5, April","6, April","7, April","8, April","9, April","10, April","11, April","12, April","13, April","14, April","15, April","16, April","17, April","18, April","19, April"]
          var list_Gemini = ["21, May","22, May","23, May","24, May","25, May","26, May","27, May","28, May","29, May","30, May","31, May","1, June","2, June","3, June","4, June","5, June","6, June","7, June","8, June","9, June","10, June","11, June","12, June","13, June","14, June","15, June","16, June","17, June","18, June","19, June","20, June","21, June"]
          var list_Cancer = ["22, June ","23, June ","24, June ","25, June ","26, June ","27, June","28, June ","29, June","30, June","1, July","2, July","3, July","4, July","5, July","6, July","7, July","8, July","9, July","10, July","11, July","12, July","13, July","14, July","15, July","16, July","17, July","18, July","19, July","20, July","21, July","22, July"]
          var list_Leo = ["23, July","24, July","25, July","26, July","27, July","28, July","29, July","30, July","31, July","1, August","2, August","3, August","4, August","5, August","6, August","7, August","8, August","9, August","10, August","11, August","12, August","13, August","14, August","15, August","16, August","17, August","18, August","19, August","20, August","21, August","22, August"]
          var list_Virgo = ["23, August","24, August","25, August","26, August","27, August","28, August","29, August","30, August","31, August","1, September","2, September","3, September","4, September","5, September","6, September","7, September","8, September","9, September","10, September","11, September","12, September","13, September","14, September","15, September","16, September","17, September","18, September","19, September","20, September","21, September","22, September"]
          var list_Libra= ["23, September","24, September","25, September","26, September","27, September","28, September","29, September","30 September","1 October","2, October","3, October","4, October","5, October","6, October","7, October","8, October","9, October","10, October","11, October","12, October","13, October","14, October","15, October","16, October","17, October","18, October","19, October","20, October","21, October","22, October","23, October"]
          var list_Scorpio = ["24, October","25, October","26, October","27, October","28, October","29, October","30, October","31, October", "1, November","2, November","3, November","4, November","5, November","6, November","7, November","8, November","9, November","10, November","11, November","12, November","13, November","14, November","15, November","16, November","17, November","18, November","19, November","20, November","21, November"]
          var list_Sagittarius = ["22, November","23, November","24, November","25, November","26, November","27, November","28, November","29, November","30, November","1, December","2, December","3, December","4, December","5, December","6, December","7, December","8, December","9, December","10, December","11, December","12, December","13, December","14, December","15, December","16, December","17, December","18, December","19, December","20, December","21, December"]
          var list_Capricorn = ["22, December","23, December","24, December","25, December","26, December","27, December","28, December","29, December","30, December","31, December","1, January","2, January","3, January","4, January","5, January","6, January","7, January","8, January","9, January","10, January","11, January","12, January","13, January","14, January","15, January","16, January","17, January","18, January","19, January"]
          var list_Aquarius = ["20, January", "21, January","22, January","23, January","24, January","25, January","26, January","27, January","28, January","29, January","30, January","31, January","1, February","2, February","3, February","4, February","5, February","6, February","7, February","8, February","9, February","10, February","11, February","12, February","13, February","14, February","15, February","16, February","17, February","18, February"]
          var list_Pisces = ["19, February","20, February","21, February","22, February","23, February","24, February","25, February","26, February","27, February","28, February","29, February","1, March","2, March","3, March","4, March","5, March","6, March","7, March","8, March","9, March","10, March","11, March","12, March","13, March","14, March","15, March","16, March","17, March","18, March","19, March","20, March"]
          var list_Taurus = ["20, April","21, April","22, April","23, April","24, April","25, April","26, April","27, April","28, April","29, April","30, April","1, May","2, May","3, May","4, May","5, May","6, May","7, May","8, May","9, May","10, May","11, May","12, May","13, May","14, May","15, May","16, May","17, May","18, May","19, May","20, May"]
          for (let i = 0; i < list_Gemini.length; i++) {
              const listItem3 = list_Gemini[i];

              if (inputValues[2].indexOf(listItem3) !== -1) {
                  var audio4 = document.getElementById('myAudio');
                  audio4.play()
                  audio4.pause()
                  audio4.src = "tts.mp3"
                  audio4.currentTime = 0;
                  if (!audio4.paused){
                      audio4.play()

                  }
                  else{

                  }
                  listItem2.innerText = "Gemini" //inputValues[2]
                  break;
              }
          }
          for (let i = 0; i < list_Aries.length; i++) {
              const listItem3 = list_Aries[i];

              if (inputValues[2].indexOf(listItem3) !== -1) {
                  var audio7 = document.getElementById('myAudio');
                  audio7.play()
                  audio7.pause()
                  audio7.src = "Aries.mp3"
                  audio7.currentTime = 0;
                  if (!audio7.paused){

                  }
                  else{

                  }
                  listItem2.textContent = "Aries" //inputValues[2]
                  break;
              }
          }
          for (let i = 0; i < list_Taurus.length; i++) {
              const listItem3 = list_Taurus[i];

              if (inputValues[2].indexOf(listItem3) !== -1) {
                  var audio2 = document.getElementById('myAudio');
                  audio2.play()
                  audio2.pause()
                  audio2.src = "Taurus.mp3"
                  audio2.currentTime = 0;
                  if (!audio2.paused){

                  }
                  else{

                  }
                  listItem2.textContent = "Taurus" //inputValues[2]
                  break;
              }
          }
          for (let i = 0; i < list_Leo.length; i++) {
              const listItem3 = list_Leo[i];

              if (inputValues[2].indexOf(listItem3) !== -1) {
                  var audio3 = document.getElementById('myAudio');
                  audio3.play()
                  audio3.pause()
                  audio3.src = "Leo.mp3"
                  audio3.currentTime = 0;
                  if (!audio3.paused){

                  }
                  else{

                  }
                  listItem2.textContent = "Leo" //inputValues[2]
                  break;
              }
          }
          for (let i = 0; i < list_Virgo.length; i++) {
              const listItem3 = list_Virgo[i];

              if (inputValues[2].indexOf(listItem3) !== -1) {
                  var audio5 = document.getElementById('myAudio');
                  audio5.play()
                  audio5.pause()
                  audio5.src = "Virgo.mp3"
                  audio5.currentTime = 0;
                  if (!audio5.paused){

                  }
                  else{

                  }
                  listItem2.textContent = "Virgo" //inputValues[2]
                  break;
              }
          }
          for (let i = 0; i < list_Libra.length; i++) {
              const listItem3 = list_Libra[i];

              if (inputValues[2].indexOf(listItem3) !== -1) {
                  var audio6 = document.getElementById('myAudio');
                  audio6.play()
                  audio6.pause()
                  audio6.src = "Libra.mp3"
                  audio6.currentTime = 0;
                  if (!audio6.paused){

                  }
                  else{

                  }
                  listItem2.textContent = "Libra" //inputValues[2]
                  break;
              }
          }
          for (let i = 0; i < list_Scorpio.length; i++) {
              const listItem3 = list_Scorpio[i];

              if (inputValues[2].indexOf(listItem3) !== -1) {
                  var audio8 = document.getElementById('myAudio');
                  audio8.play()
                  audio8.pause()
                  audio8.src = "Scorpio.mp3"
                  audio8.currentTime = 0;
                  if (!audio8.paused){

                  }
                  else{

                  }
                  listItem2.textContent = "Scorpio" //inputValues[2]
                  break;
              }
          }
          for (let i = 0; i < list_Sagittarius.length; i++) {
              const listItem3 = list_Sagittarius[i];

              if (inputValues[2].indexOf(listItem3) !== -1) {
                  var audio9 = document.getElementById('myAudio');
                  audio9.play()
                  audio9.pause()
                  audio9.src = "Sagittarius.mp3"
                  audio9.currentTime = 0;
                  if (!audio.paused){

                  }
                  else{

                  }
                  listItem2.textContent = "Sagittarius" //inputValues[2]
                  break;
              }
          }
          for (let i = 0; i < list_Capricorn.length; i++) {
              const listItem3 = list_Capricorn[i];

              if (inputValues[2].indexOf(listItem3) !== -1) {
                  var audio10 = document.getElementById('myAudio');
                  audio10.play()
                  audio10.pause()
                  audio10.src = "Capricorn.mp3"
                  audio10.currentTime = 0;
                  if (!audio10.paused){

                  }
                  else{

                  }
                  listItem2.textContent = "Capricorn" //inputValues[2]
                  break;
              }
          }
          for (let i = 0; i < list_Pisces.length; i++) {
              const listItem3 = list_Pisces[i];

              if (inputValues[2].indexOf(listItem3) !== -1) {
                  var audio11 = document.getElementById('myAudio');
                  audio11.play()
                  audio11.pause()
                  audio11.src = "tts.mp3"
                  audio11.currentTime = 0;
                  if (!audio11.paused){

                  }
                  else{

                  }
                  listItem2.textContent = "Pisces" //inputValues[2]
                  break;
              }
          }
          for (let i = 0; i < list_Aries.length; i++) {
              const listItem3 = list_Aries[i];

              if (inputValues[2].indexOf(listItem3) !== -1) {
                  var audio1 = document.getElementById('myAudio');
                  audio1.play()
                  audio1.pause()
                  audio1.src = "Aries.mp3"
                  audio1.currentTime = 0;
                  if (!audio1.paused){

                  }
                  else{

                  }
                  listItem2.textContent = "Aries" //inputValues[2]
                  break;
              }
          }

          for (let i = 0; i < list_Cancer.length; i++) {
              const listItem3 = list_Cancer[i];

              if (inputValues[2].indexOf(listItem3) !== -1) {

                  listItem2.textContent = "Cancer" //inputValues[2]
                  var audio = document.getElementById('myAudio');
                  audio.play()
                  audio.pause()
                  audio.src = "tts.mp3"
                  audio.currentTime = 0;
                  if (!audio.paused){

                  }
                  else{

                  }

                  //<audio controls src="ttsMP3.com_VoiceText_2023-6-16_12_44_18.mp3"></audio>
                  break;

              }

          }


