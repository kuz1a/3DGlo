import {animate} from './helpers'

const modal = () => {
    const popupBtns = document.querySelectorAll('.popup-btn')
    const modal = document.querySelector('.popup');
    const modalContent = modal.querySelector('.popup-content')
    const closePopup = modal.querySelector('.popup-close');
    

    modalContent.style.left = '50%';
    modalContent.style.transform = 'translateX(-50%)'
  
    popupBtns.forEach((elem) => {
      elem.addEventListener('click', (e) => {
          e.preventDefault();
          
        if (document.body.clientWidth > 768) {
          animate({
            duration: 1000,
            timing(timeFraction) {
              return timeFraction;
            },
            draw(progress) {
            
              modal.style.top = 0 * progress + '%'
              modal.style.display = 'block';
             
              modal.style.opacity = progress
              modalContent.style.top = 50 * progress + '%'
              modalContent.style.transform = `translateY(${-50 * progress}%) translateX(-50%)`
              
            }
          }); 
        } 
        else {
            modal.style.display = 'block';
        }
      });
    });
  

    modal.addEventListener('click', (e) => {
      if (e.target.classList.contains('popup') || e.target.classList.contains('popup-close'))  {
       
        modal.style.display = 'none';
      }
    })


   
}

export default modal