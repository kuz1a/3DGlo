const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn')
    const menuItems = menu.querySelectorAll('ul>li>a');


    const handleMenu = (e) => {
        // e.preventDefault()
        menu.classList.toggle('active-menu')
    }

    menuBtn.addEventListener('click',handleMenu)
    closeBtn.addEventListener('click', handleMenu)


    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', (e) => {
            handleMenu()
           
        })
        
    })
    const smoothScroll = (a) => {
        const blockID = a.getAttribute('href');
        document.querySelector(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      };
}

export default menu 