const scrollSmooth = () => {
    const anchors = document.querySelectorAll('a')
    
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          
          const blockID = anchor.getAttribute('href')
          if (document.querySelector(blockID)) {
              document.querySelector(blockID).scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                })
          }
      
        })
      }
  
}
export default scrollSmooth