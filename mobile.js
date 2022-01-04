// ------------------ MOBILE------------------ //
const isMobile = /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent)
if (isMobile) {

  // Select individual buttons
  const changePosBtn = document.querySelector('.set-btns-position')
  const resetPosBtnContainer = document.querySelector('.reset-btns-group')
  const resetPosBtnLeft = document.querySelector('.reset-btns-left')
  const resetPosBtnRight = document.querySelector('.reset-btns-right')
  const leftBtn = document.querySelector('.left-btn')
  const rightBtn = document.querySelector('.right-btn')
  const upBtn = document.querySelector('.up-btn')
  const downBtn = document.querySelector('.down-btn')
  const summBtn = document.querySelector('.summon-btn')
  const destBtn = document.querySelector('.destroy-btn')
  const rotateBtn = document.querySelector('.rotate-btn')

  // Select all buttons
  const btns = document.querySelectorAll('.control-btns button')

  document.querySelector('.rightScreen h1').classList.add('hidden')

  // Show btns
  document.querySelector('.mobile').classList.remove('hidden')


  // ---- Starting position of btns ----
  // Main default setting of buttons
  const basePxBtnLeft = { lowPx: '20px', mediumPx: '75px', highPx: '110px' }
  // Second default setting of buttons
  const basePxBtnRight = { lowPx: '35px', mediumPx: '90px', highPx: '135px' }

  const setDefaultBtnsPosition = (basePx = basePxBtnLeft) => {
    const { lowPx, mediumPx, highPx } = basePx;

    // Style.bottom - lower row
    Array(leftBtn, rightBtn, downBtn, rotateBtn).forEach(btn => btn.style.bottom = lowPx)
    // Style.bottom - higher row
    Array(upBtn, summBtn, destBtn).forEach(btn => btn.style.bottom = mediumPx)

    // Style.left
    rightBtn.style.left = ''
    upBtn.style.left = ''
    downBtn.style.left = ''
    leftBtn.style.left = lowPx
    summBtn.style.left = lowPx
    destBtn.style.left = highPx
    rotateBtn.style.left = highPx

    // Style.right
    rightBtn.style.right = lowPx
    upBtn.style.right = highPx
    downBtn.style.right = highPx
  }

  startBtn.classList.add('start-btn-mobile')

  const btnsPositionLocalStorage = JSON.parse(window.localStorage.getItem('btnsPosition'))
  if (btnsPositionLocalStorage) {
    btns.forEach((btn, idx) => {
      btn.style.left = btnsPositionLocalStorage[idx].left
      btn.style.right = btnsPositionLocalStorage[idx].right
      btn.style.bottom = btnsPositionLocalStorage[idx].bottom
    })
  } else setDefaultBtnsPosition()


  // (Draw / undraw) tetros using buttons
  const drawMobile = useBtn => {
    if (!pause) { undraw(); useBtn(); draw(); }
  }

  // Buttons control
  leftBtn.addEventListener('click', () => drawMobile(moveLeft))
  rightBtn.addEventListener('click', () => drawMobile(moveRight))
  upBtn.addEventListener('click', () => drawMobile(slowDown))
  downBtn.addEventListener('click', () => drawMobile(speedUp))
  rotateBtn.addEventListener('click', () => drawMobile(rotate))


  summBtn.addEventListener('click', () => {
    if (summonLong > 0) { undraw(); summonLongShape(); draw(); }
  })

  destBtn.addEventListener('click', () => {
    if (destroyRow > 0) { undraw(); destroyLastRow(); draw(); }
  })

  // Double button - reset position of buttons to 2 default settings
  resetPosBtnLeft.addEventListener('click', () => setDefaultBtnsPosition(basePxBtnLeft))
  resetPosBtnRight.addEventListener('click', () => setDefaultBtnsPosition(basePxBtnRight))


  // ---- Changing buttons location ----
  let clickedBtn;
  let allowToChangePosition = false

  changePosBtn.addEventListener('click', () => {
    allowToChangePosition = !allowToChangePosition
    if (allowToChangePosition) {
      // Allow user to change buttons positions. User can start the game, already when changes are confirmed
      changePosBtn.textContent = 'Confirm changes';
      btns.forEach(btn => btn.classList.add('pulsing-animation'));
      resetPosBtnContainer.classList.add('hidden')
      startBtn.classList.add('hidden')
    }
    else {
      // When changes confirmed, remove animation & show 'changes position buttons'.
      changePosBtn.textContent = 'Change buttons position'
      btns.forEach(btn => {
        btn.classList.remove('pulsing-animation');
        btn.style.color = 'white';
      })
      resetPosBtnContainer.classList.remove('hidden')
      startBtn.classList.remove('hidden')
      clickedBtn = null
    }
  })

  // Selecting an indivisual button - to change their location. (Event Listener, which will be removed when player start the game)
  const selectBtns = e => {
    e.stopPropagation();
    if (allowToChangePosition) {
      // Set the target to be btn (and not an icon)
      const currentBtn = (e.target.localName === 'i') ? e.target.parentNode : e.target
      btns.forEach(btn => btn.classList.remove('pulsing-animation'))

      // Display on screen, which button was selected
      currentBtn.style.color = 'deeppink'
      currentBtn.classList.add('pulsing-animation')

      // Reset previous clicked button color
      if (clickedBtn && currentBtn !== clickedBtn) clickedBtn.style.color = 'white'
      clickedBtn = currentBtn
    }
  }

  btns.forEach(btn => btn.addEventListener('click', selectBtns))


  // Remove "change positions buttons", clean EventListeners, save buttons positions (set by player) to localStorage.
  startBtn.addEventListener('click', () => {
    if (!allowToChangePosition && !changePosBtn.classList.contains('hidden')) {
      changePosBtn.classList.add('hidden')
      resetPosBtnContainer.classList.add('hidden')
      btns.forEach(btn => btn.removeEventListener('click', selectBtns))
      document.removeEventListener('click', changeBtnPosition)
      const btnsPosition = [...btns].map(btn => (
        { left: btn.style.left, right: btn.style.right, bottom: btn.style.bottom }
      ))
      window.localStorage.setItem('btnsPosition', JSON.stringify(btnsPosition))
    }
  })

  // Setting buttons position. (Event Listener, which will be removed when player start the game)
  const changeBtnPosition = e => {
    if (clickedBtn && allowToChangePosition) {
      const btnHalfWidth = clickedBtn.clientWidth / 2
      // Set absolute position of the button (including button width)
      if (e.x < window.innerWidth / 2) {
        // Button clicked on the LEFT part of the screen
        clickedBtn.style.right = '';
        clickedBtn.style.left = e.x - btnHalfWidth + 'px'
        clickedBtn.style.bottom = window.innerHeight - e.y - 10 + 'px'
      } else {
        // Button clicked on the RIGHT part of the screen
        clickedBtn.style.left = '';
        clickedBtn.style.right = window.innerWidth - e.x - btnHalfWidth + 'px'
        clickedBtn.style.bottom = window.innerHeight - e.y - 10 + 'px'
      }
    }
  }

  document.addEventListener('click', changeBtnPosition)
}