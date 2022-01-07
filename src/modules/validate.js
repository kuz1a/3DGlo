const validate = () => {
    const calcBlock = document.querySelector('.calc-block')
    const inputs = calcBlock.querySelectorAll('input[type=text]');
    const nameUserOne = document.querySelector('#form1-name')
    const nameUserTwo = document.querySelector('#form2-name')
    const nameUserThree = document.querySelector('#form3-name')
    const message = document.querySelector('.mess');  
    const emailsInputs = document.querySelectorAll('input[type=email]')
    const phoneInputs = document.querySelectorAll('input[type=tel]');
    

    calcBlock.addEventListener('input', (e) => {
        if (e.target.type === 'text') {
            e.target.value = e.target.value.replace(/[^\d]/g, '')
        }
    })
    emailsInputs.forEach(email => {
        email.addEventListener('input', () => {
        email.value = email.value.replace(/[^a-zA-Z\@\-\_\.\!\~\*\'/]/g,'')
        })
    })
  
    phoneInputs.forEach(phone => {
        phone.addEventListener('input', () => {
            phone.value = phone.value.replace(/[^0-9\(\)\-]/g,'').substring(0,15)
        })
    })
        nameUserOne.addEventListener('input', () => {

            let namePlaceholderOne = nameUserOne.getAttribute('placeholder')
            if(namePlaceholderOne === 'Ваше имя') {
                nameUserOne.value = nameUserOne.value.replace(/[^а-яА-Я\s\-]/g, '').trim()
            }
        })
        nameUserTwo.addEventListener('input', () => {

            let namePlaceholderOne = nameUserOne.getAttribute('placeholder')
            if(namePlaceholderOne === 'Ваше имя') {
                nameUserOne.value = nameUserOne.value.replace(/[^а-яА-Я\s\-]/g, '').trim()
            }
        })
        nameUserThree.addEventListener('input', () => {

            let namePlaceholderOne = nameUserOne.getAttribute('placeholder')
            if(namePlaceholderOne === 'Ваше имя') {
                nameUserOne.value = nameUserOne.value.replace(/[^а-яА-Я\s\-]/g, '').trim()
            }
        })
        message.addEventListener('input', () => {
            
            let namePlaceholderOne = message.getAttribute('placeholder')
            if(namePlaceholderOne === 'Ваше сообщение') {
                message.value = message.value.replace(/[^а-яА-Я\s\-]/g, '')
            }
        })

}
export default validate