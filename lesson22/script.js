

let buttons = document.querySelectorAll('.btn')
const textBlock = document.querySelector('.text-block')
const addBtn = document.querySelector('#add-btn')
const btnsBlock = document.querySelector('.buttons-block');
const main = document.querySelector('main')

const changeText = (text) => {
    textBlock.textContent = text;
}
const getNewButton = () => {
    const newBtn = buttons[0].cloneNode();
    newBtn.textContent = buttons.length + 1 >= 10 ? 
    buttons.length + 1 : `0${buttons.length + 1}`
    btnsBlock.append(newBtn)

    // newBtn.addEventListener('click', () => {
    //     chageText(btn.textContent)
    // })

    buttons = document.querySelectorAll('.btn') 
}

// addBtn.addEventListener('click', getNewButton)

main.addEventListener('click', (event)=> {
    if (event.target.matches('button') && event.target.closest('.buttons-block')) {
        changeText(event.target.textContent)
    } else if (event.target.id === 'add-btn') {
        getNewButton();
    }
    
})

// buttons.forEach(btn => {
//    btn.addEventListener('click', () => {
//     chageText(btn.textContent)
// })
// })