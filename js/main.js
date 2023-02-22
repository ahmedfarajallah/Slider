// get all imgs gallery
let allImgs = document.querySelectorAll('.imgs img'); 
let array = Array.from(allImgs)
let currentSlide = 0;
array.forEach((img)=> {
  img.addEventListener('click', (e)=> { 
    
    currentSlide = array.indexOf(e.target);
    
    
    // create overlayPopup
    let overlayPopup = document.createElement('div');
    // add class name to overlayPopup
    overlayPopup.classList.add('overlay-popup');
    // add overlayPopup to body
    document.body.appendChild(overlayPopup);
    //create popupBox
    let popupBox = document.createElement('div');
    // add class name to popupBox
    popupBox.classList.add('popup-box');
    
    // get the target img
    let popupImg = document.createElement('img');
    imgNum = img.getAttribute("data-num");
    popupImg.src = img.src;
    popupImg.setAttribute('data-num', imgNum);
    
    
    //add popupImg to popupBox
    popupBox.appendChild(popupImg)
    
    // add popupBox to overlayPopup
    overlayPopup.appendChild(popupBox)
    
    // create close span
    let closeBtn = document.createElement('span');
    //add class name to closeBtn
    closeBtn.classList.add('close-button');
    // create closeBtnContent
    let closeBtnContent = document.createTextNode("X");
    // add closeBtnContent to closeBtn
    closeBtn.appendChild(closeBtnContent);
    // add closeBtn to popupBox
    popupBox.appendChild(closeBtn);
    
    //create next and prev btn
    let nextBtn = document.createElement('span');
    nextBtn.className = "nextBtn";
    nextBtn.appendChild(document.createTextNode(">"));
    let prevBtn = document.createElement('span');
    prevBtn.className = "prevBtn";
    prevBtn.appendChild(document.createTextNode("<"));
    overlayPopup.appendChild(nextBtn);
    overlayPopup.appendChild(prevBtn);
    
    nextBtn.addEventListener('click', ()=> {
      currentSlide++
      if(currentSlide == array.length) {
        currentSlide = 0;
      }
      popupImg.src = array[currentSlide].src;
    })
    
    prevBtn.addEventListener('click', ()=> {
      currentSlide--
      if(currentSlide < 1) {
        currentSlide = array.length - 1;
      }
      popupImg.src = array[currentSlide].src;
    })
    
  })
})

// close layoutPopup 

document.addEventListener('click', (e) => {
  if(e.target.className === "close-button") {
    document.querySelector(".overlay-popup").remove();
  }
})