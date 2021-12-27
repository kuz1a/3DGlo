const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn')
    const menuItems = menu.querySelectorAll('ul>li>a');
    const body = document.querySelector('body');

    const handleMenu = (e) => {
        menu.classList.toggle('active-menu')
    }
    body.addEventListener('click', (e) => {
    
        if (e.target.closest('.menu') || e.target.closest('.close-btn')) {
            handleMenu()
        }
    })
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