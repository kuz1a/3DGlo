const modal = () => {
    const popupBtns = document.querySelectorAll('.popup-btn')
    const modal = document.querySelector('.popup');
    const closePopup = modal.querySelector('.popup-close');

   
    modal.style.display = 'block';
    modal.style.transform = 'translateY(-100%)';
    let animation, count = 100;
    const transform = () => {
      animation = requestAnimationFrame(transform);
      count--;
      if (count >= 0) {
        modal.style.transform = `translateY(${count}%)`;
      } else {
        cancelAnimationFrame(animation);
      }
    };
    popupBtns.forEach((elem) => {
      elem.addEventListener('click', () => {
        if (document.body.clientWidth > 768) {
          requestAnimationFrame(transform);
        } else {
            modal.style.transform = 'translateY(0)';
        }
      });
    });
    closePopup.addEventListener('click', () => {
      count = 100;
      modal.style.transform = 'translateY(-100%)';
    });

}

export default modal