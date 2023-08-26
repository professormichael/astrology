
    document.querySelector('input[type="checkbox"]').addEventListener('change', function () {
    const div2 = document.querySelector('.div2');
    if (this.checked) {
      div2.style.display = 'block';

    } else {

         div2.style.display = 'none';
    }
});
    const second_button = document.getElementById('second-button');
    second_button.addEventListener('click', function (){
        window.location.href = 'Horoscope New Line.html'

    })
    document.getElementById('button-three').addEventListener('click', function (){
        window.location.href = 'Calculate-Your-Cardinal.html'
    })
    document.getElementById('three').addEventListener('click', function (){
        window.location.href = 'angelic-path-details.html'
    })
        const swipeContainer = document.querySelector('.swipe-container');
    const swipeContent = document.querySelector('.swipe-content');
    const swipeItems = document.querySelectorAll('.swipe-item');

    let currentSwipe = 0;
    const swipeWidth = swipeContainer.clientWidth;
    const threshold = 0.2;
    let isSwiping = false;

    swipeContainer.addEventListener('mousedown', handleStart);
    swipeContainer.addEventListener('touchstart', handleStart);

    function handleStart(e) {
      e.preventDefault();

      if (e.touches) {
        startX = e.touches[0].clientX;
      } else {
        startX = e.clientX;
      }

      isSwiping = true;

      document.addEventListener('mousemove', handleMove);
      document.addEventListener('touchmove', handleMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchend', handleEnd);
    }

    function handleMove(e) {
      if (!isSwiping) return;

      if (e.touches) {
        currentX = e.touches[0].clientX - startX;
      } else {
        currentX = e.clientX - startX;
      }

      swipeContent.style.transform = `translateX(calc(${currentX}px - ${currentSwipe * swipeWidth}px))`;
    }

    function handleEnd() {
      if (!isSwiping) return;

      isSwiping = false;

      if (Math.abs(currentX) > swipeWidth * threshold) {
        if (currentX > 0 && currentSwipe > 0) {
          currentSwipe--;
        }

        else if (currentX < 0 && currentSwipe < swipeItems.length - 1) {
          currentSwipe++;
        }
      }
      if(currentSwipe>3){
        currentSwipe--;
        swipeContent.style.transform = `translateX(calc(-${currentSwipe * swipeWidth}px))`;}

      swipeContent.style.transform = `translateX(calc(-${currentSwipe * swipeWidth}px))`;

      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchend', handleEnd);
    }

    const swipeLeftButton = document.getElementById('swipeLeft');
    const swipeRightButton = document.getElementById('swipeRight');

    swipeLeftButton.addEventListener('click', swipeLeft);
    swipeRightButton.addEventListener('click', swipeRight);

    function swipeLeft() {
      if (currentSwipe > 0) {
        currentSwipe--;
        swipeContent.style.transform = `translateX(calc(-${currentSwipe * swipeWidth}px))`;
      }
    }

    function swipeRight() {
      if (currentSwipe < swipeItems.length - 1) {
        currentSwipe++;
        swipeContent.style.transform = `translateX(calc(-${currentSwipe * swipeWidth}px))`;
      }
      if(currentSwipe>3){
        currentSwipe--;
        swipeContent.style.transform = `translateX(calc(-${currentSwipe * swipeWidth}px))`;
      }
    }
